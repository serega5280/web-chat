const MongoClient = require('mongodb').MongoClient;

const test = require('assert');

// Connection url

const url = 'mongodb://127.0.0.1:27017/';

// Database Name

const dbName = 'webchatdb';

// Connect using MongoClient

const mongoClient = new MongoClient(url,
  {useNewUrlParser: true,useUnifiedTopology: true});

it("Connecting to the database", function(done){
  mongoClient.connect(function(err, client) {
    test.strictEqual(null, err)
    const db = client.db(dbName);

    client.close();
    done()
  });
});