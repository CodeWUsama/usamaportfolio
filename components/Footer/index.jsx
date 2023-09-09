import Link from 'react-scroll/modules/components/Link';

import { LINKS, LINKS_ICONS } from '@/constants/navigation';
import SOCIAL_LINKS from '@/constants/sociallinks';

import styles from './styles.module.scss';

const Footer = () => (
  <div className={styles.root}>
    <div className={styles.sectionsCont}>
      <div className={styles.sectionCont}>
        <p className={styles.heading}>How it started</p>
        <p className={styles.text}>
          In 2017, I fell in love with programming and it has become my passion. The ability to create, solve complex
          problems and constantly learn has captivated me. Programming is not just a job or a hobby, it is something
          that truly inspires me and I am excited to see where this journey takes me.
        </p>
      </div>
      <div className={styles.sectionCont}>
        <p className={styles.heading}>Sections</p>
        <div className={styles.linksCont}>
          {LINKS.map((link, i) => {
            const Icon = LINKS_ICONS[i];
            return (
              <div className={styles.linkCont} key={link}>
                <Icon />
                <Link to={link} className={styles.link} spy={true} smooth={true} offset={-80} duration={500}>
                  {link}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.sectionCont}>
        <p className={styles.heading}>Lets Talk!</p>
        <div className={styles.socialsCont}>
          {SOCIAL_LINKS.map(({ link, icon: Icon }) => (
            <a key={link} className={styles.social} href={link} target="_blank" rel="noreferrer">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <h3 className={styles.footerText}>
        © {new Date().getFullYear()} Made with love - <strong>Usama Bilal</strong>
      </h3>
    </div>
  </div>
);

export default Footer;
