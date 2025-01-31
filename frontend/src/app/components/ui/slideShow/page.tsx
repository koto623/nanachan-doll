'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './slideShow.module.css';

// 画像の型定義
type SlideImage = {
  src: string;
  alt: string;
};

// スライドショーのprops型定義
type SlideShowProps = {
  images: SlideImage[];
  interval?: number;
};

export default function SlideShow({
  images,
  interval = 5000, // 5秒で切り替える
}: SlideShowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={styles.slideshowContainer}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === currentIndex ? styles.active : ''
          } ${isTransitioning ? styles.transitioning : ''}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            quality={100}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        </div>
      ))}
    </div>
  );
}
