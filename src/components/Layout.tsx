import Header from './layout/Header';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Header />
      <main className={`container mx-auto px-4 py-8`}>{children}</main>
    </div>
  );
}

export default Layout;
