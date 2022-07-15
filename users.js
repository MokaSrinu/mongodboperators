const mongoose=require("mongoose");


//connecting the mongodb

mongoose.connect("mongodb://localhost:27017/masaiassignment1").then((connectionrespose)=>{
      console.log("database connected ...")
}).catch((connectionresponse)=>{
      console.log("database failed to connect...")
})


                              //users
//creating the schema for users
const UserSchema=new mongoose.Schema({
    name: String,
    gender: String,
    shirt_size: String,
    language: String
})
//creating model for users
const users=mongoose.model('users',UserSchema);


const userstest=async()=>{
    
    //console.log(await employee_salaries.find())
    
  

    //1)finding all the female users
    const femaleUsers=await users.find({gender:"Female"});
    console.log(femaleUsers);
     
    //2)Find all the female users who speak one of the two languages Kannada, Hindi
    console.log(await users.find({$and:[{$or:[{language:"Kannada"},{language:"Hindi"}]},{gender:"Female"}]}))

    //3)Find all the male users who can speak Hindi and female users who can speak Kannada
    console.log(await users.find({$or:[{gender:"Male",language:"Hindi"},{gender:"Female",language:"Kannada"}]}))

    //4)Find all the users who wear the shirt size S
    console.log(await users.find({shirt_size:"S"}))

    //5)Find all the female users who wear the shirt size XL
    console.log(await users.find({gender:"Female",shirt_size:"XL"}))

    //6)Find all the English speaking male users and Hindi speaking female users
    console.log(await users.find({$or:[{gender:"Male",language:"English"},{gender:"Female",language:"Hindi"}]}))

    //7)Find all the male users who can speak Hindi or English and female users who can speak Kannada or German
    console.log(await users.find({$or:[{gender:"Male",language:{$in:['Hindi','English']}},{gender:"Female",language:{$in:["Kannada","German"]}}]}))

    //8)Find all the female users who can speak Bengali who wear shirt size XL and male users who speak German and wear shirt size either L or M
    console.log(await users.find({$or:[{gender:"Female",language:"Bengali",shirt_size:"XL"},{gender:"Male",language:"German",shirt_size:{$in:["L","M"]}}]}))

    //9)Find all the female users who speak any of the Indian languages (Hindi, Punjabi, Bengali, Gujarati, Tamil, Malayalam)
    console.log(await users.find({gender:"Female",language:{$in:["Hindi","Punjabi","Bengali","Gujarati","Tamil","Malayalam"]}}))

    //10)Men who can speak Korean
    console.log(await users.find({gender:"Male",language:"Korean"}));

}
userstest();


