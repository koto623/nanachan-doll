"use client"
import { FormEvent, useEffect, useState } from 'react';

export default function Home() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/result');
                const data = await response.json();
                console.log('投票結果:', data);
            } catch (error) {
                console.error('データの取得に失敗しました:', error);
            }
        };
        fetchData();
    },[]);
    
  return (
    <div className="p-6 max-w-md mx-auto">
        top
    </div>
  );
}
