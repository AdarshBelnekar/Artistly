import React from 'react'

const SignUp = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
   <div className="flex flex-col text-center w-full mb-12 px-4">
  <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
    Discover & Book Top Performing Artists with Ease
  </h1>
  <p className="max-w-2xl mx-auto text-base text-gray-600 leading-relaxed">
    Artistly connects event planners with talented singers, dancers, DJs, and speakers — all in one platform. Find the perfect act for your event and book them instantly with confidence.
  </p>
</div>

    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div className="relative flex-grow w-full">
        <label name="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative flex-grow w-full">
        <label name="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">SignIn</button>
    </div>
  </div>
</section>
    </div>
  )
}

export default SignUp
