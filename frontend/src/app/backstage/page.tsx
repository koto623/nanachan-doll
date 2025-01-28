'use client';
import Header from '../components/layout/header/page';
import Footer from '../components/layout/footer/page';
import styles from './backstage.module.css';
import Image from 'next/image';                         

export default function Home() {
  const images = [
    { src: '/images/backstagetop.jpg', alt: 'backstagetop' },
    { src: '/images/backstage2.jpg', alt: 'backstage2' },
    { src: '/images/backstagetop2.jpg', alt: 'backstagetop2' },
  ];
  return (
    <div className={styles.carousel}>
      <Header
        images={images}
        mainText="毎週100万円でお着替えするナナちゃん"
        subText="衣装替えの舞台裏"
        className={styles.carouselItem} // 追加のスタイルを指定
      />
      <section className={`${styles.carouselItem} ${styles.content}`}>
      <main className={styles.main}>
          <h1 className={styles.title}>衣替えの舞台裏</h1>
                
            <div className={styles.cardContainer}>
            <div className={styles.card}>
                <Image
                src="/images/backstage1.jpg"
                alt="ナナちゃんの画像1"
                width={300}
                height={400}
                className={styles.image}
                />
                <div className={styles.cardBody}>
                <p className={styles.cardText}>
                    衣装を脱がせるのはほんの数分。衣装は前身頃・後ろ身頃・上半身・下半身・腕などのパーツに分かれ、チャックや粘着テープで貼り合わせていく構造。
                </p>
                </div>
            </div>

            {/* Section 2 */}
            <div className={styles.card}>
            <Image
                src="/images/backstage2.jpg"
                alt="ナナちゃんの画像1"
                width={300}
                height={400}
                className={styles.image}
                />
                <div className={styles.cardBody}>
                <p className={styles.cardText}>
                新しい衣装を着せるのにかかる時間も30分程度。2台の昇降機を駆使した7～8人のスタッフによる作業は非常にスピーディー。
                </p>
                </div>
            </div>

            {/* Section 3 */}
            <div className={styles.card}>
            <Image
                src="/images/backstage5.jpg"
                alt="ナナちゃんの画像3"
                width={300}
                height={400}
                className={styles.image}
                />
                <div className={styles.cardBody}>
                <p className={styles.cardText}>
                小物を取り付け、壁のビジュアルなどを貼って完成。靴や帽子などの小物、アクセサリー類もナナちゃんをよりファッショナブルにする重要なアイテム。靴のサイズは80cm。
                </p>
                </div>
            </div>

            {/* Section 4 */}
            <div className={styles.card}>
            <Image
                src="/images/backstage4.jpg"
                alt="ナナちゃんの画像1"
                width={300}
                height={400}
                className={styles.image}
                />
                <div className={styles.cardBody}>
                    <p className={styles.cardText}>
                    頭頂部は支柱で天井に固定されているため、かつらは中央部分が円形はげになっている。
                    </p>
                </div>
            </div>

            {/* Section 5 */}
            <div className={styles.card}>
            <Image
                src="/images/backstage7.jpg"
                alt="ナナちゃんの画像1"
                width={300}
                height={400}
                className={styles.image}
                />
                <div className={styles.cardBody}>
                    <p className={styles.cardText}>
                    ナナちゃんの貸出期間は通常一週間。一週間の使用料は100万円+税。これは通常のマネキンのレンタル代の約100体分。ただし衣装製作費・着せ付け代は別途。
                    </p>
                </div>
            </div>

            {/* Section 6 */}
            <div className={styles.card}>
                <Image
                src="/images/backstage6.jpg"
                alt="ナナちゃんの画像1"
                width={300}
                height={400}
                className={styles.image}
                />
                <div className={styles.cardBody}>
                    <p className={styles.cardText}>
                    衣装ごとにビニール袋に詰めて保管されている。ここでは常時30着ほどを保有。基本的に一年たったら処分される。
                    </p>
                </div>
            </div>
            </div>
        </main>       
      </section>
        <Footer className={styles.carouselItem}></Footer>
    </div>
  );
}