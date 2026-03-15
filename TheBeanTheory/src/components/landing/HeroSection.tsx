'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import { CustomCursor } from '@/components/layout/CustomCursor';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const container = useRef<HTMLDivElement>(null);

  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
        onComplete: () => {
          // Allow overflow after reveal to prevent parallax cutting
          const containers = container.current?.querySelectorAll(`.${styles.revealContainer}`);
          containers?.forEach((el) => {
            (el as HTMLElement).style.overflow = 'visible';
          });
        },
      });

      // Initial state setup for reveal animations
      gsap.set([title1Ref.current, title2Ref.current], { yPercent: 120 });
      gsap.set(subtitleRef.current, { yPercent: 100, opacity: 0 });
      gsap.set(ctaRef.current, { y: 20, opacity: 0 });

      // Sequence
      tl.to(title1Ref.current, {
        yPercent: 0,
        duration: 1.6,
        ease: 'power4.out',
      })
        .to(
          title2Ref.current,
          { yPercent: 0, duration: 1.6, ease: 'power4.out' },
          '-=1.4'
        )
        .to(
          subtitleRef.current,
          { yPercent: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
          '-=1.2'
        )
        .to(
          ctaRef.current,
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          '-=1.0'
        );

      // Parallax effect (Titles only)
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xRel = (clientX / window.innerWidth - 0.5);
        const yRel = (clientY / window.innerHeight - 0.5);

        // Move text TOWARDS cursor direction
        const xPos = xRel * 80; 
        const yPos = yRel * 40;

        gsap.to(title1Ref.current, {
          x: xPos,
          y: yPos,
          duration: 1.2,
          ease: 'power2.out',
        });
        gsap.to(title2Ref.current, {
          x: xPos * 1.3,
          y: yPos * 1.3,
          duration: 1.4,
          ease: 'power2.out',
        });
        gsap.to(subtitleRef.current, {
          x: xPos * 0.4,
          y: yPos * 0.4,
          duration: 1.8,
          ease: 'power2.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Bouncing scroll wheel animation
      gsap.to(wheelRef.current, {
        y: 12,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    },
    { scope: container }
  );

  const scrollToNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('featured-products');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={container}
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center px-6 bg-[#100c0a]"
    >
      <CustomCursor containerRef={container} />

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="object-cover w-full h-full scale-125"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#100c0a]" />
        <div className="absolute inset-0 bg-black/40" /> 
      </div>

      <div className="relative z-20 flex flex-col items-center gap-12 max-w-[100vw] mx-auto w-full">
        {/* Typography */}
        <div className="flex flex-col items-center w-full">
          <div className={styles.revealContainer}>
            <h1
              ref={title1Ref}
              className={`${styles.heroTitle} ${styles.title1}`}
            >
              THE BEAN
            </h1>
          </div>
          <div className={styles.revealContainer}>
            <h1
              ref={title2Ref}
              className={`${styles.heroTitle} ${styles.title2}`}
            >
              THEORY
            </h1>
          </div>
        </div>

        <div className="overflow-hidden">
          <p
            ref={subtitleRef}
            className="font-sans text-[clamp(1rem,3vw,1.75rem)] font-light text-white/90 tracking-[0.5em] uppercase"
          >
            Artistry in Every Roast
          </p>
        </div>

        {/* Floating Boutique Pill Button */}
        <div className="mt-8 overflow-hidden">
          <a
            href="#featured-products"
            ref={ctaRef}
            onClick={scrollToNext}
            className={styles.ctaButton}
          >
            <span className={styles.btnText}>
              <span>Explore Menu</span>
              <span className={styles.btnIcon}>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-white/60 font-mono text-xs uppercase tracking-[0.25em]">
        <span>Scroll</span>
        <div className="w-[26px] h-[40px] border border-white/40 rounded-full relative flex justify-center p-1">
          <div
            ref={wheelRef}
            className="w-1.5 h-2 bg-white rounded-full mt-1"
          />
        </div>
      </div>
    </section>
  );
}
