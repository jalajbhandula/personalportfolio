import React from "react";
import css from "./Work.module.scss";
const Work = () => {
  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <div className={css.logo}>
          <img src="./hcllogo.png" alt="hcllogo" />
        </div>
        <div className={css.name}>HCL Technologies</div>
        <div className={css.experience}>November 2022 - Present</div>
        <div className={css.role}>Software Engineer</div>
      </div>
    </section>
  );
};

export default Work;
