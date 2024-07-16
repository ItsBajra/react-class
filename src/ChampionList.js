import React from 'react';
import ufcChampions from './data/ufcChampions';

const ChampionList = () => {
  return (
    <div className="bg-gray-400 text-white p-5 rounded-lg mt-10 w-full mx-auto">
      <h2 className="text-2xl mb-4 text-green-300">Current UFC Champions</h2>
      <ul>
        {ufcChampions.map((champion, index) => (
          <li
            key={index}
            className="flex items-center p-4 my-2 bg-gray-200 text-black rounded-md transition-transform transform hover:scale-105"
          >
            <img src={champion.picture} alt={champion.champion} className="w-24 h-24 rounded-full mr-4" />
            <div>
              <h3 className="font-bold text-xl">{champion.weightClass}</h3>
              <p className="font-semibold">{champion.champion}</p>
              <p className="text-gray-400">{champion.details}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChampionList;
