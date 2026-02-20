import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { VehicleContext } from '../context/VehiclesContext'
import ProductCard from './ProductCard'

function RelatedProducts({ productId }) {

    const { productData } = useContext(VehicleContext)
    const [related, setRelated] = useState([])

    const getMileageCategory = (mileage) => {
        if (mileage.includes("Km/charge")) return "Electric"

        const value = parseFloat(mileage)

        if (value < 12) return "Low"
        if (value >= 12 && value <= 20) return "Medium"
        return "High"
    }

    useEffect(() => {

        if (productData.length > 0) {

            const currentProduct = productData.find(
                item => item.id === productId
            )

            if (!currentProduct) return

            const currentCategory = getMileageCategory(currentProduct.mileage)
            const currentFuel = currentProduct.fuel

            const filteredProducts = productData.filter(item => 
                item.id !== productId &&
                getMileageCategory(item.mileage) === currentCategory &&
                item.fuel === currentFuel
            )

            setRelated(filteredProducts.slice(0, 5))
        }

    }, [productId, productData])

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5'>
                {
                    related.map((item) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            mileage={item.mileage}
                            fuel={item.fuel}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProducts