import React, { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer';
import { Link as ScrollLink } from 'react-scroll';
import clsx from 'clsx';
import Link from 'next/link';

import { RESUME_LINK } from '@/constants/links';
import { LINKS, LINKS_ICONS } from '@/constants/navigation';
import CrossIcon from '@/public/assets/cross.svg';
import MenuIcon from '@/public/assets/menu.svg';

import Button from '../Button/Button';

import 'react-modern-drawer/dist/index.css';
import styles from './styles.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    return () => {
      window.onscroll = () => {};
    };
  }, []);

  return (
    <>
      <div className={clsx(styles.rootWeb, scrolled && styles.shadow)}>
        <div className={styles.linksCont}>
          {LINKS.map((title) => (
            <ScrollLink
              key={title}
              activeClass={styles.linkActive}
              to={title}
              className={styles.link}
              spy={true}
              smooth={true}
              offset={-70}
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
      <div className={styles.rootMobile}>
        <MenuIcon onClick={() => setIsOpen(true)} />
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left" size="80%" className={styles.drawer}>
          <div className={styles.mobileLinksCont}>
            <div className={styles.crossCont}>
              <CrossIcon onClick={toggleDrawer} />
            </div>
            {LINKS.map((title, index) => {
              const Icon = LINKS_ICONS[index];
              return (
                <div key={title} className={styles.linkRow}>
                  <Icon />
                  <ScrollLink
                    activeClass={styles.linkActive}
                    to={title}
                    className={styles.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={toggleDrawer}
                  >
                    {title}
                  </ScrollLink>
                </div>
              );
            })}
          </div>
        </Drawer>
        <Link href={RESUME_LINK} target="_blank">
          <Button>View Resume</Button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
