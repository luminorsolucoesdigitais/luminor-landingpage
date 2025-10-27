import { MessageCircle, ArrowRight, Zap } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-luminor-purple via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-luminor-purple rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-luminor-purple rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Zap className="text-white" size={48} />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Pronto para elevar sua marca ao próximo nível?
        </h2>

        <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
          Entre em contato agora mesmo e descubra como podemos transformar sua presença digital em resultados extraordinários.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://wa.link/ll4836"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-xl font-bold transition-all hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] animate-pulse-slow"
          >
            <MessageCircle size={28} className="group-hover:animate-bounce" />
            <span>Fale conosco pelo WhatsApp agora mesmo</span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24h</div>
            <div className="text-gray-300">Resposta Rápida</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300">Atendimento Personalizado</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">0</div>
            <div className="text-gray-300">Compromisso Inicial</div>
          </div>
        </div>

        <p className="mt-12 text-gray-300 text-lg">
          Consulta gratuita sem compromisso. Vamos conversar sobre seus objetivos!
        </p>
      </div>
    </section>
  );
}
