import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'An IT management student shifting his career',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Hi! My name is Noka! A second-year IT management for business student who want to go from IT management to software engineering.
      </>
    ),
  },
  {
    title: 'Interested in LIFE',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Noka is a christian from ICOC, he share 
      </>
    ),
  },
  {
    title: 'Passionate Learner',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Coming from a background in technology and business. I'm learning a lot step by step. Throughout this enjoyable and educational adventure, I will provide a wealth of information.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
