import { FaBookOpen } from "react-icons/fa";
import BannerLottie from "../../lottie/BannerLottie";
import Container from "../../Shared/Container";

const Banner = () => {
    return (
        <Container>
            <section className="bg-[#1313130D] rounded-3xl">
                <div className="md:flex 2xl:px-28 2xl:py-20 xl:px-24 xl:py-14 lg:px-20 lg:py-12 md:px-14 md:py-14 px-8 py-2">

                    <div className="md:w-4/5 lg:w-3/5 pt-4 lg:pt-10">
                        <h2 className=" text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-[#131313]">Online Books for  <br /> Smarter Minds</h2>
                        <a
                            href='#books'
                            className="mt-4 lg:mt-6 xl:mt-8 flex justify-center items-center gap-2 w-36 xl:w-48 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c]  hover:scale-105 active:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] active:from-[#be123c] active:to-[#fb7185]"
                        >
                            Read Books <FaBookOpen />
                        </a>

                    </div>

                    <div className=" mt-5 md:mt-0 w-[300px] md:w-[450px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px]">

                        <BannerLottie ></BannerLottie>
                    </div>

                </div>
            </section>
        </Container>
    );
};

export default Banner;