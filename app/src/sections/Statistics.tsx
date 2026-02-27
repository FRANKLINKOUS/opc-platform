import { useEffect } from 'react';
import { statistics } from '@/data';
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';

function StatItem({ stat, index }: { stat: typeof statistics[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const { count, startAnimation } = useCountUp(stat.value, 2000);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        startAnimation();
      }, 600 + index * 150);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index, startAnimation]);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-600 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
        {count}
        <span className="text-[#FF9900]">{stat.suffix}</span>
      </div>
      <div className="text-sm sm:text-base text-white/80">{stat.label}</div>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4A90D9] to-[#3A7BC8]" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow Orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF9900]/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '-2s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statistics.map((stat, index) => (
            <StatItem key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
