import Link from "next/link";

export default function Home({children}) {
  return (
    <main>
      <div className='h-screen flex justify-center items-center'>
        <Link className='text-3xl font-bold border rounded-xl px-6 py-4' href='/dashboard'>Go to the Dashboard Page</Link>
      </div>
      {children}
    </main>
  );
}
