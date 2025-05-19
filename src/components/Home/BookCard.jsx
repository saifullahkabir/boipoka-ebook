import { useEffect, useState } from "react";
import axios from "axios";

const BookCard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_UR}/books`)
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {books.map(book => (
        <div key={book._id} className="border p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">Book Name: {book.title}</h2>
          <p className="mb-2 text-gray-700">Author: {book.author}</p>

          <a
            href={`http://localhost:5000/${book.pdfPath.replace(/\\/g, "/")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded"
          >
            Read PDF
          </a>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
