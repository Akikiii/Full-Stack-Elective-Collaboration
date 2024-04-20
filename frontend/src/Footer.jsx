import {FaGithub, FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa'

function Footer(){
    return(
        <footer className="relative">
            <div className="absolute top-0 left-0 w-full overflow-hidden bg-[#060505]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="relative block fill-[#b3735b]"></path>
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
                <div className='mt-20'>
                    <div className='h-full flex items-center justify-center'>
                        <form className='w-96 relative' action="">
                            <input className='w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none focus:border border-pink-800' type="email" />
                            <button className='bg-[#BB0404] hover:bg-[#5E0202] px-8 py-2 rounded-full text-white absolute top-0 right-0 duration-500' type='Submit'>Submit</button>
                        </form>
                    </div>
                </div>
                <h6 className='mt-3 mb-5 text-white text-center'>Absenot Arsenal &copy; {new Date().getFullYear()} | Borja, Jose, Trazo</h6>
            </div> 
        </footer>
        
    );
}

export default Footer