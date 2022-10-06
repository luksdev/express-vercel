const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const userRouter = require("./src/routes/user.router.js");
const classroomRouter = require("./src/routes/classroom.router.js");
const courseRouter = require("./src/routes/course.router.js");
const moduleRouter = require("./src/routes/module.router.js");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/", userRouter);
app.use("/", classroomRouter);
app.use("/", courseRouter);
app.use("/", moduleRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
