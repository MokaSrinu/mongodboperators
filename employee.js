const mongoose=require("mongoose");


//connecting the mongodb

mongoose.connect("mongodb://localhost:27017/masaiassignment1").then((connectionrespose)=>{
      console.log("database connected ...")
}).catch((connectionresponse)=>{
      console.log("database failed to connect...")
})

                         //employee_salary
//creating the schema for employeesalary
const employeeSalarySchema=new mongoose.Schema({
    name: String,
    gender: String,
    company: String,
    department: String,
    salary: Number
})
//creating model for employee salary
const employee_salaries = mongoose.model('employee_salary',employeeSalarySchema);


const employeedata=async()=>{
     //console.log(await employee_salaries.find())

     //1)Count of Men in Engineering
     console.log(await employee_salaries.find({department:"Engineering"}).count())

     //2)Count of Women in Engineering who earn less than one million
     console.log(await employee_salaries.find({department:"Engineering",gender:"Female",salary:{$lt:1000000}}).count())

     //3)Count of people make less than 80k
     console.log(await employee_salaries.find({salary:{$lt:80000}}).count())

     //4)People who belong Accounting and Legal who make less than 100k
     console.log(await employee_salaries.find({department:{$in:["Accounting","Legal"]},salary:{$lt:100000}}))

     //5)Top 10 earning Men
     console.log(await employee_salaries.find({gender:"Male"}).sort({"salary":-1}).limit(10)) 

     //6)Bottom 10 earning Women
     console.log(await employee_salaries.find({gender:"Female"}).sort({"salary":1}).limit(10)) 

     //7)Top 5 earning Engineering people
     console.log(await employee_salaries.find({department:"Engineering"}).sort({"salary":-1}).limit(5)) 

     //8)Bottom 5 earning Legal people
     console.log(await employee_salaries.find({department:"Legal"}).sort({"salary":1}).limit(5)) 

     //9)Women ranked 30 to 50 in terms of salary earned
     console.log(await employee_salaries.find({gender:"Female"}).sort({"salary":-1}).skip(30).limit(20)) 

     //10)Men ranked 50 to 100 in terms of salary earned
     console.log(await employee_salaries.find({gender:"Male"}).sort({"salary":-1}).skip(50).limit(50)) 

     //11)Bottom 50 earning women in Engineering
     console.log(await employee_salaries.find({gender:"Female",department:"Engineering"}).sort({"salary":1}).limit(50)) 
     
     //12)Top 50 earning men in Human Resources
     console.log(await employee_salaries.find({gender:"Male",department:"Human Resources"}).sort({"salary":-1}).limit(50)) 

}
employeedata();