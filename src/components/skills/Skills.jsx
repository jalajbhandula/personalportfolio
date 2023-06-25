import React, { useContext } from 'react'
import css from './Skills.module.scss';
import { skillsData } from '../../utils/data';
import { ThemeContext } from '../../utils/Context';
import { fadeIn, staggerContainer } from '../../utils/motion';
import {motion} from "framer-motion";
const Skills = () => {
const theme = useContext(ThemeContext);
const darkMode = theme.state.darkMode;
  return (
    <motion.section className={css.wrapper}
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}>
        <div className={css.container}>
            
            {
             skillsData.map((skill,i)=>{
                return(
                        <motion.div className={css.skills}  variants={fadeIn("right","tween",0.2*(i+1),1)} style={{background: darkMode?'black':''}}>
                            <skill.icon size={30} style={{ marginRight: '10px',color:skill.bg}} />
                            <div>{skill.name}</div>
                            <div>{skill.knowledge}</div>
                        </motion.div>
                );
             })
            }
        </div>
    </motion.section>
  );
}

export default Skills