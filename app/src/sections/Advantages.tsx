import { Database, Brain, Users, Gift } from 'lucide-react';
import { advantages } from '@/data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  Brain,
  Users,
  Gift,
};

export default function Advantages() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-gradient-to-b from-white to-[#E8F4FC] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#4A90D9]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF9900]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-4">
            为什么选择<span className="text-[#4A90D9]">OPC平台</span>？
          </h2>
          <p className="text-lg text-[#666666]">
            四大核心优势，助力创业成功
          </p>
        </div>

        {/* Advantages Grid */}
        <div 
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {advantages.map((advantage, index) => {
            const Icon = iconMap[advantage.icon];
            const offsets = [0, 20, -10, 15];
            
            return (
              <div
                key={advantage.id}
                className={`group relative bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(74,144,217,0.08)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(74,144,217,0.15)] hover:-translate-y-3 ${
                  cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transform: cardsVisible ? `translateY(${offsets[index]}px)` : 'translateY(50px)',
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#4A90D9] to-[#3A7BC8] rounded-xl flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_10px_30px_rgba(74,144,217,0.3)]">
                  {Icon && <Icon className="w-8 h-8 text-white" />}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#4A90D9] transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {advantage.description}
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#4A90D9]/20 transition-colors duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
