const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/get", require("./routes/get.js"));
app.use("/post", require("./routes/post.js"));
app.use("/put", require("./routes/put.js"));
app.use("/delete", require("./routes/delete.js"));
//app.use("/api/profile", require("./routes/profile"));
app.listen(port, () => {
  console.log(`application backend is running at http://localhost:${port}`);
});