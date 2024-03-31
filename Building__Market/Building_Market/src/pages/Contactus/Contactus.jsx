import React from "react";
import Layout from "../../components/layout/Layout";
import backimg from "../../assets/backimg.jpeg";
function Contactus()
{
    return<>
    <Layout>
    <div className="flex flex-col bg-white">
      <div className="flex overflow-hidden relative flex-col items-center pt-7 pr-14 pb-12 pl-5 w-full min-h-[579px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
             src={backimg}
          className="object-cover absolute inset-0 size-full"
        /> 
        <div className="flex relative gap-5 justify-between items-center self-stretch w-full max-md:flex-wrap max-md:max-w-full">
        </div>
        <div className="relative mt-28 text-5xl font-bold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Let’s Make Something awesome together.
        </div>
        <div className="relative mt-2 mb-40 text-2xl  text-white max-md:mb-10 max-md:max-w-full content-center	" >
          Drop us a line, or give us a heads up if you’re interested in visiting
          us.
        </div>
      </div>
      <div className="self-center mt-16 text-5xl font-medium text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Get in touch
      </div>
      <div className="self-center mt-10 text-2xl text-black max-md:max-w-full">
        Let’s talk about your Project
      </div>
      <div className="flex flex-col px-20 mt-12 w-full text-4xl text-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between pr-20 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900" >First name</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" placeholder="    Enter Your First Name" className=" block w-[500px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </input>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last-name" placeholder="    Enter Your Last Name:" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </input>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" placeholder="    Enter Your Email:" className="block w-[500px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </input>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
          <div className="mt-2">
            <select id="country" name="country" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option>India</option>
              <option>Pakistan</option>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
          <div className="mt-2">
            <input type="text" name="street-address" id="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </input>
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
          <div className="mt-2">
            <input type="text" name="city" id="city"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </input>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
          <div className="mt-2">
            <input type="text" name="region" id="region" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
         </input>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label  className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
          <div className="mt-2">
            <input type="text" placeholder="" name="postal-code" id="postal-code"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </input>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
        <hr></hr>
    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Clear</button>
    <button type="submit" className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
  </div>

      <div className="mt-10 space-y-10">
        
        
      </div>
      
      </div>
</div>

    </Layout>
    </>
}

export default Contactus;