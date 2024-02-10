import express from 'express'
import 'dotenv/config'
import animeRouter from './routes/animeRoutes'

const app = express()
const port = process.env.PORT || 3000

// middlewares
app.use(express.json())
app.use('/api/animes', animeRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
