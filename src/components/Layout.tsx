import Header from './layout/Header';

interface LayoutProps {
  children: React.ReactNode;
  centerContent?: boolean;
}

function Layout({ children, centerContent = false }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Header />
      <main className={`container mx-auto px-4 py-8 ${centerContent ? 'flex items-center justify-center' : ''}`}>
        {children}
      </main>
    </div>
  );
}

export default Layout;