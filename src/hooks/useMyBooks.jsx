import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyBooks = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: myBooks = [], refetch } = useQuery({
        queryKey: ['my-books', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/my-books/${user?.email}`);
            return data;
        }
    })
    return [myBooks, refetch]
};

export default useMyBooks;