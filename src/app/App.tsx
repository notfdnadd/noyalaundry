import { Nav } from './components/noya/Nav';
import { Hero } from './components/noya/Hero';
import { Statement } from './components/noya/Statement';
import { Services } from './components/noya/Services';
import { Pricing } from './components/noya/Pricing';
import { Promo } from './components/noya/Promo';
import { Local } from './components/noya/Local';
import { Testimonials } from './components/noya/Testimonials';
import { FinalCTA } from './components/noya/FinalCTA';
import { Footer } from './components/noya/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full" style={{ background: '#fff', color: '#0E0E10', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Nav />
      <main>
        <Hero />
        <Statement />
        <Services />
        <Pricing />
        <Promo />
        <Local />
        {/* <Testimonials /> */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
