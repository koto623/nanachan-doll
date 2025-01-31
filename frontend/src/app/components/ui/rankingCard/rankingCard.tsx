import styles from './rankingCard.module.css';
import Image from 'next/image';

interface RankingItem {
  rank: number;
  votes: number;
  src: string;
  alt: string;
  title: string;
}

interface RankingCardProps {
  items: RankingItem[];
}

export const RankingCard = ({ items }: RankingCardProps) => (
  <div className={styles.ranking}>
    {items.map((item) => (
      <div key={item.rank} className={styles.rankingItem}>
        <div className={styles.rankInfo}>
          <span className={styles.rank}>{item.rank}位</span>
          <span>{item.title}</span>
          <span className={styles.votes}>♥ {item.votes}</span>
        </div>
        <Image src={item.src} alt={item.alt} className={styles.image} width={300} height={400} />
      </div>
    ))}
  </div>
);
