import FeatureRow from './FeatureRow';
import { features } from '../../data/features';
import './Section.css';

export default function FeaturesSection() {
  return (
    <section className="section" id="how-it-works" style={{ paddingTop: 0 }}>
      {features.map((f) => (
        <FeatureRow key={f.id} {...f} />
      ))}
    </section>
  );
}
