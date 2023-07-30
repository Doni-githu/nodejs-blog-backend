import { Request } from "express"
import { CreatedUser } from "./user.interface"
export interface IRequest extends Request {
    user: any
}
