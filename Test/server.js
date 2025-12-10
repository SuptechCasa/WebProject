const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

// Configuration Multer (où stocker l'image)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // dossier uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // timestamp + extension originale
  }
});

const upload = multer({ storage });

// Route d'upload
app.post("/upload", upload.single("photo"), (req, res) => {
  console.log(req.file); // Infos de l'image
  res.json({
    message: "Image reçue avec succès",
    filename: req.file.filename,
    path: req.file.path
  });
});

app.listen(3000, () => console.log("Server started on http://localhost:3000"));
