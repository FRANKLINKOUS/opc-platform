import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { newsItems } from '@/data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const tagColors: Record<string, string> = {
  '政策解读': 'bg-[#E8F4FC] text-[#4A90D9]',
  '园区动态': 'bg-[#FFF5E6] text-[#FF9900]',
  '平台新闻': 'bg-[#E8F5E9] text-[#4CAF50]',
};

export default function News() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#4A90D9]/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          ref={titleRef}
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-2">
              最新<span className="text-[#4A90D9]">动态</span>
            </h2>
            <p className="text-lg text-[#666666]">
              政策法规、园区动态，第一时间掌握
            </p>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center text-[#4A90D9] font-medium hover:text-[#3A7BC8] transition-colors duration-200 group"
          >
            查看全部
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* News Grid */}
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {newsItems.map((news, index) => (
            <article
              key={news.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_30px_60px_rgba(74,144,217,0.15)] hover:-translate-y-3 ${
                cardsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{
                transitionDelay: `${200 + index * 150}ms`,
              }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-[#4A90D9] to-[#FF9900] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
                <div className="w-full h-full bg-white rounded-2xl" />
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Tag */}
                <div 
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                    tagColors[news.tag] || 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {news.tag}
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-[#999999] mb-3">
                  <Calendar className="w-4 h-4" />
                  <time>{news.date}</time>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#333333] mb-3 line-clamp-2 group-hover:text-[#4A90D9] transition-colors duration-300">
                  {news.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-[#666666] line-clamp-2 mb-4">
                  {news.summary}
                </p>

                {/* Read More */}
                <Link
                  to={`/news/${news.id}`}
                  className="inline-flex items-center text-[#4A90D9] font-medium text-sm group/link"
                >
                  阅读详情
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
