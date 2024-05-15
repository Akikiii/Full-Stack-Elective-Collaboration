import React from 'react'
import about from '../assets/about.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'

export const AboutUs = () => {
  return (

    <>
    <Header/>
    <div class="bg-white w-full h-full">
        <div class="container mx-auto py-36 px-4 sm:px-6 lg:px-8">
            <div class="text-center py-6">
                <p class=" font-sans text-8xl font-extrabold text-gray-900 sm:text-4xl">"Watch out. These boys have got a bit of an arsenal and they don't mind using it!"</p>
                
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div class="max-w-lg">
                    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                    <p class="mt-4 text-gray-600 text-lg">Welcome to Absenot Arsenal, your premier destination for firearms and tactical gear in the Philippines. Founded on a commitment to quality and customer satisfaction, Absenot Arsenal has quickly become a trusted name among firearm enthusiasts, professionals, and hobbyists alike. <br/><br/>

At Absenot Arsenal, we pride ourselves on offering a comprehensive selection of high-quality firearms, ammunition, and accessories from leading global brands. Whether you are a first-time buyer or a seasoned expert, our knowledgeable staff is here to provide personalized service and expert advice to help you find the perfect products to meet your needs.<br/><br/>

Safety and responsibility are at the core of our business. We offer certified training courses and workshops to ensure our customers are well-informed and confident in handling their firearms. Our state-of-the-art facilities provide a safe environment for both learning and practice.</p>
                </div>
                <div class="mt-12 md:mt-0">
                    <img src={about} alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
                </div>
            </div>
        </div>
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center">Our Team</h2>
        <div class="container gap-8 pb-10 flex flex-row  mx-auto ">
            
          <div class="items-center  rounded-lg shadow sm:flex bg-gray-100 ">
              <a href="#">
                  <img class="w-[300px] rounded-lg sm:rounded-none sm:rounded-l-lg" src={team1} alt="Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight">
                      <a href="#">Akii</a>
                  </h3>
                  <span>Web Dev</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Back End Programmer</p>
                  <ul class="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="https://github.com/Akikiii" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
        
                  </ul>
              </div>
          </div> 
          <div class="items-center  rounded-lg shadow sm:flex bg-gray-100">
              <a href="#">
                  <img class="w-[300px] rounded-lg sm:rounded-none sm:rounded-l-lg" src={team2} alt="Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight">
                      <a href="#">Charles Trazo</a>
                  </h3>
                  <span>Web Dev</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Front End Programmer</p>
                  <ul class="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="https://github.com/charleess15" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                  </ul>
              </div>
          </div> 
          <div class="items-center  rounded-lg shadow sm:flex bg-gray-100">
              <a href="#">
                  <img class="w-[300px] rounded-lg sm:rounded-none sm:rounded-l-lg" src={team3} alt="Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight">
                      <a href="#">Ralph Borja</a>
                  </h3>
                  <span>Web Dev</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Front End Programmer</p>
                  <ul class="flex space-x-4 sm:mt-0">
                      <li>
                          <a href="https://github.com/rjeborja" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
          </div>
    </div>
    <Footer/>
    </>
  )
}
export default AboutUs