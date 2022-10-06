/* eslint-disable @typescript-eslint/no-var-requires */
// import dot env
require("dotenv").config()
// import fs module
// import fs = require("fs")
// import https = require("https")

// const key = fs.readFileSync(
//   __dirname + "/ssl/e600c_de4bd_cb627cbfd9c02624bc5754415a0bc6ee.key"
// )
// const cert = fs.readFileSync(
//   __dirname +
//     "/ssl/academia_4traders_in_e600c_de4bd_1670415910_ca6764093f009f1e1d0df82f69727374.crt"
// )
// const options = {
//   key: key,
//   cert: cert,
// }

import * as express from "express"
import * as cors from "cors"
import bodyParser = require("body-parser")
import morgan = require("morgan")

import { userRouter } from "routes/user.router"
import { courseRouter } from "routes/course.router"
import { moduleRouter } from "routes/module.router"
import { classroomRouter } from "routes/classroom.router"

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan("dev"))
app.use("/", userRouter)
app.use("/", courseRouter)
app.use("/", moduleRouter)
app.use("/", classroomRouter)

app.listen(21300, () => {
  console.log("Example app listening on port 21301!")
})

// const server = https.createServer(options, app)

// server.listen(21301, () => {
//   console.log("server starting on port : " + 21031)
// })
