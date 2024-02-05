import Header from '@/components/Header';
import '@/styles/globals.css';
import { cn } from '@/utils/style';
import type { AppProps } from 'next/app';

import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <div className={cn('flex h-screen w-full lg:text-base', inter.className)}>
      {/* sidebar */}
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="flex flex-1 flex-col overflow-y-auto">
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </div>
  );
}
