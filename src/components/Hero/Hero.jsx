import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ashmit Sinha</h1>
        <p className={styles.description}>
        To secure a challenging position in a reputed organization to expand my learning, knowledge and skills. Being a Problem solver and fast learner with fine communication skills, I am motivated to upgrade and expand my skill set through mentorship and challenging projects. I enjoy working collaboratively, but can also run with projects independently. I am excited about the prospect of joining a growing company.
        </p>
        <a
          href="mailto:ashmit.sinha359@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Ashmit.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
