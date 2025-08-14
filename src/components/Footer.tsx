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
        { label: 'References', href: '#videos' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Abstract', href: 'https://drive.google.com/drive/folders/1JLhyypZP-TXwk6MtslqzfamaTcJBU304?usp=sharing' },
        { label: 'Research Papers', href: 'https://drive.google.com/drive/folders/1SKpqxDKYcQZso29lqnwc7V18T4RD1sio?usp=sharing' },
        { label: 'Case Studies', href: 'https://drive.google.com/drive/folders/1KSb5bUm_3awYnNtwr5W8d8MJsupMlJmX?usp=sharing' },
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
                  <span className="text-2xl font-bold tracking-tight">CRANIORA</span>
                </div>
                <p className="text-aurevua-light/70 leading-relaxed">
                  Revolutionizing infant healthcare with AI-powered cranial screening 
                  solutions designed for the Indian healthcare ecosystem.
                </p>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
                
                {/* Logo Section */}
                <div className="flex items-center justify-center">
                  <img 
                    src="/favicon.ico" 
                    alt="CRANIORA Logo" 
                    className="h-30 w-auto"
                  />
                </div>
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
                © 2025 Craniora. All rights reserved. |{' '}
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