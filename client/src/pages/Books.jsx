import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAlbooks = async () => {
      try {
        const res = await axios.get('http://localhost:8800/books');
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAlbooks();
  }, []);

  return (
    <div>
      <h1>Chandima Book Shop</h1>
      <div className='book'>
        {books.map((book) => (
          <div className='book' key={book.id}>
            {book.cover && <img src={book.cover} alt='' />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
      <button>
        <Link to={'/add'}>Add new Book</Link>
      </button>
    </div>
  );
};

export default Books;
