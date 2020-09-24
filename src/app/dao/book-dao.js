const db = require('../database/connection');

module.exports = {
    insert: async (book) => {
        const trx = await db.transaction();

        await trx('books').insert({
            title: book.title,
            description: book.description,
            classification: book.classification,
            author: book.author,
            year: book.year
        })
    }
}