
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";


import './App.css';
import Contact from "./components/contact/contact";
import Common from "./components/home/Common";
import Footer from './components/layout/footer/footer';
import Navbar from './components/layout/navbar/navbar';
import Services from "./components/services/Services";

function App() {
 
  
  return (
    <div className="App">
      <Navbar ></Navbar>
      <Switch>
      <Route exact path="/">
        <Common page="home"/>
      </Route>
      <Route exact path="/Services">
        <Services/>
      </Route>
      <Route exact path="/Contact">
        <Contact/>
        </Route>
        <Route exact path="/About">
        <Common page="about"/>
      </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
