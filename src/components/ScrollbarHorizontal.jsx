import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import gun1 from '../assets/glock.png';


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
            <div id='slider' class="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            <div class="bg-white shadow rounded overflow-hidden group w-[400px]">
                <div class="relative">
                    <img src={gun1} alt="product 1" class="w-full"/>
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <a href="#"
                            class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="view product">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                        <a href="#"
                            class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="add to wishlist">
                            <i class="fa-solid fa-heart"></i>
                        </a>
                    </div>
                </div>
                <div class="pt-4 pb-3 px-4">
                    <a href="#">
                        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">pew</h4>
                    </a>
                    <div class="flex items-baseline mb-1 space-x-2">
                        <p class="text-xl text-primary font-semibold">$45.00</p>
                        <p class="text-sm text-gray-400 line-through">$55.90</p>
                    </div>
                </div>
                <a href="#"
                    class="block w-full py-1 text-center text-white bg-red-600 border border-primary rounded-b hover:bg-red-900	 hover:text-primary transition">Add
                    to cart</a>
            </div>

            </div>
            <MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight} size={40}/>

        </div>
    </>
  )
}
export default ScrollbarHorizontal