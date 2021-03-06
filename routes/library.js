const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const routePath = path.join(__dirname, '../library.json')
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const knex = require('../db/knex')
const pg = require('pg');
router.use(methodOverride('X-HTTP-Method-Override'))

router.get('/', async(req, res, next) => {
  res.render('pages/index');
});
// BOOKS
router.get('/books/new', async(req, res, next) => {
  knex('authors').then((ret) => {
    console.log(ret, 'ret');
    res.render("pages/books_new", {
      authors: ret
    })
  })
});

router.post('/books/new', async(req, res, next) => {
  let bookID
  let authors = req.body.authors;
  let book
  let myJoin
  knex('books').insert({
    title: req.body.title,
    genre: req.body.genre,
    description: req.body.description,
    book_cover_url: req.body.url
  }, '*').then((ret) => {
    bookID = ret[0].id;
    for (let x = 0; x < authors.length; x++) {
      knex('books_authors').insert({
        'books_id': bookID,
        'authors_id': authors[x]
      }).then((ret) => {})
    }
    return knex("authors").join('books_authors', 'authors.id', 'books_authors.authors_id').join('books', 'books.id', 'books_authors.books_id').then((join) => {
      myJoin = join
      return knex('books').where('id', bookID).then((data) => {
        book = data[0];
        res.render("pages/book", {
          book: book,
          join: myJoin
        })
      });
    })
  }).catch((err) => {
    next(err)
  })

});



router.get('/books', async(req, res, next) => {
  var books
  knex('books').orderBy('id', 'asc').then((ret) => {
      books = ret
      return knex("authors").join('books_authors', 'authors.id', 'books_authors.authors_id').join('books', 'books.id', 'books_authors.books_id').then((join) => {
        // console.log(join, 'join');
        res.render("pages/books", {
          books: books,
          join: join
        })
      })
    })
    .catch((err) => {
      next(err)
    });
});

router.get('/books/:id', async(req, res, next) => {
  let id = req.params.id;
  var books
  knex('books')
    .then((ret) => {
      books = ret
      return knex("authors").join('books_authors', 'authors.id', 'books_authors.authors_id').join('books', 'books.id', 'books_authors.books_id').then((join) => {
        res.render("pages/book", {
          book: books[id],
          join: join
        })
      })
    })
    .catch((err) => {
      next(err)
    });
});

router.get('/book/:id/delete', async(req, res, next) => {
  let id = req.params.id;
  var book
  knex('books').where('id', id)
    .then((ret) => {
      book = ret[0]
      return knex("authors").join('books_authors', 'authors.id', 'books_authors.authors_id').join('books', 'books.id', 'books_authors.books_id').then((join) => {
        res.render("pages/book_delete", {
          book: book,
          join: join
        })
      })
    })
    .catch((err) => {
      next(err)
    });
});

router.delete('/book/:id/delete', async(req, res, next) => {
  let id = req.params.id;
  let theJoin
  console.log(id, 'id');
  let books
  knex('books').del().where('id', id).then((ret) => {
      return knex("authors").join('books_authors', 'authors.id', 'books_authors.authors_id').join('books', 'books.id', 'books_authors.books_id').then((join) => {
        theJoin = join
        console.log(theJoin, 'join');
        return knex('books').then((reta) => {
          books = reta
          knex('books_authors').del().where('books_id', id).then((ret) => {
            console.log(ret, 'deleted join table book');
          })
          // console.log(authors, 'authors');
          console.log(books[1], 'a book');
          res.render("pages/books", {
            books: books,
            join: theJoin
          })
        }).catch((err) => {
          next(err)
        });
      }).catch((err) => {
        next(err)
      });
    })
    .catch((err) => {
      next(err)
    });
});



router.get('/book/:id/edit', async(req, res, next) => {
  let id = req.params.id;
  let authors
  knex('authors').then((ret) => {
    authors = ret
    // console.log(authors, 'authors');
  })
  // console.log(id, 'id');
  knex('books').where('id', id)
    .then((ret) => {
      book = ret[0]
      return knex("authors").join('books_authors', 'authors.id', 'books_authors.authors_id').join('books', 'books.id', 'books_authors.books_id').then((join) => {
        res.render("pages/book_edit", {
          book: book,
          join: join,
          authors: authors
        })
      })
    })
    .catch((err) => {
      next(err)
    });
});


