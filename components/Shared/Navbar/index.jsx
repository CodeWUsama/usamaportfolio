import React, { useMemo } from 'react';

import Button from '../Button/Button';

import styles from './styles.module.scss';

const Navbar = () => {
  const links = useMemo(
    () => [
      { title: 'Home', onClick: () => {} },
      { title: 'Skills', onClick: () => {} },
      { title: 'Experience', onClick: () => {} },
      { title: 'Education', onClick: () => {} },
      { title: 'Projects', onClick: () => {} },
      { title: 'Contact', onClick: () => {} },
    ],
    []
  );
  return (
    <div className={styles.root}>
      <div className={styles.linksCont}>
        {links.map(({ title, onClick }) => (
          <button key={title} onClick={onClick} className={styles.link}>
            {title}
          </button>
        ))}
      </div>
      <Button>View Resume</Button>
    </div>
  );
};

export default Navbar;
