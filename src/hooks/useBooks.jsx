import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBooks = () => {
    const axiosPublic = useAxiosPublic();

    const { data: books = [], refetch } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/books`);
            return data || [];
        }
    })

    return [books, refetch];
};

export default useBooks;