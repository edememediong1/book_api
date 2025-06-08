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

bookRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    const books = await readBooks()
    
    const bookIndex = books.findIndex(book => book.id == id) 

    if ( bookIndex == -1) {
        res.status(404).end('Book not found')
        return
    }

    book = books[bookIndex]
    res.render('book', {book})
})


module.exports = bookRouter