import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import gun1 from '../assets/glock.png';
import gun2 from '../assets/guns/rifles/anschutz msr rx22.jpg';



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
        <div class="relative flex items-center">
            <MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideLeft} size={40}/>
            <div id='slider' class="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide flex flex-row	 space-x-2 ">
                <div class="bg-white shadow rounded overflow-hidden group w-[400px]">
                    <div class="relative">
                        <img src={gun1} alt="product 1" class="h-[225px]"/>
                    </div>
                    <div class="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Glock-18</h4>
                        </a>
                        <div class="flex items-baseline mb-1 space-x-2">
                            <p class="text-xl text-primary font-semibold">₱2,599</p>
                        </div>
                    </div>
                    <a href="#"
                        class="block w-full py-1 text-center text-white bg-red-600 border border-primary rounded-b hover:bg-red-900	 hover:text-primary transition">View Item</a>
                </div>

                <div class="bg-white shadow rounded overflow-hidden group w-[400px]">
                    <div class="relative flex justify-center items-center">
                        <img src={gun2} alt="product 1" className='h-[225px] object-contain' />
                    </div>
                    <div class="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Glock-18</h4>
                        </a>
                        <div class="flex items-baseline mb-1 space-x-2">
                            <p class="text-xl text-primary font-semibold">₱2,599</p>
                        </div>
                    </div>
                    <a href="#"
                        class="block w-full py-1 text-center text-white bg-red-600 border border-primary rounded-b hover:bg-red-900	 hover:text-primary transition">View Item</a>
                </div>
                
           

            </div>
            <MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight} size={40}/>

        </div>
    </>
  )
}
export default ScrollbarHorizontal