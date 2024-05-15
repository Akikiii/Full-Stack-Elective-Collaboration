import React, { useState } from "react";
import BG380 from '../assets/guns/rifles/anschutz msr rx22.jpg'

const CompRifle1 = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img src={BG380} alt="Background 380" className="w-full"/>
            </div>

            <div className="md:hidden">
                <img src={BG380} alt="Background 380" className="w-full"/>
                <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                    <img src={BG380} alt="Background 380" className="w-full"/>
                    <img src={BG380} alt="Background 380" className="w-full"/>
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
                        ANSCHUTZ MSR RX22 BLACK HAWK
                    </h1>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-xl leading-4 text-black text-bold">₱80,500.00</p>
                </div>
                <div>
                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">Anschutz target rifles are known worldwide for their accuracy, precise construction and unmatched shooting performance. The excellent characteristics that allowed Anschutz sporting equipment to dominate national and international competitions such as the biathlon since 1856 can also be found in the new Anschutz semi-automatic precision rifle with a .22 l.r. caliber. The MSR RX 22 is a joint development by three German companies: Anschutz, GSG and ESC Ulm.</p>
                    <p className="text-base leading-4 mt-7 text-gray-600"><span className="font-bold">Category:</span> Firearms</p>
                    <p className="text-base leading-4 mt-4 text-gray-600"><span className="font-bold">SKU:</span> 000696</p>
                    <p className="text-base leading-4 mt-4 text-gray-600"><span className="font-bold">Kind:</span> Rifle</p>
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

export default CompRifle1;