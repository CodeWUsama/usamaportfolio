import SOCIAL_LINKS from '@/constants/sociallinks';

import styles from './styles.module.scss';

const Contact = ({ id }) => (
  <div className={styles.root} id={id}>
    <p className={styles.heading}>CONTACT DETAILS</p>
    <p className={styles.text}>
      Stay connected with me on every social media platform, where I&apos;m just a click away from sharing moments,
      exchanging ideas, and engaging in meaningful conversations. Let&apos;s build a vibrant online community together!
    </p>
    <div className={styles.experiencesCont}>
      {SOCIAL_LINKS.map(({ title, link, iconLarge: Icon }) => (
        <div className={styles.experienceCont} key={link}>
          <div className={styles.head}>
            <Icon onClick={() => window.open(link, '_blank')} className={styles.icon} />
          </div>
          <div className={styles.linkCont}>
            <a className={styles.expSubHeading} href={link} target="_blank" rel="noreferrer">
              {title || link.replace('https://', '')}
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Contact;
