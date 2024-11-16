//2 objects banaye student or attendance list mad

let students = [{
    name:"Aqdas",
    father_Name:"Muhammad Yousaf",
    address:"House# 286C, St 2 ,Sector G-6/2",
    phone:"0343-4422584",
    attendances: [{
        day:"Monday",
        date:"12-11-2024",
        isPresent: true
    }] 
    
},
{
    name:"Aqdas",
    father_Name:"Muhammad Yousaf",
    address:"House# 286C, St 2 ,Sector G-6/2",
    phone:"0343-4422584",
    attendances: [{
        day:"Monday",
        date:"12-11-2024",
        isPresent: true
    }],  
    
}]
console.log(students[0].address);

//Array of an object
let user = [{
    user_name : "Ali",
    phone : "03434422584",
    email : "aqdasali584@gmail.com",
    Check_LoggedIn : [{
    myArray21:["Aqdas", "Anwar", "Furqan", "Irfan"],
    myArray2:["Aqdas", "Anwar", "Furqan", "Irfan"],
    }],
}]
console.log(user[0].Check_LoggedIn);

