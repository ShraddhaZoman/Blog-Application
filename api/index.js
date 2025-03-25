const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

dotenv.config();
const app = express();

// Enable CORS for frontend access
app.use(cors({
    origin: ["http://localhost:3000", "https://deploy-mern-lwhq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}));

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Cloudinary Configuration for Image Uploads
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "blog_uploads",
        format: async (req, file) => "png", // Adjust file format as needed
        public_id: (req, file) => file.originalname
    }
});

const upload = multer({ storage });

// Upload Route
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json({ url: req.file.path });
});

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// Export app for Vercel (NO app.listen)
module.exports = app;
