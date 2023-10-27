
import './App.css'
import Header from './components/Header'
import { BrowserRouter } from "react-router-dom";
import Rutas from './components/Rutas';
import Footer from './components/Footer';

const App =() => {
  return (
    <BrowserRouter>
      <Header/>
      <Rutas/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
