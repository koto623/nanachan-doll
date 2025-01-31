'use client';

import styles from './costumeCard.module.css';
import Image from 'next/image';

interface CostumeCardProps {
  costume: {
    id: number;
    title: string;
    img: string;
    date: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

export const CostumeCard = ({ costume, isSelected, onSelect }: CostumeCardProps) => {
  return (
    <label className={`${styles.card} ${isSelected ? styles.cardSelected : ''}`}>
      <div className={styles.cardContent}>
        <input
          type="radio"
          name="vote"
          value={costume.id}
          checked={isSelected}
          onChange={onSelect}
          style={{ position: 'absolute', opacity: 0 }}
          required
        />
        <Image
          src={costume.img}
          alt={costume.title}
          className={styles.image}
          layout="responsive"
          width={500}
          height={500}
        />
      </div>
      <div>
        <h3 className={styles.costumeTitle}>{costume.title}</h3>
        <p className={styles.date}>{costume.date}</p>
      </div>
    </label>
  );
};
