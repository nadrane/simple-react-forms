import React from 'react';
import AnimalCard from './AnimalCard';

const AnimalsList = ({ animals, view, selectAnimal }) => (
  <div className="row">
    <h4>{view}</h4>
    <div>
      {
        animals.map(animal => <AnimalCard
          key={animal.id}
          animal={animal}
          selectAnimal={selectAnimal}
        />)
      }
    </div>
  </div>
);

export default AnimalsList;
