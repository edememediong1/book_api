const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000 || process.env.PORT;
const app = express();
const booksRoute = require('./routes/books')



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