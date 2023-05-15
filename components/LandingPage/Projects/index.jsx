import Button from '@/components/Shared/Button/Button';
import { PROJECTS_LINK } from '@/constants/links';
import PROJECTS from '@/constants/projects';

import styles from './styles.module.scss';

const Projects = ({ id }) => (
  <div className={styles.root} id={id}>
    <p className={styles.heading}>Top Projects</p>
    <p className={styles.text}>
      Unleashing the Power of Full Stack Brilliance: Crafting Exceptional Projects with a Blend of Modern Technologies,
      Seamless Integration, and Unwavering Innovation.
    </p>
    <div className={styles.experiencesCont}>
      {PROJECTS.map(({ title, tech, description }) => (
        <div className={styles.experienceCont} key={title}>
          <div className={styles.head}>
            <p className={styles.expMainHeading}>{title}</p>
            <p className={styles.expSubHeading}>{tech}</p>
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
    <Button onClick={() => window.open(PROJECTS_LINK, '_blank')}>View More</Button>
  </div>
);

export default Projects;
