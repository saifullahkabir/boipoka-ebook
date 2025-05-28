import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import AddBookForm from "../../components/Form/AddBookForm";
import { imageUpload } from "../../api/utils";
import UpdateBookForm from "../../components/Form/UpdateBookForm";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const UpdateBook = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [imagePreview, setImagePreview] = useState();
    const [imageText, setImageText] = useState('Upload Image');


    const { data: book } = useQuery({
        queryKey: ['book', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/book/${id}`);
            return data
        }
    })

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
                navigate('/manage-books')
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
                <title>Update Book | BoiPoka</title>
            </Helmet>
            <UpdateBookForm
                handleSubmit={handleSubmit}
                imagePreview={imagePreview}
                handleImage={handleImage}
                imageText={imageText}
                loading={loading}
            ></UpdateBookForm>
        </div>
    );
};

export default UpdateBook;