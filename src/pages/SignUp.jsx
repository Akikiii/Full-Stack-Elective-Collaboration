import React, { useState, useEffect } from "react";

const SignUp = () => {

    const [usernameTaken, setUsernameTaken] = useState(false);


    function handleUsernameInput(e){
    }

    function handlePasswordInput(e){
    }

    function handlePasswordInput2(e){
    }

    function submitForm(e){
    }

    function submitError(e){
    }


  return (
    <section className="transition-all ease-in bg-gray-50 w-full h-full  ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className={` w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 `}>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">Create an Account</h1>
            <form onSubmit={submitForm} className="space-y-4 md:space-y-6">

              {/* Username */}
              <div>
                <div className="flex flex-row gap-2">
                <label for="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                </div>
                <input onChange={handleUsernameInput} type="username" name="username" id="username"
                  placeholder="Your username" />
                  {usernameTaken && ( 
                  <span className="fixed text-sm font-sm text-red-500">
                    Username is already taken
                  </span>
                  )}
              </div>
              
              {/* First Password */}
              <div>
                <div className="flex flex-row justify-start gap-2">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                </div>
                <input type="password" name="password" id="password" placeholder="••••••••"/>
              </div>

              {/* Second Password */}
              <div>
                <div className="flex flex-row justify-start gap-2">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Confirm password
                </label>
                </div>
                    <input onChange={handlePasswordInput2} type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" />
                </div>


              {/* First Name */}
                <div>
                    <div className="flex flex-row justify-start gap-2">
                    <label for="first-name" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                    </div>
                    <input type="text" name="first-name" id="first-name" placeholder="Your first name" />
                </div>
              {/* Last Name */}
                <div>
                    <div className="flex flex-row justify-start gap-2">
                    <label for="last-name" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                    </div>
                    <input type="text" name="last-name" id="last-name" placeholder="Your last name" />
                </div>
              {/* Email */}
                <div>
                    <div className="flex flex-row justify-start gap-2">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    </div>
                    <input type="email" name="email" id="email" placeholder="Your email" />
                </div>
              {/* Phone Number */}
                <div>
                    <div className="flex flex-row justify-start gap-2">
                    <label for="phone-number" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                    </div>
                    <input type="tel" name="phone-number" id="phone-number" placeholder="Your phone number" />
                </div>
              {/* Address */}
                <div>
                    <div className="flex flex-row justify-start gap-2">
                    <label for="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                    </div>
                    <input type="text" name="address" id="address" placeholder="Your address" />
                </div>
              {/* City */}
                <div>
                    <div className="flex flex-row justify-start gap-2">
                    <label for="city" className="block mb-2 text-sm font-medium text-gray-900">City</label>
                    </div>
                    <input type="text" name="city" id="city" placeholder="Your city" />
                </div>
              {/* State */}
                <div>
                    <div className="flex flex-row justify-start gap-2">
                    <label for="state" className="block mb-2 text-sm font-medium text-gray-900">State</label>
                    </div>
                    <input type="text" name="state" id="state" placeholder="Your state" />
                </div>
              {/* Zip Code */}
                <div>
                    <div className="flex flex-row justify-start gap-2">
                    <label for="zip-code" className="block mb-2 text-sm font-medium text-gray-900">Zip Code</label>
                    </div>
                    <input type="text" name="zip-code" id="zip-code" placeholder="Your zip code" />
                </div>                      
              {/* Terms and conditions */}
              <div className="flex justify-center items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required/>
                </div>
                <div className=" ml-3 text-sm">
                  <label for="terms" className="font-light text-gray-500">I accept the{" "}
                    <a className="font-medium text-blue-400 hover:underline" href="Home">Terms and Conditions</a>
                  </label>
                </div>
              </div>
              
              {/* Submit */}
              <button type="submit" className={`${submitError === true ? "animate-wiggle" : ""} w-full  text-gray-700 bg-gray-200 hover:bg-gray-300 hover:text-gray-50 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
                Create an account
              </button>
              {/* ${submitError === true ? "animate-bounce2 bg-red-500 hover:bg-red-500" : ""} */}

              {/* Already have an account */}
              <p className="flex justify-center text-sm font-light text-gray-500">
                Already have an account? &nbsp;
              </p>


            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp