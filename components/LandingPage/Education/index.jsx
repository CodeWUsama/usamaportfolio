import EDUCATION from '@/constants/education.js';

import styles from './styles.module.scss';

const Education = ({ id }) => (
  <div className={styles.root} id={id}>
    <p className={styles.heading}>My Education</p>
    <p className={styles.text}>
      Driven by an insatiable curiosity and a deep love for all things tech-related, I embarked on a path to pursue
      computer science education with an unmatched zeal.
    </p>
    <div className={styles.experiencesCont}>
      {EDUCATION.map(({ institute, tenure, program, grade, description }) => (
        <div className={styles.experienceCont} key={institute + '-' + program}>
          <div className={styles.head}>
            <p className={styles.expMainHeading}>{institute}</p>
            <p className={styles.expSubHeading}>{program}</p>
            <p className={styles.expSubHeading}>({tenure})</p>
            <p className={styles.expSubHeading}>{grade}</p>
          </div>
          <div className={styles.divider} />
          <p className={styles.descItem}>{description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Education;
