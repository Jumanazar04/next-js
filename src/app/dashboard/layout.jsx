import Link from 'next/link';

export default function DashboardLayout({ children }) {

  return (
    <div>
      <header>
        <nav className="bg-gray-300 p-3">
          <div className="mx-auto container flex justify-evenly items-center text-2xl font-bold">
            <Link href="/dashboard/product" className={('/dashboard/product')}>
              Product
            </Link>
            <Link href="/dashboard/category" className={('/dashboard/category')}>
                Category
            </Link>
            <Link href="/dashboard/news" className={('/dashboard/news')}>
              News
            </Link>
            <Link href="/dashboard/blog" className={('/dashboard/blog')}>
              Blog
            </Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Dashboard footer</p>
      </footer>
    </div>
  );
}
