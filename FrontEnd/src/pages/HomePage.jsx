import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import LogosRow from '../components/home/LogosRow';
import ProblemSection from '../components/home/ProblemSection';
import FeaturesSection from '../components/home/FeaturesSection';
import WaitlistBand from '../components/home/WaitlistBand';

export default function HomePage() {
  return (
    <div>
      <Nav />
      <Hero />
      <LogosRow />
      <ProblemSection />
      <FeaturesSection />
      <WaitlistBand />
      <Footer />
    </div>
  );
}
