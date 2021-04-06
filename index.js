const express = require('express')
const fs = require('fs');
const path = require('path');

const app = express()
const port = process.env.PORT || 3000;

const packageListString = fs.readFileSync(path.join(__dirname, 'package-list.json'), 'utf-8');

app.get('/packages', (req, res) => {
  res.type('json')
  res.send(packageListString)
})
app.use(express.static('static'))

app.listen(port, () => {
  console.log(`Package manager listening at http://localhost:${port}`)
})

