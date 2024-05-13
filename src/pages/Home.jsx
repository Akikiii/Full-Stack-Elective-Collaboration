import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Features from '../components/Features';
import ScrollbarHorizontal from '../components/ScrollbarHorizontal';
import offer from '../assets/offer.jpg';
import category1 from '../assets/category1.jpg';



export class  Home extends Component {
  render() {
  

    return (
      <>
     
        <Header/>
        <div className="bg-[#ffffff] w-full h-full">
          <Banner/>
          <div className="w-full">
            <Features/>
          </div>
          <div class="container py-16">
            <h2 class="container text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
            <div class="grid grid-cols-3 gap-3">
              <div class="relative rounded-sm overflow-hidden group">
                  <img src={category1} alt="category 1" class="w-full"/>
                  <a href="#"
                      class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Rifles</a>
              </div>
              <div class="relative rounded-sm overflow-hidden group">
                  <img src={category1} alt="category 1" class="w-full"/>
                  <a href="#"
                      class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Rifles</a>
              </div>
              <div class="relative rounded-sm overflow-hidden group">
                  <img src={category1} alt="category 1" class="w-full"/>
                  <a href="#"
                      class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Rifles</a>
              </div>
            </div>
          </div>
          <div class="container pb-16">
            <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
            <ScrollbarHorizontal/>
          </div>
          
          
          <div class="container pb-16 justify-center w-full">
              <a href="#">
                  <img src={offer} alt="ads" class="w-full"/>
              </a>
          </div>



          
          
        </div>
        
        <Footer/>
      </>
      
    )
  }
}

export default Home