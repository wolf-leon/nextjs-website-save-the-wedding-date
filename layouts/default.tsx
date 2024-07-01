import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex flex-col items-center justify-center py-3 text-gray-700 text-center" style={{ background: 'linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)' }}>
        <div className="text-lg font-bold" style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>
          Bronson & Sancha - Wedding Bliss
        </div>
        <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '20px', padding: '0 20px', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#333', textDecoration: 'none' }}>Home</Link>
          <Link href="/enagement" style={{ color: '#333', textDecoration: 'none' }}>Engagement</Link>
          <Link href="/wedding_invitation" style={{ color: '#333', textDecoration: 'none' }}>Wedding Invitation</Link>
          <Link href="/venue" style={{ color: '#333', textDecoration: 'none' }}>Venue Details</Link>
          <Link href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</Link>
        </nav>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Bronson | Sancha. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
