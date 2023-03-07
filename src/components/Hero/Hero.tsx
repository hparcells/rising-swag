import classes from './Hero.module.scss';

function Hero() {
  return (
    <div className={classes.root}>
      <p className={classes.big}>Hero</p>
      <p className={classes.light}>Hero</p>
    </div>
  );
}

export default Hero;
