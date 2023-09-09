import clsx from 'clsx';
import Link from 'next/link';

import EXPERIENCES from '@/constants/experiences.js';

import styles from './styles.module.scss';

const Experiences = ({ id }) => (
  <div className={styles.root} id={id}>
    <p className={styles.heading}>Experiences</p>
    <p className={styles.text}>
      Bringing over substantial years of experience in designing and developing innovative and user-centric web
      solutions.
    </p>
    <div className={styles.experiencesCont}>
      {EXPERIENCES.map(({ company, tenure, title, description, companyLinkedin }) => (
        <div className={styles.experienceCont} key={company + '-' + title}>
          <div className={styles.head}>
            <Link href={companyLinkedin} className={styles.companyLink} target="_blank">
              <p className={styles.expMainHeading}>{company}</p>
            </Link>
            <p className={clsx(styles.expSubHeading, styles.title)}>{title}</p>
            <p className={clsx(styles.expSubHeading, styles.tenure)}>{tenure}</p>
          </div>
          <div className={styles.divider} />
          <ul className={styles.listCont}>
            {description.map((el) => (
              <li key={el} className={styles.descItem}>
                {el}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Experiences;
