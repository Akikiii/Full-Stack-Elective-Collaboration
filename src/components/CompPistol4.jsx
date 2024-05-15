import React, { useState } from "react";
import SR9 from '../assets/guns/pistols/sr9.jpg'

const CompPistol1 = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img src={SR9} alt="Background 380" className="w-full"/>
            </div>

            <div className="md:hidden">
                <img src={SR9} alt="Background 380" className="w-full"/>
                <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                    <img src={SR9} alt="Background 380" className="w-full"/>
                    <img src={SR9} alt="Background 380" className="w-full"/>
                </div>
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600">Absenot Arsenal</p>
                    <h1
                        className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                    >
                        SR9
                    </h1>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-xl leading-4 text-black text-bold">₱55,000.00</p>
                </div>
                <div>
                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">Unique reversible backstrap (flat or arched) that allows shooters to quickly customize the size and feel of the grip, without the use of separate inserts or special tools. Integral accessory mounting rail provides space for mounting lights, lasers and other tactical accessories. Dovetailed, high-visibility 3-dot sight system features a raked-forward front sight for easy removal from the holster and an adjustable rear sight. High-performance, glass-filled nylon grip frame. Manual safety and D-shaped magazine release are easy to reach and actuate and appeal to both left- and right-handed shooters. Full-line of calibers available (9mm Luger, 40 S&W and 45 Auto). Patented loaded chamber indicator provides confirmation of a loaded or empty chamber. Ships with two 17-round flush fit magazines.</p>
                    <p className="text-base leading-4 mt-7 text-gray-600"><span className="font-bold">Category:</span> Firearms</p>
                    <p className="text-base leading-4 mt-4 text-gray-600"><span className="font-bold">SKU:</span> 000694</p>
                    <p className="text-base leading-4 mt-4 text-gray-600"><span className="font-bold">Kind:</span> Pistol</p>
                </div>
                <div>
                    <div className="border-t border-b py-4 mt-7 border-gray-200">
                        <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Shipping and returns</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompPistol1;
