import express from 'express'

const app = express()
const port = 3000

// middlewares
app.use(express.json())

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
