// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo');
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

//   db.collection('Users').insertOne({
//     name: 'Martin',
//     age: 26,
//     location: 'Bulgaria'
//   }, (err,result) => {
//     if (err) {
//       return console.log('Unable to insert User');
//     }
//     console.log(result.ops[0]._id.getTimestamp());
//   })
//
  db.close();
});
