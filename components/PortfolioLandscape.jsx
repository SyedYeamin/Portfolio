import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from './ui/badge';

// --- Helper Hook for Prev/Next Buttons ---
const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return { prevBtnDisabled, nextBtnDisabled, scrollPrev, scrollNext };
};

// --- Dot Button Component ---
const DotButton = ({ selected, onClick }) => (
  <button
    className={`w-2 h-2 rounded-full transition-all duration-300 ${
      selected ? 'bg-white scale-125' : 'bg-white/50'
    }`}
    type="button"
    onClick={onClick}
    aria-label="Go to slide"
  />
);

// --- Carousel Component ---
const CarouselComponent = ({ item }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { scrollPrev, scrollNext } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <div className="relative w-full h-full overflow-hidden group" ref={emblaRef}>
      <div className="flex h-full">
        {item.images.map((src, index) => (
          <div className="relative flex-[0_0_100%] h-full" key={index}>
            <img
              src={src}
              alt={`${item.title} slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-20 hover:bg-black/70"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-20 hover:bg-black/70"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {item.images.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

// --- Static Image Fallback Component ---
const StaticImageComponent = ({ item }) => (
  <img
    src={item.image || '/placeholder.svg'}
    alt={item.title}
    className="w-full h-full object-cover"
  />
);

// --- Main Portfolio Card Component ---
export function PortfolioLandscape({ item }) {
  const isCarousel = Array.isArray(item.images) && item.images.length > 1;

  return (
    <div className="group relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out bg-neutral-800">
      {isCarousel ? <CarouselComponent item={item} /> : <StaticImageComponent item={item} />}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white bg-black/60 backdrop-blur-sm transition-transform duration-300 translate-y-full group-hover:translate-y-0 pointer-events-none">
        <Badge
          variant="secondary"
          className="text-xs bg-white/20 text-white border-white/30 self-start mb-4"
        >
          {item.category}
        </Badge>
        <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
        <p className="text-sm leading-relaxed opacity-80">{item.description}</p>
      </div>
    </div>
  );
}