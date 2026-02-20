import React from 'react'
import logo from "../assets/logo.webp"

function Footer() {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={logo} alt="logo" className='mb-5 w-32' />
          <p className='w-full md:w-2/3 text-gray-600'>
            Our platform provides complete vehicle solutions including model 
            comparison, dealer locator, EMI calculator, and profit estimation 
            tools. We help users make smart and informed vehicle buying decisions.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Vehicle Services</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Get In Touch</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>📞 +91 8097372325</li>
            <li>📧 kunalvishwakarma7185@gmail.com</li>
            <li>📍 Mumbai, India</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        
        <p className='py-5 text-sm text-center text-gray-600'>
          © 2026 Vehicle Platform. All Rights Reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer