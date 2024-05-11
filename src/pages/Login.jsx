import React, { useState, useEffect } from "react";


const Login = () => {
  const [incorrectUsername, setIncorrectUsername] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  function handleChange(e){

  }

  function submitForm(e){
  }

  return (  
    <section className="transition-all ease-in bg-gray-50 w-full h-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-6 sm:p-8">
            <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Login to Account
            </h1>
            <form className="space-y-6" onSubmit={submitForm}>
              <div className={``}>
                <label for="username" className="block mb-2 text-sm font-medium text-gray-900">Your username</label>
                <input
                  type="text"
                  onChange={handleChange}
                  id="username"
                  className={`bg-gray-50 border ${(incorrectUsername && !value.name) ? 'border-red-500' : 'border-gray-900'} sm:text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5`}
                  placeholder="Enter username"
                />
                {incorrectUsername && <span className="fixed text-red-500 text-xs">Invalid Username!</span>}
              </div>
              <div className="">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" onChange={handleChange} id="password" placeholder="••••••••"
                  className={`bg-gray-50 border ${((invalidPassword||incorrectUsername) && value.password) ? 'border-red-500' : 'border-gray-900'} sm:text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5`}
                />
                {invalidPassword && <span className="fixed text-red-500 text-xs">Invalid Password!</span>}
              </div>
              <button type="submit"
                className={` ${incorrectUsername||invalidPassword === true ? "animate-wiggle " : ""} w-full text-gray-700 bg-gray-200 hover:bg-gray-300 hover:text-gray-50 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
              >
                Login to account
              </button>
              <p className="flex justify-center text-sm font-light text-gray-500">
                Don't have an account? &nbsp;
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login