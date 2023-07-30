import { Router } from "express"
import { IBlog } from "../interfaces/blog.inteface"
import multer from "multer"
import { v4, v5 } from "uuid"
import path from "path"
import fs from "fs"
const router = Router()

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        cb(null, `blog-${v4()}-${v5.DNS}${ext}`)
    },
    destination: (req, file, cb) => {
        if (!fs.existsSync(path.join(__dirname, '..', '..', 'public'))) {
            fs.mkdirSync(path.join(__dirname, '..', '..', 'public'))
        }
        if (!fs.existsSync(path.join(__dirname, '..', '..', 'public', 'blogs'))) {
            fs.mkdirSync(path.join(__dirname, '..', '..', 'public', 'blogs'))
        }

        cb(null, path.join(__dirname, '..', '..', 'public', 'blogs'))
    }
})

const upload = multer({ storage })
router.post('/create', upload.single('file'), async (req, res) => {
    const blog = req.body
    
    
})

export default router