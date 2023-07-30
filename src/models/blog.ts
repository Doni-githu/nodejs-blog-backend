import { Schema, model } from "mongoose";

const BlogSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    src: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const Blog = model("Blog", BlogSchema)
export default Blog;
