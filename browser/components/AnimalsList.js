import React from 'react';
import AnimalCard from './AnimalCard';

const AnimalsList = ({ animals, species, selectAnimal }) => (
  <div className="row">
    <h4>adopt a { species }!</h4>
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
