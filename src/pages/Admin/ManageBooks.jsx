import { Helmet } from "react-helmet-async";
import Container from "../../components/Shared/Container";
import BookDataRow from "../../components/TableRows/BookDataRow";
import useBooks from "../../hooks/useBooks";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageBooks = () => {
    const [books, refetch] = useBooks();
    const axiosSecure = useAxiosSecure();

    const { mutateAsync } = useMutation({
        mutationFn: async (id) => {
            const { data } = await axiosSecure.delete(`/book/${id}`);
            return data;
        },
        onSuccess: () => {
            refetch();
            toast.success('Deleted Successfully!');
        }
    })

    // handle delete
    const handleDelete = async id => {
        try {
            await mutateAsync(id);
        }
        catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <>
            <Helmet>
                <title>My Listings</title>
            </Helmet>

            <div className='container mx-auto px-4 sm:px-8 lg:px-12 pt-14 md:pt-16 xl:pt-20'>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th scope='col'
                                            className='px-5 xl:py-3 bg-gray-50  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'>
                                            Image
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-gray-50  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-gray-50  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Author
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-gray-50  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Category
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-gray-50  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Delete
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-gray-50 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Update
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Book row data */}
                                    {
                                        books.map(book => <BookDataRow
                                            key={book._id}
                                            book={book}
                                            handleDelete={handleDelete}
                                        ></BookDataRow>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageBooks;