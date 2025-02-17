import classes from './DevNotice.module.scss';

function DevNotice() {
  return (
    <div className={classes.root}>
      <p>
        <strong>You are using the developer database!</strong>
      </p>
    </div>
  );
}

export default DevNotice;
