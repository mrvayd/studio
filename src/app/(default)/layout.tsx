
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ThemeToggleButton } from '@/components/theme-toggle-button';

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
      <div className="fixed bottom-6 left-6 z-50">
        <div className="bg-card p-1.5 rounded-lg shadow-xl border border-border">
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  );
}
