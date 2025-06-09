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

bookRouter.get('/new', async (req, res) => {
    
    res.render('new', {title: ""})
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


bookRouter.post('/', async (req, res) => {
    const books = await readBooks()
    const newBookId = books.length + 1

    const newBook = {
        "id": newBookId,
        "title": req.body.title,
        "poster": req.body.poster,
        "author": req.body.author
    }

    console.log(newBook)

    books.push(newBook)
    await writeBooks(books)
    res.redirect('/books')
})

bookRouter.put('/:id', (req, res) => {
    
})

module.exports = bookRouter