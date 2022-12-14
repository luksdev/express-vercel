const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const userRouter = require("./src/routes/user.router.js");
const classroomRouter = require("./src/routes/classroom.router.js");
const courseRouter = require("./src/routes/course.router.js");
const moduleRouter = require("./src/routes/module.router.js");
const instructorRouter = require("./src/routes/instructor.router");
const commentRouter = require("./src/routes/comment.router");
const jwtRouter = require("./src/routes/jwt.router");
const ratingRouter = require("./src/routes/rating.router.js");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.use("/", userRouter);
app.use("/", classroomRouter);
app.use("/", courseRouter);
app.use("/", moduleRouter);
app.use("/", instructorRouter);
app.use("/", commentRouter);
app.use("/", ratingRouter);
// app.use("/", jwtRouter);

app.listen(3002, () => {
  console.log("Server started on port 3002");
});
