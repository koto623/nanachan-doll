'use client';
import { useEffect } from 'react';
import Header from '../components/layout/header/page';
import Footer from '../components/layout/footer/page';
import styles from './history.module.css';

export default function Home() {
  const images = [
    { src: '/images/history1.jpg', alt: 'history1' },
    { src: '/images/history2.jpg', alt: 'history2' },
    { src: '/images/history3.jpg', alt: 'history3' },
  ];
  return (
    <div className={styles.carousel}>
      <Header
        images={images}
        mainText="これまでの変遷、誕生秘話"
        subText=""
        className={styles.carouselItem} // 追加のスタイルを指定
      />
      <section className={`${styles.carouselItem} ${styles.content}`}>
        <main className={styles.main}>
          <h1 className={styles.title}>これまでの変遷、誕生秘話</h1>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1972</div>
              <div className={styles.timelineContent}>
                <h2>名鉄百貨店セブン館オープン</h2>
                <p>・2006年「ヤング館」に改称される</p>
                <p>・ここにナナちゃんが来ることになる</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1973</div>
              <div className={styles.timelineContent}>
                <h2>ナナちゃん誕生</h2>
                <p>・名鉄百貨店の一周年記念の際に、シンボルになるものを作ろうと、考案された</p>
                <p>・百貨店と切っても切れないマネキンを、巨大化させてマスコットにすることに決定</p>
                <p>・名前は一般公募し、 セブンをもじった親しみやすい名前「ナナちゃん」に決定</p>
                <p>・こうして誕生して以来、名古屋駅前の顔として長年愛され、待ち合わせの場所などに利用されている。</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2011</div>
              <div className={styles.timelineContent}>
                <h2>名鉄百貨店セブン館閉館</h2>
                <p>・開業から39年たってセブン館は閉館</p>
                <p>・ナナちゃんはその後も名鉄百貨店の広報部員として活動を続ける</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2012</div>
              <div className={styles.timelineContent}>
                <h2>一般企業への広告媒体としての使用解禁</h2>
                <p>・それ以前は名鉄百貨店関連または公共性のある利用に限られていたが、一般企業の利用も可能になった</p>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer className={styles.carouselItem}></Footer>
    </div>
  );
}
