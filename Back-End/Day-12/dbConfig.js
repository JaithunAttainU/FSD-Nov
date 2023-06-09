const { MongoClient } = require('mongodb')

const dbName = 'BookMyShow'

async function initDB(collectionName) {
  console.log(process.env.MONGO_URL)
  const client = new MongoClient(process.env.MONGO_URL);

  //1)Connect
  //2)Mention DB Name
  //3)Mention CollectionName
  try {
    await client.connect()
    console.log('Connected successfully to Database');

    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    return collection
  } catch (err) {
    console.log("Error connecting to Database")
    process.exit()
  }
}

module.exports = {
  initDB
}