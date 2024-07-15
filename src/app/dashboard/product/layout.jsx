
export default function ProductLayout({ children }) {
    return (
      <div>
        <header>
          <h1>Product</h1>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>Product footer</p>
        </footer>
      </div>
    );
  }
  