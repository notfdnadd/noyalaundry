import { motion } from 'motion/react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_URL } from './tokens';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40" style={{ background: '#0E0E10', color: '#fff' }}>
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full opacity-90"
        style={{ background: '#1351AA' }}
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 right-10 w-32 h-32 rounded-full"
        style={{ background: '#FFE88A' }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <div className="inline-block px-3 py-1 rounded-full border border-white/20" style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.15em' }}>
          ✦ ONE TAP AWAY
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-6"
          style={{
            fontFamily: 'Fraunces, serif',
            fontWeight: 400,
            fontSize: 'clamp(64px, 13vw, 220px)',
            lineHeight: 0.86,
            letterSpacing: '-0.045em',
          }}
        >
          Ready for a
          <br />
          <span style={{ fontStyle: 'italic', color: '#FFE88A' }}>fresh start?</span>
        </motion.h2>
        <p className="mt-8 max-w-xl mx-auto text-white/70" style={{ fontFamily: 'Inter', fontSize: 17, lineHeight: 1.55 }}>
          Send us a message. We'll pick up today, return tomorrow, and you'll wonder
          why you ever did this yourself.
        </p>
        <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full pl-6 pr-3 py-3 transition hover:translate-y-[-2px]"
            style={{ background: '#FFE88A', color: '#0E0E10', fontFamily: 'Inter', fontSize: 16 }}
          >
            <MessageCircle size={18} />
            Chat with Noya
            <span className="inline-flex w-9 h-9 rounded-full items-center justify-center" style={{ background: '#0E0E10', color: '#FFE88A' }}>
              <ArrowUpRight size={16} />
            </span>
          </a>
          <a
            href="#services"
            className="rounded-full px-6 py-4 border border-white/30 hover:bg-white/10 transition"
            style={{ fontFamily: 'Inter', fontSize: 14 }}
          >
            Or browse services
          </a>
        </div>
      </div>
    </section>
  );
}
