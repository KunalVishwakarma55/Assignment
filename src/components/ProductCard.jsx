import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ id, image, name, price, mileage, fuel }) {
  return (
    <Link
      to={`/product/${id}`}
      className="border rounded-lg p-4 hover:shadow-lg transition block"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-md">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-contain hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <h3 className="pt-3 font-semibold">{name}</h3>

      <p className="text-red-600 font-bold">{price}</p>

      <div className="text-sm text-gray-600">
        <p>Mileage: {mileage}</p>
        <p>Fuel: {fuel}</p>
      </div>
    </Link>
  );
}

export default ProductCard;