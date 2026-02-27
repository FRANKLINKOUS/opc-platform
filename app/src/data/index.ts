import type { 
  NavItem, 
  Advantage, 
  Feature, 
  Statistic, 
  NewsItem, 
  Policy, 
  Park, 
  ServiceProvider, 
  SuccessCase,
  FooterSection 
} from '@/types';

export const navItems: NavItem[] = [
  { label: '首页', href: '/' },
  { label: '政策查询', href: '/policy' },
  { label: '园区查询', href: '/park' },
  { label: '服务资源', href: '/service' },
  { label: '关于我们', href: '/about' },
  { label: '联系我们', href: '/contact' },
];

export const advantages: Advantage[] = [
  {
    id: '1',
    icon: 'Database',
    title: '数据全面',
    description: '聚合全国20+城市创业政策，500+条政策数据实时更新',
  },
  {
    id: '2',
    icon: 'Brain',
    title: '智能匹配',
    description: 'AI算法精准推荐，政策匹配准确率高达95%',
  },
  {
    id: '3',
    icon: 'Users',
    title: '服务专业',
    description: '一对一创业顾问，全程陪伴式服务支持',
  },
  {
    id: '4',
    icon: 'Gift',
    title: '免费使用',
    description: '平台所有基础服务完全免费，降低创业成本',
  },
];

export const features: Feature[] = [
  {
    id: '1',
    icon: '/icon-policy.png',
    title: '政策查询',
    description: '智能匹配最适合您的创业扶持政策，让政策红利不再错过',
    link: '/policy',
  },
  {
    id: '2',
    icon: '/icon-park.png',
    title: '园区查询',
    description: '精准推荐优质创业园区，享受租金减免、配套完善的创业环境',
    link: '/park',
  },
  {
    id: '3',
    icon: '/icon-service.png',
    title: '服务资源',
    description: '对接专业服务机构，从注册到运营一站式解决创业难题',
    link: '/service',
  },
];

export const statistics: Statistic[] = [
  { id: '1', value: 20, suffix: '+', label: '覆盖核心热门城市' },
  { id: '2', value: 500, suffix: '+', label: '聚合最新当地政策' },
  { id: '3', value: 100, suffix: '+', label: '对接优质成熟园区' },
  { id: '4', value: 10000, suffix: '+', label: '服务AI创业者' },
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: '2024年高新技术企业认定政策解读',
    tag: '政策解读',
    date: '2024-01-15',
    summary: '详细解读最新高新技术企业认定标准及申报流程，帮助企业快速了解政策要点...',
    image: '/news-1.png',
  },
  {
    id: '2',
    title: '张江科学城创业园区推出新一批免租房源',
    tag: '园区动态',
    date: '2024-01-12',
    summary: '为支持初创企业发展，张江科学城推出50个免租工位，助力创业者降低运营成本...',
    image: '/news-2.png',
  },
  {
    id: '3',
    title: 'OPC平台荣获2023年度优秀创业服务平台',
    tag: '平台新闻',
    date: '2024-01-10',
    summary: '凭借优质的服务和良好的用户口碑，OPC平台获评2023年度优秀创业服务平台...',
    image: '/news-3.png',
  },
];

export const policies: Policy[] = [
  {
    id: '1',
    title: '高新技术企业认定扶持政策',
    region: '北京市',
    publishDate: '2024-01-10',
    subsidyAmount: '50-200万元',
    policyType: '资金补贴',
    summary: '对通过高新技术企业认定的企业给予一次性资金奖励，支持企业技术创新和研发投入。',
    isHot: true,
  },
  {
    id: '2',
    title: '初创企业租金补贴政策',
    region: '上海市',
    publishDate: '2024-01-08',
    subsidyAmount: '最高30万元',
    policyType: '租金补贴',
    summary: '对入驻指定创业园区的初创企业，提供最长3年的租金补贴支持。',
    isHot: true,
  },
  {
    id: '3',
    title: '人才引进落户支持政策',
    region: '深圳市',
    publishDate: '2024-01-05',
    subsidyAmount: '10-50万元',
    policyType: '人才补贴',
    summary: '为高新技术企业引进的核心人才提供落户支持和安家费补贴。',
    isHot: true,
  },
  {
    id: '4',
    title: '科技型中小企业创新基金',
    region: '杭州市',
    publishDate: '2024-01-03',
    subsidyAmount: '20-100万元',
    policyType: '创新基金',
    summary: '支持科技型中小企业开展技术创新活动，提供无偿资助和贷款贴息。',
  },
  {
    id: '5',
    title: '创业担保贷款贴息政策',
    region: '广州市',
    publishDate: '2023-12-28',
    subsidyAmount: '最高500万元',
    policyType: '贷款贴息',
    summary: '为符合条件的创业者提供担保贷款，并给予部分贴息支持。',
  },
  {
    id: '6',
    title: '知识产权资助奖励政策',
    region: '成都市',
    publishDate: '2023-12-25',
    subsidyAmount: '1-10万元',
    policyType: '知识产权',
    summary: '对企业申请的专利、商标等知识产权给予申请费用资助和授权奖励。',
  },
];

