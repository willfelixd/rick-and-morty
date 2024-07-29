import React from 'react'
import FilterBTN from '../FilterBTN';

const Gender = ({ setGender, setPageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <div className="accordion-item">
          <h2 class="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Género
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex flex-wrap gap-3">
              {genders.map((itens, index) => (
                <FilterBTN 
                  task={setGender}
                  setPageNumber={setPageNumber}
                  key={index} 
                  name="genders" 
                  index={index} 
                  itens={itens}
                />
              ))}
            </div>
          </div>
        </div>
  )
}

export default Gender

