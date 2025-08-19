import Container from '../../components/Shared/Container';
import BookCard from '../../components/Home/BookCard';
import useBooks from '../../hooks/useBooks';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Books = () => {
    const [books, , isLoading] = useBooks();
    if (isLoading) return <LoadingSpinner />

    return (
        <Container>
            <div id='books'>
                <div className="text-center pb-14 xl:pb-16">
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-gray-800">
                        Explore Our eBook Collection
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm lg:text-base">
                        Browse and read your favorite books, anytime, anywhere.
                    </p>
                </div>

                {/* show only first 6 books */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 gap-y-16">
                    {books.slice(0, 6).map(book => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>

                {/* All Books Button */}
                <div className="flex justify-center mt-12 md:mt-14 xl:mt-16">
                    <Link 
                        to="/all-books" 
                        className='btn px-6 md:px-8 btn-sm md:btn-md cursor-pointer rounded-md shadow-2xl border-[#e11d48] text-rose-600 text-base font-semibold hover:bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:text-white hover:border-none active:bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] active:text-white active:border-none '
                    >
                        All Books 
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Books;
