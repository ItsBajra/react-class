// src/components/HomeComponent/HomeComponent.jsx

import React from 'react';
import CardComponent from '../CardComponent/CardComponent';
import EventFunctionProps from '../props/EventFunctionProps'
import ChampionList from '../../ChampionList';
import LifecycleComponent from '../react_lifecycle/lifecycleComponent';

const HomeComponent = () => {
  const students = [
    { name: 'Subarna Bajracharya', age: 21, grade: 'A', img: '/main.webp' },
    { name: 'Bibek Thapa Magar', age: 21, grade: 'B', img: '/main.webp' },
    { name: 'Sandip Thapa Magar', age: 21, grade: 'A', img: '/main.webp' }
  ];

  return (
    <div className="flex flex-wrap justify-center space-x-6 mx-auto">
      {/* { {students.map((student, index) => (
        <><CardComponent key={index} student={student} /><EventFunctionProps /> </>
      ))} } */}
      <ChampionList />
      <LifecycleComponent />
    </div>
  );
};

export default HomeComponent;
