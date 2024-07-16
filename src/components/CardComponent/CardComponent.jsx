import React from "react";

const CardComponent = ({ student }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10">
      <img src={student.img} alt="Main" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{student.name}</div>
        <p className="text-gray-700 text-base">
          Age: {student.age}
        </p>
        <p className="text-gray-700 text-base">
          Grade: {student.grade}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;




        //     <div class="flex flex-wrap justify-center space-x-6 mx-auto">

        //     <div class="max-w-sm rounded overflow-hidden shadow-lg mt-10">
        //       <img class="w-full" src="/main.webp" alt="ufc" />
        //         <div class="px-6 py-4">
        //             <div class="font-bold text-xl mb-2">Lorem, ipsum dolor.</div>
        //             <p class="text-gray-700 text-base">
        //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //             </p>
        //         </div>
        //     </div>

        //     <div class="max-w-sm rounded overflow-hidden shadow-lg mt-10">
        //       <img class="w-full" src="/main.webp" alt="ufc" />
        //         <div class="px-6 py-4">
        //             <div class="font-bold text-xl mb-2">Lorem, ipsum dolor.</div>
        //             <p class="text-gray-700 text-base">
        //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //             </p>
        //         </div>
        //     </div>

        //     <div class="max-w-sm rounded overflow-hidden shadow-lg mt-10">
        //       <img class="w-full" src="/main.webp" alt="ufc" />
        //         <div class="px-6 py-4">
        //             <div class="font-bold text-xl mb-2">Lorem, ipsum dolor.</div>
        //             <p class="text-gray-700 text-base">
        //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //             </p>
        //         </div>
        //     </div>

        // </div>

