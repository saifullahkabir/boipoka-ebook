import { Link } from "react-router-dom";
import BookCard from "../../components/Home/BookCard";

const Home = () => {
    return (
        <div className="py-24 mx-6 lg:mx-20">
            <Link to='/add-book'
            className="mb-8 flex justify-center"
            >
            <button className="btn bg-pink-600 text-white font-bold">Add Book Page</button>
            </Link>
            <BookCard></BookCard>
        </div>
    );
};

export default Home;