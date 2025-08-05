const {faker}=require("@faker-js/faker");
const mysql=require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'Rushi@20022020'
});
/////inserting new data
let q="insert into user(id, username, email, password) values ?";
let users=[["123b","123_newUserb","abc@gmail.comb","abcb"],
         ["123c","123_newUserc","def@gmail.comc","defc"]];

try{
connection.query(q,[users],(err,result)=>{
    if(err) throw err;
    console.log(result);
   
})
}catch(err){
    console.log(err);
}
 connection.end();
let  getRandomUser=()=> {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

