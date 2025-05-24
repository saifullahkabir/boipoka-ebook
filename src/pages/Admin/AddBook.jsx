import axios from "axios";


const AddBook = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/books`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (res.data.insertedId) {
                alert('Book uploaded successfully!');
                form.reset();
            }
        } catch (err) {
            console.error('Upload error:', err.response?.data || err.message);
            alert('Upload failed: ' + (err.response?.data?.error || err.message));
        }
    };

    return (
        <div className='py-20 mx-4 lg:mx-20'>
            <form onSubmit={handleSubmit} className="space-y-4 p-4 border max-w-md mx-auto my-8">
                <input name="title" placeholder="Title" className="border p-2 w-full" required />
                <input name="author" placeholder="Author" className="border p-2 w-full" required />
                <textarea name="description" placeholder="Description" className="border p-2 w-full" required />
                <input type="file" name="pdf" accept=".pdf" className="border p-2 w-full" required />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded btn">Upload Book</button>
            </form>
        </div>
    );
};

export default AddBook;