
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import Background from '../bg.jpeg';
const profile = 'https://source.unsplash.com/MP0IUfwrn0A';
function Card() {

  return (
    <div className="font-sans text-gray-900 leading-normal bg-cover" style={{
      background: `url(${Background})`,
    }}>

      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">

          <div class="p-4 md:p-12 text-center lg:text-left">
            <div
              class="block lg:hidden rounded-full shadow-xl mx-auto mt-16 h-48 w-48 bg-cover bg-center"
              style={{
                background: `url(${profile})`,
              }}
            ></div>
          </div>

          <h1 className="text-2xl font-bold pt-8 lg:pt-0">Your Name</h1>
        </div>

        <div className="w-full lg:w-2/5 ">
          <img
            src="https://source.unsplash.com/MP0IUfwrn0A"
            class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
        </div>
      </div>
    </div>

  );
}

export default Card;
