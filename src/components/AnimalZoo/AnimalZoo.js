import React, { useEffect, useState } from 'react';
import AnimalZooList from './AnimalZooList';

const AnimalZoo = () => {

   const [animals, setAnimals] = useState([])

   useEffect(() => {
      fetch('https://api.thedogapi.com/v1/breeds?limit=21')
      .then(res => res.json())
      .then(data => setAnimals(data))
   },[])

   return (
      <section className="container">
         <div className="row">
            <div className="animal-zoz">
               {
                  animals.map(animal => <AnimalZooList animal={animal} ></AnimalZooList>)
               }
            </div>
         </div>
      </section>
   );
};

export default AnimalZoo;