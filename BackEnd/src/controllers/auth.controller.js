import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../../Schemas/User.js'


export async function signup (req, res){
    const {username, name, password , email} = req.body
    if(!username || !name || !password || !email){
        res.status(400).json({message: 'username, name, password and email are all required'})

    }
    const existing  = await User.findOne({$or: [{email, username}]})

    if (existing){
        res.status(400).json({message: 'these creadentials already exist'})
    }

    const passwordHash = await bcrypt.hash(password , 10)
    const user = await User.create({username, name, passwordHash , email})

    const token = signToken(user);
    res.status(201).json({ token, user: toPublicUser(user) });
}

export async function login(req, res){
    const {email , password} = req.body
    if(!email || !password){
        res.status(400).json({message: 'email and password are both required'})
    }

    const user = await User.findOne({email, passwordHash: password})
    if (!user){
        res.status(404).json({message: 'email or password is not valid '})
    }
    const isTruePassword = bcrypt.compare(password , user.passwordHash)

    if (!isTruePassword){
        res.status(404).json({message : 'email of password is not valid'})
    }

    const token = signToken(user);
    res.status(201).json({ token, user: toPublicUser(user) });
}


export async function getCurrentUser(req, res) {
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(toPublicUser(user));
}

function signToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

function toPublicUser(user) {
  return { id: user._id, name: user.name, email: user.email, username: user.username };
}