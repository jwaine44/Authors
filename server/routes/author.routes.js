const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api/test', AuthorController.testApi);
    app.get('/api/authors', AuthorController.allAuthors);
    app.get('/api/authors/:id', AuthorController.getAuthor);
    app.post('/api/authors', AuthorController.addAuthor);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}