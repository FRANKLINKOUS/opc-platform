import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, UserPlus, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-[#F5FAFF]/80" />

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-xl">
            {/* Logo Badge */}
            <div 
              className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.06)] mb-6 animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              <img src="/logo-icon.png" alt="OPC Logo" className="w-8 h-8" />
              <span className="text-sm font-medium text-[#666666]">星星之火，可以燎原</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#333333] leading-tight mb-6">
              <span 
                className="inline-block animate-slide-up"
                style={{ animationDelay: '300ms' }}
              >
                OPC
              </span>
              <br />
              <span 
                className="inline-block animate-slide-up"
                style={{ animationDelay: '450ms' }}
              >
                创业服务平台
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-xl text-[#4A90D9] font-semibold mb-4 animate-slide-up"
              style={{ animationDelay: '600ms' }}
            >
              连接OPC创业者与本地资源的智能枢纽
            </p>

            {/* Description */}
            <p 
              className="text-base text-[#666666] leading-relaxed mb-8 animate-slide-up"
              style={{ animationDelay: '750ms' }}
            >
              AI驱动的政策匹配、园区推荐、服务对接，让创业之路更高效、更智能。
              聚合全国20+城市创业资源，服务10000+创业者。
            </p>

            {/* Main CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 animate-slide-up"
              style={{ animationDelay: '900ms' }}
            >
              <Link
                to="/park"
                className="btn-primary group"
              >
                立即匹配园区
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="btn-secondary"
              >
                了解更多
              </Link>
            </div>

            {/* Register & Apply Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-3 mt-4 animate-slide-up"
              style={{ animationDelay: '1000ms' }}
            >
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-[#4A90D9] text-[#4A90D9] rounded-lg hover:bg-[#F5FAFF] transition-all duration-300 text-sm font-medium"
              >
                <UserPlus className="w-4 h-4" />
                个人用户注册
              </Link>
              <Link
                to="/park-apply"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-[#FF9900] text-[#FF9900] rounded-lg hover:bg-[#FFF5E6] transition-all duration-300 text-sm font-medium"
              >
                <Building2 className="w-4 h-4" />
                园区入驻申请
              </Link>
            </div>

            {/* Stats Preview */}
            <div 
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-gray-200/60 animate-fade-in"
              style={{ animationDelay: '1100ms' }}
            >
              <div>
                <div className="text-2xl font-bold text-[#4A90D9]">20+</div>
                <div className="text-sm text-[#999999]">覆盖城市</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#4A90D9]">500+</div>
                <div className="text-sm text-[#999999]">聚合政策</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#4A90D9]">100+</div>
                <div className="text-sm text-[#999999]">对接园区</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div 
            className="relative lg:pl-8 animate-scale-in"
            style={{ animationDelay: '600ms' }}
          >
            <div className="relative">
              {/* Image Container with 3D effect */}
              <div 
                className="relative rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(74,144,217,0.2)] transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src="/hero-image.png"
                  alt="OPC创业服务平台"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>

              {/* Floating Cards */}
              <div 
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)] animate-float"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#E8F4FC] rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#4A90D9]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#333333]">智能匹配</div>
                    <div className="text-xs text-[#999999]">准确率95%</div>
                  </div>
                </div>
              </div>

              <div 
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)] animate-float-delayed"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFF5E6] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#FF9900]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#333333]">已认证</div>
                    <div className="text-xs text-[#999999]">10000+创业者</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
