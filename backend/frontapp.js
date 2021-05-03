import path from 'path'
import express from 'express'

const app = express()
app.use(express.json())

const __dirname = path.resolve()
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/frontend/build')))

app.use('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
)

app.listen(
    3000,
    console.log(
        `Server running on port 3000`
    )
)