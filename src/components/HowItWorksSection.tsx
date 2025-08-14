import { Camera, Upload, Brain, FileText, CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: Camera,
      title: 'Capture',
      subtitle: 'iOS App Scanning',
      description: 'Healthcare providers use our iOS app to capture 3D scans via ARKit/LiDAR or guided 2D images with real-time feedback and quality assurance.',
      features: ['ARKit/LiDAR Integration', 'Guided Image Capture', 'Quality Validation', 'Offline Processing']
    },
    {
      number: '02',
      icon: Upload,
      title: 'Upload',
      subtitle: 'Secure Cloud Transfer',
      description: 'Encrypted data is securely uploaded to our cloud infrastructure when connectivity is available, ensuring patient privacy and HIPAA compliance.',
      features: ['End-to-End Encryption', 'HIPAA Compliant', 'Batch Processing', 'Automatic Sync']
    },
    {
      number: '03',
      icon: Brain,
      title: 'Analyze',
      subtitle: 'AI Processing',
      description: 'Our advanced PointNet and ResNet models analyze cranial geometry, detecting conditions like plagiocephaly and brachycephaly with high accuracy.',
      features: ['PointNet/ResNet Models', 'Multi-condition Detection', 'Severity Grading', 'Pattern Recognition']
    },
    {
      number: '04',
      icon: FileText,
      title: 'Report',
      subtitle: 'Comprehensive Results',
      description: 'Detailed reports with visual heatmaps, cranial indices, and treatment recommendations are generated within minutes and delivered securely.',
      features: ['Visual Heatmaps', 'Cranial Indices', 'Treatment Plans', 'Multi-language Support']
    },
    {
      number: '05',
      icon: CheckCircle,
      title: 'Act',
      subtitle: 'Clinical Decision',
      description: 'Healthcare providers receive actionable insights with explainable AI reasoning to make informed decisions about patient care and referrals.',
      features: ['Clinical Guidelines', 'Referral Recommendations', 'Progress Tracking', 'Family Education']
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="py-20 lg:py-32 bg-card-dark text-card-dark-foreground relative overflow-hidden"
      aria-label="How Aurevua works"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="scan-line opacity-30" aria-hidden="true" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-aurevua-light/10 rounded-full float" aria-hidden="true" />
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-aurevua-accent/20 rotate-45 float" style={{ animationDelay: '3s' }} aria-hidden="true" />
      </div>

      <div className="container-aurevua relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in">
          <div className="inline-block bg-aurevua-light/10 border border-aurevua-light/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-aurevua-light tracking-wide">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="heading-section text-aurevua-light mb-6">
            From Scan to Diagnosis
            <span className="block text-aurevua-accent">in Five Simple Steps</span>
          </h2>
          <p className="text-aurevua-light/80 max-w-3xl mx-auto text-lg leading-relaxed">
            Our streamlined workflow transforms complex medical imaging into a simple, 
            accessible process that works in any healthcare setting.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step Content */}
              <div className={`space-y-6 fade-in ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="text-mono text-aurevua-accent/60 text-sm font-medium">
                    STEP {step.number}
                  </div>
                  <div className="flex-1 h-px bg-aurevua-light/20" aria-hidden="true" />
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-aurevua-light/10 backdrop-blur-sm border border-aurevua-light/20 rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-aurevua-light" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-aurevua-light">{step.title}</h3>
                    <p className="text-aurevua-accent font-medium">{step.subtitle}</p>
                  </div>
                </div>

                <p className="text-aurevua-light/80 text-lg leading-relaxed">
                  {step.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {step.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-aurevua-accent rounded-full flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-aurevua-light/70 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Visualization */}
              <div className={`slide-in ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative">
                  {/* Main Visual Container */}
                  <div className="bg-aurevua-light/5 backdrop-blur-sm border border-aurevua-light/20 rounded-2xl p-8 lg:p-12">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 pulse-glow">
                        <step.icon className="w-12 h-12 text-aurevua-light" aria-hidden="true" />
                      </div>
                      <div className="text-6xl font-bold text-aurevua-light/20 mb-4">
                        {step.number}
                      </div>
                      <div className="text-xl font-semibold text-aurevua-light mb-2">
                        {step.title}
                      </div>
                      <div className="text-aurevua-accent font-medium">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Connection Line (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                      <div className="w-px h-24 bg-gradient-to-b from-aurevua-light/30 to-transparent" aria-hidden="true" />
                      <div className="w-2 h-2 bg-aurevua-accent rounded-full -mt-1 -ml-0.5" aria-hidden="true" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;