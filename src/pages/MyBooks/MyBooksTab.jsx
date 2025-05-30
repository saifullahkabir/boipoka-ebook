import { useState } from "react";
import useMyBooks from "../../hooks/useMyBooks";
import MyBooksCard from "./MyBooksCard";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const MyBooksTab = () => {
  const [activeTab, setActiveTab] = useState("read");
  const [myBooks, , isLoading] = useMyBooks();

  const filteredBooks = myBooks.filter(book => book.status === activeTab);

  if (isLoading) return <LoadingSpinner />

  return (
    <div className="">
      {/* Tab Buttons */}
      <div className="flex justify-center container mx-auto space-x-2 border-[3px] border-[#ff6486] rounded-xl w-[210px] py-1">
        <button
          onClick={() => setActiveTab("read")}
          className={`px-6 py-2  rounded-lg transition duration-150 ease-in-out ${activeTab === "read"
              ? " bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] text-white  "
              : "bg-white text-gray-700 border-none hover:bg-rose-50"
            }`}
        >
          Read
        </button>
        <button
          onClick={() => setActiveTab("wishlist")}
          className={`px-6 py-2 rounded-lg transition duration-150 ease-in-out ${activeTab === "wishlist"
              ? " bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] text-white "
              : "bg-white text-gray-700 border-none hover:bg-rose-50"
            }`}
        >
          Wishlist
        </button>
      </div>

      {/* Book List */}
      <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-14">
        {filteredBooks.length === 0 ? (
          <p className="text-center text-gray-500 font-medium">
            No books found in {activeTab === "read" ? "Read" : "Wishlist"}.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredBooks.map(book => <MyBooksCard
              key={book._id}
              book={book}
            ></MyBooksCard>)}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBooksTab;
