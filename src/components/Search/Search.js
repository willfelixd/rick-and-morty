import React from "react";
import styles from "./Search.module.scss";
//import Lupa from "./img/lupa.png";

const Search = ({ setSearch, updatePageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
        <input onChange={(e) => {
            updatePageNumber(1);
            setSearch(e.target.value);
        }}placeholder="Procurar Personagem" type="text" className={styles.input} />
        <button onClick={(e) => {
            e.preventDefault();
        }}
        className={`${styles.btn} btn btn-info fs-5`}>
            Buscar
        </button>
    </form>
  );
};

export default Search;
