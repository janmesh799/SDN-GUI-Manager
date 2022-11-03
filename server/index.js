const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//app.use("/api/auth", require("./routes/auth"));
//app.use("/api/profile", require("./routes/profile"));
app.listen(port, () => {
  console.log(`application backend is running at http://localhost:${port}`);
});