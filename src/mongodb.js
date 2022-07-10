import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://itayebens:itay5632@cluster0.8d5jyzq.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

export async function addSoldier(soldier) {
  try {
    const database = client.db('cod-db');
    const haiku = database.collection('soldiers');
    // create a document to insert
    const soldier1 = {
      _id: soldier.id, // _id will hold the soldier's unique identifier
      name: soldier.name,
      degree: soldier.degree,
      limitations: soldier.limitations,
    }
    const result = await haiku.insertOne(soldier);

    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
// run().catch(console.dir);
