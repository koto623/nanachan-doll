'use client';
import { useEffect, useState } from 'react';
import Header from '../components/layout/header/page';
import Footer from '../components/layout/footer/page';
import styles from './top.module.css';
import { ProfileCard } from '../components/ui/profileCard/profileCard';
import { RankingCard } from '../components/ui/rankingCard/rankingCard';
import { costumeData } from '../components/costumeData';

interface RankingItem {
  rank: number;
  votes: number;
  src: string;
  alt: string;
  title: string;
}

export default function Home() {
  const [rankingData, setRankingData] = useState<RankingItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/voteResult');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const sortedVotes = Object.entries(data)
          .map(([id, votes]) => ({
            id: parseInt(id),
            votes: votes as number,
          }))
          .sort((a, b) => b.votes - a.votes)
          .slice(0, 3);

        const formattedData = sortedVotes.map((item, index) => {
          const costume = costumeData.find((c) => c.id === item.id);
          return {
            rank: index + 1,
            votes: item.votes,
            src: costume?.img || '',
            alt: `costume${item.id}`,
            title: costume?.title || '',
          };
        });

        setRankingData(formattedData);
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      }
    };
    fetchData();
  }, []);

  const profileData = [
    { label: 'いる場所', value: 'メンズ館1階エントランス前' },
    { label: '生年月日', value: '1973年4月28日' },
    { label: '身長', value: '6m10cm' },
    { label: '体重', value: '600kg' },
    { label: '素材', value: 'FRP硬質塩ビ樹脂' },
  ];

  const images = [
    { src: '/images/costume17.jpg', alt: 'costume17' },
    { src: '/images/costume07.jpg', alt: 'costume07' },
    { src: '/images/costume25.jpg', alt: 'costume25' },
  ];

  return (
    <div className={styles.carousel}>
      <Header
        images={images}
        mainText="ナナちゃん人形紹介"
        subText="名古屋駅前の顔として愛され、名鉄百貨店の広報部員として活躍する大きなマスコット。"
        className={styles.carouselItem}
      />
      <section className={`${styles.carouselItem} ${styles.content}`}>
        <h2 className={styles.title}>プロフィール</h2>
        <ProfileCard data={profileData} />
      </section>
      <section className={`${styles.carouselItem} ${styles.content}`}>
        <h2 className={styles.title}>人気の衣装は&#63;</h2>
        <p className={styles.description}>
          投票数の多い衣装を紹介します！皆さんもお気に入りの衣装があったら投票してくださいね
        </p>
        {rankingData.length > 0 ? <RankingCard items={rankingData} /> : <p>データを取得中...</p>}
      </section>
      <Footer className={styles.carouselItem} />
    </div>
  );
}
