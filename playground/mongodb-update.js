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

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b55feb886581100d429e012')
  }, {
    $set: {
      name: 'harold'
    },
    $inc: {age:1}
  }).then((res) => {
    console.log(res)
  })
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b56864966e36b51baa7c250')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result => {
  //   console.log(result)
  // }))

  // client.close();
})