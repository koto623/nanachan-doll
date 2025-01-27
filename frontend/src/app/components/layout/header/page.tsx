import Navbar from '../../ui/navbar/page';
import PageTitle from '../../ui/pageTitle/page';
import SlideShow from '../../ui/slideShow/page';
import styles from './header.module.css';

type HeaderProps = {
  className?: string;
};

const images = [
  {
    src: '/images/slide1.png',
    alt: 'Slide 1',
  },
  {
    src: '/images/slide2.png',
    alt: 'Slide 2',
  },
  {
    src: '/images/slide3.png',
    alt: 'Slide 3',
  },
];

export default function Header({ className = '' }: HeaderProps) {
  return (
    <header className={`${styles.header} ${className}`}>
      <Navbar />
      <SlideShow images={images} />
      <PageTitle
        mainText="ナナちゃん人形紹介"
        subText="名古屋駅前の顔として愛され、​名鉄百貨店の広報部員として活躍する​大きなマスコット。​"
        className={styles.pageTitle}
      />
    </header>
  );
}
