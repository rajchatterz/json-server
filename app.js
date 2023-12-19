const express = require('express')
const app = express()
app.use('/add-product', (req, res, next) => {
    console.log("object")
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')

})
app.use('/product', (req, res, next) => {
    res.redirect('/')
})
app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express</h1>')
})
app.listen(3000)