const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('59f60a0b9f556e2b7a956c49')
  // }).toArray().then((docs) => {
  //
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //
  // }, (err) => {
  //   console.log('Unable to fetch documents', err);
  // })

  // db.collection('Todos').find().count().then((count) => {
  //
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err) => {
  //   console.log('Unable to fetch documents', err);
  // })

  db.collection('Users').find({name: 'Martin'}).toArray().then((docs) => {

    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    console.log('Unable to fetch documents', err);
  })

  // db.close();
});
