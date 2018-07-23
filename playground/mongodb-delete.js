// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
  useNewUrlParser: true
}, (err, client) => {

  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')


  db.collection('Users').deleteMany({
    name: 'Tommy'
  }).then((result) => {
    console.log(result)
  })
  db.collection('Users').findOneAndDelete(
    new ObjectID('5b55fe0f53d25f1c6018c28c')
  ).then((res) => {
    console.log(res.value)
  })

  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((result) => {
  //   console.log(result.value)
  // })

  // db.collection('Todos').deleteOne({
  //   text: 'walk the dog'
  // }).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Todos').deleteMany({
  //   text: 'get something to eat'
  // }).then((result) => {
  //   console.log(result)
  // })

  // client.close();
})