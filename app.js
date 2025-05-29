const express = require('express');
const bodyParser = require('body-parser')


const PORT = 3000 || process.env.PORT;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static('public'));
app.use(bodyParser.json())

app.use('/books', booksRoute)

app.get('/', (req, res)=> {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})