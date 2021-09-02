const express = require('express')
const app = express()
const port = 3000
let fileExists = require("file-exists")
let rootDir = __dirname

app.get('/', (req, res) => {
  res.sendFile("index.html", { "root" : rootDir });
})

app.get('*', (req, res) => {

    if(fileExists.sync(rootDir + req.path))
    {
        res.sendFile(req.path, { "root" : rootDir})
    }
    else
    {

        res.status(404)
        res.send("Sorry, requested file not found")
    }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})