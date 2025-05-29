import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../api/utils";
import UpdateBookForm from "../../components/Form/UpdateBookForm";

const UpdateBook = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [imagePreview, setImagePreview] = useState();
    const [imageText, setImageText] = useState('Upload Image');


    const { data: book, refetch } = useQuery({
        queryKey: ['book', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/book/${id}`);
            return data
        }
    })
    console.log(book);

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
            let image_url = book?.image;
            if (image) {
                // upload image on imgBB
                image_url = await imageUpload(image);
            }
            console.log(image_url, 'image');
            const bookData = {
                title,
                author,
                category,
                image: image_url,
                fileUrl: book?.fileUrl,
                uploader: {
                    name: user?.displayName,
                    email: user?.email
                },
            }
            console.log(bookData, 'bookData');

            // formData object
            const formData = new FormData();
            if (pdfFile) {
                formData.append('pdf', pdfFile);
                console.log(pdfFile);
            }
            formData.append('bookData', JSON.stringify(bookData));
            console.log(formData);

            const res = await axios.patch(`${import.meta.env.VITE_API_URL}/book/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            console.log(res, 'res');

            if (res.data.modifiedCount > 0) {
                toast.success('Book updated successfully!');
                navigate('/manage-books');
                refetch();
            } else {
                toast('Nothing was changed.');
            }
        } catch (err) {
            toast.error('Update failed: ' + (err.response?.data?.error || err.message));
            setLoading(false);
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    // handle image change 
    const handleImage = image => {
        if (!image) return;
        setImagePreview(URL.createObjectURL(image));
        setImageText(image.name);
    }

    return (
        <div>
            <Helmet>
                <title>Update Book | BoiPoka</title>
            </Helmet>
            <UpdateBookForm
                book={book}
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