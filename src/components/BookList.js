import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="my-8">
      {books.map((book) => {
        return <BookDetails key={book.id} book={book} />;
      })}
    </div>
  ) : (
    <div className="border-2 border-green-500 w-auto transition-all duration-500 rounded-lg px-5 py-5 my-8 text-center md:hover:bg-green-500">
      <p className="dark:text-green-50">You don't have a reading book list.</p>
    </div>
  );
};

export default BookList;
