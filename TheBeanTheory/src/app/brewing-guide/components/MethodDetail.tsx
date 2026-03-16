'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@/hooks/useGSAP';
import type { BrewingGuide } from '@/types';
import styles from './MethodDetail.module.css';

gsap.registerPlugin(ScrollTrigger);

interface MethodDetailProps {
  guide: BrewingGuide;
}

export function MethodDetail({ guide }: MethodDetailProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const stepArticles = gsap.utils.toArray('.step-article');
      const numberEls = gsap.utils.toArray('.step-number-fixed');
      const images = gsap.utils.toArray('.step-image');
      const progressBar = document.querySelector('.scroll-progress-bar');
      
      // Setup initial states for the numbers (only 01 is initially visible and positioned at y=0)
      gsap.set(numberEls, { opacity: 0, yPercent: 100 });

      // Animate the main split divider line as a progress bar
      const splitLine = document.querySelector('.split-progress-line');
      if (splitLine && leftPanelRef.current) {
        gsap.to(splitLine, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%", // Starts growing slightly before the first step reaches the middle
            end: "bottom bottom", // Finishes growing when the end of the section reaches the bottom of viewport
            scrub: true,
          }
        });
      }

      stepArticles.forEach((step, i) => {
        const numEl = numberEls[i] as HTMLElement;
        const imgEl = images[i] as HTMLElement;
        const stepEl = step as HTMLElement;
        
        // Element reveal animations (Staggered fade in up)
        const contentElements = stepEl.querySelectorAll('.step-reveal');
        gsap.fromTo(contentElements, 
          { y: 40, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.2, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: stepEl,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Image Parallax Effect
        gsap.fromTo(
          imgEl,
          { yPercent: -15, scale: 1.1 },
          {
            yPercent: 15,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: stepEl,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        // Number Swap Logic in the Sticky Panel
        // Use a tighter trigger window to prevent overlapping numbers
        ScrollTrigger.create({
          trigger: stepEl,
          start: 'top 55%', // Triggers when the top of the step hits 55% of viewport
          end: 'bottom 55%', // Ends when the bottom of the step hits 55%
          onEnter: () => gsap.to(numEl, { opacity: 1, yPercent: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' }),
          onLeave: () => gsap.to(numEl, { opacity: 0, yPercent: -100, duration: 0.4, ease: 'power2.in', overwrite: 'auto' }),
          onEnterBack: () => gsap.to(numEl, { opacity: 1, yPercent: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' }),
          onLeaveBack: () => gsap.to(numEl, { opacity: 0, yPercent: 100, duration: 0.4, ease: 'power2.in', overwrite: 'auto' }),
        });
      });
      
      // Reveal the "Detailed Protocol" header
      gsap.from('.header-reveal', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });
    },
    { dependencies: [guide], scope: sectionRef }
  );

  const steps = guide.instructions.map((inst: any) => {
    // Some structures may have the text nested in children
    const text = inst.children?.[0]?.text || inst.text || '';
    const parts = text.split(':');
    
    return {
      title: parts[0]?.trim() || 'Procedure',
      description: parts[1]?.trim() || text.trim(),
      imageUrl: inst.imageUrl || '1544787210-2211d24715ec', // Read directly from the instruction object
    };
  });

  return (
    <section id="method-detail" ref={sectionRef} className={styles.section}>
      {/* Intro Header */}
      <div className={styles.introHeader}>
        <span className={`${styles.subtitle} header-reveal`}>
          The Detailed Protocol
        </span>
        <h2 className={`${styles.title} header-reveal`}>
          {guide.methodName}
        </h2>
        <div className="w-px h-16 bg-white/20 header-reveal mx-auto mt-12" />
      </div>

      {/* Split Awwwards Layout */}
      <div className={styles.splitLayout}>
        
        {/* Left Sticky Panel */}
        <div className={styles.leftPanel} ref={leftPanelRef}>
          <div className={styles.stickyContainer}>
            <div className={styles.numberWrapper}>
              {steps.map((_, i) => (
                <span key={i} className={`step-number-fixed ${styles.stepNumberFixed}`}>
                  0{i + 1}
                </span>
              ))}
            </div>
            <div className={styles.methodBadge}>
              {guide.methodName} Guide
            </div>
            
            {/* Split Progress Line */}
            <div className={`split-progress-line ${styles.splitProgressLine}`} />
          </div>
        </div>

        {/* Right Scrolling Track */}
        <div className={styles.rightPanel}>
          {steps.map((step, i) => (
             <article key={i} className={`step-article ${styles.stepArticle}`}>
               <div className={styles.stepContent}>
                 <span className={`step-reveal ${styles.stepMobileNumber}`}>0{i + 1}</span>
                 <h3 className={`step-reveal ${styles.stepTitle}`}>{step.title}</h3>
                 <p className={`step-reveal ${styles.stepDescription}`}>{step.description}</p>
                                  <div className={`step-reveal ${styles.visualContainer}`}>
                   <img 
                     src={`https://images.unsplash.com/photo-${step.imageUrl}?q=80&w=1200&auto=format&fit=crop`} 
                     alt={step.title} 
                     className={`step-image ${styles.image}`}
                   />
                   <div className={styles.imageOverlay} />
                 </div>
               </div>
             </article>
          ))}
        </div>
      </div>

      {/* Video Section */}
      {guide.videoUrl && (
        <div className={styles.videoSection}>
          <div className={styles.videoBackground} />
          
          <div className={styles.videoContainer}>
            <div className={styles.videoHeader}>
              <span className={styles.videoSubtitle}>
                Cinematic Tutorial
              </span>
              <h3 className={styles.videoTitle}>
                Watch the <br /> Process
              </h3>
            </div>
            <div className={styles.videoWrapper}>
              <iframe 
                className={styles.iframe}
                src={`${guide.videoUrl.replace('watch?v=', 'embed/')}?autoplay=1&mute=1&loop=1&playlist=${guide.videoUrl.split('v=')[1]}`} 
                title="Brewing Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
