import { Nav } from './components/noya/Nav';
import { Hero } from './components/noya/Hero';
import { Statement } from './components/noya/Statement';
import { Services } from './components/noya/Services';
import { Pricing } from './components/noya/Pricing';
import { PromoPopup } from './components/noya/PromoPopup';
import { Local } from './components/noya/Local';
import { Testimonials } from './components/noya/Testimonials';
import { FinalCTA } from './components/noya/FinalCTA';
import { Footer } from './components/noya/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full" style={{ background: '#fff', color: '#0E0E10', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Nav />
      <PromoPopup />
      <main>
        <Hero />
        <Statement />
        <Services />
        <Pricing />
        <Local />
        {/* <Testimonials /> */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
