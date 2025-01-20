import styles from './footer.module.css';

type FooterProps = {
  className?: string;
};

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <p>
        <small>&copy;2025&ensp;imoyoukan</small>
      </p>
    </footer>
  );
}
