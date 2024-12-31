'use client';
import { useEffect } from 'react';
import Header from '../components/layout/header/page';
import Footer from '../components/layout/footer/page';
import styles from './top.module.css';

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/voteResult');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('取得したデータ:', data);
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.carousel}>
      <Header className={styles.carouselItem}></Header>
      <section className={`${styles.carouselItem} ${styles.content}`}>
        <h2>プロフィール</h2>
        <dl>
          <dt>いる場所</dt>
          <dd>メンズ館1階エントランス前</dd>
          <dt>生年月日</dt>
          <dd>1973.4.28</dd>
          <dt>身長</dt>
          <dd>6m10cm</dd>
          <dt>体重</dt>
          <dd>600kg</dd>
          <dt>素材</dt>
          <dd>FRP硬質塩ビ樹脂</dd>
        </dl>
      </section>
      <section className={`${styles.carouselItem} ${styles.content}`}>
        <h2>人気の衣装は&#63;</h2>
        <p>1位</p>
      </section>
      <Footer className={styles.carouselItem}></Footer>
    </div>
  );
}
