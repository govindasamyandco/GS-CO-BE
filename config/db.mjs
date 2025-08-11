import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://govindasamytextitle:wgL9EQX1owCvhPM0@data.lleioe3.mongodb.net/?retryWrites=true&w=majority&appName=data").then(() => {
      console.log("✅ GS DB connected Successfully");
    });
  } catch (error) {
    console.log(error);
  }
};
