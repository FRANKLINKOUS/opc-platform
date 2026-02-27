import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, User, Phone, Mail, MapPin, FileText, CheckCircle2, ArrowLeft } from 'lucide-react';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';

export default function ParkApply() {
  const [formData, setFormData] = useState({
    parkName: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    address: '',
    description: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ 
        parkName: '', 
        contactName: '', 
        contactPhone: '', 
        contactEmail: '', 
        address: '', 
        description: '' 
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5FAFF] to-[#E8F4FC]">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Back Link */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-[#4A90D9] hover:text-[#3A7BC8] transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              返回首页
            </Link>

            {/* Apply Card */}
            <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4A90D9] to-[#3A7BC8] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-[#333333] mb-2">园区入驻申请</h1>
                <p className="text-sm text-[#666666]">提交您的园区信息，加入OPC平台生态</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#4CAF50]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">提交成功</h3>
                  <p className="text-[#666666]">我们会尽快与您联系！</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#333333] mb-2">
                        园区名称 <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
                        <input
                          type="text"
                          name="parkName"
                          value={formData.parkName}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
                          placeholder="请输入园区名称"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#333333] mb-2">
                        联系人姓名 <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
                          placeholder="请输入联系人姓名"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#333333] mb-2">
                        联系电话 <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
                        <input
                          type="tel"
                          name="contactPhone"
                          value={formData.contactPhone}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
                          placeholder="请输入联系电话"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#333333] mb-2">
                        联系邮箱 <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
                        <input
                          type="email"
                          name="contactEmail"
                          value={formData.contactEmail}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
                          placeholder="请输入联系邮箱"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      园区地址 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
                        placeholder="请输入园区详细地址"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      园区简介
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 w-5 h-5 text-[#999999]" />
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200 resize-none"
                        placeholder="请简要介绍您的园区..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#FF9900] to-[#E68A00] text-white font-semibold rounded-lg hover:shadow-[0_8px_25px_rgba(255,153,0,0.4)] transition-all duration-300"
                  >
                    提交申请
                  </button>

                  <p className="text-center text-xs text-[#999999]">
                    提交即表示您同意我们的服务条款和隐私政策
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
