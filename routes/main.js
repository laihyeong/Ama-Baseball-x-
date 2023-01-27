const express = require('express');
const router = express.Router();

router.get('/tools', (req,res) => {
    res.sendFile(process.cwd() + "/views/tools.html");
})

module.exports = router;