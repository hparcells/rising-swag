import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'All in One',
    description: (
      <>
        Rising Swag attempts to gather all the Red Rising related merchandise in one place. No more searching through multiple websites. Promotes small businesses!
      </>
    )
  },
  {
    title: 'Easy to Use',
    description: (
      <>
        Rising Swag allows you to filter items by name, tag, and more, making it easy to find exactly what you're looking for.
      </>
    )
  },
  {
    title: 'API',
    description: (
      <>
        Access the data Rising Swag has to offer through it's free and easy-to-use <Link to='docs/api'>API</Link>.
      </>
    )
  }
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => {
            return <Feature key={idx} {...props} />;
          })}
        </div>
      </div>
    </section>
  );
}
