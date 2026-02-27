import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, DollarSign, Home, ChevronRight, Building2, Navigation } from 'lucide-react';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';
import { parks } from '@/data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const regions: Record<string, string[]> = {
  '全部地区': [],
  '北京市': ['全部区县', '海淀区', '朝阳区', '东城区', '西城区', '丰台区', '石景山区', '通州区', '昌平区', '大兴区'],
  '上海市': ['全部区县', '浦东新区', '徐汇区', '黄浦区', '静安区', '长宁区', '普陀区', '虹口区', '杨浦区', '闵行区'],
  '深圳市': ['全部区县', '南山区', '福田区', '罗湖区', '宝安区', '龙岗区', '龙华区'],
  '杭州市': ['全部区县', '余杭区', '西湖区', '滨江区', '上城区', '拱墅区', '萧山区'],
  '广州市': ['全部区县', '天河区', '越秀区', '海珠区', '白云区', '番禺区', '黄埔区'],
  '成都市': ['全部区县', '高新区', '武侯区', '锦江区', '青羊区', '金牛区', '成华区'],
};

const facilitiesList = ['会议室', '咖啡厅', '健身房', '停车场', '餐厅', '宿舍', '实验室'];

export default function Park() {
  const [selectedCity, setSelectedCity] = useState('全部地区');
  const [selectedDistrict, setSelectedDistrict] = useState('全部区县');
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortByDistance, setSortByDistance] = useState(false);
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: filtersRef, isVisible: filtersVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation<HTMLDivElement>();

  // Filter and sort parks
  const filteredParks = useMemo(() => {
    let result = parks.filter((park) => {
      const matchCity = selectedCity === '全部地区' || park.region === selectedCity;
      const matchDistrict = selectedDistrict === '全部区县' || park.district === selectedDistrict;
      const matchSearch = searchQuery === '' || 
        park.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        park.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        park.district.toLowerCase().includes(searchQuery.toLowerCase());
      const matchFacilities = selectedFacilities.length === 0 || 
        selectedFacilities.every((f) => park.facilities.includes(f));
      return matchCity && matchDistrict && matchSearch && matchFacilities;
    });

    // Sort by distance if enabled
    if (sortByDistance) {
      result.sort((a, b) => a.distance - b.distance);
    }

    return result;
  }, [selectedCity, selectedDistrict, searchQuery, selectedFacilities, sortByDistance]);

  const toggleFacility = (facility: string) => {
    setSelectedFacilities((prev) =>
      prev.includes(facility)
        ? prev.filter((f) => f !== facility)
        : [...prev, facility]
    );
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setSelectedDistrict('全部区县');
  };

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
              OPC创业园区智能匹配
            </h1>
            <p className="text-lg text-white/80">
              精准推荐优质创业园区，享受租金减免、配套完善的创业环境
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
            className={`flex flex-col gap-4 transition-all duration-700 ${
              filtersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Search and Main Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
                <input
                  type="text"
                  placeholder="搜索园区名称或地区..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                {/* City Select */}
                <select
                  value={selectedCity}
                  onChange={(e) => handleCityChange(e.target.value)}
                  className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 cursor-pointer transition-all duration-200"
                >
                  {Object.keys(regions).map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>

                {/* District Select */}
                {selectedCity !== '全部地区' && (
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 cursor-pointer transition-all duration-200"
                  >
                    {regions[selectedCity].map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                )}

                {/* Distance Sort Button */}
                <button
                  onClick={() => setSortByDistance(!sortByDistance)}
                  className={`flex items-center gap-2 px-4 py-2.5 border rounded-lg text-sm transition-all duration-200 ${
                    sortByDistance
                      ? 'bg-[#4A90D9] border-[#4A90D9] text-white'
                      : 'bg-gray-50 border-gray-200 text-[#666666] hover:bg-gray-100'
                  }`}
                >
                  <Navigation className="w-4 h-4" />
                  <span>距离我最近</span>
                </button>
              </div>
            </div>

            {/* Facilities Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-[#666666] mr-2">配套设施:</span>
              {facilitiesList.map((facility) => (
                <button
                  key={facility}
                  onClick={() => toggleFacility(facility)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 ${
                    selectedFacilities.includes(facility)
                      ? 'bg-[#4A90D9] text-white'
                      : 'bg-gray-100 text-[#666666] hover:bg-gray-200'
                  }`}
                >
                  {facility}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Park List */}
      <div className="container-custom py-8">
        <div 
          ref={listRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredParks.length > 0 ? (
            filteredParks.map((park, index) => (
              <div
                key={park.id}
                className={`group bg-white rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(74,144,217,0.15)] hover:-translate-y-2 ${
                  listVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Image Placeholder */}
                <div className="h-40 bg-gradient-to-br from-[#4A90D9]/10 to-[#FF9900]/10 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-[#4A90D9]/30" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#333333] mb-2 group-hover:text-[#4A90D9] transition-colors duration-200">
                    <Link to={`/park/${park.id}`}>{park.name}</Link>
                  </h3>
                  
                  <div className="flex items-center gap-1 text-sm text-[#666666] mb-4">
                    <MapPin className="w-4 h-4 text-[#999999]" />
                    {park.region} {park.district}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-[#4A90D9]" />
                      <span className="text-[#666666]">{park.workspacePrice}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Navigation className="w-4 h-4 text-[#FF9900]" />
                      <span className="text-[#666666]">{park.distance}km</span>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {park.facilities.slice(0, 4).map((facility) => (
                      <span
                        key={facility}
                        className="px-2 py-1 bg-[#E8F4FC] text-[#4A90D9] text-xs rounded-md"
                      >
                        {facility}
                      </span>
                    ))}
                    {park.facilities.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-[#666666] text-xs rounded-md">
                        +{park.facilities.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Policy */}
                  <div className="flex items-start gap-2 p-3 bg-[#FFF5E6] rounded-lg mb-4">
                    <Home className="w-4 h-4 text-[#FF9900] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#666666]">{park.preferentialPolicy}</span>
                  </div>

                  <Link
                    to={`/park/${park.id}`}
                    className="flex items-center justify-center w-full py-2.5 bg-[#4A90D9] text-white rounded-lg hover:bg-[#3A7BC8] transition-colors duration-200 group/btn"
                  >
                    查看详情
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full bg-white rounded-xl p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-[#999999]" />
              </div>
              <h3 className="text-lg font-medium text-[#333333] mb-2">未找到相关园区</h3>
              <p className="text-sm text-[#666666]">请尝试调整筛选条件或搜索关键词</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
