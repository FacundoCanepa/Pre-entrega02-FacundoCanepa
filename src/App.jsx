
import './App.css'
import Header from './components/Header'
import { BrowserRouter } from "react-router-dom";
import Rutas from './components/Rutas';
import Footer from './components/Footer';
import CustomProvider from "./providers/CustomProvider"

const App =() => {
  return (
    <BrowserRouter>
      <CustomProvider>
        <Header/>
        <Rutas/>
        <Footer/>
      </CustomProvider>
    </BrowserRouter>
  )
}

export default App
