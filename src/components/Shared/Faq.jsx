import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Fade } from 'react-awesome-reveal';
import Container from './Container';

const Faq = () => {
    return (
        <Container>

            <div className=" pb-10 md:pb-14 xl:pb-24 ">
                <div>
                    <h2 className='text-center text-xl md:text-2xl lg:text-3xl mb-3 md:mb-5 lg:mb-8 font-semibold'>Frequently Asked Questions</h2>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 xl:p-10 rounded-2xl shadow-md">
                    <div className="flex flex-col-reverse lg:flex-row">

                        <div className='lg:w-3/4'>
                            <Fade direction='up'>
                                <div className="space-y-2 lg:space-y-4">
                                    <div className="collapse collapse-arrow join-item border-rose-500 border">
                                        <input type="radio" name="books-faq" defaultChecked />
                                        <div className="collapse-title text-base lg:text-lg xl:text-xl font-medium">
                                            How can I read a book online?
                                        </div>
                                        <div className="collapse-content">
                                            <p className='text-sm lg:text-base opacity-75'>
                                                Click on the “Read PDF” button on the book card. The PDF will open in your browser, and you can read it online instantly.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="collapse collapse-arrow join-item border-rose-500 border">
                                        <input type="radio" name="books-faq" />
                                        <div className="collapse-title text-base lg:text-lg xl:text-xl font-medium">
                                            Do I need to register to download books?
                                        </div>
                                        <div className="collapse-content">
                                            <p className='text-sm lg:text-base opacity-75'>
                                                No registration is required. Once the PDF opens in your browser, you can download it directly from there.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="collapse collapse-arrow join-item border-rose-500 border">
                                        <input type="radio" name="books-faq" />
                                        <div className="collapse-title text-base lg:text-lg xl:text-xl font-medium">
                                            Can I read multiple books at the same time?
                                        </div>
                                        <div className="collapse-content">
                                            <p className='text-sm lg:text-base opacity-75'>
                                                Yes! You can open multiple PDFs in different tabs or windows to read several books simultaneously.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>


                        </div>
                        {/* Faq Image */}
                        <div className='mx-auto w-fit my-auto'>
                            <div className='w-[280px] sm:w-[350px] md:w-[400px] xl:w-[500px]'>
                                <Fade direction='down'>
                                    <DotLottieReact
                                        src="https://lottie.host/823b599f-3d8d-4417-a1ab-81e9674c7420/caSxF7xVny.lottie"
                                        loop
                                        autoplay
                                    />
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    );
};

export default Faq;