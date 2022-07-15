const mongoose=require("mongoose");


//connecting the mongodb

mongoose.connect("mongodb://localhost:27017/masaiassignment1").then((connectionrespose)=>{
      console.log("database connected ...")
}).catch((connectionresponse)=>{
      console.log("database failed to connect...")
})


                            //cars
//creating the schema for cars
const CarsSchema=new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    car_color: String,
    car_make: String,
    car_model: String,
    purchase_year: String,
    city: String,
    country: String,
    company: String 
}) 
//creating model for cars
const cars=mongoose.model('cars',CarsSchema);

const carsdata=async()=>{
     //console.log(await cars.find())

     //1)Men who own a Pink car
     console.log(await cars.find({gender:"Male",car_color:"Pink"}))

     //2)Women who own a Red or a Blue Car
     console.log(await cars.find({gender:"Female",car_color:{$in:["Red","Blue"]}}))

     //3)Men who purchased the car in the year 1998
     console.log(await cars.find({gender:"Male",purchase_year:{$eq:1998}}))
      
     //4)Women who purchased a Yellow car in the year 1985
     console.log(await cars.find({gender:"Female",car_color:"Yellow",purchase_year:{$eq:1985}}))

     //5)Men who either have a Red or Green car and either live in Germany or Kenya
     console.log(await cars.find({gender:"Male",car_color:{$in:["Red","Green"]},country:{$in:["Germany","Kenya"]}}))

     //6)People from India who purchased cars in the year 2001
     console.log(await cars.find({country:"India",purchase_year:"2001"}))

     //7)People from Germany or Egypt who purchased cars in the year 1998 or 1992
     console.log(await cars.find({country:{$in:["Germany","Egypt"]},purchase_year:{$in:["1998","1992"]}}))

     //8)Women from India who own a Blue car
     console.log(await cars.find({gender:"Female",car_color:"Blue",country:"India"}))

     //9)Men from Germany who purchased cars in 1998 and Men from Egypt who purchased cars in 1992
     console.log(await cars.find({$or:[{gender:"Male",country:"Germany",purchase_year:"1998"},{gender:"Male",country:"Egypt",purchase_year:"1992"}]}))

     //10)Women who own a Green car and are not from Pakistan
     console.log(await cars.find({gender:"Female",car_color:"Green",country:{$ne:"Pakistan"}}))
}
carsdata();

