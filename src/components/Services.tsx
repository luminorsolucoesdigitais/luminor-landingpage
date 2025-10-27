import { TrendingUp, Instagram, Palette, Sparkles, Globe, Code, Package, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: TrendingUp,
    title: 'Tráfego Pago',
    description: 'Estratégias inteligentes de anúncios no Google e Meta Ads para atrair clientes certos.',
  },
  {
    icon: Instagram,
    title: 'Gestão de Mídias Sociais',
    description: 'Planejamento, criação e gestão de conteúdo para engajar e fortalecer sua marca.',
  },
  {
    icon: Palette,
    title: 'Arte / Design Unitário',
    description: 'Criações visuais impactantes e profissionais sob demanda.',
  },
  {
    icon: Sparkles,
    title: 'Identidade Visual',
    description: 'Desenvolvimento completo da identidade da sua marca com propósito e estética.',
  },
  {
    icon: Globe,
    title: 'Criação de Sites',
    description: 'Sites modernos e otimizados para conversão, com suporte mensal opcional.',
  },
  {
    icon: Code,
    title: 'Criação de Sistemas',
    description: 'Desenvolvimento de sistemas personalizados para automação e gestão eficiente.',
  },
];

const packageDiscounts = [
  { services: 3, discount: 15, color: 'from-gray-700 to-gray-800', accentColor: 'text-white' },
  { services: 4, discount: 20, color: 'from-gray-600 to-gray-700', accentColor: 'text-gray-100' },
  { services: 5, discount: 25, color: 'from-gray-800 to-luminor-purple', accentColor: 'text-white' },
  { services: 6, discount: 30, color: 'from-luminor-purple to-black', accentColor: 'text-luminor-purple' },
];

const periodDiscounts = [
  { period: 'Trimestral', discount: 5, months: 3 },
  { period: 'Semestral', discount: 10, months: 6 },
  { period: 'Anual', discount: 15, months: 12 },
];

export default function Services() {
  const [isPackageVisible, setIsPackageVisible] = useState(false);
  const [isPeriodVisible, setIsPeriodVisible] = useState(false);
  const packageRef = useRef<HTMLDivElement>(null);
  const periodRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const packageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsPackageVisible(true);
        }
      });
    }, observerOptions);

    const periodObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsPeriodVisible(true);
        }
      });
    }, observerOptions);

    if (packageRef.current) packageObserver.observe(packageRef.current);
    if (periodRef.current) periodObserver.observe(periodRef.current);

    return () => {
      if (packageRef.current) packageObserver.unobserve(packageRef.current);
      if (periodRef.current) periodObserver.unobserve(periodRef.current);
    };
  }, []);
  return (
    <section id="servicos" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 underline decoration-luminor-purple decoration-4 underline-offset-8">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluções completas para elevar sua presença digital ao próximo nível
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-luminor-purple transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(111,0,255,0.3)]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-luminor-purple to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-luminor-purple transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-16" ref={packageRef}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-luminor-purple/20 px-6 py-3 rounded-full mb-4">
              <Package className="text-luminor-purple" size={24} />
              <h3 className="text-2xl font-bold">Descontos Progressivos</h3>
            </div>
            <p className="text-gray-400">Contrate mais serviços e economize ainda mais</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packageDiscounts.map((pkg, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${pkg.color} p-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-500 border border-luminor-purple/30 ${
                  isPackageVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-white">{pkg.discount}%</div>
                  <div className="text-sm opacity-90 mb-2">de desconto</div>
                  <div className="w-full h-px bg-white/30 my-4"></div>
                  <div className="text-lg font-semibold text-white">
                    {pkg.services} serviços
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={periodRef}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-luminor-purple/20 px-6 py-3 rounded-full mb-4">
              <Calendar className="text-luminor-purple" size={24} />
              <h3 className="text-2xl font-bold">Descontos por Período</h3>
            </div>
            <p className="text-gray-400">Compromisso de longo prazo com vantagens exclusivas</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {periodDiscounts.map((period, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border-2 border-luminor-purple hover:shadow-[0_0_30px_rgba(111,0,255,0.4)] transition-all duration-500 hover:scale-105 ${
                  isPeriodVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className="text-5xl font-bold text-luminor-purple mb-4">
                    {period.discount}%
                  </div>
                  <div className="text-xl font-semibold mb-2">{period.period}</div>
                  <div className="text-sm text-gray-400">{period.months} meses</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-luminor-purple/20 to-pink-600/20 border border-luminor-purple/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <Sparkles className="text-luminor-purple mx-auto mb-4" size={40} />
            <p className="text-xl text-gray-300 mb-4">
              <span className="font-bold text-white">Os descontos são cumulativos!</span>
            </p>
            <p className="text-gray-400">
              Combine descontos progressivos com descontos por período e maximize sua economia ao investir na transformação digital do seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
