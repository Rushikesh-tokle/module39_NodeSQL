const {faker}=require("@faker-js/faker");
const mysql=require('mysql2');
const express=require("express");
const app=express();
const port=8080;
const path =require("path");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'Rushi@20022020'
});



let  getRandomUser=()=> {
  return [
  faker.string.uuid(),
  faker.internet.username(), // before version 9.1.0, use userName()
  faker.internet.email(),
  faker.internet.password(),
  ];
};


/////inserting new data


// try{
// connection.query(q,[data],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
   
// })
// }catch(err){
//     console.log(err);
// }
//  connection.end();


///home Route
app.get("/",(req,res)=>{
   let q="select count(*) from user";
   try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
      console.log(result[0]["count(*)"]);
      let count=result[0]["count(*)"];
      res.render("home.ejs",{count});
    })
   }catch(err){
    console.log(err);
    res.send("Some error occured");
   }
})

//Show route
app.get("/user",(req,res)=>{
    let q="select * from user";
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
          let data=result;
          res.render("showUsers.ejs",{data});
        })
    }catch(err){
        res.render("Error Ocured");
    }
})


app.listen(port,()=>{
console.log(`The app is listening on ${port}`);
})
