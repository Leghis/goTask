import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import {Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import FooterComponent from "./components/FooterComponent";
import Error from "./views/Error";
import connexion from "./views/connexion";
import inscription from "./views/inscription";

function App() {
    const navigation = [
        { name: 'Accueil', href: '/' },
    ]
  return (
    <div className="App">
        <HeaderComponent navigation={navigation}/>
        <Routes>
            <Route path="*" element={Error()}/>
            <Route path="/" element={Home()}/>
            <Route path={"connexion"} element={connexion()}/>
            <Route path={"inscription"} element={inscription()}/>
        </Routes>
        <FooterComponent/>
    </div>
  );
}

export default App;
