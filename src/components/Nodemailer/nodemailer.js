const nodemailer = require("nodemailer");

const sendEmail = () => {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'gabrielireland6wo@gmail.com',
            pass: 'vyjpboioyhjfrois'
        }
    });
    
    var mailOptions = {
        from: 'gabrielireland6wo@gmail.com',
        to: 'gabrielmtvp@gmail.com',
        subject: 'New apartment to rent VESTA (RUN)',
        text: 'New apartment to rent VESTA (RUN)'
      };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}


module.exports = {sendEmail}
