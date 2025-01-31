'use client';
import { useEffect, useState } from 'react';
import Header from '../components/layout/header/page';
import Footer from '../components/layout/footer/page';
import styles from './top.module.css';
import { ProfileCard } from '../components/ui/profileCard/profileCard';
import { RankingCard } from '../components/ui/rankingCard/rankingCard';

interface RankingItem {
  rank: number;
  votes: number;
  src: string;
  alt: string;
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
        console.log(data);
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
        className={styles.carouselItem} // 追加のスタイルを指定
      ></Header>
      <section className={`${styles.carouselItem} ${styles.content}`}>
        <h2 className={styles.title}>プロフィール</h2>
        <ProfileCard data={profileData} />
      </section>
      <section className={`${styles.carouselItem} ${styles.content}`}>
        <h2 className={styles.title}>人気の衣装は&#63;</h2>
        {rankingData.length > 0 ? <RankingCard items={rankingData} /> : <p>データを取得中...</p>}
      </section>
      <Footer className={styles.carouselItem}></Footer>
    </div>
  );
}
