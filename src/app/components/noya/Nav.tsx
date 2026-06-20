import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from './tokens';

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-black/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2" style={{ fontFamily: 'Fraunces, serif' }}>
          <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: '#1351AA' }} />
          <span style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>Noya</span>
          <span className="text-black/50" style={{ fontStyle: 'italic' }}>laundry</span>
        </a>
        <div className="hidden md:flex items-center gap-8" style={{ fontFamily: 'Inter', fontSize: 14 }}>
          <a href="#services" className="hover:opacity-60 transition">Services</a>
          <a href="#pricing" className="hover:opacity-60 transition">Pricing</a>
          <a href="#local" className="hover:opacity-60 transition">Locations</a>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-white transition hover:opacity-90"
          style={{ background: '#1351AA', fontFamily: 'Inter', fontSize: 13 }}
        >
          <MessageCircle size={15} />
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </motion.nav>
  );
}
