import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { footerSections } from '@/data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <footer 
      ref={ref}
      className="bg-gradient-to-b from-[#333333] to-[#1a1a1a] text-white pt-20 pb-8"
    >
      <div className="container-custom">
        {/* Main Footer Content */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img 
                src="/logo-icon.png" 
                alt="OPC Logo" 
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className="text-xl font-bold">OPC平台</span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              OPC创业服务平台，AI驱动的创业赋能平台，连接创业者与本地资源。
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-[#FF9900]" />
                <span>400-888-8888</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-[#FF9900]" />
                <span>contact@opc-platform.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-[#FF9900]" />
                <span>北京市海淀区中关村</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section, sectionIndex) => (
            <div 
              key={section.title}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(sectionIndex + 1) * 100}ms` }}
            >
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/70 hover:text-[#FF9900] transition-colors duration-200 relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#FF9900] group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div 
            className={`flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <p className="text-sm text-white/50">
              © 2024 OPC创业服务平台 版权所有
            </p>
            <p className="text-sm text-white/50">
              京ICP备XXXXXXXX号
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
