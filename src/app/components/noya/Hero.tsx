import { motion } from 'motion/react';
import { ArrowUpRight, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { WHATSAPP_URL } from './tokens';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: '#E3E2DE' }}>
      {/* floating shapes */}
      <motion.div
        aria-hidden
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full"
        style={{ background: '#FFE88A' }}
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-[42%] w-24 h-24 rounded-full hidden md:block"
        style={{ background: '#FCE6C4' }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/70 backdrop-blur"
              style={{ fontFamily: 'Inter', fontSize: 12, letterSpacing: '0.08em' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#1351AA' }} />
              EST. 2025 — JAKARTA
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-6"
              style={{
                fontFamily: 'Fraunces, serif',
                fontWeight: 500,
                fontSize: 'clamp(64px, 12vw, 200px)',
                lineHeight: 0.88,
                letterSpacing: '-0.04em',
                color: '#0E0E10',
              }}
            >
              Fresh
              <br />
              starts <span style={{ fontStyle: 'italic', color: '#1351AA' }}>here.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 max-w-md"
              style={{ fontFamily: 'Inter', fontSize: 17, lineHeight: 1.5, color: '#0E0E10' }}
            >
              Premium laundry care for modern living. We pick up, pamper, and return
              your favorite pieces — folded like a love letter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full px-6 py-4 text-white transition hover:translate-y-[-2px]"
                style={{ background: '#0E0E10', fontFamily: 'Inter', fontSize: 14 }}
              >
                Book via WhatsApp
                <span className="inline-flex w-7 h-7 rounded-full items-center justify-center" style={{ background: '#FFE88A', color: '#0E0E10' }}>
                  <ArrowUpRight size={14} />
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full px-6 py-4 border border-black/15 hover:bg-white transition"
                style={{ fontFamily: 'Inter', fontSize: 14 }}
              >
                View services
              </a>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {['1494790108377-be9c29b29330', '1438761681033-6461ffad8d80', '1500648767791-00dcc994a43e'].map((id) => (
                  <ImageWithFallback
                    key={id}
                    src={`https://images.unsplash.com/photo-${id}?w=80&h=80&fit=crop`}
                    alt=""
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: 13 }}>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#1351AA" stroke="#1351AA" />
                  ))}
                  <span className="ml-1">4.9</span>
                </div>
                <div className="text-black/60">2,300+ happy neighbors</div>
              </div>
            </motion.div> */}
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1776838108803-91bbab8a09da?w=1200&q=80"
                  alt="Crisp shirt on hanger"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ rotate: -8, opacity: 0 }}
                animate={{ rotate: -6, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-6 -left-6 rounded-2xl px-4 py-3 shadow-lg"
                style={{ background: '#FFE88A', fontFamily: 'Archivo', fontWeight: 800, fontSize: 12, letterSpacing: '0.1em' }}
              >
                READY IN 24H
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-5 -right-4 rounded-2xl p-4 bg-white shadow-xl max-w-[200px]"
              >
                <div style={{ fontFamily: 'Fraunces', fontStyle: 'italic', fontSize: 14 }}>
                  "My hoodie has never been happier."
                </div>
                <div className="mt-2" style={{ fontFamily: 'Inter', fontSize: 11, color: '#1351AA' }}>
                  — Lena, Kebayoran Lama
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="border-t border-black/10 overflow-hidden" style={{ background: '#0E0E10', color: '#FFE88A' }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          className="flex whitespace-nowrap py-4"
          style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: 28, letterSpacing: '-0.02em' }}
        >
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex shrink-0">
              {['CLEAN CLUB', 'FRESH STARTS HERE', 'NOT JUST CLEAN. CONFIDENT.', 'READY IN 24H', "WE'RE IN YOUR NEIGHBORHOOD"].map((t) => (
                <span key={t} className="px-8 flex items-center gap-8">
                  {t}
                  <span style={{ color: '#1351AA' }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
