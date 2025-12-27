import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import { FileSpreadsheet, Github } from 'lucide-react';
import Link from 'next/link';
import Analytics from '@/components/analytics';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Excel Utility Toolbox - Privacy-First Excel Tools Online',
  description: 'Free online Excel utilities. Process your data locally in your browser with zero uploads. Text cleaning, formula generation, format conversion, and VLOOKUP helpers. Privacy-first, instant, and secure.',
  keywords: 'Excel tools, online Excel utilities, Excel text cleaner, Excel formula generator, VLOOKUP helper, privacy-first, no upload, browser-based Excel tools',
  openGraph: {
    title: 'Excel Utility Toolbox - Privacy-First Excel Tools',
    description: 'Process Excel data instantly in your browser. No uploads, no login. Completely private and secure.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-linear-to-br from-gray-50 to-green-50 text-foreground min-h-screen flex flex-col`}
      >
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="size-10 rounded-xl bg-[#1D6F42] flex items-center justify-center text-white shadow-lg shadow-green-600/30">
                <FileSpreadsheet size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-[#1D6F42]">
                Excel Toolbox
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <Link 
                href="https://github.com/axpz/excel-utility-toolbox" 
                target="_blank"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={18} />
                <span className="hidden sm:inline">GitHub</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t bg-white mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Excel Toolbox. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-foreground transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
