import React from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="font-semibold text-center mt-16 pb-16">
      <p className="flex justify-center dark:text-green-50">
        Made with &nbsp;
        <span>
          <FaHeart className="text-red-500 w-6 h-6" />
        </span>
        &nbsp; by &nbsp;
        <a
          href="http://github.com/kingkinfajarr"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-green-500 hover:text-green-600"
        >
          Kingkin Fajar
        </a>
      </p>
      <p className="dark:text-green-50">
        with &nbsp;
        <a
          href="http://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-green-500 hover:text-green-600"
        >
          React JS
        </a>
        {''} and {''}
        <a
          href="http://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-green-500 hover:text-green-600"
        >
          {' '}
          Tailwind CSS
        </a>
      </p>
    </footer>
  );
}
