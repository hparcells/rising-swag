import Image from 'next/image';
import clsx from 'clsx';

import { montserrat } from '@/app/fonts';

import classes from './Hero.module.scss';

import heroImage from '../../../public/hero.png';

function Hero() {
  return (
    <div className={clsx(classes.root, montserrat.className)}>
      <div className={classes.primary}>
        <p className={classes.big}>Red Rising Swag</p>
        <p className={classes.light}>
          {
            "Represent the world of Pierce Brown's Red Rising with style with a curated list of merch and other Red Rising related items from members across the community, all in one place."
          }
        </p>
      </div>
      <div className={classes.secondary}>
        <p className={classes.lighter}>
          For any takedowns or any other inquiries, send an email to contact@hunterparcells.com
        </p>
      </div>

      <Image src={heroImage} alt='Banner' fill className={classes.image} />
    </div>
  );
}

export default Hero;
