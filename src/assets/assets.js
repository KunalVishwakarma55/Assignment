import productImage from "../assets/product_image.jpg"
import vechicleSuugested from "../assets/vechcile_suggested.webp"
import compareVechicle from "../assets/comparevechicle.webp"
import dealer_locator from "../assets/dealer_locator.png"
import clec from "../assets/clec.png"
import pc from "../assets/pc.png"
import truck1 from "../assets/truck1.jpg"
import truck2 from "../assets/truck2.jpg"
import truck3 from "../assets/truck3.jpg"
import truck4 from "../assets/truck4.jpg"
import truck5 from "../assets/truck5.jpg"
import truck6 from "../assets/truck6.avif"
import truck7 from "../assets/truck7.avif"
import truck8 from "../assets/truck8.avif"
import truck9 from "../assets/truck9.png"
import truck10 from "../assets/truck10.jpg"
import truck11 from "../assets/truck11.jpg"
import truck12  from "../assets/truck12.png"
import truck13  from "../assets/truck13.jpg"
import truck14  from "../assets/truck14.avif"
import truck15 from "../assets/truck15.avif"
import truck16 from "../assets/truck16.avif"
import truck17 from "../assets/truck17.avif"
import truck18  from "../assets/truck18.avif"
import truck19 from "../assets/truck19.avif"
import truck20  from "../assets/truck20.jpg"

export const productsInventory = [
  {
    id: 1,
    name: "Product Vehicle",
    image: productImage,
    title: "Explore Vehicles",
    description: "Browse all available vehicles with features and pricing.",
  },
  {
    id: 2,
    name: "Suggested Vehicle",
    image: vechicleSuugested,
    title: "Recommended Vehicles",
    description: "Get vehicle suggestions based on your needs."
  },
  {
    id: 3,
    name: "Compare Vehicle",
    image: compareVechicle,
    title: "Compare Models",
    description: "Compare different vehicles side by side."
  },
  {
    id: 4,
    name: "Dealer Locator",
    image: dealer_locator,
    title: "Find Dealers",
    description: "Locate nearby authorized vehicle dealers."
  },
  {
    id: 5,
    name: "Car Loan EMI Calculator",
    image: clec,
    title: "EMI Calculator",
    description: "Calculate your car loan EMI quickly and easily."
  },
  {
    id: 6,
    name: "Profit Calculator",
    image: pc,
    title: "Profit Calculator",
    description: "Estimate profit based on cost and selling price."
  }
]


