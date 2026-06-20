import { motion } from 'motion/react';
import { useMemo, useState as useReactState, useEffect as useReactEffect } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

function useCountdown(target: Date) {
  const [now, setNow] = useReactState(() => new Date());
  useReactEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

export function Promo() {
  const target = useMemo(() => {
    const t = new Date();
    t.setDate(t.getDate() + 14);
    return t;
  }, []);
  const { d, h, m, s } = useCountdown(target);
  const cells = [
    [d, 'DAYS'],
    [h, 'HRS'],
    [m, 'MIN'],
    [s, 'SEC'],
  ] as const;

  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ background: '#1351AA', color: '#fff' }}>
      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 right-8 w-40 h-40 rounded-full"
        style={{ background: '#FFE88A' }}
      />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <div className="inline-block px-3 py-1 rounded-full border border-white/30" style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.15em' }}>
            ✦ SOFT OPENING
          </div>
          <h2
            className="mt-5"
            style={{
              fontFamily: 'Fraunces, serif',
              fontWeight: 400,
              fontSize: 'clamp(56px, 10vw, 170px)',
              lineHeight: 0.86,
              letterSpacing: '-0.04em',
            }}
          >
            Fresh
            <br />
            starts <span style={{ fontStyle: 'italic', color: '#FFE88A' }}>here.</span>
          </h2>
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl px-6 py-5" style={{ background: '#FFE88A', color: '#0E0E10' }}>
            <div style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: 'clamp(34px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1 }}>
              WASH 5KG
            </div>
            <div className="w-px h-12 bg-black/30" />
            <div style={{ fontFamily: 'Fraunces', fontStyle: 'italic', fontSize: 'clamp(22px, 3vw, 36px)' }}>
              get 1kg <span style={{ color: '#1351AA' }}>free.</span>
            </div>
          </div>
          <div className="mt-10">
            <div className="opacity-80 mb-3" style={{ fontFamily: 'Inter', fontSize: 12, letterSpacing: '0.15em' }}>
              PROMO ENDS IN
            </div>
            <div className="flex gap-3 flex-wrap">
              {cells.map(([n, l]) => (
                <div key={l} className="rounded-2xl px-5 py-4 min-w-[88px] text-center" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <div style={{ fontFamily: 'Archivo', fontWeight: 800, fontSize: 36, letterSpacing: '-0.02em', lineHeight: 1 }}>
                    {String(n).padStart(2, '0')}
                  </div>
                  <div className="mt-1 opacity-70" style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.15em' }}>
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <motion.div
            initial={{ rotate: -3, opacity: 0, y: 30 }}
            whileInView={{ rotate: -2, opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1755372397633-b8b4f2124b71?w=1200&q=80"
              alt="Editorial portrait with fresh fabrics"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
