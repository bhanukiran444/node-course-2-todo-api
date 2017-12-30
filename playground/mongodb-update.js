// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
   return console.log('Unable to connect to MongoDB server');
  }
    console.log('connected to MongoDB server');

    //findOneAndUpdate
  //   db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a479ddefeb0de84b8774095')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then ( (result) => {
  //   console.log(result);
  // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5a47a6d1feb0de84b877444c')
    },{
      $set: {
        name: 'bhanu '
      },
      $inc: {
        age: 10
      }
  },   {
    returnOriginal: false
  }).then( (result) => {
    console.log(result);
  })


    // db.close();

});
