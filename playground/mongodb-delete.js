// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
   return console.log('Unable to connect to MongoDB server');
  }
    console.log('connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then( (result) => {
//   console.log(result);
// });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then( (result) => {
  //   console.log(result);
  // });

// db.collection('Users').deleteMany({name : 'Bhanu'}).then( (result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({_id: new ObjectID('5a451319e651960be026ced6') }).then( (result) => {
 console.log(JSON.stringify(result, undefined, 2));   
})

    // db.close();

});
