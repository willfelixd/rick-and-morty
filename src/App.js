import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Logo from "./img/logo.png";
import Home from "./img/rickandmorty.png";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect (() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div style={{ backgroundColor: "#181818" }} className="App">
      <img src={Logo} alt="Logo" width="80" height="40" title="Logo" />
      <center>
      <img src={Home} alt="Rick and Morty" width="250" height="250" title="Rick and Morty" />
      </center>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
             <div className="col-8">
               <div className="row">
                <Cards results={results}/>
               </div>
             </div>
       </div>     
      </div>
    </div>
  );
}

export default App;
