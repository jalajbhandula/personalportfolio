import Header from "./components/header/Header"
import css from './styles/app.module.scss'
import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import SocialLinks from "./components/social-links/SocialLinks";
import {ThemeContext} from './utils/Context'
import { useContext } from "react";
import Skills from "./components/skills/Skills";

import person from '/person.png'
import { Helmet } from "react-helmet";
import Work from "./components/work/Work";
const App = () => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  return <div className={`bg-primary ${css.container}`} style={{
    background:darkMode? 'black' :'',
    color:darkMode?'white':'',
  }}>
    <Helmet>
          <title>Portfolio</title>
          <link rel="icon" type="image/png" href={person}/>
    </Helmet>
    <Header />
    <Hero/>
    <SocialLinks />
    <Work />
    <Skills/>
    <Experience/>
  
  </div>
  ;

};

export default App;
