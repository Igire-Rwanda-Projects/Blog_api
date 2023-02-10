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
    html: `Dear Applicant,<br/><br/><br/> Congratulations for applying to attend SheCanCODE/TekCODE. You have made the right decision in pursuing your opportunity to start a new career as a software developer. Igire Rwanda will help you all the way from the application process,  graduation and the job search.<br/><br/>To move to the next step, please schedule an assessment and a one on one interview with our career team to help you determine your career path.<br/>We look forward to seeing you here! For further information or concerns, please reach out to us at 0788473533.<br/><br/><br/><br/>Regards <br/><br/><br/><br/>Admissions Team <a href="www.shecancodeschool.org/applicant/${options._id}">Click here</a> to schedule For interview `,
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
