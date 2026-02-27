import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Briefcase, Users, MessageCircle, CheckCircle2 } from 'lucide-react';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';
import { serviceProviders } from '@/data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const serviceCategories = [
  { id: 'all', label: '全部服务', icon: Briefcase },
  { id: '注册服务', label: '注册服务', icon: CheckCircle2 },
  { id: '财税服务', label: '财税服务', icon: Briefcase },
  { id: '法务服务', label: '法务服务', icon: Briefcase },
  { id: '算力服务', label: '算力服务', icon: Briefcase },
  { id: '其他服务', label: '其他服务', icon: Briefcase },
];

export default function Service() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: categoriesRef, isVisible: categoriesVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation<HTMLDivElement>();

  // Filter services
  const filteredServices = serviceProviders.filter((service) => {
    const matchCategory = selectedCategory === 'all' || service.serviceType === selectedCategory;
    const matchSearch = searchQuery === '' || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      
      {/* Page Header */}
      <div 
        ref={headerRef}
        className="pt-24 pb-12 bg-gradient-to-r from-[#4A90D9] to-[#3A7BC8]"
      >
        <div className="container-custom">
          <div 
            className={`max-w-2xl transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              OPC专业服务对接
            </h1>
            <p className="text-lg text-white/80">
              对接专业服务机构，从注册到运营一站式解决创业难题
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
        <div className="container-custom py-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
              <input
                type="text"
                placeholder="搜索服务或服务商..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200 text-base"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div 
        ref={categoriesRef}
        className="container-custom py-8"
      >
        <div 
          className={`flex flex-wrap justify-center gap-3 transition-all duration-700 ${
            categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#4A90D9] text-white shadow-[0_4px_15px_rgba(74,144,217,0.3)]'
                    : 'bg-white text-[#666666] hover:bg-[#E8F4FC] hover:text-[#4A90D9] shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Service List */}
      <div className="container-custom pb-16">
        <div 
          ref={listRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`group bg-white rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(74,144,217,0.12)] hover:-translate-y-2 ${
                  listVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4A90D9] to-[#3A7BC8] rounded-xl flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-[#E8F4FC] text-[#4A90D9] text-xs font-medium rounded-full">
                    {service.serviceType}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#333333] mb-2 group-hover:text-[#4A90D9] transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-sm text-[#666666]">
                    <Users className="w-4 h-4 text-[#4A90D9]" />
                    <span>{service.cases}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-[#666666]">
                    <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
                    <span>认证服务商</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link
                    to={`/service/${service.id}`}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-[#4A90D9] text-[#4A90D9] rounded-lg hover:bg-[#E8F4FC] transition-colors duration-200 text-sm font-medium"
                  >
                    了解详情
                  </Link>
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0066CC] text-white rounded-lg hover:bg-[#0052A3] transition-colors duration-200 text-sm font-medium group/btn">
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">联系</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full bg-white rounded-xl p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-[#999999]" />
              </div>
              <h3 className="text-lg font-medium text-[#333333] mb-2">未找到相关服务</h3>
              <p className="text-sm text-[#666666]">请尝试调整筛选条件或搜索关键词</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
