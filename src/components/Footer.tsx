import { useState } from 'react';
import { ArrowUp, Mail, Linkedin, Twitter, Shield, FileText, ChevronUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubscribing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: 'Subscribed Successfully!',
        description: 'You\'ll receive updates about Aurevua and healthcare AI innovations.',
        variant: 'default'
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: 'Subscription Failed',
        description: 'Please try again or contact us directly.',
        variant: 'destructive'
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Overview', href: '#product' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Features', href: '#features' },
        { label: 'Technology', href: '#technology' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Mission', href: '#mission' },
        { label: 'Careers', href: '#careers' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#docs' },
        { label: 'Research Papers', href: '#research' },
        { label: 'Case Studies', href: '#cases' },
        { label: 'Support', href: '#support' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Data Security', href: '#security' },
        { label: 'Compliance', href: '#compliance' }
      ]
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/aurevua',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/aurevua',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:hello@aurevua.com',
      color: 'hover:text-aurevua-accent'
    }
  ];

  return (
    <footer className="bg-aurevua-dark text-aurevua-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-aurevua-accent/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-aurevua-light/5 rounded-full blur-2xl" aria-hidden="true" />
      </div>

      <div className="container-aurevua relative z-10">
        {/* Main Footer Content */}
        <div className="pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Company Info & Newsletter */}
            <div className="lg:col-span-1 space-y-8">
              {/* Logo & Description */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-aurevua-light rounded-full" aria-hidden="true" />
                  </div>
                  <span className="text-2xl font-bold tracking-tight">Aurevua</span>
                </div>
                <p className="text-aurevua-light/70 leading-relaxed">
                  Revolutionizing infant healthcare with AI-powered cranial screening 
                  solutions designed for the Indian healthcare ecosystem.
                </p>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h3 className="text-lg font-semibold text-aurevua-light mb-4">
                  Stay Updated
                </h3>
                <p className="text-sm text-aurevua-light/60 mb-4">
                  Get the latest updates on Aurevua and healthcare AI innovations.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@hospital.com"
                      className="flex-1 px-4 py-3 bg-aurevua-light/10 border border-aurevua-light/20 rounded-lg text-aurevua-light placeholder-aurevua-light/50 focus:outline-none focus:ring-2 focus:ring-aurevua-light/50 transition-colors duration-300"
                      aria-label="Email address for newsletter"
                    />
                    <button
                      type="submit"
                      disabled={isSubscribing}
                      className="px-6 py-3 bg-aurevua-light text-aurevua-dark rounded-lg font-medium hover:bg-aurevua-light/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-aurevua-light/50"
                      aria-label="Subscribe to newsletter"
                    >
                      {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-lg font-semibold text-aurevua-light mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <button
                            onClick={() => handleSectionClick(link.href)}
                            className="text-aurevua-light/70 hover:text-aurevua-light transition-colors duration-300 text-sm focus:outline-none focus:text-aurevua-light"
                            aria-label={`Navigate to ${link.label}`}
                          >
                            {link.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-aurevua-light/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-aurevua-light/60">
              <p>
                © 2025 Aurevua. All rights reserved. |{' '}
                <span className="font-mono tracking-wide">
                  Made in India for Indian Healthcare
                </span>
              </p>
            </div>

            {/* Social Links
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-aurevua-light/60 ${social.color} transition-colors duration-300 focus:outline-none focus:text-aurevua-light`}
                  aria-label={`Visit our ${social.label}`}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-aurevua-light text-aurevua-dark rounded-full shadow-glow hover:shadow-strong transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-aurevua-light/50 z-50"
        aria-label="Scroll back to top"
      >
        <ChevronUp className="w-6 h-6 mx-auto" aria-hidden="true" />
      </button>
    </footer>
  );
};

export default Footer;