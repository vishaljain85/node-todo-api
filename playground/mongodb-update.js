
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5baf1bc0eac0e137c207d9fc')
    // }, {
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    //5baf1809eac0e137c207d9ee
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5baf1809eac0e137c207d9ee')
    },{
        $set:{
            name:'Smith'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal: false
    }).then((result) =>{
        console.log(result);
    });


    //db.close();
});