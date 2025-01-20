'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import { useWindowWidth } from '../../../hooks/useWindowWidth';

const navItems = [
  { href: '/top', label: 'トップページ' },
  { href: '/costume', label: '衣装' },
  { href: '/history', label: '変遷' },
  { href: '/backstage', label: '衣替えの舞台裏' },
  { href: '/minachan', label: 'ミナちゃん紹介' },
  { href: '/access', label: 'アクセス・周辺施設' },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { breakpoint } = useWindowWidth();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (breakpoint === 'desktop') {
      setIsOpen(false);
      document.body.style.overflow = '';
    }
  }, [breakpoint]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  if (!isMounted) return null;

  return (
    <nav className={styles.nav}>
      {/* PC用メニュー */}
      <ul className={styles.desktopMenu}>
        {navItems.map(({ href, label }) => (
          <li key={href} className={styles.menuItem}>
            <Link href={href} className={styles.link}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* ハンバーガー*/}
      {breakpoint === 'mobile' && (
        <button
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="メニュー"
          aria-expanded={isOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      )}

      {/* モバイル用メニュー */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.isOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          <ul className={styles.mobileMenuList}>
            {navItems.map(({ href, label }) => (
              <li key={href} className={styles.mobileMenuItem}>
                <Link
                  href={href}
                  className={styles.mobileLink}
                  onClick={() => {
                    setIsOpen(false);
                    document.body.style.overflow = '';
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
