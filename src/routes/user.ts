import { Router } from "express"
import { encodeId, decodeToken } from "../utils/token"
import { CreatedUser, ILogin, IUser } from "../interfaces/user.interface"
import User from "../models/user"
import bcrypt from "bcrypt"
import UserMiddleware from "../middlewares/user"
import { IRequest } from "../interfaces/request.interface"
const router = Router()

router.post('/register', async (req, res) => {
    const user = req.body as IUser

    const same = await User.findOne({ email: user.email })

    if (same) {
        res.status(400).json({ message: 'This email are ready using' })
        return
    }

    const hashPassword = await bcrypt.hash(user.password, 10);

    const editUser: IUser = {
        ...user,
        password: hashPassword
    }
    const createdUser = await User.create(editUser)
    const token = decodeToken(String(createdUser._id))
    res.status(200).json({
        user: createdUser,
        token
    })
})

router.post('/login', async (req, res) => {
    const user = req.body as ILogin

    const existUser = await User.findOne({ email: user.email })

    if (!existUser) {
        res.status(400).json({
            message: 'User is not exist'
        })
        return
    }

    const comparePassword = await bcrypt.compare(existUser.password, user.password)

    if (!comparePassword) {
        res.status(400).json({
            message: 'Password is wrong'
        })
        return
    }

    const token = encodeId(String(existUser._id))
    res.status(200).json({
        token,
        user: existUser
    })
})


router.get('/', UserMiddleware, async (req: IRequest, res) => {
    res.status(200).json({ user: req.user })
})

export default router