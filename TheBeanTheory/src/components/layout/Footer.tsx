'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@/hooks/useGSAP';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NAV_ITEMS } from '@/types';
import styles from './Footer.module.css';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Watermark slow reveal
      gsap.fromTo(
        watermarkRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.container}>
        {/* Brand Section */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            The Bean Theory
          </Link>
          <p className={styles.tagline}>
            Crafting the perfect roast through precision, science, and sensory
            mastery.
          </p>
        </div>

        {/* Navigation Section */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Navigate</h4>
          <ul className={styles.linkList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Section */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Connect</h4>
          <ul className={styles.linkList}>
            <li>
              <a
                href="https://instagram.com/thebeantheory"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@thebeantheory"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className={styles.newsletter}>
          <h4 className={styles.columnTitle}>Stay Updated</h4>
          <p className={styles.newsletterText}>
            Join our mailing list for exclusive roasts and brewing tips.
          </p>
          <form className={styles.inputGroup} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className={styles.input}
            />
            <button type="submit" className={styles.submitBtn}>
              JOIN
            </button>
          </form>
        </div>
      </div>

      {/* Massive Signature Watermark */}
      <div className={styles.watermark} ref={watermarkRef}>
        <span className={styles.watermarkText}>THE BEAN THEORY</span>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          &copy; {currentYear} The Bean Theory. All rights reserved.
        </p>
        <div className={styles.legalLinks}>
          <Link href="/privacy" className={styles.legalLink}>
            Privacy
          </Link>
          <Link href="/terms" className={styles.legalLink}>
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
