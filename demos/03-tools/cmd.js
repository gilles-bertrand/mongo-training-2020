const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'technocite';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Use connect method to connect to the server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    const collection = db.collection('movies');
    // Find some documents
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs[0])
        let newDocs = []

        docs.forEach(doc => {
            let newDoc = {};
            newDoc.id = doc.id;
            newDoc.type = doc.type;
            for (let z in doc.fields) {
                newDoc[z] = doc.fields[z];
            }
            newDocs.push(newDoc);
        })
        const collection = db.collection('new_movies');
        // Insert some documents
        collection.insertMany(newDocs, function (err, result) {
            assert.equal(err, null);

        });
        client.close();
    });



});
