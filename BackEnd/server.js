import mongoose from 'mongoose'
import express from 'express' 
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './src/routes/auth.router.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/' , (req, res)=>{
    res.json({'message': "it is working good "})
})

export async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB connected')
    }catch(e){
        console.error(`MongoDB Error: ${e}`)
    }
}

connectDB()
// const user = await User.create({name: 'mohammed', email:'m.boudrioua@aui.ma' , username: 'MedBdr'})

app.use('/api/auth', authRoutes) 

app.listen(PORT, ()=>{console.log(`Server Connected on PORT: ${PORT} `)})