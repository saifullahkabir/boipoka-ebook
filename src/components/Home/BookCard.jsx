import bookImg from '../../assets/cyber.webp'
import { FaBookOpenReader } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import useHandleSave from '../../hooks/useHandleSave';
const BookCard = ({ book }) => {
    const handleSave = useHandleSave();

    return (
        <div>
            <div key={book._id} className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg z-10 h-[513px]">
                <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-md  bg-gradient-to-r from-[#1313130D] to-[#6160600d]">
                    <img className="w-[200px] h-[230px] container mx-auto py-2 object-cover" src={book?.image || bookImg} alt="Book" />
                </div>
                <div className="p-6">
                    <p className='bg-[#23BE0A0D] btn border-none text-[#23BE0A] p-2 px-4 rounded-[30px] font-semibold text-[16px] text-center'>{book?.category}</p>
                    <h5 className="pt-2 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {book.title}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        By: {book.author}
                    </p>
                </div>
                <div className="p-6 pt-0 -mt-2">
                    <div className='flex justify-between items-center'>
                        <button
                            onClick={() => handleSave(book, 'read')}
                            className='flex items-center bg-[#ffc3d244] btn rounded-lg border-none text-[#FF2056] font-semibold text-[16px] text-center'>
                            <FaBookOpenReader />
                            <span>Read</span>
                        </button>
                        <button
                            onClick={() => handleSave(book, 'wishlist')}
                            className='flex items-center bg-[#ffc3d244] btn rounded-lg border-none text-[#FF2056] font-semibold text-[16px] text-center'>
                            <FaBookmark />
                            <span>Wishlist</span>
                        </button>
                    </div>
                    <a
                        href={book?.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex justify-center items-center gap-2 w-full h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c]  hover:scale-105 active:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] active:from-[#be123c] active:to-[#fb7185]"
                    >
                        Read PDF <FaFilePdf />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BookCard;

