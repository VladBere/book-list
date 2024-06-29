import '../book/book.css' 

const Book = (data) => {
 
  const [book, onBookRemove] = data.data

  const handleRemoveClick = () => {
    onBookRemove(book.id);
  };

  return (
    <li key={book.id} className='bookWrapper'>
        <p className='bookName'>{book.title}</p>
        <input className='bookCheckbox' type="checkbox" defaultChecked={book.completed}/>
        <button onClick={handleRemoveClick} className='bookBtn'><img className='imgDelete' src="/src/assets/icons/trash.svg" alt="" /></button>
    </li>
  )
}

export default Book
