import React from "react";

interface FilterOptions {
  Category: string[];
  Color: string[];
  Gender: string[];
  "On sale": string[];
  Price: string[];
  Ratings: string[];
  Size: string[];
  "Sort by": string[];
}

const Category: React.FC = () => {
  // Define the filter options for each dropdown
  const filterOptions: FilterOptions = {
    Category: ["All Categories", "Clothing", "Shoes", "Accessories"],
    Color: ["All Colors", "Red", "Blue", "Green", "Black"],
    Gender: ["All Genders", "Men", "Women", "Unisex"],
    "On sale": ["All", "On Sale", "Not On Sale"],
    Price: ["All Prices", "$0 - $50", "$50 - $100", "$100 - $200"],
    Ratings: [
      "All Ratings",
      "1 Star",
      "2 Stars",
      "3 Stars",
      "4 Stars",
      "5 Stars",
    ],
    Size: ["All Sizes", "S", "M", "L", "XL"],
    "Sort by": ["Relevance", "Price: Low to High", "Price: High to Low"],
  };

  return (
    <div className="flex justify-center space-x-4 p-4 bg-white mb-[1.5em]">
      {Object.keys(filterOptions).map((filter) => (
        <select
          aria-label="Choose an option"
          key={filter}
          className="bg-white text-black font-normal px-[.5em] py-[.5em] rounded-full shadow-sm hover:bg-gray-200 focus:outline-none border-2 border-[#D9D9D9]"
        >
          {(filterOptions[filter as keyof FilterOptions] as string[]).map(
            (option) => (
              <option key={option} value={option}>
                {option}
              </option>
            )
          )}
        </select>
      ))}
    </div>
  );
};

export default Category;
