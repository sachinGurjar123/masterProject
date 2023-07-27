const mongoose = require("mongoose");

// Get the MongoDB connection URI from the environment variables
PASSWORD_KEY = "FF9d5OVAGbwgt40s";
const MONGODB_URI = `mongodb+srv://skumargurjar2002:${PASSWORD_KEY}@cluster0.hcb2i9n.mongodb.net/?retryWrites=true&w=majoritymongodb+srv://skumargurjar2002:ivgnsKiX3owwFwhG@cluster0.hcb2i9n.mongodb.net/masterProject?retryWrites=true&w=majority`;

// Connect to MongoDB
const initDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("alredy connected");
    return;
  }
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("connected to mongo----->");
  });
  mongoose.connection.on("error", (err) => {
    console.log("error to connecting", err);
  });
};

module.exports = { initDB };
