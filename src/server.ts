import dotenv from 'dotenv';
dotenv.config();

console.log("PORT:", process.env.PORT);
console.log("MONGO_URL:", process.env.MONGO_URL);


import mongoose from 'mongoose';
mongoose.connect(process.env.MONGO_URL as string ,{}).then(data => {
console.log("Connected to MongoDB successfully ");
const PORT = process.env.PORT ?? 3003 ; 
}).catch(err => console.log("ERROR on connecting to MongoDB", err));