import { TbFidgetSpinner } from 'react-icons/tb';

const AddBookForm = ({ handleSubmit, imagePreview, handleImage, imageText, loading }) => {
    return (
        <div className='lg:max-w-3xl md:max-w-2xl pt-28 md:pt-32 lg:pt-36 xl:pt-44 container mx-auto px-5 md:px-0'>
            <div className='px-4 md:px-6 lg:px-8 xl:px-10 text-gray-800 rounded-xl bg-[#ffc3d244] shadow-md py-6 md:py-8 lg:py-12'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
                        <div className='space-y-4 md:space-y-6'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='location' className='block text-gray-600'>
                                    Title
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md bg-white'
                                    name='title'
                                    id='title'
                                    type='text'
                                    placeholder='Title'
                                    required
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='category' className='block text-gray-600'>
                                    Category
                                </label>
                                <select
                                    required
                                    className='w-full px-4 py-3 bg-white border border-rose-300 focus:outline-rose-500 rounded-md'
                                    name='category'
                                >
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
                            </div>

                        </div>
                        <div className='space-y-6'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='title' className='block text-gray-600'>
                                    Author
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md bg-white '
                                    name='author'
                                    id='author'
                                    type='text'
                                    placeholder='Author'
                                    required
                                />
                            </div>

                            <div className={`p-4 bg-white w-full  m-auto rounded-lg ${imagePreview && 'flex justify-around items-center'}`}>
                                <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                    <div className='flex flex-col w-max mx-auto text-center'>
                                        <div>
                                            <label>
                                                <input
                                                    onChange={e => {
                                                        handleImage(e.target.files[0])
                                                    }}
                                                    className='text-sm cursor-pointer w-36 hidden'
                                                    type='file'
                                                    name='image'
                                                    id='image'
                                                    accept='image/*'
                                                    hidden

                                                />
                                                <div className='p-1 px-3 h-8 cursor-pointer rounded shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c]  hover:scale-105 active:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] active:from-[#be123c] active:to-[#fb7185]'>
                                                    {/* {imageText} */}
                                                    {imageText.length > 15 ?
                                                        imageText.slice(0, imageText.lastIndexOf('.')).slice(0, 10) + '...' + imageText.split('.').pop()
                                                        :
                                                        imageText
                                                    }
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                {imagePreview && <div className="border-2 border-dashed border-gray-200 rounded p-1 min-h-14 min-w-14 overflow-hidden">
                                    <img src={imagePreview} className="w-14 h-10 object-cover object-center" />
                                </div>}
                            </div>

                        </div>
                    </div>
                    {/* pdf filed */}
                    <div className='mt-4 md:mt-0'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='title' className='block text-gray-600'>
                                Upload PDF
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md bg-white'
                                type="file"
                                name="pdf"
                                accept=".pdf"
                                required
                            />
                        </div>
                    </div>

                    <button
                        disabled={loading}
                        type='submit'
                        className='mt-5 md:mt-6 w-full h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c]  hover:scale-105 active:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] active:from-[#be123c] active:to-[#fb7185]'
                    >
                        {loading ? <TbFidgetSpinner className='animate-spin m-auto text-xl' /> : 'Save & Continue'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBookForm;