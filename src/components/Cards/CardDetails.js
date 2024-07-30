import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./Cards.module.scss";

const CardDetails = () => {
    let { id } = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let {name, image, location, origin, gender, species, status, episode} = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/${id}`;
    useEffect (() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json());
          updateFetchedData(data);
        })();
      }, [api]);

    return (
        <div style={{ backgroundColor: "#181818" }} className="App d-flex justify-content-center">
            <div className="mt-4 d-flex flex-column gap-3">
                <h1 className=" text-info text-center">{name}</h1>
                <img src={image} alt="" className="img-fluid"/>

                {(() => {
          if(status === "Dead"){
            if(gender === "Male"){
            return(
              <div className="badge bg-secondary fs-5">
                 {status = "Morto"}
               </div>
            );} else if(gender === "Female"){
                return(
                  <div className="badge bg-secondary fs-5">
                     {status = "Morta"}
                  </div>
                );} else{
                    return(
                      <div className="badge bg-primary fs-5">
                         {status = "Desconhecido"}
                      </div>
                    );}

          } else if(status === "Alive"){
            if(gender === "Male"){
              return(
                <div className="badge bg-success fs-5">
                   {status = "Vivo"}
                 </div>
              );} else if(gender === "Female"){
                  return(
                    <div className="badge bg-success fs-5">
                       {status = "Viva"}
                    </div>
                  );} else{
                      return(
                        <div className="badge bg-primary fs-5">
                           {status = "Desconhecido"}
                        </div>
                      );}
          } else{
            return(
              <div className="badge bg-primary fs-5">
                 {status = "Desconhecido"}
              </div>
            );}
                })()}
                <div className="container">
                    <div className={`${styles.nameLoc} fs-6`}>
                        <span className="fw-bold">Espécie : </span>
                        {species}
                    </div>
                    <div className={`${styles.nameLoc} fs-6`}>
                        <span className="fw-bold">Origem : </span>
                        {origin?.name}
                    </div>
                    <div className={`${styles.nameLoc} fs-6`}>
                        <span className="fw-bold">Localização : </span>
                        {location?.name}
                    </div>
                    <div className={`${styles.nameLoc} fs-6 mb-4`}>
                        <span className="fw-bold">Género : </span>
                        {gender}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CardDetails;
