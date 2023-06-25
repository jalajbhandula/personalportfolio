import React, { useContext } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants, getMenuStyles } from "../../utils/motion";
import { useState } from "react";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import Toggle from "../Toggle/Toggle";
import { ThemeContext } from "../../utils/Context";
const Header = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Jalaj Bhandula</div>
        <Toggle />

        <ul
          style={{...getMenuStyles(menuOpened),background: darkMode ? 'black' : ''}}
          className={`flexCenter ${css.menu}`} 
        >
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+91 8094234456</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        {/* Only for Small and Middle size screens */}
        <div className={`${css.menuIcon}`}>
          <BiMenuAltRight
            size={30}
            onClick={() => setmenuOpened((prev) => !prev)}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
