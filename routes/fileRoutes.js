const express = require("express");
const router = express.Router();
const { uploadFile, downloadFile } = require("../controllers/fileController");

router.post("/upload", uploadFile);
router.get("/download/:fileId", downloadFile);

module.exports = router;
