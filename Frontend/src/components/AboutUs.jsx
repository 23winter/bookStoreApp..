import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center py-10 px-4 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/photos/bookstore-shop-exterior-with-books-and-textbooks-in-showcase-picture-id1222563369?k=20&m=1222563369&s=170667a&w=0&h=_fBZ4rSdD9VUVcHI-jxncvuCbh64w-cSNdjrjeqz9YI=')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      {/* Overlay for text readability */}
      <div className="relative z-10 max-w-4xl text-lg text-white space-y-6 text-center px-4 py-8 bg-opacity-70 bg-black rounded-md shadow-lg">
        <Link
          to="/"
          className="absolute top-4 left-4 text-white text-3xl hover:text-yellow-200 transition-transform duration-300 hover:scale-110"
        >
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <h1 className="text-5xl font-extrabold mb-6 tracking-wide transition-transform duration-300 hover:scale-105">
          About Us
        </h1>

        <p className="transition-opacity duration-500 hover:opacity-90">
          <strong>Welcome to BookStore!</strong>
        </p>
        <p className="transition-opacity duration-500 hover:opacity-90">
          At BookStore, we believe that books have the power to transform lives,
          inspire creativity, and open doors to endless knowledge. Our mission
          is to create a seamless, user-friendly platform where readers from all
          walks of life can discover, explore, and enjoy a vast collection of
          books in various genres.
        </p>
        <p className="transition-opacity duration-500 hover:opacity-90">
          Founded by a team of book lovers and tech enthusiasts, we aim to
          bridge the gap between literature and technology. Our carefully
          curated selection of books ranges from fiction, non-fiction, academic
          resources, and free e-books, ensuring there is something for every
          reader.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4 transition-transform duration-300 hover:scale-105">
          Why Choose Us?
        </h2>

        <ul className="list-disc list-inside text-left space-y-4">
          <li className="transition-transform duration-300 hover:translate-x-2">
            <strong>Extensive Collection:</strong> We offer a wide variety of
            genres, including fiction, science, history, technology, and more,
            catering to all kinds of readers.
          </li>
          <li className="transition-transform duration-300 hover:translate-x-2">
            <strong>User-Friendly Interface:</strong> Our platform is designed
            to provide a seamless experience, making it easy to find and
            purchase your favorite books.
          </li>
          <li className="transition-transform duration-300 hover:translate-x-2">
            <strong>Free E-books:</strong> We believe in the power of free
            knowledge. That’s why we offer a selection of free e-books for our
            users to download and enjoy.
          </li>
          <li className="transition-transform duration-300 hover:translate-x-2">
            <strong>Secure Transactions:</strong> We prioritize your security
            and ensure that every transaction on our platform is safe and
            reliable.
          </li>
        </ul>

        <p className="font-bold text-2xl mt-8 text-yellow-200">
          Happy Reading!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
