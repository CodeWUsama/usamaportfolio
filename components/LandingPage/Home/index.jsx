import TypeAnimation from '@/components/Shared/TypeAnimation';
import animationData from '@/public/animations/development.json';
import ArrowDownIcon from '@/public/assets/arrow-down.svg';

import LottiePlayer from '../../Shared/LottiePlayer';

import styles from './styles.module.scss';

const Home = ({ id }) => (
  <div className={styles.root} id={id}>
    <div className={styles.hidden}>!</div>
    <div className={styles.mainCont}>
      <div className={styles.leftCont}>
        <p className={styles.headingSecondary}>I am</p>
        <p className={styles.headingPrimary}>Usama Bilal</p>
        <p className={styles.text}>
          A passionate Software Engineer, specialized in web development using React & Node JS. I create amazing web
          applications to make the internet a better place. I am currently working as a Software Engineer at Devsinc.
        </p>
        <p className={styles.text}>
          Talk with me about <TypeAnimation />
        </p>
      </div>
      <div className={styles.rightCont}>
        <LottiePlayer animationData={animationData} className={styles.animation} />
      </div>
    </div>
    <div className={styles.arrowCont}>
      <ArrowDownIcon />
    </div>
  </div>
);

export default Home;
