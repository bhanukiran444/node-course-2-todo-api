const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



// var id = '5a4b38fb019842d011c252ec1';
// if(!ObjectID.isValid(id)){
//   console.log('id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
// _id: id
// }).then((todo) => {
// console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//    if(!todo) {
//      return console.log('Id not found');
//    }
// console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id='5a47b3c1ba99247c0ec36741';

User.findById(id).then((user) => {
  if(!user) {
  return  console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2))

}, (e) => {
  console.log(e);
});
