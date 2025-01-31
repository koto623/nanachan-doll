'use client';
import { useEffect } from 'react';
import Header from '../components/layout/header/page';
import Footer from '../components/layout/footer/page';
import styles from './access.module.css';

export default function Home() {
  const images = [
    { src: '/images/facility08.jpg', alt: 'facility01' },
    { src: '/images/facility02.jpg', alt: 'facility02' },
    { src: '/images/facility03.jpg', alt: 'facility03' },
  ];
  return (

    <div className={styles.carousel}>
        <Header
        images={images}
        mainText="アクセス・周辺施設"
        subText=""
        className={styles.carouselItem} // 追加のスタイルを指定
        />

     <div className={styles.container}>
      
      <main className={styles.main}>
      
        {/* アクセス情報 */}
        <section className={styles.access}>
          <h1 className={styles.title}>アクセス</h1>
          
          <img src="/images/map.png" alt="ナナちゃん人形周辺のマップ" className={styles.mapimage}  />
          <p>ナナちゃん人形の住所:名古屋市中村区名駅1-2-1（名鉄百貨店メンズ館 1階エントランス前）</p>
        </section>

        {/* 周辺施設 */}
        <section className={styles.facilities}>
          <h1 className={styles.title}>周辺施設</h1>
          <div className={styles.facility}>
            <h3 className={styles.factitle}>エスカ地下街</h3>
            <img src="/images/facility01.jpg" alt="施設の写真" />
            <p>名古屋駅の新幹線口（太閤通口）に直結する地下商店街。飲食店やお土産店が充実しており、</p>
            <p>名古屋名物のひつまぶし、味噌カツ、手羽先などを楽しめるほか、観光客向けの名産品も揃っています。</p>
            <p>新幹線利用者にとって便利な立地で、雨の日でも快適に買い物や食事ができるのが特徴です。</p>
            <p>📍愛知県名古屋市中村区椿町6-9</p>
            <p>🕑10:00-20:30（レストラン・カフェは営業時間が異なる）</p>
          </div>

          <div className={styles.facility}>
          <h3 className={styles.factitle}>ミッドランドスクエア</h3>
            <img src="/images/facility02.jpg" alt="施設の写真" />
            <p>名古屋駅前にある高層ビルで、オフィス、商業施設、シネマ、展望台などが入っている。</p>
            <p>トヨタ自動車や毎日新聞などのオフィスが入るほか、高級ブランドやレストランが並ぶ商業エリアも充実。</p>
            <p>最上階の「スカイプロムナード」からは名古屋市内を一望でき、夜景スポットとしても人気である。</p>
            <p>📍愛知県名古屋市中村区名駅4-7-1</p>
            <p>🕑【ショップ】11:00-20:00【レストラン】11:00-23:00【スカイプロムナード】11:00-22:00 (最終入場 21:30)</p>
          </div>

          <div className={styles.facility}>
          <h3 className={styles.factitle}>KITTE名古屋</h3>
            <img src="/images/facility03.jpg" alt="施設の写真" />
            <p>名古屋駅直結のJPタワー名古屋内にある商業施設。「手紙」をテーマにしたデザインが特徴で、地下1階から3階までのフロアに多彩な店舗が揃っています。</p>
            <p>レストランやカフェ、ファッション、雑貨店などがあり、地元の名産品や限定商品も楽しめます。</p>
            <p>また、名古屋駅周辺のアクセスの良さから、観光客やビジネス客にも人気のスポットです。</p>
            <p>📍愛知県名古屋市中村区名駅一丁目1-1</p>
            <p>🕑【飲食】11:00-23:00【物販】10:00-20:00</p>
          </div>

          <div className={styles.facility}>
          <h3 className={styles.factitle}>コニカミノルタプラネタリウム満天NAGOYA</h3>
            <img src="/images/facility04.jpg" alt="施設の写真" />
            <p>名古屋駅直結の「ビックカメラ名古屋JRゲートタワー店」内にあるプラネタリウム施設。</p>
            <p>最新の映像技術と音響設備を活かした美しい星空や映像作品を楽しめるのが特徴で、</p>
            <p>リラックスできるシートやアロマの演出など、癒しの空間も提供しています。</p>
            <p>デートや家族連れ、友人同士で訪れるのにぴったりのスポットです。</p>
            <p>📍愛知県名古屋市西区則武新町3丁目1-17 イオンモールNagoya Noritake Garden3階</p>
            <p>🕑10:00-21:00</p>
          </div>

          <div className={styles.facility}>
          <h3 className={styles.factitle}>トヨタ産業技術記念館</h3>
            <img src="/images/facility05.jpg" alt="施設の写真" />
            <p>トヨタグループが共同で設立した体験型博物館グループ発祥の地に残された大正時代の赤レンガ造りの工場を活用した館内には</p>
            <p>本物の繊維機械やトヨタ初の乗用車など、迫力満点の展示物がズラリ。</p>
            <p>動態展示や多彩な実演により「見て」「驚いて」「学ぶ」ことができ、デートや家族連れ、友人同士で楽しめます。</p>
            <p>📍愛知県名古屋市西区則武新町4丁目1-35</p>
            <p>🕑9:30-17:00（最終受付16:30）</p>
          </div>

          <div className={styles.facility}>
          <h3 className={styles.factitle}>名古屋市科学館</h3>
            <img src="/images/facility06.jpg" alt="施設の写真" />
            <p>ドーム内径35mの世界最大級のプラネタリウムドームの球体を強調した外観デザインに加え、</p>
            <p>マイナス30℃の部屋でのオーロラ映像や高さ9mの人口竜巻など、自然の驚異を体感できる</p>
            <p>エンターテインメント性豊かな４つの大型展示は必見です。</p>
            <p>📍愛知県名古屋市中区栄2-17-1</p>
            <p>🕑9:30-17:00（入館は16:30まで）</p>
          </div>

          <div className={styles.facility}>
          <h3 className={styles.factitle}>オアシス21</h3>
            <img src="/images/facility07.jpg" alt="施設の写真" />
            <p>バスターミナルとしての機能を備えた立体型公園。</p>
            <p>地上14mの空中散歩を楽しめるガラスでできた大屋根「水の宇宙船」は、</p>
            <p>夜にはライトアップされフォトジェニックスポットとして人気である。</p>
            <p>📍愛知県名古屋市東区東桜1-11-1</p>
            <p>🕑【水の宇宙船】10:00-21:00 ※ライトアップは日没から23:00まで【物販店】10:00-21:00【飲食店】10:00-22:00
</p>
          </div>

          <div className={styles.facility}>
          <h3 className={styles.factitle}>中部電力MIRAI TOWER（名古屋テレビ塔）</h3>
            <img src="/images/facility08.jpg" alt="施設の写真" />
            <p>1954年に日本初の集約電波鉄塔として建設された町のランドマークタワー。</p>
            <p>全国のタワーで初となる国の重要文化財に指定されました。</p>
            <p>2020年にリニューアルされ、展望台からは名古屋市内の美しい景色を一望できます。</p>
            <p>夜にはLEDによるライトアップが施され、幻想的な雰囲気を楽しめます。</p>
            <p>📍愛知県名古屋市中区錦3-6-15</p>
            <p>🕑【平日・日曜日】10:00-21:00（最終入場20:40）【土曜日】10:00-21:40（最終入場21:20）</p>
          </div>

          <div className={styles.facility}>
          <h3 className={styles.factitle}>名古屋城</h3>
            <img src="/images/facility09.jpg" alt="施設の写真" />
            <p>徳川家康により築城され、「尾張名古屋は城でもつ」とうたわれる名古屋のシンボルです。</p>
            <p>金のシャチホコを頂く天守閣や絢爛豪華な本丸御殿、四季折々に趣ある庭園の美しさが見どころです。</p>
            <p>第二次世界大戦中に多くの建物が焼失しましたが、本丸御殿が復元され2018年に完成公開されました。</p>
            <p>📍愛知県名古屋市中区本丸1-1</p>
            <p>🕑9:00-16:30（本丸御殿への入場は16:00まで）</p>
          </div>

          <div className={styles.facility}>
          <h3 className={styles.factitle}>大須商店街</h3>
            <img src="/images/facility10.jpg" alt="施設の写真" />
            <p>名古屋市中区にある歴史ある商店街で、多様な文化が融合した賑やかなエリアです。</p>
            <p>江戸時代から続く商業地であり、現在では約1,200もの店舗が集まっています。</p>
            <p>飲食店、古着屋、雑貨店などが並び、観光客や地元の人々でにぎわいます。</p>
            <p>また、大須観音が近くにあり、毎月開催される骨董市や多くのイベントも魅力のひとつです。</p>
            <p>食べ歩きグルメも人気で、名古屋名物の味噌カツや台湾ラーメン、からあげなどを楽しめます。</p>
            <p>📍愛知県名古屋市中区大須2丁目～3丁目</p>
            <p>🕑店舗によって異なる</p>
          </div>

        </section>
      </main>

    </div>
    <Footer className={styles.carouselItem}></Footer>
    </div>
  );
}
