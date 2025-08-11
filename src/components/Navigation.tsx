import { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Product', href: '#product' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-aurevua-dark/90 backdrop-blur-md shadow-medium' 
          : 'bg-aurevua-dark/60 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-aurevua">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            
            <span className="text-xl font-bold text-aurevua-light tracking-tight">
              AUREVUA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-aurevua-light/75 hover:text-aurevua-light transition-colors duration-300 font-medium focus-visible"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button 
              onClick={() => handleNavClick('#contact')}
              className="btn-primary ripple-effect focus-visible"
              aria-label="Request demo"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-aurevua-light p-2 rounded-lg hover:bg-aurevua-light/10 transition-colors duration-300 focus-visible"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-aurevua-light/10 fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-aurevua-light/75 hover:text-aurevua-light transition-colors duration-300 font-medium text-left py-2 px-4 rounded-lg hover:bg-aurevua-light/5 focus-visible"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('#contact')}
                className="btn-primary mt-4 focus-visible"
                aria-label="Request demo"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;