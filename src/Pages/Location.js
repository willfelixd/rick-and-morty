import React,{useState, useEffect} from 'react'
import Cards from "../components/Cards/Cards"
import InputGroup from "../components/Filters/Category/InputGroup";
import styles from "../Pages/Pages.module.scss";

const Location = () => {

  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [ results, setResults ] = useState([]);
  let { name, type, dimension } = info;
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then(res => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);
  return (
    <div style={{ backgroundColor: "#181818" }} className="Episodes">
      <div className="container">
        <div className="row mb-4">
          <h1 className={`${styles.nameWhite} text-center mt-4 mb-4`}>
          Localização : {" "}
            <span className={`${styles.name} text-info`}>
            {name === "" ? "Unknown" : name}
            </span>
          </h1>
          <h5 className={`${styles.nameWhite} text-center`}>Dimensão : {dimension === "" ? "Unknown" : dimension}</h5>
          <h6 className={`${styles.nameWhite} text-center`}>Tipo : {type === "" ? "Unknown" : type}</h6>
        </div>
        <div className="row">
          <div className="col-lg-3 col-12 mb-4">
            <h4 className="text-center mb-4 text-info">Escolha a localização</h4>
            <InputGroup setID={setID} name="Localização" total={126} />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards page="/location/" results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location

