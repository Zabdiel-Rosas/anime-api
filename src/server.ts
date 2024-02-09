import express from 'express'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000

// middlewares
app.use(express.json())

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
