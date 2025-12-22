// ================= SETUP ENV =================
require('dotenv').config()

// ================= IMPORT ====================
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const morgan = require('morgan')

// ================= APP =======================
const app = express()

// ================= MIDDLEWARE ================
app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || '*'
  })
)

// ================= RATE LIMIT ================
const limiter = rateLimit({
  windowMs: (process.env.RATE_LIMIT_WINDOW || 15) * 60 * 1000,
  max: process.env.RATE_LIMIT_MAX || 100
})

app.use(limiter)

// ================= ROUTES ====================
app.get('/', (req, res) => {
  res.send('SERVER HIDUP')
})

app.get('/api/hello', (req, res) => {
  res.json({ message: 'API berjalan' })
})

app.get('/api/health', (req, res) => {
  res.json({
    status: 'UP',
    uptime: process.uptime(),
    timestamp: new Date()
  })
})

// ================= SERVER ====================
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`)
})
