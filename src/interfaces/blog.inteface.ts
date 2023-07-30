import { CreatedUser } from "./user.interface";

export interface CreatedBlog {
    _id: string,
    title: string,
    body: string,
    src: string,
    user: CreatedUser
}

export interface IBlog {
    
}