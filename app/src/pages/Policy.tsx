import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Tag, Filter, Flame, ChevronRight, ArrowUpDown } from 'lucide-react';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';
import { policies } from '@/data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const regions = ['全部地区', '北京市', '上海市', '深圳市', '杭州市', '广州市', '成都市'];
const policyTypes = ['全部类型', '资金补贴', '租金补贴', '人才补贴', '创新基金', '贷款贴息', '知识产权'];

export default function Policy() {
  const [selectedRegion, setSelectedRegion] = useState('全部地区');
  const [selectedType, setSelectedType] = useState('全部类型');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: filtersRef, isVisible: filtersVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: hotRef, isVisible: hotVisible } = useScrollAnimation<HTMLDivElement>();

  // Filter and sort policies
  const filteredPolicies = useMemo(() => {
    let result = policies.filter((policy) => {
      const matchRegion = selectedRegion === '全部地区' || policy.region === selectedRegion;
      const matchType = selectedType === '全部类型' || policy.policyType === selectedType;
      const matchSearch = searchQuery === '' || 
        policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        policy.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchRegion && matchType && matchSearch;
    });

    // Sort by publish date
    result.sort((a, b) => {
      const dateA = new Date(a.publishDate).getTime();
      const dateB = new Date(b.publishDate).getTime();
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [selectedRegion, selectedType, searchQuery, sortOrder]);

  const hotPolicies = policies.filter((p) => p.isHot).slice(0, 3);

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
              OPC政策智能查询
            </h1>
            <p className="text-lg text-white/80">
              聚合全国创业扶持政策，AI智能匹配最适合您的政策红利
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div 
        ref={filtersRef}
        className="sticky top-[60px] z-30 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
      >
        <div className="container-custom py-4">
          <div 
            className={`flex flex-col lg:flex-row gap-4 transition-all duration-700 ${
              filtersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
              <input
                type="text"
                placeholder="搜索政策关键词..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="appearance-none pl-9 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 cursor-pointer transition-all duration-200"
                >
                  {regions.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                <Filter className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999] pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="appearance-none pl-9 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 cursor-pointer transition-all duration-200"
                >
                  {policyTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                <Filter className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999] pointer-events-none" />
              </div>

              {/* Sort Button */}
              <button
                onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm hover:bg-gray-100 transition-all duration-200"
              >
                <ArrowUpDown className="w-4 h-4 text-[#999999]" />
                <span className="text-[#666666]">
                  {sortOrder === 'desc' ? '最新发布' : '最早发布'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Policy List */}
          <div 
            ref={listRef}
            className="lg:col-span-2 space-y-4"
          >
            {filteredPolicies.length > 0 ? (
              filteredPolicies.map((policy, index) => (
                <div
                  key={policy.id}
                  className={`bg-white rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(74,144,217,0.12)] hover:-translate-y-1 ${
                    listVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-[#333333] hover:text-[#4A90D9] transition-colors duration-200">
                      <Link to={`/policy/${policy.id}`}>{policy.title}</Link>
                    </h3>
                    {policy.isHot && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#FFF5E6] text-[#FF9900] text-xs font-medium rounded-full w-fit">
                        <Flame className="w-3 h-3" />
                        热门
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-[#666666]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-[#999999]" />
                      {policy.region}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4 text-[#999999]" />
                      {policy.policyType}
                    </span>
                  </div>
                  
                  <p className="text-sm text-[#666666] mb-4 line-clamp-2">
                    {policy.summary}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#999999]">
                      发布时间: {policy.publishDate}
                    </span>
                    <Link
                      to={`/policy/${policy.id}`}
                      className="inline-flex items-center text-[#4A90D9] text-sm font-medium hover:text-[#3A7BC8] transition-colors duration-200 group"
                    >
                      查看详情
                      <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-xl p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-[#999999]" />
                </div>
                <h3 className="text-lg font-medium text-[#333333] mb-2">未找到相关政策</h3>
                <p className="text-sm text-[#666666]">请尝试调整筛选条件或搜索关键词</p>
              </div>
            )}
          </div>

          {/* Hot Policies Sidebar */}
          <div 
            ref={hotRef}
            className="lg:col-span-1"
          >
            <div 
              className={`bg-white rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] sticky top-40 transition-all duration-700 ${
                hotVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="flex items-center gap-2 mb-6">
                <Flame className="w-5 h-5 text-[#FF9900]" />
                <h3 className="text-lg font-bold text-[#333333]">热门政策推荐</h3>
              </div>
              
              <div className="space-y-4">
                {hotPolicies.map((policy, index) => (
                  <Link
                    key={policy.id}
                    to={`/policy/${policy.id}`}
                    className="block p-4 bg-[#F5F5F5] rounded-lg hover:bg-[#E8F4FC] transition-colors duration-200 group"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <h4 className="text-sm font-medium text-[#333333] group-hover:text-[#4A90D9] transition-colors duration-200 line-clamp-2 mb-2">
                      {policy.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-[#999999]">
                      <span>{policy.region}</span>
                      <span className="text-[#FF9900] font-medium">{policy.subsidyAmount}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
