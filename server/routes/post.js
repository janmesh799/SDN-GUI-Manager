const express = require('express')
const axios = require('axios')
const router = express.Router();

router.post("/", async(req, res) => {
    const url = req.headers.url;
    const data = req.body;
    console.log(url,data)
    try {
        const config = {
            headers: {
                url: url
            }
        };
        const result = await axios.post(url, data,config);
        res.json(result.data);
    } catch (error) {
        res.json(error.message);
    }
})

module.exports = router;