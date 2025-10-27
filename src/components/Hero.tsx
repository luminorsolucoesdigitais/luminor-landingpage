import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-luminor-purple via-gray-900 to-black"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-luminor-purple rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-luminor-purple rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
          Transforme sua presença digital em{' '}
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            resultados reais
          </span>{' '}
          com a Luminor
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Soluções completas em marketing digital para impulsionar a visibilidade e o crescimento do seu negócio.
        </p>

        <a
          href="https://wa.link/ll4836"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-luminor-purple hover:bg-white text-white hover:text-black px-8 py-4 rounded-full text-lg font-bold transition-all hover:shadow-[0_0_30px_rgba(111,0,255,0.6)] hover:scale-110 animate-pulse-slow"
          style={{ animationDelay: '0.4s' }}
        >
          <MessageCircle size={24} />
          <span>Fale agora pelo WhatsApp</span>
        </a>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl font-bold text-luminor-purple mb-2">+500</div>
            <div className="text-gray-400">Projetos Entregues</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-4xl font-bold text-luminor-purple mb-2">+200</div>
            <div className="text-gray-400">Clientes Satisfeitos</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-4xl font-bold text-luminor-purple mb-2">5+</div>
            <div className="text-gray-400">Anos de Experiência</div>
          </div>
        </div>
      </div>

    </section>
  );
}
