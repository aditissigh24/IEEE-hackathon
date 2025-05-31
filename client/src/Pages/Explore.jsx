import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bed, Wind, Activity } from "lucide-react";

// Updated sample data for hospital resources
const sampleItems = [
  {
    id: 1,
    title: "Memorial Hospital",
    type: "General Hospital",
    region: "Bhopal",
    city: "MP",
    author: "Dr. Michael Chen",
    rating: 4.8,
    image: "/images/clinic83.jpeg",
    resources: {
      beds: 45,
      ventilators: 12,
      icu: 8,
    },
  },
  {
    id: 2,
    title: "City Medical Center",
    type: "Specialized Care",
    region: "Indore",
    city: "MP",
    author: "Radiology Department",
    rating: 4.6,
    image: "https://imgs.search.brave.com/IX99o65_IT808begrGFXSwgHBzvYajK_oAwoTdJOmCI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjI4/ODIzMzA4L3Bob3Rv/L2hvc3BpdGFsLWJ1/aWxkaW5nLXdpdGgt/YmlnLXN5bWJvbGlj/LWF0LWNsb3VkeS1k/YXkuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUl6Zi1iUUpW/bFNRVVNQWXc4ck1Z/amdWeTJPRjZ3TWNG/bWN5WmNiX0lyZ1U9",
    resources: {
      beds: 120,
      ventilators: 25,
      icu: 15,
    },
  },
  {
    id: 3,
    title: "St. Mary's Hospital",
    type: "Rehabilitation Center",
    region: "Haridwar",
    city: "Uttarakhand",
    author: "Wellness Center",
    rating: 4.7,
    image: "https://imgs.search.brave.com/DyJdMgURwuLsMrdKNn_kuFWRjgvbNKlZa_kWHEnvxek/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MDM4OTMxMi9waG90/by9idWlsZGluZy13/aXRoLWxhcmdlLWgt/c2lnbi1mb3ItaG9z/cGl0YWwuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXFuNy1D/Nm9ibHFFbkdrbXNP/d0FLVmIyNXJKYjlx/QTE4OGhlQTE0VHlL/OW89",
    resources: {
      beds: 80,
      ventilators: 10,
      icu: 6,
    },
  },
  {
    id: 4,
    title: "General Trauma Center",
    type: "Emergency Care",
    region: "Mumbai",
    city: "Maharashtra",
    author: "Emergency Department",
    rating: 4.9,
    image: "https://imgs.search.brave.com/15ZOfvT3tg7PnJOXuN0ekEQtb-9op1Bc4T_GGvm_TYU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgy/MTcyMzA4L3Bob3Rv/L2hvc3BpdGFsLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1y/YkNVMDhrWjUtQk5W/LXlhZ09OT3BjRi1r/RmZqTFJfMzMxMEVI/VTBFR1A4PQ",
    resources: {
      beds: 60,
      ventilators: 20,
      icu: 18,
    },
  },
  {
    id: 5,
    title: "Children's Hospital",
    type: "Pediatric Care",
    region: "Kashmir",
    city: "Jammu & Kashmir",
    author: "Surgery Department",
    rating: 4.8,
    image: "https://imgs.search.brave.com/ilGQLntoq1iPVULdi6kxNhn0VRvuZKOVfRRUsL-1E4Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/OTMyNDgxOC9waG90/by9ob3NwaXRhbC1i/dWlsZGluZy13aXRo/LWdsYXNzLXdhbGwt/YW5kLW1pcnJvcmVk/LWJ1aWxkaW5nLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz02/UXl5S3FJaHpoUnp3/dUFLUjJyTnFJeTRH/MWJFVExPYmJJaWh0/RF94UlBrPQ",
    resources: {
      beds: 95,
      ventilators: 18,
      icu: 12,
    },
  },
  {
    id: 6,
    title: "Women's Health Center",
    type: "Specialized Care",
    region: "Kolkata",
    city: "West Bengal",
    author: "Women's Health Department",
    rating: 4.7,
    image: "https://imgs.search.brave.com/zWf18YnFgVF6BAYI8cwNAsFA79TB-q2fNwoP-kqiAlQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/MTYwODUwOC9waG90/by9tYWxlLWFuZC1m/ZW1hbGUtaGVhbHRo/Y2FyZS1wcm9mZXNz/aW9uYWwtd2Fsa2lu/Zy1vbi1icmlkZ2Ut/bGVhZGluZy10b3dh/cmRzLWhvc3BpdGFs/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1mQWlHVkVqcFJK/bzJSTzlhS0xJR0Zq/dmZXSFVzUXdVV1pR/V1MzMDBCdGVRPQ",
    resources: {
      beds: 75,
      ventilators: 8,
      icu: 5,
    },
  },
];

const categories = [
  "All",
  "General Hospital",
  "Specialized Care",
  "Rehabilitation Center",
  "Emergency Care",
  "Pediatric Care",
];

export default function Explore() {
  const [items, setItems] = useState(sampleItems);
  const [filteredItems, setFilteredItems] = useState(sampleItems);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let result = items;

    // Apply category filter
    if (activeCategory !== "All") {
      result = result.filter((item) => item.type === activeCategory);
    }

    // Apply search filter
    if (searchQuery) {
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(result);
  }, [activeCategory, searchQuery, items]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <div className="mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-600 mb-6"
        >
          Hospitals
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search for hospitals, regions, or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-colors shadow-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute right-3 top-3.5 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search
          </button>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-2 justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm
                ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50"
                }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-blue-100"
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
            >
              <div className="h-40 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/10 z-10"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-5">
                {/* Hospital name and rating */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-blue-900">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-amber-500 font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {item.rating}
                  </div>
                </div>

                {/* Region and city */}
                <p className="text-gray-600 text-sm mb-1">
                  {item.region}, {item.city}
                </p>

                {/* Type of hospital */}
                <p className="text-blue-700 text-sm font-medium mb-4">
                  {item.type}
                </p>

                {/* Available resources */}
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <h4 className="text-sm font-medium text-blue-800 mb-2">
                    Available Resources:
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex items-center">
                      <Bed size={16} className="text-blue-700 mr-1" />
                      <span className="text-sm font-medium">
                        {item.resources.beds} beds
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Wind size={16} className="text-blue-700 mr-1" />
                      <span className="text-sm font-medium">
                        {item.resources.ventilators} vent
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Activity size={16} className="text-blue-700 mr-1" />
                      <span className="text-sm font-medium">
                        {item.resources.icu} ICU
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors font-medium shadow-sm">
                  View Details
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-blue-700 bg-blue-50 rounded-lg">
            No hospitals found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
