import { Smartphone, Cloud, Brain, Shield, Globe, Zap } from 'lucide-react';
import productInterface from '@/assets/product-interface.jpg';

const ProductSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'iOS App Integration',
      description: '3D scans via ARKit/LiDAR or guided 2D image capture with real-time feedback'
    },
    {
      icon: Cloud,
      title: 'Cloud AI Analysis',
      description: 'Secure cloud processing with automated severity reports and cranial indices'
    },
    {
      icon: Brain,
      title: 'AI-Powered Detection',
      description: 'Advanced machine learning models trained on diverse datasets for accurate diagnosis'
    },
    {
      icon: Shield,
      title: 'Privacy Compliant',
      description: 'HIPAA/GDPR compliant with end-to-end encryption and secure data handling'
    },
    {
      icon: Globe,
      title: 'Rural Accessibility',
      description: 'Offline-first design enables screening in remote areas without internet'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Comprehensive reports generated in minutes with visual heatmaps'
    }
  ];

  return (
    <section 
      id="product" 
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
      aria-label="Product overview"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-bg opacity-5" aria-hidden="true" />
      
      <div className="container-aurevua relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-block bg-primary/5 border border-primary/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary tracking-wide">
              PRODUCT OVERVIEW
            </span>
          </div>
          <h2 className="heading-section mb-6">
            Complete End-to-End
            <span className="block text-primary">Cranial Screening Solution</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto text-lg leading-relaxed">
            From capture to diagnosis, Aurevua provides a comprehensive AI-powered platform 
            designed specifically for the unique challenges of Indian healthcare infrastructure.
          </p>
        </div>

        {/* Main Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Product Image */}
          <div className="slide-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-glow opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-500" aria-hidden="true" />
              <img
                src={productInterface}
                alt="Aurevua product interface showing 3D cranial scan analysis with diagnostic overlays"
                className="relative z-10 w-full h-auto rounded-2xl shadow-strong hover:shadow-glow transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 z-20 bg-aurevua-dark/80 backdrop-blur-sm text-aurevua-light px-3 py-1 rounded-full text-xs font-mono">
                LIVE DEMO
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="space-y-8 fade-in">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Revolutionary AI Screening Platform
              </h3>
              <p className="text-body text-lg leading-relaxed mb-6">
                Aurevua transforms complex cranial deformity detection into a simple, 
                accessible process that works everywhere — from metropolitan hospitals 
                to remote village clinics.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card border border-border rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">95%+</div>
                <div className="text-sm text-muted-foreground font-medium">Accuracy Rate</div>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">&lt;5min</div>
                <div className="text-sm text-muted-foreground font-medium">Analysis Time</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                <p className="text-body">
                  <strong>Affordable Innovation:</strong> 90% cost reduction compared to traditional screening methods
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                <p className="text-body">
                  <strong>Offline Capability:</strong> CoreML processing enables analysis without internet connectivity
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                <p className="text-body">
                  <strong>Explainable AI:</strong> Visual heatmaps and detailed reports build trust with healthcare providers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid-responsive">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`medical-card hover:scale-105 transition-transform duration-300 fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-body leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <button 
            onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary focus-visible"
            aria-label="Learn how Aurevua works"
          >
            See How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;