import { Link, useLocation } from 'react-router-dom';
import { navItems } from '@/data';
import { useNavbarScroll } from '@/hooks/useScrollAnimation';

export default function Navbar() {
  const { isScrolled } = useNavbarScroll();
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
      style={{
        height: isScrolled ? '60px' : '70px',
      }}
    >
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
        >
          <img 
            src="/logo-icon.png" 
            alt="OPC Logo" 
            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
          />
          <span className="text-lg sm:text-xl font-bold text-[#333333] group-hover:text-[#4A90D9] transition-colors duration-300">
            OPC平台
          </span>
        </Link>

        {/* Navigation - Desktop & Mobile */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`relative px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                isActive(item.href)
                  ? 'text-[#4A90D9]'
                  : 'text-[#666666] hover:text-[#4A90D9]'
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#4A90D9] rounded-full transition-all duration-300 ${
                  isActive(item.href) ? 'w-4 sm:w-6' : 'w-0'
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
