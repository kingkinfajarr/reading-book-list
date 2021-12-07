import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { FaTrash } from 'react-icons/fa';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <div className="border-2 border-green-500 md:hover:bg-green-500 transition-all duration-500 rounded-lg px-5 py-5 mb-2 flex items-center justify-between">
      <div className="break-all pr-10">
        <p className="title dark:text-green-50">Title : {book.title}</p>
        <p className="author dark:text-green-50">Author : {book.author}</p>
      </div>
      <div>
        <FaTrash
          onClick={() => {
            dispatch({ type: 'DELETE_BOOK', id: book.id });
          }}
          className="text-red-500 cursor-pointer w-6 h-6 hover:text-red-600 transition-all duration-100"
        />
      </div>
    </div>
  );
};

export default BookDetails;
