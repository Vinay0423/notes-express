import mongoose from 'mongoose'


export async function db() {
    try {
        let database = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Db connect to ${database.connection.host}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}



