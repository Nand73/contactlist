const express=require('express');
const path=require('path');
const port=3000;
//connecting to db
const db=require('./config/mogoose');


const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

//middleware1
// app.use(function(req,res,next){
//      req.myName="Arpan";
//     //   console.log("middleware1");
// next();

// });

//middleware2
// app.use(function(req,res,next){
//     console.log('My Name from MW2',req.myName);
//     //  console.log("middleware2");
//      next();
// });
var contactList=[
    {
        name:"sunny",
        phone:"1234567890"
    },
    {
        name:"Anshu",
        phone:"1111111111"
    },
    {
        name:"Prince",
        phone:"777777777"
    }
]
app.get('/',function(req,res){
    console.log(req.myName);
    // console.log(__dirname);
    // res.send('<h1>cool,it is running!,or is it?</h1>');
   return res.render('home',{title:"Contact List",
   contact_list:contactList
});

});
app.get('/practice',function(req,res){
     return res.render('practice',{title:"let play with ejs"})
});

app.post('/create_contact',function(req,res){
    //    return res.redirect('/practice')
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);
    // contactList.push({
    //         name: req.body.name,
    //         phone: req.body.phone

    // });
    // return res.redirect('/');
    contactList.push(req.body);
    return res.redirect('back');
    
});

app.get('/delete-contact/',function(req,res){
    console.log(req.query);
     let phone=req.query.phone;
     let  contactIndex=contactList.findIndex(contact=>contact.phone==phone);
     if(contactIndex!=-1){
        contactList.splice(contactIndex,1);
     }
     return res.redirect('back');

});

app.listen(port,function(err){
     if(err){
        console.log('Error is running the server',err);
     }

     console.log('yup!My Express server is running on port',port);
});