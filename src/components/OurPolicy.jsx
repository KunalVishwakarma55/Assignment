import React from 'react'
import exchange_icon from "../assets/exchange_icon.png"
import quality_icon from "../assets/quality_icon.png"
import support_img from "../assets/support_img.png"

function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs md:text-base text-gray-700'>

      {/* Vehicle Comparison */}
      <div>
        <img src={exchange_icon} alt="" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>Vehicle Comparison</p>
        <p className='text-gray-400'>
          Easily compare multiple vehicles with price and features.
        </p>
      </div>

      {/* EMI & Profit Tools */}
      <div>
        <img src={quality_icon} alt="" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>EMI & Profit Calculators</p>
        <p className='text-gray-400'>
          Calculate car loan EMI and estimate your profit instantly.
        </p>
      </div>

      {/* Dealer Support */}
      <div>
        <img src={support_img} alt="" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>Dealer Locator Support</p>
        <p className='text-gray-400'>
          Find nearby authorized dealers with contact details.
        </p>
      </div>
    </div>
  )
}

export default OurPolicy