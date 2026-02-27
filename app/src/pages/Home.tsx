import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import Advantages from '@/sections/Advantages';
import Statistics from '@/sections/Statistics';
import Features from '@/sections/Features';
import News from '@/sections/News';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Advantages />
        <Statistics />
        <Features />
        <News />
      </main>
      <Footer />
    </div>
  );
}
