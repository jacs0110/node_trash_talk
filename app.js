// include modules and server variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateMessage = require('./generate_message')
const app = express()
const port = 3000

// set view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  let message = generateMessage(req.body)
  res.render('index', { message: message })
})


// listening to localhost:3000
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})