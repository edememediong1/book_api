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

bookRouter.get('/:id/edit', async (req, res) => {
    const id = req.params.id
    const books = await readBooks()

    const bookIndex = books.findIndex(book => book.id == id)

    if(bookIndex == -1){
        res.status(404).send('Book not found!')
        return 
    }

    book = books[bookIndex]
    res.render('edit', {book})
})

bookRouter.put('/:id', async (req, res) => {
    const books = await readBooks();
    const id = parseInt(req.params.id);

    const bookIndex = books.findIndex(book => book.id == id)

    if(bookIndex == -1){
        return res.status(404).send('Book not found!')
    }

    // Update the book
    books[bookIndex] = {
        id, 
        title : req.body.title,
        author: req.body.author,
        poster: req.body.poster
    };

    await writeBooks(books);
    res.redirect('/books');
})

bookRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    const books = await readBooks()

    const bookIndex = books.findIndex(book => book.id == id)

    if (bookIndex == -1){
        res.status(404).send('Book not found')
        return
    }

    books.splice(bookIndex, 1)

    await writeBooks(books)

    res.redirect('/books')

})

module.exports = bookRouter