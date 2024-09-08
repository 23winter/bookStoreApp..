import React from 'react'

const AboutUs = () => {
  return (
<div className="min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
        About Us
      </h1>
      <div className="max-w-4xl text-lg text-gray-700 dark:text-gray-200">
        <p className="mb-6">
          <strong>Welcome to [Your Bookstore Name]!</strong>
        </p>
        <p className="mb-6">
          At [Your Bookstore Name], we believe that books have the power to
          transform lives, inspire creativity, and open doors to endless
          knowledge. Our mission is to create a seamless, user-friendly platform
          where readers from all walks of life can discover, explore, and enjoy
          a vast collection of books in various genres.
        </p>
        <p className="mb-6">
          Founded by a team of book lovers and tech enthusiasts, we aim to
          bridge the gap between literature and technology. Our carefully
          curated selection of books ranges from fiction, non-fiction, academic
          resources, and free e-books, ensuring there is something for every
          reader.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-3">
            <strong>Extensive Collection:</strong> We offer a wide variety of
            genres, including fiction, science, history, technology, and more,
            catering to all kinds of readers.
          </li>
          <li className="mb-3">
            <strong>User-Friendly Interface:</strong> Our platform is designed
            to provide a seamless experience, making it easy to find and
            purchase your favorite books.
          </li>
          <li className="mb-3">
            <strong>Free E-books:</strong> We believe in the power of free
            knowledge. That’s why we offer a selection of free e-books for our
            users to download and enjoy.
          </li>
          <li>
            <strong>Secure Transactions:</strong> We prioritize your security
            and ensure that every transaction on our platform is safe and
            reliable.
          </li>
        </ul>
        <p className="mb-6">
          Whether you are a casual reader or a bookworm looking for your next
          great read, [Your Bookstore Name] is here to meet your needs. Join us
          in our journey of making books more accessible and enjoyable for
          everyone!
        </p>
        <p className="font-bold text-xl text-gray-800 dark:text-white mt-8">
          Happy Reading!
        </p>
      </div>
    </div>  )
}

export default AboutUs