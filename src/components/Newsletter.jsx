import React from 'react'

function Newsletter() {
    const onSubmitHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        
        {/* Heading */}
        <p className='text-2xl font-medium text-gray-800'>
          Get Vehicle Updates & Finance Offers
        </p>

        {/* Description */}
        <p className='text-gray-400 mt-3'>
          Subscribe to receive latest vehicle launches, price updates,
          EMI offers, dealer information, and smart buying tips directly
          in your inbox.
        </p>

        {/* Form */}
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
          <input
            className='w-full sm:flex-1 outline-none'
            type="email"
            placeholder='Enter Your Email'
          />
          
          <button
            type='submit'
            className='bg-black text-white text-xs px-10 py-4'
          >
            SUBSCRIBE
          </button>
        </form>

    </div>
  )
}

export default Newsletter