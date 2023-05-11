const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run(){
    try{
        await client.connect();
        const db = client.db('sample_data');
        const collection = db.collection('movies');

        // Finding the first document in the collection
        const first = await collection.findOne();
        console.log(first);
    }finally{
        await client.close();
    }
}
run().catch(console.error);