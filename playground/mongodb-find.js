const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
                    (err, db) => {
                        if (err) {
                            return console.log('Unable to connect to MongoDB server');
                        }
                        console.log('Connected to MongoDB server.');
                        // db.collection('Todos').insertOne({
                        //     text: 'Something to do',
                        //     completed: false
                        // },
                        //                                  (err, result) => {
                        // if (err) {
                        //     return console.log('Unable to insert todo', err);
                        // }
                        //                                      console.log(JSON.stringify(result.ops, undefined, 2));
                        //                                  });

                        db.collection('Users').find({name: 'Andrew' }).toArray().then((docs) => {
                            console.log('Users named Andrew:', JSON.stringify(docs, undefined, 2));
                         },
                                                                                                                     (err) => { console.log('Read error: ', err); });


                        // db.collection('Todos').find().count().then((count) => { console.log(`todos count ${count}.`); },
                        //                  (err) => { console.log('Read error: ', err); });
                        //db.close();
                    });
