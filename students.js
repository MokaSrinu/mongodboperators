const mongoose=require("mongoose");


//connecting the mongodb

mongoose.connect("mongodb://localhost:27017/masaiassignment1").then((connectionrespose)=>{
      console.log("database connected ...")
}).catch((connectionresponse)=>{
      console.log("database failed to connect...")
})

                            //student marks
//creating the schema for student marks
const  StudentsMarksSchema=new mongoose.Schema({
    name:  String,
    gender:  String,
    class:  String,
    section: String,
    maths:  Number,
    science: Number,
    english: Number
})
//creating model for student marks
const students_marks=mongoose.model('students_marks',StudentsMarksSchema);

const studentsdata=async()=>{
  //console.log(await students_marks.find())

  //1)Count of all the female students
  console.log(await students_marks.find({gender:"Female"}).count())

  //2)Count of all male students who scored more that 85 in maths, science and english
  console.log(await students_marks.find({$and:[{gender:"Male"},{$and:[{maths:{$gt:85}},{science:{$gt:85}},{english:{$gt:85}}]}]}).count())

  //3)Count of all students who scored between 50 and 75 marks in maths and english
  console.log(await students_marks.find({$and:[{maths:{$gte:50,$lte:75}},{english:{$gte:50,$lte:75}}]}).count())

  //4)Count of students from class I to class V who score more that 50 in all subjects
  console.log(await students_marks.find({$and:[{class:{$in:["I","II","III","IV","V"]}},{$and:[{maths:{$gt:50}},{english:{$gt:50}},{science:{$gt:50}}]}]}).count())

  //5)Find all the female students from grade X section A who scored less that 25 in all subjects
  console.log(await students_marks.find({$and:[{gender:"Female"},{class:"X"},{section:"A"},{$and:[{maths:{$lt:25}},{science:{$lt:25}},{english:{$lt:25}}]}]}))

  //6)Top 3 students in grade V based on maths score
  console.log(await students_marks.find({class:"V"}).sort({"maths":-1}).limit(3))

  //7)Bottom 5 students in grade I based on science score
  console.log(await students_marks.find({class:"I"}).sort({"science":1}).limit(5))

  //8)Students from section A who scored less than 50 in all the subjects
  console.log(await students_marks.find({$and:[{section:"A"},{$and:[{maths:{$lt:50}},{science:{$lt:50}},{english:{$lt:50}}]}]}))

  //9)Students from section C who scored more that 75 in all the subjects
  console.log(await students_marks.find({$and:[{section:"C"},{$and:[{maths:{$gt:75}},{science:{$gt:75}},{english:{$gt:75}}]}]}))

  //10)Students who will fall in page 3 if ordered by increasing order of maths scores (Assume 10 results per page)
  console.log(await students_marks.find().skip(20).limit(10));

  //11)Students who will fall in page 5 if ordered by descreasing order of science scores (Assume 20 results per page)
  console.log(await students_marks.find().sort({"science":-1}).skip(100).limit(20));

  //12)Female Students who will fall in page 4 if ordered by increasing order of science scores and maths scores (Assume 5 results per page)
  console.log(await students_marks.find({gender:"Female"}).sort({"science":1}).sort({"maths":1}).skip(20).limit(5));

  //13)Male Students who will fall in page 3 if ordered by decreasing order of science, maths and english scores (Assume 15 results per page)
  console.log(await students_marks.find({gender:"Male"}).sort({"science":1}).sort({"maths":1}).sort({"english":1}).skip(45).limit(15));



}
studentsdata();