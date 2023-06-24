//require library
const mongoose=require('mongoose');
//connect to database
mongoose.connect('mongodb://localhost/contact_list_db');
//acquire the connection
const db=mongoose.connection;
//error
// main().catch(err => console.log(err));
db.on('error',console.error.bind(console,'error connecting to db'));
//up and running then print the message
db.once('open',function(){
       console.log('sucessfully connected to db');
});