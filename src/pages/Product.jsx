import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Productplaceholder from '../assets/placeholder.svg';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        setError(error);
        console.error('There was an error fetching the product data!', error);
      });
  }, []);

  return (
    <div className='bg-gray-50 h-screen p-3 sm:p-5'>
      <div className="container mx-auto px-4 py-8 bg-gray-50">
        <div className="grid grid-cols-4 gap-8">
          <aside className="col-span-1 space-y-6">
            <section aria-labelledby="categories-heading">
              <h2 id="categories-heading" className="text-lg font-semibold">
                Categories
              </h2>
              <nav className="mt-2 space-y-1">
                <a className="block" href="#" rel="ugc">All</a>
                <a className="block" href="#" rel="ugc">Firearm</a>
                <a className="block" href="#" rel="ugc">Accessories</a>
                <a className="block" href="#" rel="ugc">Ammunition</a>
              </nav>
            </section>
            <section aria-labelledby="filters-heading">
              <h2 id="filters-heading" className="text-lg font-semibold">Filters</h2>
              <div className="mt-2 space-y-4">
                <div>
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="brand">Brand</label>
                  <button type="button" role="combobox" aria-controls="radix-:r1:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-htmlForeground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="brand">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 opacity-50" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-htmlForeground hover:bg-primary/90 h-10 px-4 py-2 w-full">SEARCH</button>
              </div>
            </section>
          </aside>
          <div className="col-span-3">
            <div className="flex justify-between items-center mb-6">
              <button type="button" role="combobox" aria-controls="radix-:r2:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="sorting">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 opacity-50" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div className="flex border rounded overflow-hidden">
                <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 outline-none pl-4" placeholder="Search Products..." type="search" />
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 border-l">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {error ? (
                <div className="col-span-2 text-red-500">
                  Error: {error.message}
                </div>
              ) : (
                products.map(product => (
                  <div key={product.id} className="rounded-lg border text-card-foreground shadow-sm bg-white px-6 py-8 mx-auto lg:py-0">
                    <div className="p-6">
                      <div className={`inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${product.quantity === 0 ? 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80' : 'border-primary bg-primary text-primary-foreground hover:bg-primary/80'} mb-2`}>
                        {product.quantity === 0 ? 'Out of Stock' : 'In Stock'}
                      </div>
                      <img alt="Product" className="w-full h-auto mb-4" src={Productplaceholder} width="150" height="150" />
                      <h3 className="text-lg font-semibold mb-1">{product.gunModel}</h3>
                      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                      <p className="text-lg font-semibold">${product.price}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
