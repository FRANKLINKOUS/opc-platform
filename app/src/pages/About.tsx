import { Link } from 'react-router-dom';
import { Rocket, Target, Heart, Zap, Users, Award, ArrowRight } from 'lucide-react';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const values = [
  {
    icon: Target,
    title: '精准匹配',
    description: '通过AI算法，为每位创业者精准匹配最适合的政策和园区资源',
  },
  {
    icon: Heart,
    title: '用心服务',
    description: '以创业者需求为中心，提供全程陪伴式专业服务支持',
  },
  {
    icon: Zap,
    title: '高效便捷',
    description: '简化创业流程，让创业者专注于核心业务发展',
  },
  {
    icon: Users,
    title: '开放共赢',
    description: '连接创业者、园区、服务商，构建创业服务生态圈',
  },
];

const milestones = [
  { year: '2020', event: 'OPC平台正式上线' },
  { year: '2021', event: '服务创业者突破1000人' },
  { year: '2022', event: '覆盖城市扩展至20+' },
  { year: '2023', event: '荣获优秀创业服务平台称号' },
  { year: '2024', event: '服务创业者突破10000人' },
];

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: milestonesRef, isVisible: milestonesVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Header */}
      <div 
        ref={headerRef}
        className="pt-24 pb-12 bg-gradient-to-r from-[#4A90D9] to-[#3A7BC8]"
      >
        <div className="container-custom">
          <div 
            className={`text-center transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              关于OPC平台
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              AI驱动的创业服务平台，连接创业者与本地资源
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section 
        ref={introRef}
        className="section-padding"
      >
        <div className="container-custom">
          <div 
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F4FC] rounded-full mb-6">
                <Rocket className="w-4 h-4 text-[#4A90D9]" />
                <span className="text-sm font-medium text-[#4A90D9]">我们的使命</span>
              </div>
              <h2 className="text-3xl font-bold text-[#333333] mb-6">
                让创业更简单，让梦想更可及
              </h2>
              <p className="text-[#666666] leading-relaxed mb-6">
                OPC创业服务平台成立于2020年，是国内领先的AI驱动创业服务平台。我们致力于通过技术创新，
                为创业者提供精准的政策匹配、园区推荐和服务对接，降低创业门槛，提高创业成功率。
              </p>
              <p className="text-[#666666] leading-relaxed mb-8">
                平台聚合全国20+城市、500+条创业政策、100+个优质园区资源，
                已服务超过10000名创业者，成为创业者信赖的智能助手。
              </p>
              <Link
                to="/contact"
                className="btn-primary"
              >
                联系我们
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#E8F4FC] to-[#FFF5E6] rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#4A90D9] to-[#3A7BC8] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#4A90D9] mb-2">10000+</div>
                  <div className="text-[#666666]">服务创业者</div>
                </div>
              </div>
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#FF9900]" />
                  <div>
                    <div className="text-sm font-semibold text-[#333333]">优秀平台</div>
                    <div className="text-xs text-[#999999]">2023年度评选</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section 
        ref={valuesRef}
        className="section-padding bg-[#F5F5F5]"
      >
        <div className="container-custom">
          <div 
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
              valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl font-bold text-[#333333] mb-4">我们的价值观</h2>
            <p className="text-[#666666]">坚守初心，为创业者创造价值</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`bg-white rounded-xl p-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(74,144,217,0.12)] hover:-translate-y-2 transition-all duration-500 ${
                    valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4A90D9] to-[#3A7BC8] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#333333] mb-2">{value.title}</h3>
                  <p className="text-sm text-[#666666]">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section 
        ref={milestonesRef}
        className="section-padding"
      >
        <div className="container-custom">
          <div 
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
              milestonesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl font-bold text-[#333333] mb-4">发展历程</h2>
            <p className="text-[#666666]">见证OPC平台的成长与进步</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex items-center gap-8 py-6 border-b border-gray-100 last:border-0 transition-all duration-700 ${
                  milestonesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-20 flex-shrink-0">
                  <span className="text-2xl font-bold text-[#4A90D9]">{milestone.year}</span>
                </div>
                <div className="w-3 h-3 bg-[#FF9900] rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[#333333] font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
