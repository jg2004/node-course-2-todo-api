const {
  ObjectID
} = require('mongodb');
const {
  mongoose
} = require('./../server/db/mongoose');
const {
  Todo
} = require('./../server/models/todo');
const {
  User
} = require('./../server/models/user');

const id = '5b57b1bc61a87015e09b840f';

if (!ObjectID.isValid(id)) {
  console.log('ID is not valid')
}
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     console.log('Could not find to do!')
//   } else {
//     console.log('Todo', todo);
//   }
// });

// Todo.findById(id).then((todo) => {
//   console.log('Todo by id', todo)
// }).catch((e) => {
//   console.log(e)
// })

User.findById(id).then((user) => {
  console.log('User by id', user)
}).catch((e) => {
  console.log(e)
})