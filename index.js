const express = require('express')
const fs = require('fs');
const path = require('path');

const app = express()
const port = 6584

const packageListString = fs.readFileSync(path.join(__dirname, 'package-list.json'), 'utf-8');

app.get('/packages', (req, res) => {
  //console.log(typeof packageListString)  
  res.type('json')
  res.send(packageListString)
  //res.send('Hello world!');
})

app.listen(port, () => {
  console.log(`Package manager listening at http://localhost:${port}`)
})

