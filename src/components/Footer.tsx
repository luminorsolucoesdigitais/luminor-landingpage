import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-luminor-purple bg-clip-text text-transparent">
                Luminor Soluções Digitais
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Transformando presença digital em resultados reais através de estratégias personalizadas e inovadoras.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-luminor-purple">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('quem-somos')}
                className="text-gray-400 hover:text-luminor-purple transition-colors text-left"
              >
                Quem Somos
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-gray-400 hover:text-luminor-purple transition-colors text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('diferenciais')}
                className="text-gray-400 hover:text-luminor-purple transition-colors text-left"
              >
                Diferenciais
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-gray-400 hover:text-luminor-purple transition-colors text-left"
              >
                Contato
              </button>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-luminor-purple">Redes Sociais</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com/luminorsolucoesdigitais"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-luminor-purple transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-luminor-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-luminor-purple" />
                <span>luminorsolucoesdigitais@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-luminor-purple" />
                <a
                  href="https://wa.link/ll4836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-luminor-purple transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Luminor Soluções Digitais - Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Desenvolvido com tecnologia de ponta para resultados excepcionais
          </p>
        </div>
      </div>
    </footer>
  );
}
