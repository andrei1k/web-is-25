import mongoose from 'mongoose'

const connectionString = 'mongodb+srv://andreikalchev02:3WRhgEc1d9y6NjxT@cluster0.vaoteap.mongodb.net/messanger?retryWrites=true&w=majority&appName=Cluster0'

await mongoose.connect(connectionString)

const db = mongoose.connection

db.once('open', () => {
    console.log('connected to mongo')
})

process.on('SIGINT', async () => {

    await db.close();
    console.log('disconnected to mongo')
})

const MessagesSchema = new mongoose.Schema({
    user: String,
    messages: [
        {
            to: String,
            from: String,
            message: String
        }
    ]
})

const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number
})

export const Messages = mongoose.model('Messages', MessagesSchema, 'messages')
export const Student = mongoose.model('Student', StudentSchema)