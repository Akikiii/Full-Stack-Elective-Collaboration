import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Features from '../components/Features'
import ScrollbarHorizontal from '../components/ScrollbarHorizontal'
import offer from '../assets/offer.jpg'
import category1 from '../assets/category1.jpg'
import category2 from '../assets/category2.jpg'
import category3 from '../assets/category3.jpg'



export class Home extends Component {
  
  render() {
  
    return (
      <>
      <Header/>
      <div className="bg-[#ffffff] w-full h-full pt-28">

        <Banner/>

        {/* <div className="w-full">
          <Features/>
        </div> */}

        <div className="container py-16">
          <h2 className="container text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="relative rounded-sm overflow-hidden group">
                <img src={category1} alt="category 1" className="object-cover"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Rifles</a>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src={category2} alt="category 2" className="object-cover h-full w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Accessories</a>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src={category3} alt="category 3" className="object-cover h-full w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Ammunition</a>
            </div>
          </div>
        </div>
        <div className="container pb-16">
          <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Top New Arrival</h2>
          <ScrollbarHorizontal/>
        </div>
        
        
        <div className="container pb-16 justify-center w-full">
            <a href="#">
                <img src={offer} alt="ads" className="w-full"/>
            </a>
        </div>
        
      </div>
      <Footer/>
      </>
      
    )
  }
  
}

export default Home