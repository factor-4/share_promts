import mongoose from 'mongoose';
import Error from 'next/error';

let isConnected = false;

export const connectToDB =  async () => {
    mongoose.set('strincQuery', true);

    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_promt",
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        isConnected = true;
        console.log('mongoDB connected')
    } catch (error) {
        console.log(error)
    }
}