import React from 'react'
import bannerbg from '../assets/bannerbg.jpg'

export const Banner = () => {
  return (
    <div className ="bg-cover bg-no-repeat bg-center py-36" style={{backgroundImage: `url(${bannerbg})`}}>
              <div className ="mx-auto container">
                  <h1 className ="text-6xl text-gray-800 font-medium mb-4 capitalize">
                      best collection for Gun Lovers 
                  </h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
                      accusantium perspiciatis, sapiente
                      magni eos dolorum ex quos dolores odio</p>
                  <div className ="mt-12">
                      <a href="#" className ="bg-primary border border-primary text-white px-8 py-3 font-medium 
                          rounded-md hover:bg-transparent hover:text-primary">Shop Now</a>
                  </div>
              </div>
    </div>
  )
}

export default Banner
