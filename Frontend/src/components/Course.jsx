import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
// import list from "../../public/list.json";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-gray-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Welcome to our Course Hub! Whether you are a passionate reader, a budding writer, or someone looking to expand their knowledge, our diverse range of courses is designed to cater to your interests. Dive into our curated selection and find the perfect course to enrich your learning journey.
          </p>
          <Link to="/">
            <button className="mt-6 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
