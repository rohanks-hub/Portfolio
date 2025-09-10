import React from 'react';
import photo from './me.jpeg';

const Home = () => (
  <div className="h-screen flex items-center justify-center bg-black text-white">
    <div className="flex flex-col items-center text-center px-6 max-w-3xl">
      <img
        src={photo}
        alt="Rohan Kallidukil Sojo"
        className="mb-6"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <h1 className="text-3xl font-semibold mb-4">Hi, I am Rohan Kallidukil Sojo.</h1>
      <h2 className="text-xl md:text-2xl font-light mb-6">
        I'm a passionate Computer Science student exploring the world of AI, ML, and web development to build impactful tech solutions. Feel free to explore and get in touch if you have any questions or opportunities for collaboration.
      </h2>
      <p className="mt-2 text-lg underline cursor-pointer hover:text-gray-300 size-2xl">
        Resume
      </p>
    </div>
  </div>
);

export default Home;