import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";

const Cards = ({results, page}) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let {id, name, image, location, status, gender, species } = x;
      return (
      <Link 
        style={{ textDecoration: "none" }}
        to={`${page}${id}`}
        key={id} 
        className="col-lg-4 col-mb-6 col-12 mb-4 position-relative text-dark">
        <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
          <img src={image} alt="" className={`${styles.img} img-fluid`} />
          <div style={{ padding: "10px" }}className="content">
            <div className={`${styles.name} fs-4 fw-bold d-flex justify-content-center mb-1`}>{name}</div>
            <div className="">
                 <div className={`${styles.nameLoc} fs-6`}>Género: {gender}</div>
            </div>
            <div className="">
              <div className={`${styles.nameLoc} fs-6`}>Espécie: {species}</div>
            </div>
            <div className="">
              <div className={`${styles.nameLoc} fs-6`}>Localização: {location.name}</div>
            </div>
          </div>
        </div>
        {(() => {
          if(status === "Dead"){
            if(gender === "Male"){
            return(
              <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                 {status = "Morto"}
               </div>
            );} else if(gender === "Female"){
                return(
                  <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                     {status = "Morta"}
                  </div>
                );} else{
                    return(
                      <div className={`${styles.badge} position-absolute badge bg-primary`}>
                         {status = "Desconhecido"}
                      </div>
                    );}

          } else if(status === "Alive"){
            if(gender === "Male"){
              return(
                <div className={`${styles.badge} position-absolute badge bg-success`}>
                   {status = "Vivo"}
                 </div>
              );} else if(gender === "Female"){
                  return(
                    <div className={`${styles.badge} position-absolute badge bg-success`}>
                       {status = "Viva"}
                    </div>
                  );} else{
                      return(
                        <div className={`${styles.badge} position-absolute badge bg-primary`}>
                           {status = "Desconhecido"}
                        </div>
                      );}
          } else{
            return(
              <div className={`${styles.badge} position-absolute badge bg-primary`}>
                 {status = "Desconhecido"}
              </div>
            );}
        })()}
      </Link>
      ); 
    });
  }
  else {
    display = <div className={`${styles.nameLoc} fs-6`}>Nenhum Personagem Encontrado!</div>
  }
  return <>{display}</>;
 
};

export default Cards

