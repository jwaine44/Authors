const Author = require('../models/author.model');

module.exports.testApi = (req, res) => {
    res.json({Status: 'ok'})
}

// CREATE
module.exports.addAuthor = (req, res) => {
    const newAuthor = req.body
    Author.create(newAuthor)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

// READ ALL
module.exports.allAuthors = (req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}

// READ ONE
    module.exports.getAuthor = (req, res) => {
        Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
    }

// UPDATE
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

// DELETE
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}