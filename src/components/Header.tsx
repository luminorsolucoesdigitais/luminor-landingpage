import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-white font-bold text-xl sm:text-2xl tracking-tight hover:text-luminor-purple transition-colors"
          >
            <span className="bg-gradient-to-r from-white to-luminor-purple bg-clip-text text-transparent">
              Luminor Soluções Digitais
            </span>
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('quem-somos')}
              className="text-white hover:text-luminor-purple transition-colors font-medium"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-white hover:text-luminor-purple transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="text-white hover:text-luminor-purple transition-colors font-medium"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-white hover:text-luminor-purple transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-luminor-purple transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-md border-t border-luminor-purple/20">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('quem-somos')}
              className="text-white hover:text-luminor-purple transition-colors font-medium text-left py-2"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-white hover:text-luminor-purple transition-colors font-medium text-left py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="text-white hover:text-luminor-purple transition-colors font-medium text-left py-2"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-white hover:text-luminor-purple transition-colors font-medium text-left py-2"
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
