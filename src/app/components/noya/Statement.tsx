import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Statement() {
  return (
    <section className="py-24 md:py-40" style={{ background: '#FFFFFF' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-3 py-1 rounded-full border border-black/15" style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.15em' }}>
              ✦ THE NOYA ETHOS
            </div>
            <h2
              style={{
                fontFamily: 'Fraunces, serif',
                fontWeight: 400,
                fontSize: 'clamp(40px, 6.5vw, 96px)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
              }}
            >
              Laundry should feel <span style={{ fontStyle: 'italic', color: '#1351AA' }}>effortless.</span>
            </h2>
            <p className="mt-8 max-w-xl" style={{ fontFamily: 'Inter', fontSize: 18, lineHeight: 1.6, color: '#3a3a3a' }}>
              Noya transforms an everyday chore into a premium experience. We treat
              your wardrobe the way you would — gently, thoughtfully, beautifully.
              It's the kind of care that used to cost a fortune. We made it the new normal.
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-8">
              {[
                ['Premium care', 'Gentle detergents, garment-aware cycles, hand-finished folds.'],
                ['Honest pricing', 'No hidden fees. Per-kilo, transparent, neighborhood-friendly.'],
                ['Zero hassle', 'Pickup, wash, return — schedule it from your couch.'],
              ].map(([t, d]) => (
                <div key={t}>
                  <div className="w-8 h-8 rounded-full mb-3" style={{ background: '#FFE88A' }} />
                  <div style={{ fontFamily: 'Fraunces', fontWeight: 600, fontSize: 18 }}>{t}</div>
                  <div className="mt-2 text-black/60" style={{ fontFamily: 'Inter', fontSize: 14, lineHeight: 1.5 }}>{d}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="md:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="aspect-[3/4] rounded-3xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1616790995461-d99a7c610e54?w=800&q=80"
                alt="Folded white textile"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="aspect-[3/4] rounded-3xl mt-10 flex items-end p-6"
              style={{ background: '#1351AA', color: '#FFE88A' }}
            >
              <div style={{ fontFamily: 'Fraunces', fontWeight: 500, fontSize: 28, lineHeight: 1, letterSpacing: '-0.02em' }}>
                Accessible
                <br />
                <span style={{ fontStyle: 'italic' }}>luxury.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
