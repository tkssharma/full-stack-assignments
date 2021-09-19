
import React from 'react'
function HeaderComp() {
  return (
    <nav className="fixed w-full md:container md:mx-auto z-10 top-0 bg-gray-800">
      <div className="w-full md:container  md:mx-auto flex flex-wrap item-center justify-between mt-0 py-3">

        <div className="pl-4">
          <a className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" href="#">
            Minimal Blog
          </a>
        </div>

        <div className="block md:hidden lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="
            flex
            items-center
            px-3
            py-2
            border
            rounded
            text-gray-500
            border-gray-600
            hover:text-gray-900 hover:border-green-500
            appearance-none
            focus:outline-none
          "
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="flex-grow md:block hidden lg:block mt-2 bg-gray-100 md:bg-transparent">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
                href="#"
              >link</a
              >
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
                href="#"
              >link</a
              >
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
                href="#"
              >link</a
              >
            </li>
          </ul>

        </div>
      </div>
    </nav>

  );
}

export default HeaderComp;
