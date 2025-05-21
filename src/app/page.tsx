import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Steps from '../components/Steps';
import FAQ from '../components/FAQ';
import Campaign from '../components/Campaign'
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
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
