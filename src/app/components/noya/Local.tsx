import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const stores = [
  { name: 'Noya Kebayoran Lama', area: 'Jakarta Selatan', hrs: '07:30 – 22:00' },
];

export function Local() {
  return (
    <section id="local" className="py-24 md:py-32" style={{ background: '#FCE6C4' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-20">
        <div className="md:col-span-5">
          <div className="inline-block px-3 py-1 rounded-full border border-black/30" style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.15em' }}>
            ✦ LOCAL & LOVED
          </div>
          <h2
            className="mt-5"
            style={{
              fontFamily: 'Fraunces, serif',
              fontWeight: 400,
              fontSize: 'clamp(44px, 7vw, 110px)',
              lineHeight: 0.92,
              letterSpacing: '-0.035em',
            }}
          >
            We're in your
            <br />
            <span style={{ fontStyle: 'italic', color: '#1351AA' }}>neighborhood.</span>
          </h2>
          <p className="mt-6 max-w-md" style={{ fontFamily: 'Inter', fontSize: 16, lineHeight: 1.6 }}>
            Three locations, one promise: same-day pickup if you're within 5km.
            Tap a store to open in Maps — or message us and we'll come to you.
          </p>
          <div className="mt-8 space-y-3">
            {stores.map((s) => (
              <motion.a
                key={s.name}
                whileHover={{ x: 6 }}
                href="https://maps.app.goo.gl/Q7y7gyHqm4ZqowNw6?g_st=ic"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl px-5 py-4 bg-white/70 hover:bg-white transition"
              >
                <div>
                  <div style={{ fontFamily: 'Fraunces', fontWeight: 600, fontSize: 18 }}>{s.name}</div>
                  <div className="mt-1 flex items-center gap-3 text-black/60" style={{ fontFamily: 'Inter', fontSize: 12 }}>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> {s.area}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} /> {s.hrs}
                    </span>
                  </div>
                </div>
                <span className="opacity-50 group-hover:opacity-100 transition" style={{ color: '#1351AA' }}>↗</span>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-[28px] overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759753949344-07a0ffc83cd3?w=1400&q=80"
              alt="Neighborhood storefront"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 100%)' }} />
            <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between text-white">
              <div>
                <div style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.15em', opacity: 0.85 }}>FLAGSHIP STORE</div>
                <div className="mt-1" style={{ fontFamily: 'Fraunces', fontStyle: 'italic', fontSize: 32, letterSpacing: '-0.02em' }}>
                  Jl. Balai Bend. No. 21
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/Q7y7gyHqm4ZqowNw6?g_st=ic"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-4 py-2 text-black"
                style={{ background: '#FFE88A', fontFamily: 'Inter', fontSize: 13 }}
              >
                Open in Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
