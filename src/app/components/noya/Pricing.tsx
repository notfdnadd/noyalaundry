import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const prices = [
  { name: 'Regular', turn: '3 Days', price: '8K', unit: '/kg', tone: 'cream' },
  { name: 'Express', turn: '2 Days', price: '10K', unit: '/kg', tone: 'beige' },
  { name: 'Express', turn: '1 Day', price: '12K', unit: '/kg', tone: 'yellow' },
  { name: 'Kilat', turn: '8 Hours', price: '20K', unit: '/kg', tone: 'blue' },
  { name: 'Kilat', turn: '4 Hours', price: '30K', unit: '/kg', tone: 'ink' },
];

const tones: Record<string, { bg: string; fg: string; accent: string }> = {
  cream: { bg: '#E3E2DE', fg: '#0E0E10', accent: '#1351AA' },
  beige: { bg: '#FCE6C4', fg: '#0E0E10', accent: '#1351AA' },
  yellow: { bg: '#FFE88A', fg: '#0E0E10', accent: '#1351AA' },
  blue: { bg: '#1351AA', fg: '#fff', accent: '#FFE88A' },
  ink: { bg: '#0E0E10', fg: '#fff', accent: '#FFE88A' },
};

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32" style={{ background: '#fff' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-block px-3 py-1 rounded-full border border-black/15" style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.15em' }}>
              ✦ PRICING
            </div>
            <h2
              className="mt-5"
              style={{
                fontFamily: 'Fraunces, serif',
                fontWeight: 400,
                fontSize: 'clamp(40px, 6vw, 96px)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
              }}
            >
              Honest, by the <span style={{ fontStyle: 'italic', color: '#1351AA' }}>kilo.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {prices.map((p, i) => {
            const t = tones[p.tone];
            return (
              <motion.div
                key={p.name + p.turn}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl p-6 aspect-[4/5] flex flex-col justify-between"
                style={{ background: t.bg, color: t.fg }}
              >
                <div>
                  <div style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.15em', opacity: 0.7 }}>
                    {p.name.toUpperCase()}
                  </div>
                  <div className="mt-1" style={{ fontFamily: 'Fraunces', fontStyle: 'italic', fontSize: 22 }}>
                    {p.turn}
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span style={{ fontFamily: 'Inter', fontSize: 14, opacity: 0.7 }}>Rp</span>
                    <span style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: 'clamp(38px, 5vw, 60px)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                      {p.price}
                    </span>
                    <span style={{ fontFamily: 'Inter', fontSize: 14, opacity: 0.7 }}>{p.unit}</span>
                  </div>
                  <div className="mt-3 h-px w-full" style={{ background: 'currentColor', opacity: 0.2 }} />
                  <div className="mt-3 flex items-center justify-between" style={{ fontFamily: 'Inter', fontSize: 12, opacity: 0.7 }}>
                    <span>Pickup included</span>
                    <span style={{ color: t.accent }}>✦</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4" style={{ fontFamily: 'Inter', fontSize: 13 }}>
          {[
            ['Minimum order', '3kg per pickup'],
            ['Bedding & curtains', 'Priced per piece'],
            ['Special fabrics', 'Contact us for a quote'],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl p-5 border border-black/10 flex items-center justify-between">
              <span className="opacity-70">{t}</span>
              <span style={{ fontFamily: 'Fraunces', fontWeight: 500 }}>{d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
