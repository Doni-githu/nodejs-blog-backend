import { Schema, model, SchemaType } from "mongoose"
const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})
const User = model("User", UserSchema)
export default User