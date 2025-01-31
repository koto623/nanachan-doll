interface Costume {
  id: number;
  title: string;
  img: string;
  date: string;
}

export const costumeData = [
  {
    id: 0,
    title: 'costume5',
    img: '/images/costume05.jpg',
    date: '2024/10/01',
  },
  {
    id: 1,
    title: 'costume1',
    img: '/images/costume01.jpg',
    date: '2024/10/02',
  },
  {
    id: 2,
    title: 'costume2',
    img: '/images/costume02.jpg',
    date: '2024/10/03',
  },
  {
    id: 3,
    title: 'costume3',
    img: '/images/costume03.jpg',
    date: '2024/10/04',
  },
  {
    id: 4,
    title: 'costume4',
    img: '/images/costume04.jpg',
    date: '2024/10/05',
  },
] as Costume[];
