const express = require('express')
const fs = require('fs')
const path = require('path')
const {readBooks, writeBooks} = require('../helper/fileHelper')

const bookRouter = express.Router()


// Get all books
bookRouter.get('/', async (req, res) => {
    // res.writeHead(200, {'content-type': 'text/html'})
    const books = await readBooks()
    console.log(books)
    res.render('books', {books})
})


module.exports = bookRouter