import React from 'react'; //indica que estoy usando react/
import Header from './components/Header';
import Prueba from './components/Prueba';
import Content from './components/Content';
import Footer from './components/Footer';
import './styles/Header.css';
import './styles/Styles.css';
import './styles/Sections.css';
import './styles/Footer.css';
import './components/Slider';


function App() {
  return <>

    <Header/>
    <Prueba/>
    <Content/>
    <Footer/>
  </>

}

export default App;
