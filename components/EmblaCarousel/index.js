import React, { useState, useEffect, useCallback } from 'react';
import { DotButton, PrevButton, NextButton } from './EmblaCarouselButtons';
// import useEmblaCarousel from 'embla-carousel-react';
import styles from './embla.module.css';

const EmblaCarousel = ({ slides, images }) => {
  // const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const [scrollSnaps, setScrollSnaps] = useState([]);

  // const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  // const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  // const scrollTo = useCallback(
  //   (index) => embla && embla.scrollTo(index),
  //   [embla],
  // );

  // const onSelect = useCallback(() => {
  //   if (!embla) return;
  //   setSelectedIndex(embla.selectedScrollSnap());
  //   setPrevBtnEnabled(embla.canScrollPrev());
  //   setNextBtnEnabled(embla.canScrollNext());
  // }, [embla, setSelectedIndex]);

  // useEffect(() => {
  //   if (!embla) return;
  //   onSelect();
  //   setScrollSnaps(embla.scrollSnapList());
  //   embla.on('select', onSelect);
  // }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      {/* <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={viewportRef}>
          <div className={styles.embla__container}>
            {(images || []).map((data, index) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__inner}>
                  <img className={styles.embla__slide__img} src={data} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div> */}
    </>
  );
};

export default EmblaCarousel;
