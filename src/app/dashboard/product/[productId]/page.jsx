'use client'

import { useParams } from 'next/navigation';

export default function ProductDetail() {
    const params = useParams()
    console.log(params);
  return (
    <div>
      <h1>Product Detail Page: {params.productId}</h1>
    </div>
  );
}
