import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import gun1 from '../assets/guns/pistols/m&p bodyguard 380.jpg';
import gun2 from '../assets/guns/pistols/micro amethyst.jpg';
import knive1 from '../assets/accessories/knives/flash2.jpg';
import optic1 from '../assets/accessories/optics/optics 3.jpg';
import ammu1 from '../assets/ammunition/ammu1.jpg';



export const ScrollbarHorizontal = () => {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 200;
    }
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 200;
    }

    return (
        
        <>
        <div className="relative flex items-center">
            <MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideLeft} size={40}/>

            <div id='slider' className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide flex flex-row	 space-x-2 ">
                
                <div className="flex space-x-4">
                    <div className="bg-white shadow rounded overflow-hidden group w-[400px] flex flex-col">
                        <div className="relative flex-1 flex justify-center items-center">
                            <img src={gun1} alt="product 1" className="h-full transform transition-transform duration-300 ease-in-out hover:scale-110" />
                        </div>

                        <div className="pt-4 pb-3 px-4 flex-1">
                            <a href="#">
                                <h3 className="uppercase font-medium text-m mb-2 text-gray-800 hover:text-primary transition">M&P BODYGUARD 380 - CRIMSON TRACE</h3>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">₱66,500.00</p>
                            </div>
                        </div>

                        <a href="#" className="block w-full py-3 text-center text-white bg-red-600 border border-primary rounded-b hover:bg-red-900 hover:text-primary transition">View Item</a>
                    </div>

                    <div className="bg-white shadow rounded overflow-hidden group w-[400px] flex flex-col">
                        <div className="relative flex-1 flex justify-center items-center">
                            <img src={gun2} alt="product 1" className="h-full transform transition-transform duration-300 ease-in-out hover:scale-110" />
                        </div>

                        <div className="pt-4 pb-3 px-4 flex-1">
                            <a href="#">
                                <h4 className="uppercase font-medium text-l mb-2 text-gray-800 hover:text-primary transition">MICRO AMETHYST</h4>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">₱118,500.00</p>
                            </div>
                        </div>

                        <a href="#" className="block w-full py-3 text-center text-white bg-red-600 border border-primary rounded-b hover:bg-red-900 hover:text-primary transition">View Item</a>
                    </div>

                    <div className="bg-white shadow rounded overflow-hidden group w-[400px] flex flex-col">
                        <div className="relative flex-1 flex justify-center items-center">
                            <img src={optic1} alt="product 1" className="h-full transform transition-transform duration-300 ease-in-out hover:scale-110" />
                        </div>

                        <div className="pt-4 pb-3 px-4 flex-1">
                            <a href="#">
                                <h4 className="uppercase font-medium text-l mb-2 text-gray-800 hover:text-primary transition">BRAVO4 4X30MM</h4>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">₱125,000.00</p>
                            </div>
                        </div>

                        <a href="#" className="block w-full py-3 text-center text-white bg-red-600 border border-primary rounded-b hover:bg-red-900 hover:text-primary transition">View Item</a>
                    </div>

                    <div className="bg-white shadow rounded overflow-hidden group w-[400px] flex flex-col">
                        <div className="relative flex-1 flex justify-center items-center">
                            <img src={knive1} alt="product 1" className="h-full transform transition-transform duration-300 ease-in-out hover:scale-110" />
                        </div>

                        <div className="pt-4 pb-3 px-4 flex-1">
                            <a href="#">
                                <h4 className="uppercase font-medium text-l mb-2 text-gray-800 hover:text-primary transition">FLASH II - TANTO, SATIN</h4>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">₱5,900.00</p>
                            </div>
                        </div>

                        <a href="#" className="block w-full py-3 text-center text-white bg-red-600 border border-primary rounded-b hover:bg-red-900 hover:text-primary transition">View Item</a>
                    </div>

                    <div className="bg-white shadow rounded overflow-hidden group w-[400px] flex flex-col">
                        <div className="relative flex-1 flex justify-center items-center">
                            <img src={ammu1} alt="product 1" className="h-full transform transition-transform duration-300 ease-in-out hover:scale-110" />
                        </div>

                        <div className="pt-4 pb-3 px-4 flex-1">
                            <a href="#">
                                <h4 className="uppercase font-medium text-l mb-2 text-gray-800 hover:text-primary transition">HORNADY 9MM 115GR. FTX CRITICAL DEFENSE</h4>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">₱95.00</p>
                            </div>
                        </div>

                        <a href="#" className="block w-full py-3 text-center text-white bg-red-600 border border-primary rounded-b hover:bg-red-900 hover:text-primary transition">View Item</a>
                    </div>

                </div>


            </div>

            <MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight} size={40}/>

        </div>
        </>
    )
}

export default ScrollbarHorizontal