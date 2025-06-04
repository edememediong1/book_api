const express = require('express')
const fs = require('fs')
const path = require('path')
const {readBooks, writeBooks} = require('../helper/fileHelper')

const bookRouter = express.Router()
const booksPath  = path.join(__dirname,'data.json')


// Get all books
bookRouter.get('/', )
