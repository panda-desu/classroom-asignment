import express from "express";
import "./config/mongoos-config.js"
import userRouter from "./routes/users-router.js";
import multer from "multer";
import { nanoid } from "nanoid";
import cloudinary from "cloudinary"

cloudinary.config({
    cloud_name: "dqyzk9jxg",
    api_key: "384653525626142",
    api_secret: "DdJdJyzalfvZ_hVt9cCWHvtM3pM"
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // const mimeType = file.mimetype
        // let dest = ''
        // if (mimeType.includes('image')) {
        //     dest += '/images'
        // } else if (mimeType.includes('video')) {
        //     dest += '/videos'
        // } else if (mimeType.includes('pdf')) {
        //     dest += '/docs'
        // } else if (mimeType.includes('audio')) {
        //     dest += '/audios'
        // } else {
        //     dest += '/others'
        // }
        cb(null, "/tmp");

    },
    filename: (req, file, cb) => {
        const fileName = nanoid()
        const splittedPath = file.originalname.split("");
        const fileExtention = splittedPath[splittedPath.length - 1]
        cb(null, `${fileName}.${fileExtention}`)
    }
})
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.includes('image') || file.mimetype.includes('video')) {
            cb(null, true)
        } else {
            cb(null, false)
        }
    }
})

const PORT = 8080;
const app = express();

app.use(express.json());

app.use("/api/users", userRouter);

app.post("/files", upload.single("image"), async (req, res) => {
    const uploadedFile = await cloudinary.v2.uploader.upload(req.file.path)
    res.json(uploadedFile)
})

app.use('/static', express.static("uploads"))

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
});
