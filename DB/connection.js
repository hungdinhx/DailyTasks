const mongoose = require("mongoose");

const URI = "mongodb+srv://user:dxuI7isZKmpI8YI9@cluster0-c9nm9.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async()=>{
	await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
	console.log("MongoDB Atlas connected..!");
};

module.exports = connectDB;