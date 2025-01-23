'use client';
import { useEffect } from 'react';
import Header from '../components/layout/header/page';
import Footer from '../components/layout/footer/page';
import styles from './history.module.css';

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

        <main className={styles.main}>
          <h1 className={styles.title}>ナナちゃんの歴史</h1>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1972</div>
              <div className={styles.timelineContent}>
                <h2>名鉄百貨店セブン館オープン</h2>
                <p>平成18年「ヤング館」に改称される</p>
                <p>ここにナナちゃんが来ることになる</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1973</div>
              <div className={styles.timelineContent}>
                <h2>ナナちゃん誕生</h2>
                <p>一周年記念の際にシンボルになるものを作ろうと考案</p>
                <p>巨大マネキン『ナナちゃん』が誕生</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2011</div>
              <div className={styles.timelineContent}>
                <h2>名鉄百貨店セブン館閉館</h2>
                <p>開業から39年たってセブン館は閉館</p>
                <p>ナナちゃんは広報部員として活動を続ける</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2012</div>
              <div className={styles.timelineContent}>
                <h2>一般企業への広告媒体としての使用解禁</h2>
                <p>それ以前は公共性のある利用に限られていたが</p>
                <p>一般企業の利用も可能になった</p>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer className={styles.carouselItem}></Footer>
    </div>
  );
}
