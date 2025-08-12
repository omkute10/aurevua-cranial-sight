import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import YouTubeShortsSection from '@/components/YouTubeShortsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main role="main">
        <HeroSection />
        <ProductSection />
        <HowItWorksSection />
        <YouTubeShortsSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
