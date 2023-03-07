import classes from './Hero.module.scss';
import Image from 'next/image';

import heroImage from '../../../public/hero.png';

function Hero() {
  return (
    <div className={classes.root}>
      <p className={classes.big}>Hero</p>
      <p className={classes.light}>Hero</p>

      <Image src={heroImage} alt='Banner' fill className={classes.image} />
    </div>
  );
}

export default Hero;
