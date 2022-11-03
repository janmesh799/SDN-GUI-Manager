const express = require('express')
const axios = require('axios')
const router = express.Router();

router.delete("/", async(req, res) => {
    const url = req.headers.url;
    const data = req.body;
    try {
        const result = axios.delete(url, {
            headers: {
              url:req.headers.url
            },
            data: data
          });
        res.json(result.data);
    } catch (error) {
        res.json(error);
    }
})

module.exports = router;