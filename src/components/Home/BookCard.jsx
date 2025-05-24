import { useEffect, useState } from "react";
import axios from "axios";

const BookCard = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/books`)
            .then(res => {
                console.log(res.data, 'book response');
                setBooks(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    if (!Array.isArray(books) || books.length === 0) {
        return <p className="text-center text-gray-500">Loading books...</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {books.map(book => (
                <div key={book._id} className="border p-4 rounded shadow-md">
                    <h2 className="text-xl font-bold mb-2">Book Name: {book.title}</h2>
                    <p className="mb-2 text-gray-700">Author: {book.author}</p>

                    <a
                        href={book?.driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-2 rounded inline-block"
                    >
                        Read PDF
                    </a>

                </div>
            ))}
        </div>
    );
};

export default BookCard;
