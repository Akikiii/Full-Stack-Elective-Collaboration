import {FaGithub, FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa'
import React, { useState } from 'react'


function Footer(){
            const [isDialogOpen, setIsDialogOpen] = useState(false);

        const handleSubmit = (event) => {
            event.preventDefault();
            setIsDialogOpen(true);
        };

        const closeDialog = () => {
            setIsDialogOpen(false);
            window.location.reload();
        };

    return(
        <footer className="relative">
            <div className="absolute top-0 left-0 w-full overflow-hidden bg-[#060505]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="relative block fill-[#ffffff]"></path>
                </svg>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20 p-20 text-[18px]">
                    <div className="flex flex-col">
                        <ul>
                            <li className="text-[22px] list-none text-[#BB0404] py-2 uppercase sheriff-font">WANNA KILL SOMEONE?</li>
                            <li className="my-4 list-none text-white">Forms</li>
                            <li className="my-4 list-none text-white">Victim Baiting Course</li>
                            <li className="my-4 list-none text-white">Social Engineering</li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <ul>
                            <li className="text-[22px] list-none text-[#BB0404] py-2 uppercase sheriff-font">FAQs</li>
                            <li className="my-4 list-none text-white">What is your name?</li>
                            <li className="my-4 list-none text-white">Taga asa ka dong?</li>
                            <li className="my-4 list-none text-white">Ambot</li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <ul>
                            <li className="text-[22px] list-none text-[#BB0404] py-2 uppercase sheriff-font">BUY A GUN</li>
                            <li className="my-4 list-none text-white">About Snipers</li>
                            <li className="my-4 list-none text-white">About Rifles</li>
                            <li className="my-4 list-none text-white">About Pistols</li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <ul>
                            <li className="text-[22px] list-none text-[#BB0404] py-2 uppercase sheriff-font">CONTACT US</li>
                            <li className="my-4 list-none text-white">Email: youremail@email.com</li>
                            <li className="my-4 list-none text-white">Phone: +639151866685</li>
                        </ul>
                        <div className='flex space-x-4'>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-all duration-150 ease-in-out transform hover:scale-150">
                                <FaGithub style={{ color: 'white' }} />
                            </a>

                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-all duration-150 ease-in-out transform hover:scale-150">
                                <FaLinkedinIn style={{ color: 'white' }} />
                            </a>

                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-all duration-150 ease-in-out transform hover:scale-150">
                                <FaTwitter style={{ color: 'white' }} />
                            </a>

                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-all duration-150 ease-in-out transform hover:scale-150">
                                <FaInstagram style={{ color: 'white' }} />
                            </a>

                        </div>
                    </div>
                </div>
                <div>
                    <section>
                                    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#BB0404]">Contact Us</h2>
                                        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                                        <form action="#" class="space-y-8" onSubmit={handleSubmit}>
                                            <div>
                                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required/>
                                            </div>
                                            <div>
                                                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                                            </div>
                                            <div class="sm:col-span-2">
                                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                            </div>
                                            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-[#BB0404]">Send message</button>
                                        </form>
                                        {isDialogOpen && (
                                                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                                                <div className="bg-white p-6 rounded-md shadow-md">
                                                    <h2 className="text-lg font-medium text-gray-900">Form Submitted Successfully</h2>
                                                    <button onClick={closeDialog} className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none">
                                                    OK
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                    </div>
                                    </section>
                </div>
                <h6 className='mt-3 mb-5 text-white text-center'>Absenot Arsenal &copy; {new Date().getFullYear()} | Borja, Jose, Trazo</h6>
            </div> 
        </footer>
        
    );
}

export default Footer