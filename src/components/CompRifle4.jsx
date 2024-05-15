import React, { useState } from "react";
import RIFLEPIC from '../assets/guns/rifles/sig sauer 522.jpg'

const CompRifle4 = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img src={RIFLEPIC} alt="Background 380" className="w-full"/>
            </div>

            <div className="md:hidden">
                <img src={RIFLEPIC} alt="Background 380" className="w-full"/>
                <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                    <img src={RIFLEPIC} alt="Background 380" className="w-full"/>
                    <img src={RIFLEPIC} alt="Background 380" className="w-full"/>
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
                        SIG SAUER 522 TARGET
                    </h1>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-xl leading-4 text-black text-bold">₱86,500.00</p>
                </div>
                <div>
                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">The SIG Sauer 522 LR is a .22 LR semi-automatic, blowback operated rifle. It is patterned after the SIG 55x series rifles that fire 5.56x45mm centerfire cartridges. The 522 fires .22 LR ammunition and serves as a training rifle for its larger counterparts due to mostly identical controls and features. It differs from its centerfire counterpart in a number of ways. The 522 series has no adjustable gas block as the 55x series does. Instead, a mock gas block is installed. SIG refers to this as a storage container. Instead of 30-round magazines, the 522 series accepts 10-round or 25-round magazines that are manufactured by Black Dog Machine and re-branded for distribution with the SIG 522. Black Dog also produces a 50 round drum magazine for the 522.</p>
                    <p className="text-base leading-4 mt-7 text-gray-600"><span className="font-bold">Category:</span> Firearms</p>
                    <p className="text-base leading-4 mt-4 text-gray-600"><span className="font-bold">SKU:</span> 000699</p>
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

export default CompRifle4;
