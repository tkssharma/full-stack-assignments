
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs bg-white mx-auto shadow-xl rounded-xl p-5">
        <div>
          <img className="w-32 mx-auto rounded-full " src="https://avatars.githubusercontent.com/u/10391135?v=4" alt="profile" />
        </div>

        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            Tksharma
          </p>
          <p className="text-xs pt-2 pb-4 border-b-2 px-5 w-auto font-semibold text-gray-600">
            Front end Developer
          </p>

          <div className="flex algn-center justify-center mt-4">
            <a href="#" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-800 rounder-full hover:text-white " ><FaGithub /></a>
            <a href="#" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-800 rounder-full hover:text-white " > <FaTwitter /></a>
            <a href="#" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-800 rounder-full hover:text-white " ><FaTwitter /></a>
            <a href="#" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-800 rounder-full hover:text-white " ><FaTwitter /></a>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Card;