export const parks: Park[] = [
  {
    id: '1',
    name: '张江科学城创业园',
    region: '上海市',
    district: '浦东新区',
    workspacePrice: '800-1200元/工位/月',
    facilities: ['会议室', '咖啡厅', '健身房', '停车场'],
    preferentialPolicy: '免租6个月 + 税收返还',
    distance: 12.5,
  },
  {
    id: '2',
    name: '中关村创业大街',
    region: '北京市',
    district: '海淀区',
    workspacePrice: '600-1000元/工位/月',
    facilities: ['共享办公', '路演厅', '餐厅', '图书馆'],
    preferentialPolicy: '免租3个月 + 创业辅导',
    distance: 8.3,
  },
  {
    id: '3',
    name: '南山科技园',
    region: '深圳市',
    district: '南山区',
    workspacePrice: '900-1500元/工位/月',
    facilities: ['实验室', '展厅', '食堂', '宿舍'],
    preferentialPolicy: '免租12个月 + 人才公寓',
    distance: 15.7,
  },
  {
    id: '4',
    name: '未来科技城',
    region: '杭州市',
    district: '余杭区',
    workspacePrice: '500-800元/工位/月',
    facilities: ['孵化器', '加速器', '餐厅', '便利店'],
    preferentialPolicy: '免租6个月 + 研发补贴',
    distance: 5.2,
  },
  {
    id: '5',
    name: '天河软件园',
    region: '广州市',
    district: '天河区',
    workspacePrice: '700-1100元/工位/月',
    facilities: ['会议室', '培训室', '餐厅', '停车场'],
    preferentialPolicy: '免租3个月 + 技术支持',
    distance: 3.8,
  },
  {
    id: '6',
    name: '天府软件园',
    region: '成都市',
    district: '高新区',
    workspacePrice: '400-700元/工位/月',
    facilities: ['共享空间', '咖啡厅', '健身房', '便利店'],
    preferentialPolicy: '免租6个月 + 人才补贴',
    distance: 6.4,
  },
];

export const serviceProviders: ServiceProvider[] = [
  {
    id: '1',
    name: '创业通注册服务',
    serviceType: '注册服务',
    description: '专业公司注册、变更、注销服务，3-5个工作日快速办结',
    cases: '已服务5000+企业',
  },
  {
    id: '2',
    name: '财税管家',
    serviceType: '财税服务',
    description: '代理记账、税务筹划、审计服务，专业团队一对一服务',
    cases: '已服务3000+企业',
  },
  {
    id: '3',
    name: '法务助手',
    serviceType: '法务服务',
    description: '合同审核、知识产权保护、法律咨询，为企业保驾护航',
    cases: '已服务2000+企业',
  },
  {
    id: '4',
    name: '云算力科技',
    serviceType: '算力服务',
    description: 'GPU云服务器租赁、AI训练算力支持，弹性扩展按需付费',
    cases: '已服务1000+企业',
  },
  {
    id: '5',
    name: '人力管家',
    serviceType: '其他服务',
    description: '人事代理、社保代缴、招聘服务，一站式人力资源解决方案',
    cases: '已服务1500+企业',
  },
  {
    id: '6',
    name: '品牌策划师',
    serviceType: '其他服务',
    description: '品牌设计、VI系统、营销策划，助力企业品牌升级',
    cases: '已服务800+企业',
  },
];

export const successCases: SuccessCase[] = [
  {
    id: '1',
    avatar: '/avatar-1.png',
    name: '张明',
    project: '智能客服SaaS平台',
    park: '张江科学城创业园',
    support: '获得50万创业补贴 + 免费办公场地12个月',
    achievement: '用户突破10万，年营收超500万',
    date: '2023-06',
  },
  {
    id: '2',
    avatar: '/avatar-2.png',
    name: '李婷',
    project: '新能源汽车充电桩',
    park: '南山科技园',
    support: '获得100万创新基金 + 人才落户支持',
    achievement: '覆盖全国20个城市，获得A轮融资',
    date: '2023-03',
  },
  {
    id: '3',
    avatar: '/avatar-3.png',
    name: '王建国',
    project: '工业互联网平台',
    park: '中关村创业大街',
    support: '获得200万高新认定奖励 + 税收优惠',
    achievement: '服务500+制造企业，估值过亿',
    date: '2022-12',
  },
];

export const footerSections: FooterSection[] = [
  {
    title: '快速链接',
    links: [
      { label: '首页', href: '/' },
      { label: '政策查询', href: '/policy' },
      { label: '园区查询', href: '/park' },
      { label: '服务资源', href: '/service' },
    ],
  },
  {
    title: '关于我们',
    links: [
      { label: '平台介绍', href: '/about' },
      { label: '成功案例', href: '/case' },
      { label: '新闻动态', href: '/news' },
      { label: '联系我们', href: '/contact' },
    ],
  },
  {
    title: '帮助支持',
    links: [
      { label: '使用指南', href: '/guide' },
      { label: '常见问题', href: '/faq' },
      { label: '隐私政策', href: '/privacy' },
      { label: '服务条款', href: '/terms' },
    ],
  },
];
