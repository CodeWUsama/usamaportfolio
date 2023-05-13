import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

import { RESUME_LINK } from '@/constants/links';
import ContactIcon from '@/public/assets/contact.svg';
import CrossIcon from '@/public/assets/cross.svg';
import EducationIcon from '@/public/assets/education.svg';
import ExperienceIcon from '@/public/assets/experience.svg';
import HomeIcon from '@/public/assets/home.svg';
import MenuIcon from '@/public/assets/menu.svg';
import ProjectsIcon from '@/public/assets/projects.svg';
import SkillsIcon from '@/public/assets/skills.svg';

import Button from '../Button/Button';

import 'react-modern-drawer/dist/index.css';
import styles from './styles.module.scss';

const LINKS = ['Home', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'];
const LINKS_ICONS = [HomeIcon, SkillsIcon, ExperienceIcon, EducationIcon, ProjectsIcon, ContactIcon];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.rootWeb}>
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
                    offset={-75}
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
