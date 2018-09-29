//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

//console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
//const db = client.db('TodoApp');
    /*db.collection('Todos').insertOne({
        text:'Something to do',
        completed:false
    },(err,results) => {
        if(err){
            return console.log('Unable to insert todo',err);
        }
        console.log('Record inserted successfully');
        console.log(JSON.stringify(results.ops, undefined,2));
    });*/

    //Insert new doc into Users (name, age, location)

    /*db.collection('Users').insertOne({
        name:'Vishal',
        age:25,
        location:'Philadelphia'
    },(err,results) => {
        if(err){
            return console.log('Unable to insert user',err);
        }
        console.log(results.ops);
    });
*/
    db.close();
    //client.close();
});

