import React from 'react'
import bannerbg from '../assets/bannerbg.png'
import Button from '../Btn.jsx' 

export const Banner = () => {
  return (
    <div className ="bg-cover bg-no-repeat bg-center py-36 bg-black bg-opacity-40" style={{backgroundImage: `url(${bannerbg})`}}>
              <div className ="mx-auto container">
                  <h1 className ="text-6xl text-white font-black mb-4 capitalize">
                      best collection for Gun Lovers 
                  </h1>
                  <p className="text-[#cbd5e1] py-6">Absenot Arsenal: Precision, Protection, Perfection.</p>
                  <Button>
                      Shop Now
                  </Button>
              </div>
    </div>
  )
}

export default Banner
