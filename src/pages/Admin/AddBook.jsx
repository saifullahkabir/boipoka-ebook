import axios from 'axios';

const AddBook = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const res = await axios.post('http://localhost:5000/books', formData);
        if (res.data.insertedId) {
            alert('Book uploaded successfully!');
            form.reset();
        }
    };
    return (
        <div>
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