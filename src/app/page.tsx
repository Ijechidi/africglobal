
import Hero from '../components/Hero';
import Features from '../components/Features';
import Steps from '../components/Steps';
import FAQ from '../components/FAQ';
import Campaign from '../components/Campaign'


export default function Home() {
  return (
    <>
      
      <main className="pt-20">
        <Hero />
        <Features />
        <Steps />
        <FAQ />
        <Campaign />
      </main>
      
    </>
  );
}
