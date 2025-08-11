import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  organization: string;
  phone: string;
  message: string;
  demoType: 'live' | 'recorded' | 'consultation';
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
    demoType: 'live'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Valid phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: 'Form Validation Error',
        description: 'Please check the required fields and try again.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: 'Demo Request Submitted!',
        description: 'Our team will contact you within 24 hours to schedule your personalized demo.',
        variant: 'default'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        message: '',
        demoType: 'live'
      });
      setErrors({});
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: 'Something went wrong. Please try again or contact us directly.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@aurevua.com',
      href: 'mailto:hello@aurevua.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'Bangalore, Karnataka, India',
      href: '#'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 lg:py-32 bg-card-dark text-card-dark-foreground relative overflow-hidden"
      aria-label="Contact us"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="scan-line opacity-20" aria-hidden="true" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-aurevua-accent/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-aurevua-light/5 rounded-full blur-2xl" aria-hidden="true" />
      </div>

      <div className="container-aurevua relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-block bg-aurevua-light/10 border border-aurevua-light/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-aurevua-light tracking-wide">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="heading-section text-aurevua-light mb-6">
            Ready to Transform
            <span className="block text-aurevua-accent">Infant Screening?</span>
          </h2>
          <p className="text-aurevua-light/80 max-w-3xl mx-auto text-lg leading-relaxed">
            Schedule a personalized demo or consultation to see how Aurevua 
            can improve patient outcomes at your healthcare facility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="slide-in">
            <div className="bg-aurevua-light/5 backdrop-blur-sm border border-aurevua-light/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-aurevua-light mb-6">
                Request Your Demo
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Demo Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-aurevua-light mb-3">
                    Demo Type <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { value: 'live', label: 'Live Demo', desc: 'Interactive session' },
                      { value: 'recorded', label: 'Recorded Demo', desc: 'Watch on demand' },
                      { value: 'consultation', label: 'Consultation', desc: 'Discuss your needs' }
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 focus-within:ring-2 focus-within:ring-aurevua-light/50 ${
                          formData.demoType === option.value
                            ? 'border-aurevua-light bg-aurevua-light/10'
                            : 'border-aurevua-light/20 hover:border-aurevua-light/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="demoType"
                          value={option.value}
                          checked={formData.demoType === option.value}
                          onChange={(e) => handleInputChange('demoType', e.target.value)}
                          className="sr-only"
                        />
                        <span className="text-sm font-medium text-aurevua-light">
                          {option.label}
                        </span>
                        <span className="text-xs text-aurevua-light/60 mt-1">
                          {option.desc}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-aurevua-light mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 bg-aurevua-dark/50 border rounded-lg text-aurevua-light placeholder-aurevua-light/50 focus:outline-none focus:ring-2 focus:ring-aurevua-light/50 transition-colors duration-300 ${
                        errors.name ? 'border-red-400' : 'border-aurevua-light/30'
                      }`}
                      placeholder="Dr. Rajesh Kumar"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-aurevua-light mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 bg-aurevua-dark/50 border rounded-lg text-aurevua-light placeholder-aurevua-light/50 focus:outline-none focus:ring-2 focus:ring-aurevua-light/50 transition-colors duration-300 ${
                        errors.email ? 'border-red-400' : 'border-aurevua-light/30'
                      }`}
                      placeholder="dr.kumar@hospital.com"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-aurevua-light mb-2">
                      Organization <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                      className={`w-full px-4 py-3 bg-aurevua-dark/50 border rounded-lg text-aurevua-light placeholder-aurevua-light/50 focus:outline-none focus:ring-2 focus:ring-aurevua-light/50 transition-colors duration-300 ${
                        errors.organization ? 'border-red-400' : 'border-aurevua-light/30'
                      }`}
                      placeholder="City Hospital"
                      aria-describedby={errors.organization ? 'organization-error' : undefined}
                    />
                    {errors.organization && (
                      <p id="organization-error" className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        <span>{errors.organization}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-aurevua-light mb-2">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-4 py-3 bg-aurevua-dark/50 border rounded-lg text-aurevua-light placeholder-aurevua-light/50 focus:outline-none focus:ring-2 focus:ring-aurevua-light/50 transition-colors duration-300 ${
                        errors.phone ? 'border-red-400' : 'border-aurevua-light/30'
                      }`}
                      placeholder="+91 98765 43210"
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-aurevua-light mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3 bg-aurevua-dark/50 border border-aurevua-light/30 rounded-lg text-aurevua-light placeholder-aurevua-light/50 focus:outline-none focus:ring-2 focus:ring-aurevua-light/50 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your specific needs, patient volume, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 py-4 focus-visible"
                  aria-label="Submit demo request"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-aurevua-light/30 border-t-aurevua-light rounded-full animate-spin" aria-hidden="true" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fade-in">
            <div className="bg-aurevua-light/5 backdrop-blur-sm border border-aurevua-light/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-aurevua-light mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-aurevua-light/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-aurevua-light" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-aurevua-accent mb-1">
                        {item.label}
                      </div>
                      {item.href && item.href !== '#' ? (
                        <a
                          href={item.href}
                          className="text-aurevua-light hover:text-aurevua-accent transition-colors duration-300 focus-visible"
                          aria-label={`${item.label}: ${item.value}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-aurevua-light">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-aurevua-light/5 backdrop-blur-sm border border-aurevua-light/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-aurevua-light mb-4">
                What to Expect
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aurevua-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-medium text-aurevua-light mb-1">
                      Quick Response
                    </div>
                    <div className="text-sm text-aurevua-light/70">
                      Our team will contact you within 24 hours
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aurevua-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-medium text-aurevua-light mb-1">
                      Personalized Demo
                    </div>
                    <div className="text-sm text-aurevua-light/70">
                      Customized to your specific healthcare setting
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aurevua-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-medium text-aurevua-light mb-1">
                      No Obligation
                    </div>
                    <div className="text-sm text-aurevua-light/70">
                      Explore Aurevua with no commitment required
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;