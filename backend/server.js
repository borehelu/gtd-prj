const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", apiRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("listening on port 500");
});
