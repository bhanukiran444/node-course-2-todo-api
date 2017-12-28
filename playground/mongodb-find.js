// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
   return console.log('Unable to connect to MongoDB server');
  }
    console.log('connected to MongoDB server');

    // db.collection('Todos').find(
    //   _id: new ObejctID('5a45198a00f81bae7481f896')
    // ).toArray().then( (docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch data', err);
    // })

    // db.collection('Todos').find().count().then( (count) => {
    //   console.log(`Todos count: ${count} `);
    // }, (err) => {
    //   console.log('Unable to fetch data', err);
    // })

    db.collection('Users').find({name: 'Bhanu'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch data', err);
    })

    // db.close();
});
