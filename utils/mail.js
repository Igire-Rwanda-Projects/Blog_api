import nodemailer from "nodemailer";
import path from "path";

const sendFunc = async (options) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "igirerwanda@gmail.com",
      pass: "xbcnnwwwmwjkxgbq",
    },
  });
  let mailOptions = {
    from: "kacynthian@gmail.com",
    to: options.email,
    subject: `Congratulation @ShecanCODE`,
    html: `Dear Applicant,<br/><br/><br/> Igire Rwanda Organzation and UN Women Rwanda thank you for your interest in our program. we congratulate you for completing the application form.<br/><br/>As part of the application process, we have attached a coding challenge to further evaluate your qualification for the program. Please focus on it and submit your response within 3days from now.<br/><br/>After submit your responses, we will reach out to you with the next steps.<br/><br/>Please let us know if you have any questions or concerns.<br/><br/><br/><br/>Regards<br/>shecancode Management. <a href="www.shecancodeschool.org/applicant/${options._id}">Click here</a> to scheduler For interview `,
    // attachments: [
    //   {
    //     filename: "challenge.pdf",
    //     path: path.join(__dirname, `../output/challenge.pdf`),
    //     contentType: "application/pdf",
    //   },
    // ],
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });
};
export default sendFunc;
