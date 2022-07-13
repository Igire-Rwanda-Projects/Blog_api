import nodemailer from "nodemailer";
import path from "path";

const sendFunc = async (options) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "kacynthian@gmail.com",
      pass: "vchxslwwiaxdhkzp",
    },
  });
  let mailOptions = {
    from: "kacynthian@gmail.com",
    to: options?.email,
    subject: `Congratulation @ShecanCODE`,
    html: `congratulation ${options?.firstName} now you can follow the next steps. below is the challenge to go to the next steps `,
    attachments: [
      {
        filename: "challenge.pdf",
        path: path.join(__dirname, `../output/challenge.pdf`),
        contentType: "application/pdf",
      },
    ],
  };

  console.log(options?.email);
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });
};
export default sendFunc;
