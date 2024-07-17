import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Logo from "./img/logo.png"
import Home from "./img/rickandmorty.png"
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="App">
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
                <Cards />
               </div>
             </div>
       </div>     
      </div>
    </div>
  );
}

export default App;
