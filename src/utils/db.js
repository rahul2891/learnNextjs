import mongoose from "mongoose";

const connect = async () => {
    try {
      console.log("checking")
        await mongoose.connect(process.env.MONGO);
        console.log("connected to db")
      } catch (error) {
        throw new Error("connection failed")
      }
}

export default connect; 