const express = require('express')
const path = require('path')

const users = require('./routes/api/users')
const app = express()

app.use(express.json())

app.use('/api/users', users)

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on port ${port}`))
