import mongoose from 'mongoose'
// Hello world
const  UserSchema = new mongoose.Schema({
    name:{type: String , required: true},
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    passwordHash:{type:String, required:true}
})

export default mongoose.model('User', UserSchema)