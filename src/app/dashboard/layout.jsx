
export default function DashboardLayout({ children }) {
    return (
      <div>
        <header>
          <h1>Dashboard</h1>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>Dashboard footer</p>
        </footer>
      </div>
    );
  }
  