const express = require("express");
require("./db/mongoose");

// get routers
const userRouter = require("./routers/user");

const app = express();
const port = process.env.PORT || 9000;

// It parses incoming requests with JSON payloads
app.use(express.json());

app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is running - ${port}`);
});
