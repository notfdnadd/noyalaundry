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
      <DialogContent className="w-[calc(100vw-0.75rem)] max-h-[calc(100dvh-0.75rem)] overflow-visible border-0 bg-transparent p-0 shadow-none sm:w-[calc(100vw-1.5rem)] sm:max-h-[calc(100dvh-1.5rem)] sm:max-w-[92vw] md:max-w-none [&>button]:hidden">
        <div className="relative mx-auto flex w-full max-w-[720px] max-h-[calc(100dvh-0.75rem)] flex-col overflow-hidden rounded-[26px] bg-[#1351AA] text-white sm:max-h-[calc(100dvh-1.5rem)] sm:rounded-[30px] md:w-[min(92vw,720px)]">
          <DialogClose
            className="absolute top-3 right-3 z-30 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0B3E86]/88 text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-colors hover:bg-[#0A3472] focus:outline-hidden focus:ring-2 focus:ring-white/60 sm:top-4 sm:right-4 sm:h-10 sm:w-10"
            aria-label="Close promo popup"
          >
            <span aria-hidden className="text-lg leading-none">
              &times;
            </span>
          </DialogClose>
          <motion.div
            aria-hidden
            animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-10 right-5 h-20 w-20 rounded-full opacity-95 sm:-top-12 sm:right-6 sm:h-28 sm:w-28 md:right-8 md:h-40 md:w-40"
            style={{ background: '#FFE88A' }}
          />
          <div className="relative z-10 grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_minmax(0,0.62fr)] items-center sm:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] md:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)]">
            <div className="flex min-h-0 flex-col justify-between gap-3 p-3.5 pr-3 pt-12 sm:gap-3 sm:p-5 sm:pr-5 sm:pt-14 md:p-7 md:pr-7 md:pt-7 lg:p-8">
              <div className="flex min-h-0 flex-col gap-2 sm:gap-3">
                <div>
                  <div
                    className="inline-flex rounded-full border border-white/30 px-2 py-0.5 text-[10px] sm:px-3 sm:py-1"
                    style={{ fontFamily: 'Inter', fontSize: '10px', letterSpacing: '0.15em' }}
                  >
                    SOFT OPENING
                  </div>
                  <DialogTitle
                    className="mt-2 text-left text-[clamp(1.35rem,7vw,2.75rem)] leading-[0.92] font-normal tracking-[-0.04em] sm:mt-3 sm:text-[44px] sm:leading-[0.88] md:text-[64px] lg:text-[74px]"
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
                    className="mt-1.5 max-w-[11rem] text-left text-[10px] leading-[1.45] text-white/72 sm:mt-3 sm:max-w-[15rem] sm:text-sm sm:leading-6 md:max-w-[24rem] md:text-[15px]"
                    style={{ fontFamily: 'Inter' }}
                  >
                    Wash 5kg and get 1kg free. Limited time only.
                  </DialogDescription>
                </div>

                <div className="rounded-[18px] px-3 py-2.5 sm:rounded-[24px] sm:px-5 sm:py-4 md:px-5 md:py-4 lg:px-6" style={{ background: '#FFE88A', color: '#0E0E10' }}>
                  <div
                    className="text-[clamp(1rem,4.5vw,1.75rem)] leading-[0.95] font-black tracking-[-0.03em] sm:text-[28px] md:text-[36px] lg:text-[42px]"
                    style={{ fontFamily: 'Archivo' }}
                  >
                    WASH 5KG
                  </div>
                  <div className="mt-2 h-px w-full bg-black/12 sm:mt-3" />
                  <div
                    className="mt-2 text-[clamp(0.85rem,3.8vw,1.375rem)] leading-none sm:mt-3 sm:text-[22px] md:text-[30px] lg:text-[34px]"
                    style={{ fontFamily: 'Fraunces', fontStyle: 'italic' }}
                  >
                    get 1kg <span style={{ color: '#1351AA' }}>free.</span>
                  </div>
                </div>

                <div>
                  <div className="mb-2 text-[10px] opacity-80 sm:mb-3 sm:text-xs" style={{ fontFamily: 'Inter', letterSpacing: '0.15em' }}>
                    PROMO ENDS IN
                  </div>
                  <div className="grid grid-cols-4 gap-1 sm:gap-3">
                    {cells.map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-lg bg-white/10 px-1 py-2 text-center backdrop-blur-sm sm:rounded-2xl sm:px-3 sm:py-3 md:px-4 md:py-4"
                      >
                        <div
                          className="text-[clamp(0.85rem,3.8vw,1.5rem)] leading-none font-extrabold tracking-[-0.02em] sm:text-[24px] md:text-[30px] lg:text-[34px]"
                          style={{ fontFamily: 'Archivo' }}
                        >
                          {String(value).padStart(2, '0')}
                        </div>
                        <div className="mt-1 text-[7px] opacity-70 sm:text-[10px] md:text-xs" style={{ fontFamily: 'Inter', letterSpacing: '0.1em' }}>
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 pt-1 sm:flex-row sm:justify-between sm:gap-3 sm:pt-1">
                <p className="text-[11px] leading-4 text-center text-white/74 sm:text-left sm:text-[13px] sm:leading-5 sm:whitespace-nowrap" style={{ fontFamily: 'Inter' }}>
                  Valid until June 30, 2026
                </p>
                <a
                  href="#pricing"
                  onClick={() => handleOpenChange(false)}
                  className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-3 text-xs font-medium transition-transform hover:scale-[1.02] sm:h-10 sm:px-4 sm:text-[13px]"
                  style={{ background: '#FFFFFF', color: '#1351AA', fontFamily: 'Inter' }}
                >
                  See pricing
                </a>
              </div>
            </div>

            <div className="relative flex min-h-0 items-end justify-end p-2 pl-0 pt-12 sm:p-4 sm:pl-0 sm:pt-14 md:items-center md:p-6 md:pl-0 md:pt-0 lg:p-7 lg:pl-0">
              <motion.div
                initial={{ rotate: -3, opacity: 0, y: 26 }}
                animate={{ rotate: -2, opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative h-[56%] min-h-[220px] w-full overflow-hidden rounded-[20px] shadow-2xl sm:h-[70%] sm:min-h-[280px] sm:rounded-[24px] md:h-[380px] md:min-h-0 md:rounded-[26px] lg:h-[520px]"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1755372397633-b8b4f2124b71?w=1200&q=80"
                  alt="Editorial portrait with fresh fabrics"
                  className="h-full w-full object-cover object-[58%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#1351AA]/8 to-[#1351AA]/28" />
              </motion.div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
