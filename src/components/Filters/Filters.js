import React from "react";
import styles from "./Filters.module.scss";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setStatus, setGender, setSpecies, updatePageNumber }) => {

  let clear =()=>{
    setStatus("");
    setGender("");
    setSpecies("");
    updatePageNumber("");
    window.location.reload(false);
  };
  return (
    <div className="col-3">
      <div className={`${styles.name} text-center fw-bold fs-4 mb-2`}>Filtros</div>
      <div 
      onClick={clear}
      style={{ cursor: "pointer" }} 
      className="text-center text-info text-decoration-underline mb-3">Limpar Filtros</div>
      
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} updatePageNumber={updatePageNumber} />
        <Species setSpecies={setSpecies} updatePageNumber={updatePageNumber} />
        <Gender setGender={setGender} updatePageNumber={updatePageNumber} /> 
      </div>
    </div>
  )
}

export default Filters
