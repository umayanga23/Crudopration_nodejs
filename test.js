const mongoose = require('mongoose');

const uri = "mongodb://admin:Cd4JDftHJfe5PPFi@ac-pwpfvj8-shard-00-00.0oy2hwy.mongodb.net:27017,ac-pwpfvj8-shard-00-01.0oy2hwy.mongodb.net:27017,ac-pwpfvj8-shard-00-02.0oy2hwy.mongodb.net:27017/NodeApi?ssl=true&replicaSet=atlas-gizc49-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(() => console.log("✅ Successfully connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ Connection error:", err));
