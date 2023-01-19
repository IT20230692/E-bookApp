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

 const handleDelete = async (id) => {
  try{
    await axios.delete('http://localhost:8800/books/' + id);
    window.location.reload();
  }catch(err){
    console.log(err);
 }
 }

  return (
    <div>
      <h1>Chandima Book Shop</h1>
      <div className='books'>
        {books.map((book) => (
          <div className='book' key={book.id}>
            {book.cover && <img src="https://media.istockphoto.com/id/1297963288/photo/e-book-reader.jpg?b=1&s=170667a&w=0&k=20&c=ObwCii_nyj4wIizFodAzDo0fn9B-wU3wMA0d1o2mmec=" alt='' />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <button className='delete' onClick={()=>handleDelete(book.id)} >DELETE</button>
            <button className='update'><Link to={`/update/${book.id}`} style={{textDecoration: 'none'}}>UPDATE</Link></button>
          </div>
        ))}
      </div>
      <button>
        <Link to={'/add'} style={{textDecoration: 'none', color:"green"}}>Add new Book</Link>
      </button>
    </div>
  );
};

export default Books;
