import bookService from '../service/book.services.js'

async function createBookController(request, res) { // POST /books
     const newBook = request.body

     try {
          const createdBook = await bookService.createBookService(newBook)
          res.status(201).send(createdBook)
     } catch (erro) {
          res.status(400).send(erro.message)
     }
}

async function findAllBooksController(request, res) { // GET /books
     try {
          const books = await bookService.findAllBooksService()
          res.send(books)
     } catch (erro) {
          res.status(404).send(erro.message)
     }
}

async function findBookByIdController(request, res) { // GET /books/:id
     const bookId = request.params.id

     try {
          const book = await bookService.findBookByIdService(bookId)
          return res.send({ book })
     } catch (erro) {
          return res.status(404).send(erro.message)
     }
}

async function updateBookController(request, res) { // PUT /books/:id
     const bookId = request.params.id
     const updatedBook = request.body

     try {
          const response = await bookService.updateBookService(updatedBook, bookId)
          return res.status(200).send({
               mensagem: 'Livro atualizado com sucesso',
               livro: response
          });
     } catch (erro) {
          return res.status(400).send(erro.message)
     }
}

async function deleteBookController(request, res) { // DELETE /books/:id
     const bookId = request.params.id

     try {
          const response = await bookService.deleteBookService(bookId)
          return res.status(200).send({
               mensagem: 'Livro deletado com sucesso',
               livro: response
          });
     } catch (erro) {
          return res.status(400).send(erro.message)
     }
}

export default {
     createBookController,
     findAllBooksController,
     findBookByIdController,
     updateBookController,
     deleteBookController
}