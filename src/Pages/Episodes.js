import React,{useState, useEffect} from 'react'
import Cards from "../components/Cards/Cards"
import InputGroup from "../components/Filters/Category/InputGroup";
import styles from "../Pages/Pages.module.scss";

const Episodes = () => {

  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [ results, setResults ] = useState([]);
  let { air_date, name } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then(res => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
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
            Episódio : {" "}
            <span className={`${styles.name} text-info`}>
            {name === "" ? "Unknown" : name}
            </span>
          </h1>
          <h5 className={`${styles.nameWhite} text-center`}>Data de estreia : {air_date === "" ? "Unknown" : air_date}</h5>
        </div>
        <div className="row">
          <div className="col-lg-3 col-12 mb-4">
            <h4 className="text-center mb-4 text-info">Escolha o episódio</h4>
            <InputGroup setID={setID} name="Episódio" total={51} />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes
