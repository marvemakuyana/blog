import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tagsSelected } from "../../redux/features/filter/filterSlice";

const CatagoryList = () => {
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filter);
  const isTagSelected = (tag) => selectedTags.includes(tag);
  return (
    <ul>
      <li
        className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300
        ${isTagSelected("AI") ? "bg-indigo-200 rounded" : ""}`}
      >
        <Link
          onClick={() => dispatch(tagsSelected("AI"))}
          className="flex items-center text-gray-600 cursor-pointer"
        >
          <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
          AI
          <span className="text-gray-500 ml-auto">5 articles</span>
          <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
        </Link>
      </li>
      <li
        className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300
       ${isTagSelected("Startups") ? "bg-indigo-200 rounded" : ""}`}
      >
        <Link
          className="flex items-center text-gray-600 cursor-pointer"
          onClick={() => dispatch(tagsSelected("Startups"))}
        >
          <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
          Startups
          <span className="text-gray-500 ml-auto">18 articles</span>
          <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
        </Link>
      </li>
      <li
        className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300
         ${isTagSelected("Tech") ? "bg-indigo-200 rounded" : ""}`}
      >
        <Link
          className="flex items-center text-gray-600 cursor-pointer"
          onClick={() => dispatch(tagsSelected("Tech"))}
        >
          <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
          Technology
          <span className="text-gray-500 ml-auto">34 articles</span>
          <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
        </Link>
      </li>
      <li
        className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300
         ${isTagSelected("Apps") ? "bg-indigo-200 rounded" : ""}`}
      >
        <Link
          className="flex items-center text-gray-600 cursor-pointer"
          onClick={() => dispatch(tagsSelected("Apps"))}
        >
          <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
          Apps
          <span className="text-gray-500 ml-auto">9 articles</span>
          <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
        </Link>
      </li>
    </ul>
  );
};

export default CatagoryList;
