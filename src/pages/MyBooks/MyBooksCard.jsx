import { FaBookOpenReader, FaFilePdf } from 'react-icons/fa6';
import bookImg from '../../assets/cyber.webp'
import useHandleSave from '../../hooks/useHandleSave';
const MyBooksCard = ({ book }) => {
    const handleSave = useHandleSave();
   
    return (
        <section className=''>
            <div className="card card-side bg-base-100 shadow-md">
                <figure className='w-2/5 lg:w-1/3 2xl:w-1/4'>
                    <img
                        className=''
                        src={bookImg}
                        alt="book" />
                </figure>
                <div className="card-body pl-3 lg:pl-6">
                    <h2 className="card-title lg:text-xl 2xl:text-2xl">{book.title}</h2>
                    <p className='text-sm lg:text-base text-gray-500'>By : {book.author}</p>
                    {/* <p className='text-sm lg:text-base text-gray-500 -mt-1'>Category : {`Academic`}</p> */}
                    {
                        book?.status === 'read' ?
                            <div className="card-actions justify-end">
                                <a
                                    href={book?.driveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-2 flex justify-center items-center gap-1 h-8 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c]  hover:scale-105 active:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] active:from-[#be123c] active:to-[#fb7185]"
                                >
                                    Read PDF <FaFilePdf />
                                </a>
                            </div>
                            :
                            <div className="card-actions gap-4  justify-end-safe">
                                <button
                                    onClick={() => handleSave(book, 'read')}
                                    className='bg-[#ffc3d244] px-3 h-8 rounded-lg border-none text-[#FF2056] font-semibold text-[16px] text-center'>
                                    <FaBookOpenReader />
                                </button>
                                <a
                                    href={book?.driveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-2 flex justify-center items-center gap-1 h-8 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c]  hover:scale-105 active:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] active:from-[#be123c] active:to-[#fb7185]"
                                >
                                    Read PDF <FaFilePdf />
                                </a>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default MyBooksCard;