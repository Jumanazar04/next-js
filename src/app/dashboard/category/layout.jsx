
export default function CategoryLayout({ children }) {
  return (
    <div>
      <header>
        <h1>Category</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>Category footer</p>
      </footer>
    </div>
  );
}
