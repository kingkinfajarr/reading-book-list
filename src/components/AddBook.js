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
      <div className="flex justify-between items-center">
        <label className="dark:text-green-50 mr-5">
          Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
        </label>
        <input
          type="text"
          className="w-full border-green-500 border-b-2 focus:outline-none mt-1 mb-4 bg-transparent dark:text-green-50"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex justify-between items-center">
        <label className="dark:text-green-50 mr-5">Author&nbsp;&nbsp;:</label>
        <input
          type="text"
          className="w-full border-green-500 border-b-2 focus:outline-none mt-1 mb-4 bg-transparent dark:text-green-50"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button className="bg-green-500 hover:bg-green-600 transition-all duration-100 rounded-lg px-3 py-2 w-full mb-4  dark:text-green-50">
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
