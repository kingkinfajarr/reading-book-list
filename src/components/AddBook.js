import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const AddBook = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_BOOK',
      book: {
        title,
        author,
      },
    });
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Title : </p>
      <input
        type="text"
        className="w-full border-green-500 border-b-2 focus:outline-none mt-1 mb-4"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p>Author : </p>
      <input
        type="text"
        className="w-full border-green-500 border-b-2 focus:outline-none mt-1 mb-4"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button className="bg-green-500 rounded-lg px-3 py-2 w-full mb-4">
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
