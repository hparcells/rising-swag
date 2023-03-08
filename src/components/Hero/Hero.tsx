import classes from './Hero.module.scss';
import Image from 'next/image';

import heroImage from '../../../public/hero.png';

function Hero() {
  return (
    <div className={classes.root}>
      <p className={classes.big}>Red Rising Merch</p>
      <p className={classes.light}>
        Represent the world of Pierce Brown's Red Rising with style with a curated list of merch and
        other Red Rising related items from members across the community, all in one place.
      </p>

      <Image src={heroImage} alt='Banner' fill className={classes.image} />
    </div>
  );
}

export default Hero;
