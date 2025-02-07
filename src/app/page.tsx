import type { Metadata } from 'next';
import Header from './components/Header'; //  Import Header
import Footer from './components/Footer';  // Import Footer
export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
};

export default function Home() {
  return (
    <div>
      <Header /> 
      <main className="min-h-screen">
        <h1>Welcome to My Website</h1>
      </main>
      <Footer />
    </div>
  );
}


