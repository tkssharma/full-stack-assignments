
import React from 'react'
function HeaderComp() {
  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">

        <div className="font-sans">
          <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            Welcome to Minimal Blog
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-600">Published 19 February 2019</p>

        </div>
        <p className="py-6">
          👋 Welcome fellow
          <a className="text-green-500 no-underline hover:underline" href="https://www.tailwindcss.com">Tailwind CSS</a> and
          miminal monochrome blog fan. This starter template provides a starting point to create your own minimal
          monochrome blog using Tailwind CSS and vanilla Javascript.
        </p>
        <p className="py-6">
          👋 Welcome fellow
          <a className="text-green-500 no-underline hover:underline" href="https://www.tailwindcss.com">Tailwind CSS</a> and
          miminal monochrome blog fan. This starter template provides a starting point to create your own minimal
          monochrome blog using Tailwind CSS and vanilla Javascript.
        </p>

      </div>

    </div>

  );
}

export default HeaderComp;
