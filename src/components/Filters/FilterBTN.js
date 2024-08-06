import React from 'react'

const FilterBTN = ({name, index, itens, task, updatePageNumber}) => {
  return (
    <div>
        <style jsx>
            {`
                .x:checked + label {
                  background-color: #12b0c9;
                  color: white;
                }
                
                input[type="radio"] {
                  display: none;
                }
            `}

        </style>
        <div className="form-check">
            <input 
            onClick={() => {
              updatePageNumber(1);
              task(itens);
            }}
            className="form-check-input x" 
            type="radio" name={name} id={`${name}-${index}`}/>
            <label className="btn btn-outline-info" for={`${name}-${index}`}>
                {itens}
            </label>
        </div>
    </div>
  )
}

export default FilterBTN
