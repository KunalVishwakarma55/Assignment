import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import { VehicleContext } from "../context/VehiclesContext";
import dropdown_icon from "../assets/dropdown_icon.png";

function Collection() {
  const { productData,search,showSearch } = useContext(VehicleContext);

  const [showFilter, setShowFilter] = useState(true);

  const [sortType, setSortType] = useState("relavant");
  const [sortedProducts, setSortedProducts] = useState([]);


  const [mileageFilter, setMileageFilter] = useState([]);
  const [fuelFilter, setFuelFilter] = useState([]);

  const getPriceValue = (price) => {
    const num = price
      .split("-")[0]
      .replace("₹", "")
      .replace("Lakh", "")
      .trim();

    return parseFloat(num);
  };
  const handleMileageFilter = (e) => {
    const value = e.target.value;

    if (mileageFilter.includes(value)) {
      setMileageFilter(mileageFilter.filter((item) => item !== value));
    } else {
      setMileageFilter([...mileageFilter, value]);
    }
  };
  const handleFuelFilter = (e) => {
    const value = e.target.value;

    if (fuelFilter.includes(value)) {
      setFuelFilter(fuelFilter.filter((item) => item !== value));
    } else {
      setFuelFilter([...fuelFilter, value]);
    }
  };
  const filterByMileage = (products) => {
    if (mileageFilter.length === 0) return products;

    return products.filter((item) => {
      const mileage = parseFloat(item.mileage);

      return mileageFilter.some((range) => {
        if (range === "0-5") return mileage >= 0 && mileage <= 5;
        if (range === "5-10") return mileage > 5 && mileage <= 10;
        if (range === "10+") return mileage > 10;
      });
    });
  };

const filterByFuel = (products) => {
  if (fuelFilter.length === 0) return products;

  return products.filter((item) =>
    fuelFilter.some((fuel) =>
      item.fuel.toLowerCase().includes(fuel.toLowerCase())
    )
  );
};

const filterBySearch = (products) => {
  if (!search || search.trim() === "") return products;

  return products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
};

  const sortProduct = () => {
    let sorted = [...productData];

    // Apply filters
    sorted = filterBySearch(sorted);
    sorted = filterByMileage(sorted);
    sorted = filterByFuel(sorted);

    // Apply sorting
    if (sortType === "low-high") {
      sorted.sort(
        (a, b) => getPriceValue(a.price) - getPriceValue(b.price)
      );
    } else if (sortType === "high-low") {
      sorted.sort(
        (a, b) => getPriceValue(b.price) - getPriceValue(a.price)
      );
    }

    setSortedProducts(sorted);
  };
  useEffect(() => {
    sortProduct();
  }, [sortType, productData, mileageFilter, fuelFilter,search]);

  return (
    <div className="flex flex-col sm:flex-row gap-5 pt-10 border-t">
      <div className="min-w-60">

        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 sm:cursor-default"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${
              showFilter ? "rotate-90" : ""
            }`}
            src={dropdown_icon}
            alt=""
          />
        </p>

        {/* Mileage */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "hidden" : "block"
            
          }  sm:block`}
        >
          <p className="mb-3 text-sm font-medium">
            CATEGORIES (Mileage)
          </p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input
                type="checkbox"
                value="0-5"
                onChange={handleMileageFilter}
              />
              0 – 5 km/l
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="5-10"
                onChange={handleMileageFilter}
              />
              5 – 10 km/l
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="10+"
                onChange={handleMileageFilter}
              />
              10+ km/l
            </label>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "hidden" : "block"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">
            SUB-CATEGORIES (Fuel Type)
          </p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Petrol"
                onChange={handleFuelFilter}
              />
              Petrol
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Diesel"
                onChange={handleFuelFilter}
              />
              Diesel
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Electric"
                onChange={handleFuelFilter}
              />
              Electric
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="CNG"
                onChange={handleFuelFilter}
              />
              CNG
            </label>
          </div>
        </div>
      </div>
      <div className="flex-1">

        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"VEHICLES"} />

          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-600 text-sm px-2"
          >
            <option value="relavant">
              Sort by: Relevant
            </option>
            <option value="low-high">
              Sort by: Low to High
            </option>
            <option value="high-low">
              Sort by: High to Low
            </option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {sortedProducts.map((item, index) => (
            <ProductCard
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              mileage={item.mileage}
              fuel={item.fuel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;