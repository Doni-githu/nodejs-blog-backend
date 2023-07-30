import express from "express"
import mongoose from "mongoose"
import Cors from "cors"
import UserRouter from "./routes/user"
import BlogRouter from "./routes/blog"
import path from "path"
const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(Cors({
    origin: '*'
}))

app.use("/user", UserRouter)
app.use("/blog", BlogRouter)

function Run(): void {
    const PORT = process.env.PORT ?? 8000
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
        mongoose.connect('mongodb://localhost:27017')
            .then(() => console.log('Mongo DB is connected!!!'))
            .catch((error) => console.log(`Mongo DB could not connect, because ${error}`))
    })
}

Run()