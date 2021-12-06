import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { FaTrash } from 'react-icons/fa';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <div className="border-2 border-green-500 md:hover:bg-green-500 transition-all duration-500 rounded-lg px-5 py-5 mb-2 relative overflow-visible flex">
      <div>
        <p className="title break-all pr-10">Title : {book.title}</p>
        <p className="author">Author : {book.author}</p>
      </div>
      <div>
        <FaTrash
          onClick={() => {
            dispatch({ type: 'DELETE_BOOK', id: book.id });
          }}
          className="absolute right-0 mt-3 mr-5 text-red-500 cursor-pointer w-6 h-6 hover:text-red-600 transition-all duration-100"
        />
      </div>
    </div>
  );
};

export default BookDetails;
