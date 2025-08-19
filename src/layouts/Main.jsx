import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import ScrollToTop from "../components/Shared/ScrollToTop";


const Main = () => {
    return (
        <div>
            <ScrollToTop />
            <Navbar></Navbar>
            <div className=' min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;