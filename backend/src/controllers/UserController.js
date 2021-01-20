import {User} from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../config/keys.js";

export const RegisterUser = (req, res) => {

    const {name, email, password} = req.body

    const newUser = new User({name, email, password})

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(400).json({ msg: err })
        newUser.password = hash
        newUser.save((err, data) => {
            if (err) return res.status(400).json({ msg: err })
            if (data) return res.status(200).json({ msg: 'user created successfully' })
        })
    });
}

export const LoginUser = (req, res) => {
    User.findOne({ email: req.body.email }).exec((err, user) => {
        if (err) return res.status(400).json({ msg: err })
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {

                const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '1d' })
                const { name, email } = user
                res.status(200).json({ token, user: { name, email } })

            } else return res.status(400).json({ msg: 'invalid password' })
        } else return res.status(400).json({ msg: 'user not registered' })
    })
}

export const GetUsers = (req, res) => {
    User.find().exec((error, users)  => {
        if(error) return res.status(400).json({ error })
        if(users) return res.status(200).json({ users })
    })
}
