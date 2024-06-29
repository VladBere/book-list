import Book from "../book/book-list"
import "../form/form.css"
import { useState } from "react"

const Form = () => {

  const [books, setBooks] = useState([])

  const [book, setBook] = useState("")

  const onBookChange = (e) => {
    setBook(e.target.value)
  }

  const onBookCreated = (e) => {
    e.preventDefault()

      const newBook = {
        id: Math.random() *223313,
        title: book,
        completed: false,
      }
      setBooks([...books, newBook])
  }

  const onBookRemove = (id) => {
    const newBookList = books.filter((i) => i.id !== id);
    setBooks(newBookList);
  };

  return (
    <>
    <form className="form" onSubmit={onBookCreated}>
      <input className="inputName" onChange={onBookChange} value={book} type="text" placeholder="Book title" />
      <button className="addBtn"><img className="imgAdd" src="/src/assets/icons/diff.svg" alt="" /></button>
    </form>
    <ul>
      {books.map(book => {
        return (
          <Book data={[book, onBookRemove]}/>
        )
      })}
    </ul>
    </>
  )
}

export default Form
