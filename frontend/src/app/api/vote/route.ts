import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const API_URL = 'localhost';
    
    const response = await fetch(`http://${API_URL}:8080/api/vote1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ vote: body.vote }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Vote API error:', error);
    return NextResponse.json(
      { error: '投票の送信中にエラーが発生しました' },
      { status: 500 }
    );
  }
}