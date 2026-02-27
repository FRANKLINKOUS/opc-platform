import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: '客服热线',
      content: '400-888-8888',
      subContent: '工作日 9:00-18:00',
    },
    {
      icon: Mail,
      title: '电子邮箱',
      content: 'contact@opc-platform.com',
      subContent: '商务合作: bd@opc-platform.com',
    },
    {
      icon: MapPin,
      title: '公司地址',
      content: '北京市海淀区中关村创业大街',
      subContent: '邮编: 100080',
    },
    {
      icon: Clock,
      title: '工作时间',
      content: '周一至周五 9:00-18:00',
      subContent: '节假日除外',
    },
  ];

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
            className={`text-center transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              联系我们
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              有任何问题或建议？我们期待与您交流
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container-custom -mt-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={info.title}
                className={`bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(74,144,217,0.15)] ${
                  headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-[#E8F4FC] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#4A90D9]" />
                </div>
                <h3 className="text-sm text-[#999999] mb-1">{info.title}</h3>
                <p className="text-[#333333] font-medium mb-1">{info.content}</p>
                <p className="text-xs text-[#999999]">{info.subContent}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form */}
      <div 
        ref={contentRef}
        className="container-custom py-16"
      >
        <div 
          className={`grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl font-bold text-[#333333] mb-6">发送消息</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#4CAF50]" />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">提交成功</h3>
                <p className="text-[#666666]">我们会尽快与您联系</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      电话 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
                      placeholder="请输入您的电话"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    邮箱 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
                    placeholder="请输入您的邮箱"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    公司名称
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
                    placeholder="请输入您的公司名称"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    留言内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200 resize-none"
                    placeholder="请输入您想咨询的内容"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary justify-center"
                >
                  <Send className="w-4 h-4" />
                  提交留言
                </button>
              </form>
            )}
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl font-bold text-[#333333] mb-6">我们的位置</h2>
            <div className="aspect-[4/3] bg-gradient-to-br from-[#E8F4FC] to-[#F5FAFF] rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#4A90D9] mx-auto mb-4" />
                <p className="text-[#333333] font-medium">北京市海淀区中关村创业大街</p>
                <p className="text-sm text-[#666666] mt-2">欢迎来访</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-[#E8F4FC] rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#4A90D9]" />
                </div>
                <span className="text-[#666666]">400-888-8888</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-[#E8F4FC] rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#4A90D9]" />
                </div>
                <span className="text-[#666666]">contact@opc-platform.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
