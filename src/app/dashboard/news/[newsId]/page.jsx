'use client'

import { useParams } from 'next/navigation';

export default function NewsDeteil() {
    const params = useParams()
    console.log(params);
  return (
    <div>
      <h1>News Detail Page: {params.newsId}</h1>
    </div>
  );
}