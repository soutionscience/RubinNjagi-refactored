const about = require('./about');
const config = require('../config')

const mongoClient = require('mongodb').MongoClient;


function seedCollection(collectionName, initialRecords){
    mongoClient.connect(config.localDb, function(err, db){
        if(err) throw err;
        console.log("connected to mongo db")
      //  console.log("what is in", db)
       // const collection = db.collectionName.

        collection.remove();
        collection.insertMany(initialRecords, function(err, result){
            if(err) throw err;
            console.log(`${result.insertedCount} records inserted.`);
            console.log('closing connection...');
            db.close();
            console.log('done.');

        })
    })
}

seedCollection('abouts', about)

