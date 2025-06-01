const fs = require('fs/promises')
const path = require('path')

// Get the path to data.json (located one level up from this file)
const dataFilePath = path.join(__dirname, 'data.json')

/** 
 * Asynchronously reads and parses the data.json file.
 * @returns {Promise<Array>} Array of book objects, or empty array if error occurs
 */

async function readBooks(){
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading books:", error.message)
        return [];
    }
}

/**
 *  Asynchronously writes the provided data to data.json
 * @param {Array} books - Array of book objects to save.
 * @returns {Promise<void>}
 */

async function writeBooks(books) {
    try {
        await fs.writeFile(filePath, JSON.stringify(books, null, 2))
    }
}