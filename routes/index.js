var express = require('express');
var router = express.Router();

const userModel=require("./users");  //to import the schema and the model from users.js file
const sendEmailsController = require('../controllers/mail');
// const {print} = require('../controllers/mail');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie("age",25);
  req.session.bsdk="you are banned";
  res.render("index"); 
});

router.get('/create',  async function(req, res, next) {
 const createduser= await userModel.create({
  name:"Manish N Devadiga",
  email:"abcd@gmail.com",
  password:"123qwerty"
   });
res.send(createduser);

});

router.get('/read', async function(req, res, next) {
  const allusers= await userModel.find();

  console.log(req.session.bsdk);
  res.send(allusers);
});

router.get('/dltsession', function(req, res, next) {
    req.session.destroy(function(err){
          if(err){
            console.log(err);
          }
          else{
            console.log("session destroyed");
          }
     });
     res.send("session is removed");
});

router.get('/readone', async function(req, res, next) {
  const oneuser= await userModel.findOne({name: "Manish"});
  res.send(oneuser);
});

router.get('/delete', async function(req, res, next) {
  const dltusers= await userModel.findOneAndDelete({name: "Manish"});
  res.send(dltusers);
});

router.get('/profile', function(req, res) {
  res.send("Hello this is profile page");
});

router.get('/sendEmail',sendEmailsController); 

//this route should be mentioned at last or else even if we write specific route which is after this route /:username  will not run...
router.get('/:username', function(req, res) {
  const username= req.params.username;
  res.send("Hello this is profile page of  " + username);
});


module.exports = router;
