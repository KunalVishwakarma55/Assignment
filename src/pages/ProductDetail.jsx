import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { VehicleContext } from "../context/VehiclesContext";
import TitleTwoLines from "../components/TitleTwoLines";
import { Link as ScrollLink, Element } from "react-scroll";
import { appIcons } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

function ProductDetail() {
  const { id } = useParams();
  const { productData } = useContext(VehicleContext);

  const product = productData.find((p) => p.id === parseInt(id));

  

  if (!product) {
    return <div className="p-6 text-red-500">Product not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">

      <div className="sticky top-0 bg-white border-b ">
        <div className="flex gap-8 px-6 py-3 text-sm md:text-base font-medium overflow-x-auto scrollbar-hide">
          <ScrollLink
            to="overview"
            smooth={true}
            offset={-80}
            duration={500}
            spy={true}
            activeClass="text-red-600 border-b-2 border-red-600"
            className="cursor-pointer pb-2 text-gray-600 whitespace-nowrap"
          >
            Overview
          </ScrollLink>

          <ScrollLink
            to="specs"
            smooth={true}
            offset={-80}
            duration={500}
            spy={true}
            activeClass="text-red-600 border-b-2 border-red-600"
            className="cursor-pointer pb-2 text-gray-600 whitespace-nowrap"
          >
            Key Specifications
          </ScrollLink>

          <ScrollLink
            to="applications"
            smooth={true}
            offset={-80}
            duration={500}
            spy={true}
            activeClass="text-red-600 border-b-2 border-red-600"
            className="cursor-pointer pb-2 text-gray-600 whitespace-nowrap"
          >
            Applications
          </ScrollLink>

        </div>
      </div>

      <div className="p-6">
        <Element name="overview" className="mb-16">
          <div className="flex flex-col md:flex-row gap-8">

            <div className="flex-1 flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-sm md:max-w-md object-contain rounded-lg shadow-md"
              />
            </div>

           <div className="flex-1 flex items-start">
  <div className="w-full bg-gray-100 p-5 rounded-lg shadow-sm">
    
    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
      <TitleTwoLines text1={product.name} />
    </h2>

    <p className="text-lg text-gray-700 mb-2 text-center">
      {product.price}
    </p>

    <p className="text-sm text-gray-600 text-center">
      Mileage: {product.mileage} | Payload: {product.payload}
    </p>

  </div>
</div>

          </div>
        </Element>
        <Element name="specs" className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-red-600">
            Key Specifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg shadow">
            <SpecItem title="Fuel Type" value={product.fuel} />
            <SpecItem title="Engine Type" value={product.engineType || "NA"} />
            <SpecItem title="Fuel Tank (Litres)" value={product.fuelTank} />
            <SpecItem title="Max Torque" value={product.torque} />
          </div>
        </Element>

        {/* 🔹 APPLICATIONS */}
        <Element name="applications" className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-red-600">
            Applications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.applications.map((app, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border border-red-400 rounded-2xl px-5 py-4 hover:shadow-md transition"
              >
                <span className="text-red-600 text-xl">
                  {appIcons[app] || "✔️"}
                </span>
                <p className="text-gray-700 font-medium">{app}</p>
              </div>
            ))}
          </div>
        </Element>

      </div>

      <RelatedProducts  productId={product.id}/>
    </div>
  );
}

const SpecItem = ({ title, value }) => (
  <div>
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-base font-medium text-gray-800">{value}</p>
  </div>
);

export default ProductDetail;