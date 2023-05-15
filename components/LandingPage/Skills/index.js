import SKILLS from '@/constants/skills';

import styles from './styles.module.scss';

const Skills = ({ id }) => (
  <div className={styles.root} id={id}>
    <p className={styles.heading}>What I use</p>
    <p className={styles.text}>
      Building cutting-edge web experiences with modern technology stack - bringing your ideas to life. Embracing
      innovation and always eager to learn the latest modern technologies to enhance the development process.
    </p>
    <div className={styles.cont}>
      {SKILLS.map(({ title, logo: SkillLogo }) => (
        <div className={styles.skillCont} key={title}>
          <SkillLogo />
          <p className={styles.skillTitle}>{title}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
