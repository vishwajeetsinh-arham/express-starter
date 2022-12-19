const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.send('working fine')
})

app.listen(port,() => {
    console.log(`your app is running on http://localhost:${port}`)
})