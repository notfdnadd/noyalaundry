import { motion } from 'motion/react';
import { Heart, MessageCircle, Bookmark } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const posts = [
  {
    user: 'rara.k',
    area: 'Senopati',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
    photo: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80',
    body:
      'Stop everything — Noya literally returned my linen set folded like it belonged in a Muji catalog. Obsessed.',
    likes: '2,148',
  },
  {
    user: 'arifin.dwi',
    area: 'Kemang',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
    photo: 'https://images.unsplash.com/photo-1715233749622-3216fe49e682?w=900&q=80',
    body:
      'Tried Kilat 4h because I forgot about a wedding. They saved my entire weekend. Hero behavior.',
    likes: '987',
  },
  {
    user: 'mei.studio',
    area: 'PIK',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
    photo: 'https://images.unsplash.com/photo-1640442099672-4315920d01bc?w=900&q=80',
    body:
      'Clean Club member since week one. I forgot what dirty laundry looks like and I love that for me.',
    likes: '3,402',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32" style={{ background: '#E3E2DE' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-6 mb-12 items-end">
          <div className="md:col-span-8">
            <div className="inline-block px-3 py-1 rounded-full border border-black/15" style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.15em' }}>
              ✦ THE NEIGHBORS SAY
            </div>
            <h2
              className="mt-5"
              style={{
                fontFamily: 'Fraunces, serif',
                fontWeight: 400,
                fontSize: 'clamp(40px, 6.5vw, 96px)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
              }}
            >
              Not just clean.
              <br />
              <span style={{ fontStyle: 'italic', color: '#1351AA' }}>Confident.</span>
            </h2>
          </div>
          <div className="md:col-span-4 text-black/70" style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.55 }}>
            Real posts from real Clean Club members. (Yes, we asked permission.)
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <motion.article
              key={p.user}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white overflow-hidden flex flex-col"
            >
              <div className="flex items-center gap-3 p-4">
                <ImageWithFallback src={p.img} alt="" className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 13 }}>@{p.user}</div>
                  <div className="text-black/50" style={{ fontFamily: 'Inter', fontSize: 11 }}>
                    Noya · {p.area}
                  </div>
                </div>
              </div>
              <div className="aspect-square">
                <ImageWithFallback src={p.photo} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-4 text-black/70">
                  <Heart size={18} />
                  <MessageCircle size={18} />
                  <Bookmark size={18} className="ml-auto" />
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: 12, fontWeight: 600 }}>{p.likes} likes</div>
                <p style={{ fontFamily: 'Fraunces', fontSize: 16, lineHeight: 1.45 }}>
                  <span className="font-semibold" style={{ fontFamily: 'Inter' }}>{p.user} </span>
                  {p.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
