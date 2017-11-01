const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

//findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59f60b174da4ed2b972c7039')
  }, {
    $set : {
      name: 'Martin'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  // db.close();
});
