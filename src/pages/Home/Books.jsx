import Container from '../../components/Shared/Container';
import BookCard from '../../components/Home/BookCard';
import useBooks from '../../hooks/useBooks';

const Books = () => {
    const [books] = useBooks();

    return (
        <Container>
            <div id='books'>
                <div className="text-center pb-14  xl:pb-16">
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-gray-800">Explore Our eBook Collection</h2>
                    <p className="text-gray-500 mt-2 text-sm lg:text-base">Browse and read your favorite books, anytime, anywhere.</p>
                </div>

                {/* show books */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 gap-y-16 ">
                    {books.map(book => (
                        <BookCard key={book._id} book={book}></BookCard>
                    ))}
                </div>


            </div>
        </Container>
    );
};

export default Books;