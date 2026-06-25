import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '../ui/dialog';

const PROMO_ENDS_AT = new Date('2026-06-30T23:59:59+07:00');
const PROMO_ENDS_LABEL = 'June 30, 2026, 11:59 PM GMT+7';
const DISMISS_KEY = 'noya-promo-dismissed-2026-06';

function useCountdown(target: Date, enabled: boolean) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    if (!enabled) {
      return;
    }

    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, [enabled]);

  const diff = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  return { d, h, m, s };
}

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const isExpired = new Date() >= PROMO_ENDS_AT;
  const { d, h, m, s } = useCountdown(PROMO_ENDS_AT, isOpen);

  useEffect(() => {
    if (new Date() >= PROMO_ENDS_AT) {
      setIsReady(true);
      return;
    }

    const dismissed = window.localStorage.getItem(DISMISS_KEY) === 'true';
    setIsOpen(!dismissed);
    setIsReady(true);
  }, []);

  const handleOpenChange = (nextOpen: boolean) => {
    setIsOpen(nextOpen);

    if (!nextOpen) {
      window.localStorage.setItem(DISMISS_KEY, 'true');
    }
  };

  if (!isReady || isExpired) {
    return null;
  }

  const cells = [
    [d, 'DAYS'],
    [h, 'HRS'],
    [m, 'MIN'],
    [s, 'SEC'],
  ] as const;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="w-[calc(100vw-1rem)] max-h-[calc(100vh-1rem)] overflow-y-auto border-0 bg-transparent p-0 shadow-none sm:max-w-[92vw] md:max-w-none [&>button]:hidden">
        <div className="relative mx-auto w-full max-w-[760px] overflow-hidden rounded-[30px] bg-[#1351AA] text-white md:w-[min(92vw,760px)]">
          <DialogClose
            className="absolute top-4 right-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/14 text-white transition-colors hover:bg-white/24 focus:outline-hidden focus:ring-2 focus:ring-white/60"
            aria-label="Close promo popup"
          >
            <span aria-hidden className="text-lg leading-none">
              ×
            </span>
          </DialogClose>
          <motion.div
            aria-hidden
            animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-12 right-6 h-28 w-28 rounded-full opacity-95 sm:h-32 sm:w-32 md:right-8 md:h-40 md:w-40"
            style={{ background: '#FFE88A' }}
          />
          <div className="relative z-10 grid md:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)] md:items-center">
            <div className="flex flex-col gap-4 overflow-y-auto p-5 sm:p-6 md:p-7 lg:p-8">
              <div className="flex flex-col gap-4">
                <div>
                  <div
                    className="inline-flex rounded-full border border-white/30 px-3 py-1"
                    style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.15em' }}
                  >
                    SOFT OPENING
                  </div>
                  <DialogTitle
                    className="mt-4 text-left text-[44px] leading-[0.88] font-normal tracking-[-0.04em] sm:text-[56px] md:text-[64px] lg:text-[74px]"
                    style={{
                      fontFamily: 'Fraunces, serif',
                      fontWeight: 400,
                    }}
                  >
                    Fresh
                    <br />
                    starts <span style={{ fontStyle: 'italic', color: '#FFE88A' }}>here.</span>
                  </DialogTitle>
                  <DialogDescription
                    className="mt-3 max-w-[24rem] text-left text-sm leading-6 text-white/72 sm:text-[15px]"
                    style={{ fontFamily: 'Inter' }}
                  >
                    Wash 5kg and get 1kg free while our soft opening offer is still running.
                  </DialogDescription>
                </div>

                <div className="rounded-[24px] px-5 py-4 sm:px-6 md:px-5 lg:px-6" style={{ background: '#FFE88A', color: '#0E0E10' }}>
                  <div
                    className="text-[28px] leading-[0.95] font-black tracking-[-0.03em] sm:text-[34px] md:text-[36px] lg:text-[42px]"
                    style={{ fontFamily: 'Archivo' }}
                  >
                    WASH 5KG
                  </div>
                  <div className="mt-3 h-px w-full bg-black/12" />
                  <div
                    className="mt-3 text-[22px] leading-none sm:text-[28px] md:text-[30px] lg:text-[34px]"
                    style={{ fontFamily: 'Fraunces', fontStyle: 'italic' }}
                  >
                    get 1kg <span style={{ color: '#1351AA' }}>free.</span>
                  </div>
                </div>

                <div>
                  <div className="mb-3 opacity-80" style={{ fontFamily: 'Inter', fontSize: 12, letterSpacing: '0.15em' }}>
                    PROMO ENDS IN
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {cells.map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-2xl bg-white/10 px-3 py-3 text-center backdrop-blur-sm sm:px-4 sm:py-4"
                      >
                        <div
                          className="text-[28px] leading-none font-extrabold tracking-[-0.02em] sm:text-[32px] md:text-[30px] lg:text-[34px]"
                          style={{ fontFamily: 'Archivo' }}
                        >
                          {String(value).padStart(2, '0')}
                        </div>
                        <div className="mt-1 opacity-70" style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.15em' }}>
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 pt-1 sm:flex-nowrap">
                <p className="text-[13px] leading-5 text-white/74 sm:whitespace-nowrap" style={{ fontFamily: 'Inter' }}>
                  Valid until {PROMO_ENDS_LABEL}.
                </p>
                <a
                  href="#pricing"
                  onClick={() => handleOpenChange(false)}
                  className="inline-flex h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-4 text-[13px] font-medium transition-transform hover:scale-[1.02]"
                  style={{ background: '#FFFFFF', color: '#1351AA', fontFamily: 'Inter' }}
                >
                  See pricing
                </a>
              </div>
            </div>

            <div className="relative flex min-h-[220px] items-end p-4 pt-0 sm:min-h-[280px] sm:p-6 sm:pt-0 md:min-h-0 md:items-center md:p-6 md:pl-0 lg:p-7 lg:pl-0">
              <motion.div
                initial={{ rotate: -3, opacity: 0, y: 26 }}
                animate={{ rotate: -2, opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative h-[220px] w-full overflow-hidden rounded-[26px] shadow-2xl sm:h-[280px] md:h-[460px] lg:h-[520px]"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1755372397633-b8b4f2124b71?w=1200&q=80"
                  alt="Editorial portrait with fresh fabrics"
                  className="h-full w-full object-cover object-center"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
