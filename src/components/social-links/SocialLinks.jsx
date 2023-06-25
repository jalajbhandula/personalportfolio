import React, { useContext } from "react";
import css from "./Social.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ThemeContext } from "../../utils/Context";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../../utils/motion";
const SocialLinks = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <motion.section className={css.wrapper}
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}>
      
      <div className={css.container}>
        <motion.a href="https://in.linkedin.com/in/jalajbhandula" target="_blank" variants={slideIn("left","tween",0.5,1.3)}>
          <div
            className={`${css.links}`}
            style={{ background: darkMode ? "black" : "" }}
          >
            LinkedIn <FaLinkedin style={{color:"#0A66C2"}}/>
          </div>
        </motion.a>
        <motion.a href="https://github.com/jalajbhandula" target="_blank" variants={slideIn("right","tween",0.5,1.3)}>
          <div
            className={`${css.links}`}
            style={{ background: darkMode ? "black" : "" }}
          >
            GitHub <FaGithub />
          </div>
        </motion.a>
      </div>
    </motion.section>
  );
};

export default SocialLinks;
