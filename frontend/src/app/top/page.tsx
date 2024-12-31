'use client';
import { useEffect } from 'react';
import Header from '../components/layout/header/page';

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
    <div className="p-6 max-w-md mx-auto">
      <Header></Header>
    </div>
  );
}
