'use server'

import mongoose from "mongoose";

let isConnected = false;
export const connectToDataBase = async () => {
    // mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB connected already");
    return;
  }
  try {
    // const customerSchema= new mongoose.Schema({ name: String,address: String,email:String,});
    await mongoose.connect('mongodb+srv://bagas:bramanda123@cluster0.jr9h0h8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('Connected to MongoDB...')).catch((err) => console.error("Coudn't connect MongoDB....", err));;
    // const Customer= mongoose.model('Customer',customerSchema);
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};