router.put('/book/:id/edit', async(req, res, next) => {
  let id = req.params.id;
  let authors = req.body.authors;
  let book
  // let books
  knex('books').where('id', id).update({
    title: req.body.title,
    genre: req.body.genre,
    description: req.body.description,
    book_cover_url: req.body.url
  }, '*').then((ret) => {
    // book = ret[0];
    knex('books_authors').del().where('books_id', id).then((ret) => {
      for (let x = 0; x < authors.length; x++) {
        knex('books_authors').insert({
          'books_id': id,
          'authors_id': authors[x]
        }).then((ret) => {

        })
      }
      knex('books').where('id', id).then((ret) => {
        book = ret[0];
        console.log(book, 'book');
      })
      return knex("authors").join('books_authors', 'authors.id', 'books_authors.authors_id').join('books', 'books.id', 'books_authors.books_id').then((join) => {
        let myJoin = join;

        res.render("pages/book", {
          book: book,
          join: join
        })
      })
    }).catch((err) => {
      next(err)
    })
  })
});

// AUTHORS
router.get('/authors', async(req, res, next) => {
  var authors
  knex('authors').select()
    .then((ret) => {
      authors = ret
      return knex("authors").join('books_authors', 'authors.id', 'books_authors.authors_id').join('books', 'books.id', 'books_authors.books_id').then((join) => {
        res.render("pages/authors", {
          authors: authors,
          join: join
        })
      })
    })
    .catch((err) => {
      next(err)
    });
});

router.get('/author/:id/edit', async(req, res, next) => {
  let id = req.params.id;
  console.log(id, 'id');
  knex('authors').where('id', id)
    .then((ret) => {
      author = ret[0]
      console.log(author, 'author at id');
      return knex("authors").join('books_authors', 'authors.id', 'books_authors.authors_id').join('books', 'books.id', 'books_authors.books_id').then((join) => {
        res.render("pages/author_edit", {
          author: author,
          join: join
        })
      })
    })
    .catch((err) => {
      next(err)
    });
});

router.put('/author/:id/edit', async(req, res, next) => {
  console.log('got here');
  let id = req.params.id;
  console.log(id, 'id');
  let author
  knex('authors').where('id', id).update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    biography: req.body.biography,
    portrait_url: req.body.portrait_url
  }, '*').then((ret) => {
    author = ret[0];
    console.log(author, 'author');
    return knex("authors").join('books_authors', 'authors.id', 'books_authors.authors_id').join('books', 'books.id', 'books_authors.books_id').then((join) => {
      res.render("pages/author", {
        author: author,
        join: join
      })
    })
  }).catch((err) => {
    next(err)
  })
});


router.get('/authors/new', async(req, res, next) => {
  res.render("pages/authors_new")
});

router.post('/authors/new', async(req, res, next) => {
  let author
  knex('authors').insert({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    biography: req.body.biography,
    portrait_url: req.body.portrait_url
  }, '*').then((ret) => {
    author = ret[0];
    return knex("authors").join('books_authors', 'authors.id', 'books_authors.authors_id').join('books', 'books.id', 'books_authors.books_id').then((join) => {
      res.render("pages/author", {
        author: author,
        join: join
      })
    })
  }).catch((err) => {
    next(err)
  })
});


router.get('/authors/:id', async(req, res, next) => {
  let id = req.params.id;
  var authors
  knex('authors').select()
    .then((ret) => {
      authors = ret
      return knex("authors").join('books_authors', 'authors.id', 'books_authors.authors_id').join('books', 'books.id', 'books_authors.books_id').then((join) => {
        res.render("pages/author", {
          author: authors[id - 1],
          join: join
        })
      })
    })
    .catch((err) => {
      next(err)
    });
});


router.get('/author/:id/delete', async(req, res, next) => {
  let id = req.params.id;
  console.log(id, 'id at get');
  var author
  knex('authors').where('id', id)
    .then((ret) => {
      author = ret[0]
      return knex("authors").join('books_authors', 'authors.id', 'books_authors.authors_id').join('books', 'books.id', 'books_authors.books_id').then((join) => {
        res.render("pages/author_delete", {
          author: author,
          join: join
        })
      })
    })
    .catch((err) => {
      next(err)
    });
});



//
router.delete('/authors/:id/delete', async(req, res, next) => {
  let id = req.params.id;
  let theJoin
  console.log(id, 'id');
  let authors
  knex('authors').del().where('id', id).then((ret) => {
      return knex("authors").join('books_authors', 'authors.id', 'books_authors.authors_id').join('books', 'books.id', 'books_authors.books_id').then((join) => {
        theJoin = join
        console.log(theJoin, 'join');
        return knex('authors').then((reta) => {
          authors = reta
          // console.log(authors, 'authors');
          knex('books_authors').del().where('authors_id', id).then((ret) => {
            console.log(ret, 'deleted join table author');
          })
          console.log(authors[1], 'an author');
          res.render("pages/authors", {
            authors: authors,
            join: theJoin
          })
        }).catch((err) => {
          next(err)
        });
      }).catch((err) => {
        next(err)
      });
    })
    .catch((err) => {
      next(err)
    });
});



module.exports = router
