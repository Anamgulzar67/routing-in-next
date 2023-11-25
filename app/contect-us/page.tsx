import React from 'react'
import Link from 'next/link'
const ContectUs = () => {
  return (
    <main className="flex min-h-screen flex-col items-center   m-auto p-24 gap-5">
    
              <div className="grid gap-16 sm:grid-cols-1 my-28 md:grid-cols-2 lg:grid-cols-3">
                <div className=" shadow-lg shadow-gray-500 hover:scale-105  border-solid    text-center py-20 pt-2 px-5 rounded-2xl ">
                  <h1 className="text-xl font-bold py-8">Phone:</h1>
                  <h2 className="text-xl font-bold py-4">03046453405</h2>
                </div>
                <div className=" shadow-lg shadow-gray-500 hover:scale-105  border-solid   text-center py-20 pt-2 px-5 rounded-2xl ">
                  <h1 className="text-xl font-bold py-8">Email:</h1>
                  <h2 className="text-xl font-bold py-4">
                    anamgulzar67@gmail.com
                  </h2>
                </div>
                <div className=" shadow-lg shadow-gray-500 hover:scale-105  border-solid   text-center py-20 pt-2 px-5 rounded-2xl ">
                  <h1 className="text-xl font-bold py-8">LinkedIn:</h1>
                  <h2 className=" font-bold py-4">
                    <Link href="https://www.linkedin.com/feed/">
                    www.linkedin.com/in/anam-gulzar-techie


                    </Link>
                  </h2>
                </div>
              </div>
            
    
    
    
  </main>
  )
}

export default ContectUs


