
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //delete Many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //         console.log(result);
    // });

    //delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name:'Andrew'});

   db.collection('Users').findOneAndDelete({
       _id:new ObjectID("5baf1814eac0e137c207d9ef")
    }).then((results) => {
        console.log(JSON.stringify(results,undefined,2));
    });


    //db.close();
});