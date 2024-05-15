import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Productplaceholder from '../assets/placeholder.svg'

import Header from '../components/Header'
import Footer from '../components/Footer'
import glock18 from '../assets/glock18.png'
import test from '../assets/test.png'

export default function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filtered products with all products
      })
      .catch(error => {
        setError(error);
        console.error('There was an error fetching the product data!', error);
      });
  }, []);

  useEffect(() => {
    applyFilters();
  }, [products, selectedCheckbox, minPrice, maxPrice, sortOption]);

  const handleCheckboxChange = (event) => {
    setSelectedCheckbox(event.target.id);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSubmit = () => {
    applyFilters();
  };

  const applyFilters = () => {
    let filtered = products;

    if (selectedCheckbox && selectedCheckbox !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCheckbox);
    }

    if (minPrice) {
      filtered = filtered.filter(product => product.price >= parseFloat(minPrice));
    }

    if (maxPrice) {
      filtered = filtered.filter(product => product.price <= parseFloat(maxPrice));
    }

    switch (sortOption) {
      case 'price-low-to-high':
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-to-low':
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case 'latest':
        filtered = filtered.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
        break;
      default:
        break;
    }
    console.log(filtered);
    

    setFilteredProducts(filtered);
  };
  return (
    <>
    <Header/>
    <div className='h-screen w-full bg-gray-50 px-auto py-36'>
        <div className="container flex mx-auto px-4 py-8 gap-x-1.5	 ">
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
            <div className="divide-y divide-gray-200 space-y-5">
                <div>
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input type="checkbox" name="All" id="All" checked={selectedCheckbox === 'All'} onChange={handleCheckboxChange}
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="All" className="text-gray-600 ml-3 cusror-pointer">All</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="Pistol" id="Pistol" checked={selectedCheckbox === 'Pistol'} onChange={handleCheckboxChange}
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="Pistol" className="text-gray-600 ml-3 cusror-pointer">Pistol</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="Shotgun" id="Shotgun" checked={selectedCheckbox === 'Shotgun'} onChange={handleCheckboxChange}
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="Shotgun" className="text-gray-600 ml-3 cusror-pointer">Shotgun</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="Rifles" id="Rifles" checked={selectedCheckbox === 'Rifles'} onChange={handleCheckboxChange}
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="Rifles" className="text-gray-600 ml-3 cusror-pointer">Rifles</label>
                        </div>                        
                    </div>
                </div>
                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                    <div className="mt-4 flex items-center">
                        <input type="text" name="min" id="min" value={minPrice} onChange={handleMinPriceChange}
                            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="min"/>
                        <span className="mx-3 text-gray-500">-</span>
                        <input type="text" name="max" id="max" value={maxPrice} onChange={handleMaxPriceChange}
                            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="max"/>
                    </div>
                </div>
                </div>

        </div>
        <div class="w-full">
            <div class="flex items-center mb-4">
                <select name="sort" id="sort" value={sortOption} onChange={handleSortChange}
                    class="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
                    <option value="">Default sorting</option>
                    <option value="price-low-to-high">Price low to high</option>
                    <option value="price-high-to-low">Price high to low</option>
                    <option value="latest">Latest product</option>
                </select>
            </div>
            <div class="grid md:grid-cols-3 grid-cols-2 gap-16">
                              {error ? (
                    <div className="col-span-2 text-red-500">
                      Error: {error.message}
                    </div>
                  ) : (
                    filteredProducts.map(product => (
                      <div key={product.id} class="bg-white shadow rounded overflow-hidden group w-[400px]">
                        <div class=" flex justify-center items-center">
                          <img src={`src/assets/guns/${product.gunModel}.jpg`} alt="product 1" className='h-[225px] object-contain' />
                        </div>  
                        <div class="pt-4 pb-3 px-4">
                            <div className={`inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${product.quantity === 0 ? 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80' : 'border-primary bg-primary text-primary-foreground hover:bg-primary/80'} mb-2`}>
                                {product.quantity === 0 ? 'Out of Stock' : 'In Stock'}
                              </div>
                            <a href="#">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{product.gunModel}</h4>
                            </a>
                            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">${product.price}</p>
                                
                            </div>
                        </div>
                        <a href="#"
                            class="block w-full py-1 text-center text-white bg-red-600 border border-primary rounded-b hover:bg-red-900	 hover:text-primary transition">View Item</a>
                    </div>
                      

                      
                    ))
                  )}
                
            </div>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  );
}
