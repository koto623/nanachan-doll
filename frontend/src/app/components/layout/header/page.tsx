import Navbar from '../../ui/navbar/page';
import SlideShow from '../../ui/slideShow/page';

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

export default function Header() {
  return (
    <header>
      <Navbar />
      <SlideShow images={images} />
    </header>
  );
}
