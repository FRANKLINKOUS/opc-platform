import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Phone, Mail, Lock, CheckCircle2, ArrowLeft, Sparkles } from 'lucide-react';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ username: '', phone: '', email: '', password: '', confirmPassword: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <div className="max-w-md mx-auto">
            {/* Back Link */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-[#4A90D9] hover:text-[#3A7BC8] transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              返回首页
            </Link>

            {/* Register Card */}
            <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4A90D9] to-[#3A7BC8] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-[#333333] mb-2">个人用户注册</h1>
                <p className="text-sm text-[#666666]">加入OPC平台，开启您的创业之旅</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#4CAF50]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-2">注册成功</h3>
                  <p className="text-[#666666]">欢迎加入OPC平台！</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      用户名 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
                        placeholder="请输入用户名"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      手机号码 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
                        placeholder="请输入手机号码"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      邮箱 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
                        placeholder="请输入邮箱地址"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      密码 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
                        placeholder="请输入密码"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      确认密码 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#4A90D9] focus:outline-none focus:ring-2 focus:ring-[#4A90D9]/10 transition-all duration-200"
                        placeholder="请再次输入密码"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#FF9900] to-[#E68A00] text-white font-semibold rounded-lg hover:shadow-[0_8px_25px_rgba(255,153,0,0.4)] transition-all duration-300"
                  >
                    立即注册
                  </button>

                  <p className="text-center text-sm text-[#666666]">
                    已有账号？{' '}
                    <Link to="/contact" className="text-[#4A90D9] hover:text-[#3A7BC8] transition-colors duration-200">
                      联系我们
                    </Link>
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
