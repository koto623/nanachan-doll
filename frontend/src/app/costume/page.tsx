'use client';
import { FormEvent, useState } from 'react';
import { costumeData } from '@/app/components/costumeData';
import Header from '@/app/components/layout/header/page';

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

  return (
    <>
      <Header />
      <h1 className="text-2xl font-bold mb-6">衣装</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          {costumeData.map((costume, key) => (
            <label key={key} className="block">
              <input
                type="radio"
                name="vote"
                value={costume.id}
                checked={selectedOption === costume.id}
                onChange={() => setSelectedOption(costume.id)}
                className="mr-2"
                required
              />
              {costume.title}
            </label>
          ))}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:bg-blue-300 w-full"
        >
          {isSubmitting ? '送信中...' : '投票する'}
        </button>

        {message && (
          <div
            className={`mt-4 p-3 rounded ${
              message.includes('エラー') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </>
  );
}
