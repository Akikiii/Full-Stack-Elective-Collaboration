import React, { useState } from 'react'
import gun1 from '../assets/glock.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const Shop = () => {
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);

    const handleCheckboxChange = (event) => {
        setSelectedCheckbox(event.target.name);
    };
  return (
    <>
    <Header/>
    <div className='min-h-screen w-full bg-gray-50 px-4 md:px-auto py-12 md:py-24'>
  <div className="container mx-auto flex flex-col md:flex-row gap-6">
    <div className="md:w-1/4 bg-white px-4 pb-6 shadow rounded overflow-hidden">
      <div className="divide-y divide-gray-200 space-y-5">
        <div>
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" name="All" id="All" className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
              <label htmlFor="All" className="text-gray-600 ml-3 cursor-pointer">All</label>
            </div>
            {/* Other category checkboxes */}
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
          <div className="mt-4 flex items-center">
            <input type="text" name="min" id="min" value="test"  className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm" placeholder="min"/>
            <span className="mx-3 text-gray-500">-</span>
            <input type="text" name="max" id="max" value="test"  className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm" placeholder="max"/>
          </div>
        </div>
      </div>
    </div>
    <div className="md:w-3/4">
      <div className="flex items-center mb-4">
        <select name="sort" id="sort" className="w-full md:w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
          <option value="">Default sorting</option>
          <option value="price-low-to-high">Price low to high</option>
          <option value="price-high-to-low">Price high to low</option>
          <option value="latest">Latest product</option>
        </select>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
      <div class="bg-white shadow rounded overflow-hidden group">
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
                <div class="bg-white shadow rounded overflow-hidden group">
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
                <div class="bg-white shadow rounded overflow-hidden group">
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
                <div class="bg-white shadow rounded overflow-hidden group">
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
                <div class="bg-white shadow rounded overflow-hidden group">
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
                <div class="bg-white shadow rounded overflow-hidden group">
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
                <div class="bg-white shadow rounded overflow-hidden group">
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
                <div class="bg-white shadow rounded overflow-hidden group">
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
                <div class="bg-white shadow rounded overflow-hidden group">
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
                </div><div class="bg-white shadow rounded overflow-hidden group">
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
                <div class="bg-white shadow rounded overflow-hidden group">
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
    </div>
  </div>
</div>
    <Footer/>
    </>
  )
}
export default Shop
