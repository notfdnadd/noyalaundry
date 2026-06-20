import { motion } from 'motion/react';
import { Clock, Zap, Sparkles, Flame } from 'lucide-react';

const services = [
  {
    icon: Clock,
    name: 'Regular',
    turnaround: '3 Days',
    tag: 'Everyday essentials',
    color: '#E3E2DE',
    accent: '#1351AA',
    fg: '#0E0E10',
    desc: 'Our signature wash for sheets, towels, and the weekly rhythm.',
  },
  {
    icon: Zap,
    name: 'Express',
    turnaround: '24 Hours',
    tag: 'Most popular',
    color: '#1351AA',
    accent: '#FFE88A',
    fg: '#FFFFFF',
    desc: 'Dropped off today, in your closet tomorrow. No drama.',
    badge: 'PRIORITY',
  },
  {
    icon: Sparkles,
    name: 'Priority Express',
    turnaround: 'Same Day',
    tag: 'Fast-track',
    color: '#FCE6C4',
    accent: '#1351AA',
    fg: '#0E0E10',
    desc: 'Skip the line. Garments queued first, finished first.',
  },
  {
    icon: Flame,
    name: 'Kilat',
    turnaround: '4h / 8h',
    tag: 'Emergency mode',
    color: '#FFE88A',
    accent: '#1351AA',
    fg: '#0E0E10',
    desc: 'For meetings, weddings, and "I have nothing to wear" energy.',
    badge: 'EXPRESS',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32" style={{ background: '#0E0E10', color: '#fff' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 items-end gap-6 mb-14">
          <div className="md:col-span-8">
            <div className="inline-block px-3 py-1 rounded-full border border-white/20" style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.15em' }}>
              ✦ SERVICES
            </div>
            <h2
              className="mt-5"
              style={{
                fontFamily: 'Fraunces, serif',
                fontWeight: 400,
                fontSize: 'clamp(44px, 7vw, 110px)',
                lineHeight: 0.92,
                letterSpacing: '-0.03em',
              }}
            >
              Pick your <span style={{ fontStyle: 'italic', color: '#FFE88A' }}>speed.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right text-white/70" style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.6 }}>
            From a chill three-day spa stay to a four-hour rescue mission. Every option
            includes pickup, eco-conscious detergents, and our signature fold.
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative rounded-3xl p-6 flex flex-col justify-between min-h-[360px] overflow-hidden"
                style={{ background: s.color, color: s.fg }}
              >
                {s.badge && (
                  <div
                    className="absolute top-5 right-5 px-2.5 py-1 rounded-full"
                    style={{
                      background: s.accent,
                      color: s.color === '#1351AA' ? '#1351AA' : '#fff',
                      fontFamily: 'Archivo',
                      fontWeight: 800,
                      fontSize: 10,
                      letterSpacing: '0.12em',
                    }}
                  >
                    {s.badge}
                  </div>
                )}
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: s.accent, color: s.color === '#1351AA' ? '#1351AA' : '#fff' }}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="mt-6" style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.15em', opacity: 0.7 }}>
                    {s.tag.toUpperCase()}
                  </div>
                  <div className="mt-1" style={{ fontFamily: 'Fraunces', fontWeight: 500, fontSize: 32, lineHeight: 1, letterSpacing: '-0.02em' }}>
                    {s.name}
                  </div>
                </div>
                <div>
                  <p style={{ fontFamily: 'Inter', fontSize: 14, lineHeight: 1.5, opacity: 0.8 }}>{s.desc}</p>
                  <div className="mt-5 pt-5 border-t border-current/15 flex items-baseline justify-between">
                    <span style={{ fontFamily: 'Inter', fontSize: 12, opacity: 0.6 }}>Turnaround</span>
                    <span style={{ fontFamily: 'Archivo', fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em' }}>{s.turnaround}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
