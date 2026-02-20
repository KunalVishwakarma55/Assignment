import React from 'react'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
import productImage from "../assets/product_image.jpg"
import vehicleSuggested from "../assets/vechcile_suggested.webp"
import compareVehicle  from "../assets/comparevechicle.webp"
import dealerLocator from "../assets/dealer_locator.png"
import emiCalc  from "../assets/clec.png"
import profitCalc from "../assets/pc.png"

function ProductOverview() {
  const navigate = useNavigate();

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"VEHICLE"} text2={"SERVICES"} />

        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Explore our complete vehicle platform including model comparison, dealer locator,
          EMI calculator, profit estimation tools, and personalized vehicle suggestions —
          all in one place to make your buying journey simple.
        </p>
      </div>

      {/* Static Cards */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-5 gap-y-6'>
        
        {/* Explore Vehicles */}
        <div 
          className="text-gray-700 cursor-pointer block border rounded-lg p-4 hover:shadow-lg transition"
          onClick={() => navigate("/collection")}
        >
          <img src={productImage} alt="Explore Vehicles" className="w-full h-40 object-contain mb-3"/>
          <h3 className="font-semibold text-md">Explore Vehicles</h3>
          <p className="text-sm text-gray-600">Browse all available vehicles with features and pricing.</p>
        </div>

        {/* Recommended Vehicles */}
        <div 
          className="text-gray-700 cursor-pointer block border rounded-lg p-4 hover:shadow-lg transition"
          onClick={() => navigate("/collection")}
        >
          <img src={vehicleSuggested} alt="Recommended Vehicles" className="w-full h-40 object-contain mb-3"/>
          <h3 className="font-semibold text-md">Recommended Vehicles</h3>
          <p className="text-sm text-gray-600">Get vehicle suggestions based on your needs.</p>
        </div>

        {/* Compare Models */}
        <div 
          className="text-gray-700 cursor-pointer block border rounded-lg p-4 hover:shadow-lg transition"
          onClick={() => navigate("/compare")}
        >
          <img src={compareVehicle} alt="Compare Models" className="w-full h-40 object-contain mb-3"/>
          <h3 className="font-semibold text-md">Compare Models</h3>
          <p className="text-sm text-gray-600">Compare different vehicles side by side.</p>
        </div>

        {/* Dealer Locator */}
        <div 
          className="text-gray-700 cursor-pointer block border rounded-lg p-4 hover:shadow-lg transition"
          onClick={() => navigate("/dealer")}
        >
          <img src={dealerLocator} alt="Dealer Locator" className="w-full h-40 object-contain mb-3"/>
          <h3 className="font-semibold text-md">Find Dealers</h3>
          <p className="text-sm text-gray-600">Locate nearby authorized vehicle dealers.</p>
        </div>

        {/* EMI Calculator */}
        <div 
          className="text-gray-700 cursor-pointer block border rounded-lg p-4 hover:shadow-lg transition"
          onClick={() => navigate("/emi")}
        >
          <img src={emiCalc} alt="EMI Calculator" className="w-full h-40 object-contain mb-3"/>
          <h3 className="font-semibold text-md">EMI Calculator</h3>
          <p className="text-sm text-gray-600">Calculate your car loan EMI quickly and easily.</p>
        </div>

        {/* Profit Calculator */}
        <div 
          className="text-gray-700 cursor-pointer block border rounded-lg p-4 hover:shadow-lg transition"
          onClick={() => navigate("/profit")}
        >
          <img src={profitCalc} alt="Profit Calculator" className="w-full h-40 object-contain mb-3"/>
          <h3 className="font-semibold text-md">Profit Calculator</h3>
          <p className="text-sm text-gray-600">Estimate profit based on cost and selling price.</p>
        </div>

      </div>
    </div>
  )
}

export default ProductOverview
