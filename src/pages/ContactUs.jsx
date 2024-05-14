import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const ContactUs = () => {
    const scrollToBottom = () => {
      const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      window.scrollTo({ top: scrollHeight, behavior: "smooth" });
    };
  return (
    <>
    <Header/>
        <div class="bg-white w-full h-full">
            <div class="container mx-auto py-36 px-4 sm:px-6 lg:px-8">
            

      


      <div class="grid grid-cols-3 gap-8">
                <div class="max-w-lg">
                    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
                    <p class="mt-4 text-gray-600 text-lg">
                    We're here to help! Whether you have a question, feedback, or need technical assistance, don't hesitate to reach out. You can contact us through the following methods:
                    </p>
                    <ul class="list-disc mt-4 ml-4">
                    <li>Email: ArsenalForHire@Arse.net</li>
                    <li>Phone: +63 916 239 4875</li>
                    <li>Visit Us: Our office is located at Ateneo de Davao University Roxas Avenue, 8016 Davao City
                    Philippines Under Finnster Building.  </li>
                    </ul>
                </div>


                <div class="max-w-lg text-center">
              <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Submit a Concern</h2>
              <p class="mt-4 text-gray-600 text-lg">
                Have you encountered a problem while using our website? This is the place to report any technical difficulties, bugs, or errors you might be facing.
              </p>
              <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={scrollToBottom}>
                Report Issue
              </button>
            </div>


                    <div class="max-w-lg">
                    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Live chat with Tech</h2>
                    <p class="mt-4 text-gray-600 text-lg">
                    Need immediate assistance? Our friendly tech support team is here to help!
                    Connect with a representative through our live chat feature and get real-time assistance with your website-related questions or problems.
                        </p>
                    </div>
                </div>
            </div>
    </div>

    <Footer/>
    </>
  )
}
export default ContactUs
