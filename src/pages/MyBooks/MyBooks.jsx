
import { Helmet } from "react-helmet-async";
import Container from "../../components/Shared/Container";
import useMyBooks from "../../hooks/useMyBooks";
import MyBooksTab from "./MyBooksTab";


const MyBooks = () => {
    const [myBooks] = useMyBooks();
    console.log(myBooks);
    return (
        <Container>
            <Helmet>
                <title>My Books | BoiPoka</title>
            </Helmet>
            <div className="pt-24 md:pt-32 xl:pt-36">
                <MyBooksTab></MyBooksTab>
            </div>
        </Container>
    );
};

export default MyBooks;