import express from 'express';

const imageRegex = /\/.+\.(svg|png|jpg|png|jpeg)$/;
const videoRegex = /\/.+\.(mp4|ogv)$/

const router = express.Router();

router.get(imageRegex, (req, res) => {
    const filePath = req.path;
    res.redirect(303, `http://localhost:3000/src${filePath}`);
});

router.get(videoRegex, (req, res) => {
    const filePath = req.path;
    res.redirect(303, `http://localhost:3000/src${filePath}`);
});

export default router;