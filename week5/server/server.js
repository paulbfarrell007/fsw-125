const express = require('express')
const app = express()
const todoRouter = require('./todoRoutes')
const morgan = require("morgan")
const PORT = 9000

        app.use(express.json())
        app.use(morgan("dev"))
        app.use("/bounties", require("./router/bountiesRouter"))

app.listen(9000, () => {
    console.log("The server is running on 9000")
})