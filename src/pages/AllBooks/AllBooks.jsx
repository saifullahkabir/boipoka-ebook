import { useState } from "react";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import useBooks from "../../hooks/useBooks";
import BookCard from "../../components/Home/BookCard";
import Container from "../../components/Shared/Container";
import { FaSearch, FaFilter } from "react-icons/fa";

const AllBooks = () => {
  const [books, , isLoading] = useBooks();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  if (isLoading) return <LoadingSpinner />;

  // Filtered Books
  const filteredBooks = books.filter((book) => {
    const titleMatch = book.title.toLowerCase().includes(search.toLowerCase());
    const authorMatch = book.author.toLowerCase().includes(search.toLowerCase());
    const categoryMatch =
      book.category.toLowerCase().includes(search.toLowerCase());

    const searchMatch = titleMatch || authorMatch || categoryMatch;

    const categoryFilter = category
      ? book.category.toLowerCase() === category.toLowerCase()
      : true;

    return searchMatch && categoryFilter;
  });

  return (
    <Container>
      <div className="pt-24 md:pt-28 xl:pt-32">
        <div className="text-center pb-7 xl:pb-10">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-gray-800">
            All Books Collection
          </h2>
          <p className="text-gray-500 mt-2 text-sm lg:text-base">
            Search and explore from our complete library.
          </p>
        </div>

        {/* Search & Category Filter - Redesigned */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-10 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-2/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by Title, Author, or Category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="relative w-full md:w-1/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaFilter className="text-gray-400" />
              </div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
              >
                <option value="">All Categories</option>
                <option value="Academic">Academic</option>
                <option value="Islamic">Islamic</option>
                <option value="Comics">Comics</option>
                <option value="History">History</option>
                <option value="Story">Story</option>
                <option value="Technology">Technology</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Novel">Novel</option>
                <option value="Motivational">Motivational</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Results counter */}
          <div className="mt-4 text-sm text-gray-500 flex justify-between items-center">
            <span>
              Showing {filteredBooks.length} of {books.length} books
            </span>
            {(search || category) && (
              <button 
                onClick={() => {
                  setSearch("");
                  setCategory("");
                }}
                className="text-rose-500 hover:text-rose-600 text-sm font-medium transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Show Books */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 gap-y-16 mt-14 md:mt-16 xl:mt-20">
            {filteredBooks.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <p className="text-gray-500 text-lg font-medium">No books found</p>
            <p className="text-gray-400 mt-1 text-sm">
              Try adjusting your search or filter criteria
            </p>
            {(search || category) && (
              <button 
                onClick={() => {
                  setSearch("");
                  setCategory("");
                }}
                className="mt-4 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors text-sm"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default AllBooks;