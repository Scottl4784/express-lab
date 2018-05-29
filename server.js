const express = require('express')
const app = express()
const hbs = require('hbs')

app.set('view engine', 'hbs')

const mathController = require('./controllers/mathController')
app.use('/math', mathController)

const greetingController = require('./controllers/greetingController')
app.use('/greeting', greetingController)

const port = process.env.PORT || 3000
app.listen(port, function(){
console.log(`Server is listening on port ${port}`)
})