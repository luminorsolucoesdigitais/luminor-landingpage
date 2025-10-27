import { Target, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 underline decoration-luminor-purple decoration-4 underline-offset-8">
            Quem Somos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A <span className="font-bold text-luminor-purple">Luminor Soluções Digitais</span> é uma agência de marketing especializada em dar visibilidade e autoridade para empresas que desejam se destacar no ambiente online.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Trabalhamos com estratégias personalizadas, combinando design, performance e tecnologia para gerar resultados mensuráveis e reais.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nosso compromisso é transformar sua presença digital em um ativo estratégico que impulsiona o crescimento do seu negócio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-black to-luminor-purple p-6 rounded-2xl text-white shadow-xl hover:scale-105 transition-transform">
              <Target size={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Foco em Resultados</h3>
              <p className="text-gray-200 text-sm">
                Estratégias orientadas por dados para atingir seus objetivos de negócio.
              </p>
            </div>

            <div className="bg-gradient-to-br from-luminor-purple to-black p-6 rounded-2xl text-white shadow-xl hover:scale-105 transition-transform">
              <Users size={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Time Especializado</h3>
              <p className="text-gray-200 text-sm">
                Profissionais qualificados e apaixonados por inovação digital.
              </p>
            </div>

            <div className="bg-gradient-to-br from-luminor-purple to-black p-6 rounded-2xl text-white shadow-xl hover:scale-105 transition-transform sm:col-span-2">
              <TrendingUp size={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Crescimento Sustentável</h3>
              <p className="text-gray-200 text-sm">
                Construímos marcas fortes e duradouras com estratégias de longo prazo que geram valor contínuo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
