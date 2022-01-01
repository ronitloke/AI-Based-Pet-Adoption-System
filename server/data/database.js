const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
    const client = await MongoClient.connect(process.env.MONGO_URI);
    database = client.db("pet-adoption");
    console.log("Connected to Database");
}

function getDb() {
    if (!database) {
        throw {
            message: "Database not connected!",
        };
    }

    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb,
};
