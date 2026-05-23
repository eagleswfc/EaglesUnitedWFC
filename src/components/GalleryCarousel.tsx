import { useCallback, useEffect, useState } from 'react';
import type { CarouselImage } from '../lib/types';

const AUTO_ADVANCE_MS = 10_000;

interface GalleryCarouselProps {
  images: CarouselImage[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const total = images.length;
  const active = images[index];

  const goNext = useCallback(() => {
    if (total === 0) return;
    setIndex((current) => (current + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    if (total === 0) return;
    setIndex((current) => (current - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (total <= 1) return;
    const timer = window.setInterval(goNext, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [goNext, total]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxOpen(false);
      if (event.key === 'ArrowRight') goNext();
      if (event.key === 'ArrowLeft') goPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxOpen, goNext, goPrev]);

  if (!total || !active) {
    return (
      <div className="rounded-2xl border border-dashed border-white/20 bg-charcoal-light/60 px-6 py-16 text-center text-white/70">
        <p className="text-lg font-semibold">Gallery coming soon</p>
        <p className="mt-2 text-sm">
          Upload images in Sanity Studio under <strong>Gallery</strong> to populate the carousel.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal-light shadow-2xl shadow-black/40">
        <div className="relative aspect-[16/10] w-full bg-black/40 sm:aspect-[16/9]">
          <img
            key={active.id}
            src={active.src}
            alt={active.alt}
            className="h-full w-full cursor-zoom-in object-cover transition-opacity duration-500"
            onDoubleClick={() => setLightboxOpen(true)}
            draggable={false}
          />

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/30 bg-charcoal/90 text-3xl font-bold text-white shadow-lg transition hover:border-eagles-red hover:bg-eagles-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-5"
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/30 bg-charcoal/90 text-3xl font-bold text-white shadow-lg transition hover:border-eagles-red hover:bg-eagles-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5"
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-4 py-4 sm:px-6">
          <p className="text-sm text-white/80">
            <span className="font-semibold text-white">{index + 1}</span> / {total}
            {active.caption ? <span className="text-white/60"> · {active.caption}</span> : null}
          </p>
          <p className="text-xs text-white/50">Double-click the image to enlarge</p>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged gallery image"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-20 rounded-full border border-white/30 bg-charcoal px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-eagles-red"
            onClick={(event) => {
              event.stopPropagation();
              setLightboxOpen(false);
            }}
          >
            Close
          </button>

          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[90vh] max-w-[min(1200px,95vw)] rounded-lg object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
