/** @format */

import React from "react";

interface CategoryProps {
  categories: string[];
}

const CategoryBar = ({ categories }: CategoryProps) => {
  return (
    <div className="flex justify-between gap-6">
      {categories.map((ele, i) => (
        <div key={i} className="p-4 bg-inherit rounded text-black cursor-pointer hover:bg-gray-300">
          {ele}
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
