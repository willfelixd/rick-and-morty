import React from 'react'
import FilterBTN from '../FilterBTN';

const Species = ({ setSpecies, updatePageNumber }) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ];
  return (
    <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Espécies
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex flex-wrap gap-3">
                {species.map((itens, index) => (
                    <FilterBTN 
                      task={setSpecies}
                      updatePageNumber={updatePageNumber}
                      key={index} 
                      name="species" 
                      index={index} 
                      itens={itens}
                    />
                ))}
            </div>
          </div>
        </div>
  )
}

export default Species
