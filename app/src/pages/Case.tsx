import { Link } from 'react-router-dom';
import { Trophy, MapPin, Gift, TrendingUp, Calendar } from 'lucide-react';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';
import { successCases } from '@/data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Case() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      
      {/* Page Header */}
      <div 
        ref={headerRef}
        className="pt-24 pb-12 bg-gradient-to-r from-[#0066CC] to-[#0052A3]"
      >
        <div className="container-custom">
          <div 
            className={`max-w-2xl transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              OPC创业成功案例
            </h1>
            <p className="text-lg text-white/80">
              见证创业者成长历程，分享成功经验与心得
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container-custom py-16">
        <div 
          ref={timelineRef}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0066CC] via-[#FF9900] to-[#0066CC] transform md:-translate-x-1/2" />

          {/* Case Items */}
          <div className="space-y-12">
            {successCases.map((caseItem, index) => (
              <div
                key={caseItem.id}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 transition-all duration-700 ${
                  timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-[#0066CC] rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_0_4px_rgba(0,102,204,0.2)]" />

                {/* Date - Left side on desktop */}
                <div className={`hidden md:block w-1/2 text-right pr-12 ${index % 2 === 0 ? 'order-1' : 'order-3'}`}>
                  <div className="inline-flex items-center gap-2 text-[#0066CC] font-medium">
                    <Calendar className="w-4 h-4" />
                    {caseItem.date}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,102,204,0.15)] hover:-translate-y-2 transition-all duration-500">
                    {/* Mobile Date */}
                    <div className="md:hidden flex items-center gap-2 text-[#0066CC] font-medium mb-4">
                      <Calendar className="w-4 h-4" />
                      {caseItem.date}
                    </div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <img
                        src={caseItem.avatar}
                        alt={caseItem.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#0066CC]/20"
                        loading="lazy"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-[#333333]">{caseItem.name}</h3>
                        <p className="text-[#0066CC] font-medium">{caseItem.project}</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#F0F7FF] rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4 text-[#0066CC]" />
                        </div>
                        <div>
                          <span className="text-sm text-[#999999]">入驻园区</span>
                          <p className="text-sm text-[#333333] font-medium">{caseItem.park}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#FFF5E6] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Gift className="w-4 h-4 text-[#FF9900]" />
                        </div>
                        <div>
                          <span className="text-sm text-[#999999]">获得支持</span>
                          <p className="text-sm text-[#333333] font-medium">{caseItem.support}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#E8F5E9] rounded-lg flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-4 h-4 text-[#4CAF50]" />
                        </div>
                        <div>
                          <span className="text-sm text-[#999999]">当前成果</span>
                          <p className="text-sm text-[#333333] font-medium">{caseItem.achievement}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <Trophy className="w-12 h-12 text-[#FF9900] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              成为下一个成功案例
            </h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              加入OPC平台，获取政策匹配、园区推荐、服务对接等一站式创业支持
            </p>
            <Link
              to="/park"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#FF9900] text-white font-semibold rounded-lg hover:bg-[#E68A00] transition-colors duration-200"
            >
              立即开始
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
