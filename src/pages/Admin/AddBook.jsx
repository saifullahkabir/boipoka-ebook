import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import AddBookForm from "../../components/Form/AddBookForm";
import { imageUpload } from "../../api/utils";

const AddBook = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [imagePreview, setImagePreview] = useState();
    const [imageText, setImageText] = useState('Upload Image')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const title = form.title.value;
        const author = form.author.value;
        const category = form.category.value;
        const image = form.image.files[0];
        const pdfFile = form.pdf.files[0];

        try {
            setLoading(true);
            // upload image on imgBB
            const image_url = await imageUpload(image);
            console.log(image_url, 'image');
            const bookData = {
                title,
                author,
                category,
                image: image_url,
                uploader: {
                    name: user?.displayName,
                    email: user?.email
                },
                uploadTime: new Date(),
            }
            console.log(bookData, 'bookData');

            // formData object
            const formData = new FormData();
            formData.append('pdf', pdfFile);
            formData.append('bookData', JSON.stringify(bookData));
            console.log(formData);

            const res = await axios.post(`${import.meta.env.VITE_API_URL}/books`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            console.log(res, 'res');

            if (res.data.insertedId) {
                toast.success('Book uploaded successfully!');
                form.reset();
                // navigate('/manage-books')
            }
        } catch (err) {
            toast.error('Upload failed: ' + (err.response?.data?.error || err.message));
            setLoading(false);
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    // handle image change 
    const handleImage = image => {
        setImagePreview(URL.createObjectURL(image));
        setImageText(image.name);
    }

    return (
        <div>
            <Helmet>
                <title>Add Book | BoiPoka</title>
            </Helmet>
            <AddBookForm
                handleSubmit={handleSubmit}
                imagePreview={imagePreview}
                handleImage={handleImage}
                imageText={imageText}
                loading={loading}
            ></AddBookForm>
        </div>
    );
};

export default AddBook;