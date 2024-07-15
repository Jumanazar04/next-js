
export default function NewsLayout({ children }) {
    return (
      <div>
        <header>
          <h1>News</h1>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>News footer</p>
        </footer>
      </div>
    );
  }
  