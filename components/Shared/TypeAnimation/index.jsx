import React from 'react';
import { TypeAnimation as TypeAnimationComp } from 'react-type-animation';

import COLORS from '@/constants/colors';

const TypeAnimation = () => (
  <TypeAnimationComp
    sequence={['REACT', 2000, 'NEXT JS', 2000, 'NODE JS', 2000]}
    wrapper="span"
    cursor={true}
    repeat={Infinity}
    style={{ fontSize: '18px', color: COLORS.BASE, fontWeight: 600 }}
  />
);

export default TypeAnimation;
