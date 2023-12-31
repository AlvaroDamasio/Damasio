
import './App.css';
import About from './components/about/AboutComponent';
import Header from './components/header/HeaderComponent';
import Contato from './components/contato/ContatoComponent';
import Hero from './components/hero/HeroComponent';


import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import Ilustration from './components/Ilustration/Ilustration';
import Stacks from './components/stacks/Stacks';
import Action from './components/action/Action';
import Project from './components/projects/Projects';
import Words from './components/words/Words';
import TextArea from './components/textArea/TextArea';
import capImagesWebSite from "./assets/MacBook Air - 1 2.png"
import PdvImage from "./assets/pdvPicture.png"




function App() {
  
  
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Ilustration/>
      <Stacks/>
      <Action/>
      <Project image={capImagesWebSite} url="https://github.com/AlvaroDamasio/catalogo" title="CAP STORE" subtitle="Um catálogo para loja de bonés"/>
      <Project position="rigth" image={PdvImage} url="/about" title="PDV" subtitle="Aplicação de controle de caixa"/>
      <Words duration={5}/>
      <Words duration={5.1}/>
      <Words duration={5.2}/>
      <TextArea/>
      <Contato/>
  
      
    </div>
  );
}

export default App;
