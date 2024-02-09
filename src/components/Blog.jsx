import React, { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  const blogPosts = [
    {
      id: 1,
      title: "BLOG POST 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      date: "December 25, 2023",
    },
    {
      id: 2,
      title: "BLOG POST 2",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames...",
      author: "Jane Smith",
      date: "December 26, 2023",
    },
    {
      id: 3,
      title: "BLOG POST 3",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      author: "Alice Johnson",
      date: "December 27, 2023",
    },
    // Add more dummy blog posts as needed
  ];

  return (
    <div className="container-fluid mx-auto px-20 py-8 bg-[#2787b7] h-100 items-center justify-center ">
      <div className="text-center mb-8 ">
        <h1 className="text-4xl font-bold" data-aos="slide-right">
          Welcome to My Blog
        </h1>
        <p className="text-gray-300 mt-2" data-aos="slide-up">
          Explore a world of thoughts, ideas, and insights.
        </p>
      </div>
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Latest Blog Posts
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-[#2787b7]">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-[#68b3da] rounded-lg shadow-md p-4"
            data-aos="zoom-in"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-3">{post.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>{post.author}</p>
              <p>{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
