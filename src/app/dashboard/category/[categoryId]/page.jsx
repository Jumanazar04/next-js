'use client'

import { useParams } from 'next/navigation';

export default function CategoryDetail() {
    const params = useParams()
    console.log(params);
  return (
    <div>
      <h1>Category Detail Page: {params.categoryId}</h1>
    </div>
  );
}
