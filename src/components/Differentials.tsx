import { Target, Heart, Palette, TrendingUp, Zap } from 'lucide-react';

const differentials = [
  {
    icon: Target,
    title: 'Estratégias Personalizadas',
    description: 'Cada negócio é único. Desenvolvemos soluções sob medida para suas necessidades específicas.',
  },
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description: 'Suporte ágil e próximo, com comunicação clara e transparente em todas as etapas.',
  },
  {
    icon: Palette,
    title: 'Comunicação Criativa',
    description: 'Design moderno e conteúdo impactante que capturam a essência da sua marca.',
  },
  {
    icon: TrendingUp,
    title: 'Resultados Mensuráveis',
    description: 'Acompanhamento em tempo real com métricas e relatórios detalhados de performance.',
  },
  {
    icon: Zap,
    title: 'Tecnologia de Ponta',
    description: 'Ferramentas e plataformas modernas para maximizar a eficiência das suas campanhas.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 underline decoration-luminor-purple decoration-4 underline-offset-8">
            Nossos Diferenciais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O que nos torna a escolha ideal para transformar sua presença digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => {
            const Icon = differential.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-luminor-purple"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-luminor-purple to-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-luminor-purple transition-colors">
                  {differential.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {differential.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
