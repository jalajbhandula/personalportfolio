import React, { useContext } from "react";
import css from "./Toggle.module.scss";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../utils/Context";
const Toggle = () => {
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;

    const handleClick=()=>{
        theme.dispatch({type:'toggle'});
    }
  return (
    <div className={css.toggle} onClick={handleClick}>
      <FaMoon />
      <FaSun />
      <div className={css.tbutton} style={darkMode? {left:'0.2rem'}:{right:'0.2rem'}} >
        
      </div>
    </div>
  );
};

export default Toggle;
