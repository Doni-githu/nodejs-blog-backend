export interface CreatedUser {
    _id: string,
    username: string,
    email: string,
    password: string
}

export interface IUser extends Omit<CreatedUser, "_id"> { }

export interface ILogin extends Omit<IUser, "username"> { }