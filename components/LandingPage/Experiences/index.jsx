import EXPERIENCES from '@/constants/experiences.js';

import styles from './styles.module.scss';

const Experiences = ({ id }) => (
  <div className={styles.root} id={id}>
    <p className={styles.heading}>Experiences</p>
    <p className={styles.text}>
      Bringing over 2 years of experience in designing and developing innovative and user-centric web solutions.{' '}
    </p>
    <div className={styles.experiencesCont}>
      {EXPERIENCES.map(({ company, tenure, title, description }) => (
        <div className={styles.experienceCont} key={company + '-' + title}>
          <div className={styles.head}>
            <p className={styles.expMainHeading}>{company}</p>
            <p className={styles.expSubHeading}>{title}</p>
            <p className={styles.expSubHeading}>({tenure})</p>
          </div>
          <div className={styles.divider} />
          <ul className={styles.listCont}>
            {description.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Experiences;
