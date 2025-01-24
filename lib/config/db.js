import mongoose from 'mongoose';

const connectDb=async()=>{
    try{
    await mongoose.connect('mongodb://127.0.0.1:27017/blog')
    console.log("database Connected Succesfully")
    }
    catch(error){
        console.log("error in connection problem"+error)
    }
}

export default connectDb;