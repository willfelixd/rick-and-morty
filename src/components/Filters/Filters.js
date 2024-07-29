import React from "react";
import styles from "./Filters.module.scss";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
import { clear } from "@testing-library/user-event/dist/clear";

const Filters = ({ setStatus, setGender, setSpecies, setPageNumber }) => {

  let clear =()=>{
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber("");
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
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} /> 
      </div>
    </div>
  )
}

export default Filters
