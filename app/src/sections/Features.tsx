import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { features } from '@/data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Features() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-[#F5F5F5] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[200px] h-[200px] bg-[#4A90D9]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[#FF9900]/5 rounded-full blur-3xl" />
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
            全方位<span className="text-[#4A90D9]">创业服务</span>
          </h2>
          <p className="text-lg text-[#666666]">
            三大核心功能模块，覆盖创业全周期
          </p>
        </div>

        {/* Features Grid */}
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <Link
              key={feature.id}
              to={feature.link}
              className={`group relative bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_25px_50px_rgba(74,144,217,0.12)] overflow-hidden ${
                cardsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${200 + index * 150}ms`,
              }}
            >
              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A90D9] to-[#FF9900] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              {/* Icon */}
              <div className="mb-6">
                <div className="w-20 h-20 bg-[#E8F4FC] rounded-xl flex items-center justify-center transition-all duration-400 group-hover:bg-gradient-to-br group-hover:from-[#4A90D9] group-hover:to-[#3A7BC8] group-hover:scale-110">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-10 h-10 object-contain transition-all duration-400 group-hover:brightness-0 group-hover:invert"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#4A90D9] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed mb-4 flex-1">
                  {feature.description}
                </p>
                <div className="flex items-center justify-center text-[#4A90D9] font-medium text-sm">
                  <span>进入模块</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>

              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4FC]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
