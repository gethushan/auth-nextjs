import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const db = mongoose.connection;

db.on("connected", () => {
    console.log("Connected to DB");
})
    db.on("error", (err) => {
        console.log("Error connecting to DB");
        process.exit();
    })
  } catch (error) {
    console.log("Error connecting to DB");
    console.log(error);
  }
}