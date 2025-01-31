import Navbar from '../../ui/navbar/page';
import PageTitle from '../../ui/pageTitle/page';
import SlideShow from '../../ui/slideShow/page';
import styles from './header.module.css';

type HeaderProps = {
  className?: string;
  images: { src: string; alt: string }[];
  mainText: string;
  subText: string;
};

export default function Header({
  className = '',
  images,
  mainText,
  subText,
}:HeaderProps) {
  return (
    <header className={`${styles.header} ${className}`}>
      <Navbar />
      <SlideShow images={images} />
      <PageTitle mainText={mainText} subText={subText} className={styles.pageTitle} />
      </header>
  );
}