const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

const PORT = 3000 || process.env.PORT;
const app = express();
const booksRoute = require('./routes/books')

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.use(bodyParser.json())
app.use('/books', booksRoute)
app.set("view engine", "ejs");
app.set("views", "views");

app.get('/', (req, res)=> {
    res.end('Hello')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})