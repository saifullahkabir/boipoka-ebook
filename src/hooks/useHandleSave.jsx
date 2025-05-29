import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useMyBooks from "./useMyBooks";

const useHandleSave = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useMyBooks();
    const navigate = useNavigate();

    const handleSave = async (book, status) => {
        if (user && user?.email) {
            try {
                const saveData = {
                    email: user?.email,
                    bookId: book.bookId || book._id, // for tabs and home(books)
                    title: book.title,
                    image: book.image,
                    author: book.author,
                    fileUrl: book.fileUrl,
                    status: status, // 'read' or 'wishlist'
                };

                const res = await axiosSecure.put(`/my-books`, saveData);
                toast.success(res.data.message);

                // data refresh
                refetch();

            } catch (err) {
                toast.error(err.response?.data?.message || 'Something went wrong');
            }
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add books!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#158f15",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        }
    };
    return handleSave;
};

export default useHandleSave;