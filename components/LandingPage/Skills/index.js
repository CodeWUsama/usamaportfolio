import CssLogo from '@/public/assets/css.svg';
import HtmlLogo from '@/public/assets/html.svg';
import JSLogo from '@/public/assets/javascript.svg';
import MongoDBLogo from '@/public/assets/mongodb.svg';
import NextLogo from '@/public/assets/nextjs.svg';
import NodeLogo from '@/public/assets/node.svg';
import PostgresLogo from '@/public/assets/postgres.svg';
import PrismaLogo from '@/public/assets/prisma.svg';
import ReactLogo from '@/public/assets/react.svg';
import ReduxLogo from '@/public/assets/redux.svg';

import styles from './styles.module.scss';

const SKILLS = [
  { title: 'React', logo: ReactLogo },
  { title: 'Next JS', logo: NextLogo },
  { title: 'Node JS', logo: NodeLogo },
  { title: 'Redux', logo: ReduxLogo },
  { title: 'MongoDB', logo: MongoDBLogo },
  { title: 'HTML 5', logo: HtmlLogo },
  { title: 'CSS 3', logo: CssLogo },
  { title: 'JavaScript', logo: JSLogo },
  { title: 'Postgresql', logo: PostgresLogo },
  { title: 'Prisma', logo: PrismaLogo },
];

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
