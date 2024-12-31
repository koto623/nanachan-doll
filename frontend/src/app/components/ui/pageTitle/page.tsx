'use client';
import { usePathname } from 'next/navigation';
import styles from './pageTitle.module.css';

interface PageTitleProps {
  mainText: string;
  subText?: string;
  className?: string;
}

export default function PageTitle({ mainText, subText, className = '' }: PageTitleProps) {
  const pathname = usePathname();
  const isTopPage = pathname === '/top';

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={`${styles.content} ${isTopPage ? styles.vertical : ''}`}>
        <h1 className={`${styles.mainText} ${styles.fadeIn}`}>{mainText}</h1>
        {subText && <p className={`${styles.subText} ${styles.fadeIn}`}>{subText}</p>}
      </div>
    </div>
  );
}
