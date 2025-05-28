
const Footer = () => {
    return (
        <div className="pt-14 md:pt-16 lg:pt-24 2xl:pt-28 ">
            <footer className="footer sm:footer-horizontal footer-center bg-base-50 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by BoiPoka</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;