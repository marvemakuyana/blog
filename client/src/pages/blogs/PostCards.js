import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/features/blogs/blogsSlice";
import Card from "./Card";

const PostCards = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError } = useSelector((state) => state.blogs);
  const { tags, search } = useSelector((state) => state.filter);

  //dispatch action to get blogs
  useEffect(() => {
    dispatch(fetchBlogs({ tags, search }));
  }, [dispatch, search, tags]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = currentPage * blogsPerPage;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
  };

  return (
    <div className="w-full lg:w-2/3">
      {!isError && !isLoading && paginatedBlogs?.length > 0 ? (
        <div>
          {paginatedBlogs.map((blog, index) => (
            <Card blog={blog} key={index} />
          ))}
          {/* pagination */}
          <div className=" space-x-2">
            <button
              className="px-2 bg-red-500 text-white rounded cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>{currentPage}</span>
            <button
              className="px-2 bg-indigo-500 text-white rounded cursor-pointer"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>No Blogs found</div>
      )}
    </div>
  );
};

export default PostCards;
