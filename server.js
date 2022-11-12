const express = require('express')
const app = express()
var path = require('path')
const fs = require('fs')

const port = 3000

const getData = function (request, response) {
    let dataFile = path.join(__dirname, 'data.json')
    let res = JSON.parse(fs.readFileSync(dataFile, 'utf-8'))
    // setTimeOut(function() {
        return response.send(res)
    // }, 100)
}

app.get('/data/2.5/weather', getData)

app.listen(port, function () {
    console.log('mock app listening at http://localhost:3000');
})
