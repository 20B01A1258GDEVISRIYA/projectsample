var express = require('express');
const { db } = require('../firebase');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Study', function(req, res, next) {
  res.render('Study', { title: 'Express' });
});
router.get('/Concern', function(req, res, next) {
  res.render('Concern', { title: 'Express' });
});
router.get('/Custodian', function(req, res, next) {
  res.render('Custodian', { title: 'Express' });
});
router.get('/Fee', function(req, res, next) {
  res.render('Fee', { title: 'Express' });
});
router.get('/Internship', function(req, res, next) {
  res.render('Internship', { title: 'Express' });
});
router.get('/Residence', function(req, res, next) {
  res.render('Residence', { title: 'Express' });
});
router.get('/StudyConduct', function(req, res, next) {
  res.render('StudyConduct', { title: 'Express' });
});
router.get("/submits",(req, res, next) => {
  const regno=req.query.regno;
  const purpose=req.query.purpose;
  console.log(regno,purpose);
  try {
    db.collection("students")
      .where("regno", "==", regno)
      .get()
      .then((docs) => {
        if (docs.size > 0) {
          res.render("verified");
        } else {
          res.render("oops");
        }
      });
  } catch (error) {
    res.json("error");
  }
});
// db.firebase.firestore();
// var user=firebase.auth().currentUser;
// var regno=user.regno;
// db.collection("students").where("regno", "==", regno)
//                     .get()
//                     .then(function(querySnapshot) {
//                         querySnapshot.forEach(function(doc) {
//                             var data = doc.data();
//                             var name = data.name;
//                             //var lastName = data.last;
//                         });
//                     })
//                     .catch(function(error) {
//                         console.log("Error getting documents: ", error);
//                     });
module.exports = router;