export const productData = [
  {
    id: 1,
    name: "Blazo X 28 BS6",
    price: "₹ 4.89 - ₹ 5.34 Lakh",
    mileage: "11.8 Km/l",
    payload: "725 Kg",
    fuel: "Diesel",
    engineType: "Single Cylinder, 4 Stroke",
    torque: "48 Nm",
    fuelTank: "26 Litres",
    applications: [
      "Construction Materials Transport",
      "Cement & Sand Supply",
      "Engineering Equipment Delivery",
      "Water Tanker",
      "Agriculture Produce Transport",
      "Fruits & Vegetables Distribution",
      "Parcel & Logistics Services",
    ],
    image: truck1,
  },
  {
    id: 2,
    name: "Furio 12",
    price: "₹ 6.50 - ₹ 7.20 Lakh",
    mileage: "10.5 Km/l",
    payload: "500 Kg",
    fuel: "Diesel",
    engineType: "2 Cylinder Diesel Engine",
    torque: "42 Nm",
    fuelTank: "24 Litres",
    applications: [
      "City Cargo Delivery",
      "Retail Goods Transport",
      "Food & Beverage Distribution",
      "Courier & E-commerce Logistics",
    ],
    image: truck2,
  },
  {
    id: 3,
    name: "Jeeto Plus",
    price: "₹ 3.20 - ₹ 3.80 Lakh",
    mileage: "20 Km/l",
    payload: "350 Kg",
    fuel: "Petrol / CNG",
    engineType: "Single Cylinder Petrol/CNG Engine",
    torque: "30 Nm",
    fuelTank: "20 Litres",
    applications: [
      "Small Business Transport",
      "Vegetables & Fruit Supply",
      "E-commerce Delivery",
      "Local Market Transport",
    ],
    image: truck3,
  },
  {
    id: 4,
    name: "Supro Maxi Truck",
    price: "₹ 5.00 - ₹ 5.50 Lakh",
    mileage: "22 Km/l",
    payload: "1000 Kg",
    fuel: "Diesel",
    engineType: "4 Cylinder Diesel Engine",
    torque: "45 Nm",
    fuelTank: "30 Litres",
    applications: [
      "Last Mile Delivery",
      "Retail Store Supply",
      "Logistics & Distribution",
      "Dairy & FMCG Transport",
    ],
    image: truck4,
  },
  {
    id: 5,
    name: "Bolero Pik-Up",
    price: "₹ 7.00 - ₹ 7.80 Lakh",
    mileage: "14 Km/l",
    payload: "1700 Kg",
    fuel: "Diesel",
    engineType: "m2DiCR Diesel Engine",
    torque: "75 Nm",
    fuelTank: "45 Litres",
    applications: [
      "Heavy Cargo Transport",
      "Construction Equipment Supply",
      "Agriculture Goods Transport",
      "Hardware & Building Materials",
    ],
    image: truck5,
  },
  {
    id: 6,
    name: "Optimo BS6",
    price: "₹ 8.20 - ₹ 8.90 Lakh",
    mileage: "12 Km/l",
    payload: "2000 Kg",
    fuel: "Diesel",
    engineType: "CRDi Diesel Engine",
    torque: "90 Nm",
    fuelTank: "50 Litres",
    applications: [
      "Industrial Goods Transport",
      "Bulk Material Movement",
      "Warehouse Distribution",
      "Construction Supply Chain",
    ],
    image: truck6,
  },
  {
    id: 7,
    name: "Loadking",
    price: "₹ 9.50 - ₹ 10.20 Lakh",
    mileage: "11 Km/l",
    payload: "2500 Kg",
    fuel: "Diesel",
    engineType: "Turbocharged Diesel Engine",
    torque: "110 Nm",
    fuelTank: "55 Litres",
    applications: [
      "Construction Projects",
      "Mining Operations",
      "Heavy Logistics",
      "Cement & Steel Transport",
    ],
    image: truck7,
  },
  {
    id: 8,
    name: "Alfa Plus",
    price: "₹ 2.80 - ₹ 3.20 Lakh",
    mileage: "28 Km/l",
    payload: "450 Kg",
    fuel: "CNG",
    engineType: "CNG Powered Single Cylinder Engine",
    torque: "25 Nm",
    fuelTank: "15 Litres",
    applications: [
      "Urban Cargo Transport",
      "Small Business Delivery",
      "Food Delivery Services",
      "Milk & Bakery Distribution",
    ],
    image: truck8,
  },
  {
    id: 9,
    name: "Supro Electric",
    price: "₹ 8.50 - ₹ 9.00 Lakh",
    mileage: "120 Km/charge",
    payload: "600 Kg",
    fuel: "Electric",
    engineType: "Electric Motor (Lithium-ion Battery)",
    torque: "60 Nm",
    fuelTank: "Battery Pack",
    applications: [
      "Eco-friendly City Transport",
      "Last Mile E-commerce Delivery",
      "Green Logistics",
      "Urban Cargo Movement",
    ],
    image: truck9,
  },
  {
    id: 10,
    name: "Blazo X 42",
    price: "₹ 15.00 - ₹ 16.50 Lakh",
    mileage: "8 Km/l",
    payload: "4200 Kg",
    fuel: "Diesel",
    engineType: "6 Cylinder Turbo Diesel Engine",
    torque: "150 Nm",
    fuelTank: "70 Litres",
    applications: [
      "Long Haul Transport",
      "Bulk Cargo Movement",
      "Industrial Machinery Transport",
      "Intercity Logistics",
    ],
    image: truck10,
  },

   {
    id: 11,
    name: "Tata Ace Gold",
    price: "₹ 4.50 - ₹ 5.00 Lakh",
    mileage: "16 Km/l",
    payload: "800 Kg",
    fuel: "Diesel",
    engineType: "Single Cylinder Diesel Engine",
    torque: "50 Nm",
    fuelTank: "28 Litres",
    applications: [
      "City Goods Delivery",
      "Retail Supplies",
      "Courier Services",
      "Vegetables & Fruit Transport",
    ],
    image: truck11,
  },
  {
    id: 12,
    name: "Mahindra Jeeto Mini",
    price: "₹ 3.50 - ₹ 4.00 Lakh",
    mileage: "18 Km/l",
    payload: "400 Kg",
    fuel: "Petrol / CNG",
    engineType: "Single Cylinder Petrol/CNG Engine",
    torque: "32 Nm",
    fuelTank: "22 Litres",
    applications: [
      "Local Market Transport",
      "Small Business Delivery",
      "E-commerce Logistics",
      "Milk & Bakery Distribution",
    ],
    image: truck12,
  },
  {
    id: 13,
    name: "Eicher Pro 3015",
    price: "₹ 9.00 - ₹ 9.80 Lakh",
    mileage: "10 Km/l",
    payload: "2500 Kg",
    fuel: "Diesel",
    engineType: "3 Cylinder Diesel Engine",
    torque: "95 Nm",
    fuelTank: "50 Litres",
    applications: [
      "Construction Material Transport",
      "Warehouse Logistics",
      "Retail Distribution",
      "Agriculture Supply",
    ],
    image: truck13,
  },
  {
    id: 14,
    name: "Ashok Leyland Dost",
    price: "₹ 6.50 - ₹ 7.20 Lakh",
    mileage: "12 Km/l",
    payload: "2000 Kg",
    fuel: "Diesel",
    engineType: "4 Cylinder Diesel Engine",
    torque: "85 Nm",
    fuelTank: "45 Litres",
    applications: [
      "City Cargo Transport",
      "Food & Beverage Distribution",
      "Construction Supply",
      "E-commerce Logistics",
    ],
    image: truck14,
  },
  {
    id: 15,
    name: "Tata Ultra 812",
    price: "₹ 18.00 - ₹ 20.00 Lakh",
    mileage: "7 Km/l",
    payload: "8000 Kg",
    fuel: "Diesel",
    engineType: "6 Cylinder Turbo Diesel Engine",
    torque: "200 Nm",
    fuelTank: "120 Litres",
    applications: [
      "Long Haul Cargo",
      "Industrial Transport",
      "Bulk Goods Movement",
      "Heavy Machinery Transport",
    ],
    image: truck15,
  },
  {
    id: 16,
    name: "BharatBenz 1217R",
    price: "₹ 16.50 - ₹ 17.50 Lakh",
    mileage: "6.5 Km/l",
    payload: "7500 Kg",
    fuel: "Diesel",
    engineType: "6 Cylinder Diesel Engine",
    torque: "180 Nm",
    fuelTank: "110 Litres",
    applications: [
      "Construction Projects",
      "Industrial Goods",
      "Bulk Transport",
      "Intercity Logistics",
    ],
    image: truck16,
  },
  {
    id: 17,
    name: "Mahindra Furio 9",
    price: "₹ 5.50 - ₹ 6.20 Lakh",
    mileage: "14 Km/l",
    payload: "1200 Kg",
    fuel: "Diesel",
    engineType: "2 Cylinder Diesel Engine",
    torque: "55 Nm",
    fuelTank: "35 Litres",
    applications: [
      "Retail Goods Delivery",
      "City Cargo Transport",
      "Courier Services",
      "Food & Beverage Supply",
    ],
    image: truck17,
  },
  {
    id: 18,
    name: "Ashok Leyland Partner",
    price: "₹ 4.80 - ₹ 5.50 Lakh",
    mileage: "15 Km/l",
    payload: "1000 Kg",
    fuel: "Diesel",
    engineType: "3 Cylinder Diesel Engine",
    torque: "60 Nm",
    fuelTank: "30 Litres",
    applications: [
      "Small Business Transport",
      "Local Market Supply",
      "Courier Delivery",
      "Vegetables & Fruit Distribution",
    ],
    image: truck18,
  },
  {
    id: 19,
    name: "Tata Yodha",
    price: "₹ 6.00 - ₹ 6.80 Lakh",
    mileage: "13 Km/l",
    payload: "1500 Kg",
    fuel: "Diesel",
    engineType: "2 Cylinder Diesel Engine",
    torque: "70 Nm",
    fuelTank: "40 Litres",
    applications: [
      "Construction Material Transport",
      "Retail Supplies",
      "Agriculture Goods",
      "E-commerce Logistics",
    ],
    image: truck19,
  },
  {
    id: 20,
    name: "Eicher Pro 1110",
    price: "₹ 8.50 - ₹ 9.20 Lakh",
    mileage: "11 Km/l",
    payload: "2200 Kg",
    fuel: "Diesel",
    engineType: "3 Cylinder Diesel Engine",
    torque: "100 Nm",
    fuelTank: "50 Litres",
    applications: [
      "City Cargo Delivery",
      "Construction Transport",
      "Warehouse Distribution",
      "Heavy Goods Supply",
    ],
    image: truck20,
  },
];


 export const appIcons = {
  "Construction Materials Transport": "🛠️",
  "Cement & Sand Supply": "🏗️",
  "Engineering Equipment Delivery": "🏭",
  "Water Tanker": "🚰",
  "Agriculture Produce Transport": "🚜",
  "Fruits & Vegetables Distribution": "🍎",
  "Parcel & Logistics Services": "📦",

  "City Cargo Delivery": "🏙️",
  "Retail Goods Transport": "🛍️",
  "Food & Beverage Distribution": "🍽️",
  "Courier & E-commerce Logistics": "📮",

  "Small Business Transport": "🏪",
  "E-commerce Delivery": "📦",
  "Local Market Transport": "🛒",

  "Last Mile Delivery": "🚚",
  "Logistics & Distribution": "📊",
  "Dairy & FMCG Transport": "🥛",

  "Heavy Cargo Transport": "🏗️",
  "Construction Equipment Supply": "⚙️",
  "Agriculture Goods Transport": "🌾",

  "Industrial Goods Transport": "🏭",
  "Bulk Material Movement": "📦",
  "Warehouse Distribution": "🏬",

  "Construction Projects": "🏗️",
  "Mining Operations": "⛏️",
  "Heavy Logistics": "🚛",

  "Urban Cargo Transport": "🏙️",
  "Food Delivery Services": "🍔",
  "Milk & Bakery Distribution": "🥖",

  "Eco-friendly City Transport": "🌱",
  "Green Logistics": "♻️",
  "Urban Cargo Movement": "🚚",

  "Long Haul Transport": "🛣️",
  "Bulk Cargo Movement": "📦",
  "Industrial Machinery Transport": "🏭",
  "Intercity Logistics": "🌍",
};
