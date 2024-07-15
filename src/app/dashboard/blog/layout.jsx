
export default function BlogLayout({ children }) {
    return (
      <div>
        <header>
          <h1>Blog</h1>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>Blog footer</p>
        </footer>
      </div>
    );
  }
  