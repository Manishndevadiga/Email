// controllers/mailController.js
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

var flag=true;

//connect to the smtp server..
const transporter = nodemailer.createTransport({
  service: 'gmail', //smtp server that we use..
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD
  },
});

//The Transporter object has methods, such as sendMail, which you can use to send emails through the configured transport.

const info = {
  from: {
    name: "Gangstar🖤💲",
   address: process.env.USER
  },
  to: ["devadigamanishn@gmail.com","saveinformation85@gmail.com"],
  subject: "Hello ✔",
  text: "Hello from Manish",
  html: "<i>Hello world</i>",
  attachments:[
    {
      filename: 'Thomas.jpg',
      path: path.join(__dirname,'files','Thomas.jpg'), // nearer parent directory and search for given files..
      contentType: 'image/jpg' //optional
    }
  ]
};


const sendE = async (transporter, info) => {

  try {
    await transporter.sendMail(info);
    flag=true;
    console.log("Email has been sent successfully");   
  } catch (error) {
    flag=false;
    console.log("Error while sending email", error);
  }
};




const sendEmailsController = (sendE , (req, res) => {
  sendE(transporter, info)
    if(flag){
      res.render("emailsuc");
    }
    else{
      res.render("emailfail");
    }
   
});



// const print = (req,res)=>{ 
//   res.send("Hello");
// };

// module.exports={print}

module.exports =  sendEmailsController;



  