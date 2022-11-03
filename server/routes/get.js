const express = require('express')
const axios = require('axios')
const router = express.Router();

router.get("/", async(req, res) => {
    const url = req.headers.url;
    try {
        const config = {
            headers: {
                url: url
            }
        };
        const result = await axios.get(url, config);
        res.json(result.data);
    } catch (error) {
        res.json(error.message);
    }
})

module.exports = router;