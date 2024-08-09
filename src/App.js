import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Img from "./img/nave.png";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Cards/CardDetails";

function App() {
  return(
    <Router>
        <div className="App">
        <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CardDetails />} />

          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes:id" element={<CardDetails />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location:id" element={<CardDetails />} />
        </Routes>
    </Router>
  )
}
const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?
  page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect (() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div style={{ backgroundColor: "#181818" }} className="App">
      <center className="mb-4">
      <img src={Img} alt="nave" width="230" height="225" title="nave" />
      </center>

      <Search updatePageNumber={updatePageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
            <Filters 
            setSpecies={setSpecies}
            setGender={setGender} 
            setStatus={setStatus} 
            updatePageNumber={updatePageNumber}
            />
             <div className="col-lg-8 col-12">
               <div className="row">
                <Cards page="/" results={results}/>
               </div>
             </div>
       </div>     
      </div>

      <Pagination 
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber} 
      />
    </div>
  );
}

export default App;
