import React from 'react'
import deliveryvan from '../assets/deliveryvan.svg'
import moneyback from '../assets/moneyback.svg'
import servicehours from '../assets/servicehours.svg'

export const Features = () => {
  return (
    <>
    <div class="container mx-auto w-screen py-16">
     <div class="w-10/12 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto justify-center">
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src={moneyback} alt="Delivery" class="w-12 h-12 object-contain"/>
                <div>
                    <h4 class="font-medium capitalize text-lg">Latest Prices and Discounts</h4>
                    <p class="text-gray-500 text-sm">30 days money returs</p>
                </div>
            </div>
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src={servicehours} alt="Delivery" class="w-12 h-12 object-contain"/>
                <div>
                    <h4 class="font-medium capitalize text-lg ">24/7 Live Inventory</h4>
                    <p class="text-gray-500 text-sm">Continuous stock tracking</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default Features