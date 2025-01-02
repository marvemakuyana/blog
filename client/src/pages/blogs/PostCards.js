import React from "react";
import { Link } from "react-router-dom";
import authorPic from "../../assets/images/author1.png";

const PostCards = () => {
  return (
    <div className="w-full lg:w-2/3">
      <div>
        <div>
          <Link className="block rounded w-full lg:flex mb-10" to="">
            <div
              className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style={{
                backgroundImage: `url("https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1314165902.jpg?w=430&h=230&crop=1")`,
              }}
              title="deit is very important"
            ></div>
            <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                  Rabbit is building an AI model that understands how software
                  works
                </div>
                <p className="text-gray-700 text-base">
                  Today is news marks a turnaround for a company that is had its
                  share of ups and downs over the past year
                </p>
                <p className="text-sm italic py-1 text-gray-700"></p>
              </div>
              <div className="flex mt-3">
                <img
                  src={authorPic}
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  alt="Author"
                />
                <div className="space-x-1.5">
                  <p className="font-semibold text-gray-700 text-sm capitalize">
                    Marv
                  </p>
                  <p className="text-gray-600 text-xs">14 Aug </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCards;
