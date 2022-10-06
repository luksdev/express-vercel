const express = require("express");

const app = express();

const userRouter = require("./src/routes/user.router.js");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", userRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
