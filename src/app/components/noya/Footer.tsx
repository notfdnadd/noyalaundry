import { Instagram, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from './tokens';

export function Footer() {
  return (
    <footer style={{ background: '#FFE88A', color: '#0E0E10' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div style={{ fontFamily: 'Fraunces', fontWeight: 500, fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '-0.03em', lineHeight: 0.95 }}>
            Noya<span style={{ color: '#1351AA', fontStyle: 'italic' }}> laundry.</span>
          </div>
          <p className="mt-4 max-w-sm" style={{ fontFamily: 'Inter', fontSize: 14 }}>
            Accessible luxury for your wardrobe. Made in Jakarta, with love.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram, MessageCircle].map((I, i) => (
              <a
                key={i}
                href={i === 0 ? 'https://www.instagram.com/noyalaundry.id' : WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-black/30 flex items-center justify-center hover:bg-black hover:text-[#FFE88A] transition"
              >
                <I size={16} />
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Services" links={['Regular', 'Express', 'Priority Express', 'Kilat 8h', 'Kilat 4h']} />
        <FooterCol title="Company" links={['About', 'Locations', 'Careers']} />
        <FooterCol title="Help" links={['Pricing','Contact']} />
      </div>
      <div className="border-t border-black/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between gap-3" style={{ fontFamily: 'Inter', fontSize: 12 }}>
          <span>© {new Date().getFullYear()} Noya Laundry. All rights reserved.</span>
          <span style={{ fontStyle: 'italic', fontFamily: 'Fraunces', fontSize: 14 }}>
            Your favorite hoodie deserves a spa day. ✦
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="md:col-span-2">
      <div className="mb-3" style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.15em' }}>
        {title.toUpperCase()}
      </div>
      <ul className="space-y-2" style={{ fontFamily: 'Fraunces', fontSize: 16 }}>
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:underline underline-offset-4">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
