import { Link } from "react-router-dom";
import BookCard from "../../components/Home/BookCard";
import Banner from "../../components/Home/Banner/Banner";
import Books from "./Books";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="xl:pt-32 md:pt-28 pt-24 xl:space-y-20 lg:space-y-14 md:space-y-12 space-y-10">
            <Helmet>
                <title>Home | BoiPoka</title>
            </Helmet>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;