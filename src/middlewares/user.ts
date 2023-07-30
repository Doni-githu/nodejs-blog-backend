import { Request, Response } from "express"
import { encodeId } from "../utils/token"
import User from "../models/user"
import { IRequest } from "../interfaces/request.interface"
export default async function (req: IRequest, res: Response) {
    if (!req.headers.authorization) {
        res.status(400).json({
            message: 'User is not authorization'
        })
        return
    }

    const token = req.headers.authorization.replace('Token ', '')
    const id = encodeId(token)
    const user = await User.findById(id)
    console.log(user);
    req.user = user
}