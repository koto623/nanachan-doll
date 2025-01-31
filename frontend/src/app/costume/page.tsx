'use client';
import { FormEvent, useState } from 'react';
import { costumeData } from '@/app/components/costumeData';
import Header from '@/app/components/layout/header/page';
import { CostumeCard } from '@/app/components/ui/costumeCard/costumeCard';
import styles from './costume.module.css';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(-1);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ vote: selectedOption }),
      });

      if (response.ok) {
        setMessage('投票が完了しました！');
      } else {
        setMessage('投票の送信中にエラーが発生しました。');
      }
    } catch (error) {
      setMessage('通信エラーが発生しました。');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const images = [
    { src: '/images/costume01.jpg', alt: 'costume1' },
    { src: '/images/costume02.jpg', alt: 'costume2' },
    { src: '/images/costume03.jpg', alt: 'costume3' },
  ];

  return (
    <>
      <Header images={images} mainText="2024年の衣装紹介" subText="" className={styles.w100} />
      <div className={styles.container}>
        <h1 className={styles.title}>衣装紹介</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.gridContainer}>
            {costumeData.map((costume) => (
              <CostumeCard
                key={costume.id}
                costume={costume}
                isSelected={selectedOption === costume.id}
                onSelect={() => setSelectedOption(costume.id)}
              />
            ))}
          </div>
          <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
            {isSubmitting ? '送信中...' : '投票する'}
          </button>
          {message && (
            <div
              className={`mt-4 p-3 rounded ${
                message.includes('エラー')
                  ? 'bg-red-100 text-red-700'
                  : 'bg-green-100 text-green-700'
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </>
  );
}
