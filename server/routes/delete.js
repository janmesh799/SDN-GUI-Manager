const express = require('express')
const axios = require('axios')
const router = express.Router();

router.delete("/", async(req, res) => {
    const url = req.body.url;
    const data = req.body;
    try {
        const result = axios.delete(url, {
           
            data: data
          });
        res.json(result.data);
    } catch (error) {
        res.json(error.message);
    }
})

module.exports = router;