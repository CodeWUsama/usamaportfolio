import { createRef, useEffect } from 'react';
import lottie from 'lottie-web';

const LottiePlayer = ({ animationData, className }) => {
  const animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });
    return () => anim.destroy();
  }, [animationContainer, animationData]);

  return <div ref={animationContainer} className={className} />;
};

export default LottiePlayer;
