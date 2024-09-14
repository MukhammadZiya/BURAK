
console.log("1-qadam")

import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import app from "./app";

console.log("PORT:", process.env.PORT);
console.log("MONGO_URL:", process.env.MONGO_URL);



mongoose.connect(process.env.MONGO_URL as string ,{}).then(data => {
console.log("Connected to MongoDB successfully ");
const PORT = process.env.PORT ?? 3003 ; 
app.listen(PORT,function () {
  console.log(`The server is running successfully on port: ${PORT}`);
} )
}).catch(err => console.log("ERROR on connecting to MongoDB", err)); 

