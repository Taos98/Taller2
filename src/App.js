import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MiComponente from './vistas/formulario/MiComponente';
import IntegrantesComponente from './vistas/formulario/IntegrantesComponente';

function App() {


  function Navbar() {
    return (
      <nav className="topnav">
        <Link to="/Integrantes">Integrantes</Link>
        <Link to="/personas">Personas</Link>
        {/* <Link to="/personas2">Persona 2</Link> */}
        
      </nav>
    )
  }

  return (
    <Router>
       <Navbar />
    <Switch>
      <Route  path="/Integrantes" component={IntegrantesComponente} />
      <Route path="/personas" component={MiComponente} />
    </Switch>
  </Router>
  );

}

export default App;
