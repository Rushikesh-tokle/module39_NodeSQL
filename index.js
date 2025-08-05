const {faker}=require("@faker-js/faker");
const mysql=require('mysql2');

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
let q="insert into user(id, username, email, password) values ?";

let data=[];
for(let i=1;i<=100;i++){
   data.push(getRandomUser());
}

try{
connection.query(q,[data],(err,result)=>{
    if(err) throw err;
    console.log(result);
   
})
}catch(err){
    console.log(err);
}
 connection.end();


