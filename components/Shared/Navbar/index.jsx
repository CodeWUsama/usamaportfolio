import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

import { RESUME_LINK } from '@/constants/links';

import Button from '../Button/Button';

import styles from './styles.module.scss';
const LINKS = ['Home', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'];

const Navbar = () => (
  <div className={styles.root}>
    <div className={styles.linksCont}>
      {LINKS.map((title) => (
        <ScrollLink
          key={title}
          activeClass={styles.linkActive}
          to={title}
          className={styles.link}
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
        >
          {title}
        </ScrollLink>
      ))}
    </div>
    <Link href={RESUME_LINK} target="_blank">
      <Button>View Resume</Button>
    </Link>
  </div>
);

export default Navbar;
