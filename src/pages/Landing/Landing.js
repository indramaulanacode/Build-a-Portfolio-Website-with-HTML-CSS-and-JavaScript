import React from 'react'

const Landing = () => {
  return (
    <div class="relative  overflow-hidden">
      
    <div className='bg-cover bg-center bg-cover absolute inset-0 bg-blue-600'>
          {/* <img src='/Img/Start.png' alt='image' class="object-cover object-center w-full h-full"/> */}
          
    </div>

    <div className='flex relative z-10 justify-center items-center m-20'>

      <ul className='text-center text-white '>

        <h1 className='pt-44 text-center font-bold text-5xl m-24'>Brind Your Solution Business With Us
        </h1>
        <p1>Our team of experienced professionals works closely with you to ensure that your vision becomes a reality. Whether you’re looking to build a powerful online presence, optimize your website for better performance, or implement marketing strategies that generate leads, [Your Business Name] is your trusted partner. </p1>
        </ul>  
    </div>

      <div class="flex relative z-10 justify-center items-center my-20">
        
        <form class="max-w-md mx-auto w-full">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-white rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Solutions" required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>

    </div>

  
    
    </div>

  )
}

export default Landing