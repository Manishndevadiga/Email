const mongoose=require("mongoose");

const uri = 'mongodb+srv://gdevadiga109:manish13572002@educluster.whqklcn.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri);


//mongoose.connect("mongodb://127.0.0.1:27017/school");

const stdscheema =  mongoose.Schema(
      {
            name:String,
            email:String,
            password:String
      });


module.exports=mongoose.model("student",stdscheema);

