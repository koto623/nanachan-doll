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
        mainText="100万円でお着替えするナナちゃん"
        subText="衣装替えの舞台裏"
        className={styles.carouselItem}
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
                  <div className={styles.cardText}>
                    <h2>衣装を脱ぐ</h2>
                    <p>衣装を脱がせるのはほんの数分。</p>
                    <p>衣装は、前身頃・後ろ身頃・上半身・下半身・腕などのパーツに分かれている。</p>
                    <p>チャックや粘着テープで貼り合わせていく構造。</p> 
                  </div>
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
                  <div className={styles.cardText}>
                    <h2>衣装を着る</h2>
                    <p>新しい衣装を着せるのにかかる時間は30分程度。</p>
                    <p>2台の昇降機を駆使し、7～8人のスタッフで作業。</p>
                    <p>非常にスピーディー。</p> 
                  </div>
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
                  <div className={styles.cardText}>
                    <h2>完成</h2>
                    <p>小物を取り付け、壁のビジュアルなどを貼って完成。</p>
                    <p>靴や帽子などの小物、アクセサリー類もナナちゃんをよりファッショナブルにする重要なアイテム。</p>
                    <p>（靴のサイズは80cm）</p> 
                  </div>
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
                  <div className={styles.cardText}>
                    <h2>かつらの秘密</h2>
                    <p>頭頂部は支柱で天井に固定されているため、かつらは中央部分が円形はげになっている。</p>
                  </div>
                </div>
            </div>

            {/* Section 5 */}
            <div className={styles.card}>
            <Image
                src="/images/backstage6.jpg"
                alt="ナナちゃんの画像5"
                width={300}
                height={400}
                className={styles.image}
                />
                <div className={styles.cardBody}>
                  <div className={styles.cardText}>
                    <h2>衣装の保管</h2>
                    <p>衣装ごとにビニール袋に詰めて保管されている。</p>
                    <p>常時30着ほどを保有。</p>
                    <p>基本的に一年たったら処分される。</p>
                  </div>
                </div>
            </div>

            {/* Section 6 */}
            <div className={styles.card}>
                <Image
                src="/images/backstage7.jpg"
                alt="ナナちゃんの画像6"
                width={300}
                height={400}
                className={styles.image}
                />
                <div className={styles.cardBody}>
                  <div className={styles.cardText}>
                    <h2>レンタル料は100万円!?</h2>
                    <p>ナナちゃんの貸出期間は通常一週間。</p>
                    <p>一週間の使用料は100万円+税。（通常のマネキンのレンタル代の約100体分）</p>
                    <p>ただし衣装製作費・着せ付け代は別途。</p>
                  </div>
                </div>
            </div>
            </div>
        </main>       
      </section>
        <Footer className={styles.carouselItem}></Footer>
    </div>
  );
}