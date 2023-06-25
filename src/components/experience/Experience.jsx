import React, { useContext } from 'react'
import { projectExperience, HowCanIHelp } from '../../utils/data'
import css from './Experience.module.scss'
import {motion} from "framer-motion";
import { fadeIn, staggerContainer } from '../../utils/motion';
import { ThemeContext } from '../../utils/Context';
const Experience = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  return (
    <motion.section 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className={css.wrapper} >
        <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
            <div className={css.leftSide}>
               {
                projectExperience.map((exp,i)=>{
                    return(<motion.div variants={fadeIn("right","tween",0.2*(i+1),1)} className={css.exp} style={{background: darkMode?'black':''}} key={i}>
                                <div className="flexCenter" style={{background:exp.bg}}>
                                    <exp.icon size={25} color="white"/>
                                </div>    
                                <div>
                                    <span>
                                        {exp.name}
                                    </span>
                                    <span className="secondaryText">
                                        {exp.projects}
                                    </span>
                                </div>    
                            </motion.div>    
                    );
                })
               }
            </div>
            <motion.div className={css.rightSide} variants={fadeIn("left","tween",0.2,1)} >
                <div className="primaryText">
                    How Can I Help?
                </div>
                <div className="secondaryText">
                    {HowCanIHelp}
                </div>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default Experience