import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Snapdragon Optimized',
    img: require('@site/static/img/npu_feature.png').default,
    description: (
      <>
        Leverage W4A16 quantization and the Qualcomm NPU for efficient, 
        high-performance on-device inference.
      </>
    ),
  },
  {
    title: 'AI Hub Integrated',
    img: require('@site/static/img/community_feature.png').default,
    description: (
      <>
        Built specifically for the Qualcomm AI Hub community, ensuring 
        seamless deployment across Snapdragon devices.
      </>
    ),
  },
  {
    title: 'Edge Intelligence',
    img: require('@site/static/img/edge_feature.png').default,
    description: (
      <>
        Deploy state-of-the-art LLMs like Qwen3-4B directly to the edge, 
        enabling privacy-first, low-latency applications.
      </>
    ),
  },
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
