'use client'

import { useParams } from 'next/navigation';

export default function BlogDetail() {
    const params = useParams()
    console.log(params);
  return (
    <div>
      <h1>Blog Detail Page: {params.blogId}</h1>
    </div>
  );
}
