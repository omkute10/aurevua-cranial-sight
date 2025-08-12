import { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import geometricPattern from '@/assets/geometric-pattern.jpg';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchDemo = () => {
    // Placeholder for video modal or YouTube integration
    console.log('Opening demo video...');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Main Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
          aria-hidden="true"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero opacity-90" aria-hidden="true" />
        
        {/* Geometric Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-screen"
          style={{ backgroundImage: `url(${geometricPattern})` }}
          aria-hidden="true"
        />
        
        {/* Animated Scan Lines */}
        <div className="scan-line absolute inset-0" aria-hidden="true" />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-aurevua-light/20 rotate-45 float" aria-hidden="true" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-aurevua-accent/30 rotate-12 float" style={{ animationDelay: '2s' }} aria-hidden="true" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-aurevua-accent/10 rounded-full float" style={{ animationDelay: '4s' }} aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-aurevua text-center px-4">
        <div className={`max-w-5xl mx-auto ${mounted ? 'fade-in' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-aurevua-light/10 backdrop-blur-sm border border-aurevua-light/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-aurevua-light" aria-hidden="true" />
            <span className="text-sm font-medium text-aurevua-light tracking-wide">
              AI-Powered Medical Innovation
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="heading-hero text-aurevua-light mb-6">
            <span className="block">CRANIORA: AI-Powered</span>
            <span className="block bg-gradient-to-r from-aurevua-light to-aurevua-accent bg-clip-text text-transparent">
              Cranial Screening
            </span>
            <span className="block">Revolutionizing Infant Health</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-aurevua-light/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Affordable, offline-first detection for rural clinics — 
            <span className="font-semibold text-aurevua-light"> 10x cheaper</span> than Western alternatives
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            {[
              { label: 'Cost Reduction', value: '10x Cheaper' },
              { label: 'Rural Access', value: 'Offline Capable' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={`bg-aurevua-light/5 backdrop-blur-sm border border-aurevua-light/20 rounded-lg p-6 ${mounted ? 'slide-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-2xl font-bold text-aurevua-light mb-2">{stat.value}</div>
                <div className="text-sm text-aurevua-light/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={handleCTAClick}
              className="btn-primary pulse-glow group focus-visible flex items-center space-x-2 text-lg px-8 py-4"
              aria-label="Request a demo of Aurevua"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </button>
            
            <button
              onClick={handleWatchDemo}
              className="btn-secondary group focus-visible flex items-center space-x-2 text-lg px-8 py-4"
              aria-label="Watch demo video"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;