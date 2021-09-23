
import React from 'react';
import { FaPalette } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';

function Skills() {
  return (
    <div className="flex flex-col sm:flex-row  align-center justify-center max-w-2xl mx-auto mt-8">
      <div className="p-4 w-40 mx-auto text-center rounded-xl border-2 border-gray-800 bg-white">
        <FaPalette className="text-4xl mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">FrontEnd</p>
      </div>
      <div className="p-4 w-40 mx-auto text-center rounded-xl border-2 border-gray-800 bg-white">
        <FaPalette className="text-4xl mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">FrontEnd</p>
      </div>
       <div className="p-4 w-40 mx-auto text-center rounded-xl border-2 border-gray-800 bg-white">
        <FaPalette className="text-4xl mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">FrontEnd</p>
      </div>
    </div>

  );
}

export default Skills;
