const express = require('express')
const fs = require('fs')
const path = require('path')

const bookRouter = express.Router()
const booksPath  = path.join(__dirname,'/data.json')

const books = fs.readFile(booksPath, 'utf8', (err, data) => 
    {
        if (err) {
            console.error("Error reading books data:", err);
            return [];
        } 
        try {
            return JSON.parse(data)
        } catch (parseError) {
            console.error("Error parsing books data:", parseError);
            return [];
        }
    })