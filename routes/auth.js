const express = require('express');
const router = express.Router();

router.get('/login', (req,res) => {
    res.sendFile(process.cwd() + "/views/login.html");
})

module.exports = router;