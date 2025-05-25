
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Steps from '@/components/Steps';
import FAQ from '@/components/FAQ';
import Campaign from '@/components/Campaign';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Hero />
        <Features />
        <Steps />
        <FAQ />
        <Campaign />
      </main>
      <Footer />
    </>
  );
}
