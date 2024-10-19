// import React, { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useDebounce } from "use-debounce";
// import Button from "./Button";

// const categoriesData = [
//   { key: "software_development", label: "Software Development" },
//   { key: "web_development", label: "Web Development" },
//   { key: "cybersecurity", label: "Cybersecurity" },
//   { key: "devops", label: "DevOps" },
//   { key: "machine_learning", label: "Machine Learning" },
//   { key: "blockchain", label: "Blockchain" },
//   { key: "ui_ux_design", label: "UI/UX Design" },
//   { key: "database_management", label: "Database Management" },
//   { key: "data_science", label: "Data Science" },
//   { key: "software_testing", label: "Software Testing" },
//   { key: "system_design", label: "System Design" },
//   { key: "internet_of_things", label: "Internet of Things (IoT)" },
//   { key: "security_practices", label: "Security Practices" },
//   { key: "frontend_development", label: "Frontend Development" },
//   { key: "backend_development", label: "Backend Development" },
//   { key: "fullstack_development", label: "Fullstack Development" },
//   { key: "mobile_app_development", label: "Mobile App Development" },
//   { key: "cloud_computing", label: "Cloud Computing" },
//   { key: "agile_methodology", label: "Agile Methodology" },
//   { key: "project_management", label: "Project Management" },
//   { key: "performance_optimization", label: "Performance Optimization" },
//   { key: "containerization", label: "Containerization" },
//   { key: "api_management", label: "API Management" },
//   { key: "distributed_systems", label: "Distributed Systems" },
// ];

// const SearchFilter = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [search, setSearch] = useState(searchParams.get("search") || "");
//   const [category, setCategory] = useState(searchParams.get("category") || "");
//   const [debouncedSearch] = useDebounce(search, 500);

//   const handleSubmit = () => {
//     const params = new URLSearchParams();
//     if (debouncedSearch) params.set("search", debouncedSearch);
//     if (category) params.set("category", category);
//     const queryString = params.toString();
//     router.push(`?${queryString}`);
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full mb-0.5 rounded-md shadow-sm focus:border-primary-blue border outline-none py-1.5 lg:py-2 px-3"
//         />
//       </div>
//       <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//         <div className="space-y-2 w-full sm:w-1/2">
//           <select
//             className="w-full border-secondary-grey rounded-md shadow-sm focus:border-primary-orange border outline-none py-1.5 lg:py-2 px-3"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="">All</option>
//             {categoriesData.map((category) => (
//               <option key={category.key} value={category.key}>
//                 {category.label}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//       <div className="flex justify-end mt-3">
//         <Button onClick={handleSubmit} className="text-sm">
//           Apply Filters
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default SearchFilter;

import React, { useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa"; // Import FaSearch

const categoriesData = [
  { key: "software_development", label: "Software Development" },
  { key: "web_development", label: "Web Development" },
  { key: "cybersecurity", label: "Cybersecurity" },
  { key: "devops", label: "DevOps" },
  { key: "machine_learning", label: "Machine Learning" },
  { key: "blockchain", label: "Blockchain" },
  { key: "ui_ux_design", label: "UI/UX Design" },
  { key: "database_management", label: "Database Management" },
  { key: "data_science", label: "Data Science" },
  { key: "software_testing", label: "Software Testing" },
  { key: "system_design", label: "System Design" },
  { key: "internet_of_things", label: "Internet of Things (IoT)" },
  { key: "security_practices", label: "Security Practices" },
  { key: "frontend_development", label: "Frontend Development" },
  { key: "backend_development", label: "Backend Development" },
  { key: "fullstack_development", label: "Fullstack Development" },
  { key: "mobile_app_development", label: "Mobile App Development" },
  { key: "cloud_computing", label: "Cloud Computing" },
  { key: "agile_methodology", label: "Agile Methodology" },
  { key: "project_management", label: "Project Management" },
  { key: "performance_optimization", label: "Performance Optimization" },
  { key: "containerization", label: "Containerization" },
  { key: "api_management", label: "API Management" },
  { key: "distributed_systems", label: "Distributed Systems" },
];

const SearchFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [debouncedSearch] = useDebounce(search, 500);
  const categoryRef = useRef(null); // Ref to track the category container

  const handleSubmit = () => {
    const params = new URLSearchParams();
    if (debouncedSearch) params.set("search", debouncedSearch);

    // Set category to "all" if no specific category is selected
    if (category) {
      params.set("category", category);
    } else {
      params.set("category", "all"); // All categories selected
    }

    const queryString = params.toString();
    router.push(`?${queryString}`);
  };

  // Scroll the category container
  const scrollCategory = (direction) => {
    if (categoryRef.current) {
      const scrollAmount = 200; // Adjust scroll amount as needed
      if (direction === "left") {
        categoryRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        categoryRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const handleCategorySelect = (selectedCategory) => {
    if (selectedCategory === "all") {
      setCategory(""); // Reset category to show all when "All Categories" is clicked
    } else {
      setCategory(selectedCategory);
    }
  };

  return (
    <div className="bg-white p-4 rounded-3xl">
      <div className="mb-4 flex items-center relative">
        <FaSearch className="absolute left-4 text-gray-400" />
        {/* Search icon */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-0.5 rounded-full shadow-sm focus:border-primary-blue border outline-none py-1.5 lg:py-2 px-11"
        />
      </div>

      {/* Horizontal category slider with arrows */}
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          className="z-10 p-3 text-gray-500 hover:text-gray-800 focus:outline-none"
          onClick={() => scrollCategory("left")}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Category list */}
        <div
          ref={categoryRef}
          className="flex overflow-x-auto no-scrollbar space-x-3 py-3" // Add margin to center
        >
          <button
            onClick={() => handleCategorySelect("all")}
            className={`px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium border
              ${category === "" ? "bg-blue-200 text-blue-500" : "bg-gray-200"}`}
          >
            All
          </button>

          {categoriesData.map((categoryItem) => (
            <button
              key={categoryItem.key}
              onClick={() => handleCategorySelect(categoryItem.key)}
              className={`px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium border
              ${
                category === categoryItem.key
                  ? "bg-blue-200 text-blue-500"
                  : "bg-gray-200"
              }`}
            >
              {categoryItem.label}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="z-10 p-3 text-gray-500 hover:text-gray-800 focus:outline-none"
          onClick={() => scrollCategory("right")}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
