var express = require('express');
var router = express.Router();
var db = require('./db');



router.post('/addUser', function (req, res) {

   var userName =  req.body.userName;
   var age = req.body.age;

    db.user.create({
        user: userName,
        age: age
    }).then( function (result) {
        console.log("insert sucessfully ::" + JSON.stringify(result));
    });


    res.send('UserName is '+ userName + " Age is :" + age);
});


router.post('/updateUser', function (req, res) {

    var userName =  req.body.userName;
    var age = req.body.age;

    db.user.update({
        user: userName,
        age: age
    },
    {
        where: {user: userName},
        returning: true,
        plain: true
    }
    ).then( function (result) {
        console.log("update sucessfully ::" + JSON.stringify(result));
    });


    res.send('UserName is '+ userName + " Age is :" + age);
});


router.post('/deleteUser', function (req, res) {

    var userName =  req.body.userName;
    var age = req.body.age;

    db.user.destroy(
        {
            where: {user: userName},
        }
    ).then( function (result) {
        console.log("User Deleted sucessfully ::" + JSON.stringify(result));
    });


    res.send('UserName is '+ userName + " deleted successfully ");
});


router.post('/allUsers', function (req, res) {

    var userName =  req.body.userName;

    var output;


    db.user.findAll(
        {

        }
    ).then( function (result) {
        output=JSON.stringify(result);
        console.log("All users" + output);

        res.send("All Users" + output );
    });



});






module.exports = router;