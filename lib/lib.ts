// Central services configuration for the entire site
export interface Service {
  id: string
  slug: string
  icon: string
  title: string
  shortDesc: string
  description: string
  category: string
  features: string[]
  image: string
  price: string
  tagline: string
  overview: string
  benefits: string[]
  detailedFeatures: {
    title: string
    description: string
    icon: string
  }[]
  process: {
    step: string
    title: string
    description: string
  }[]
  pricing: {
    name: string
    price: string
    description: string
    features: string[]
    popular?: boolean
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  caseStudies: {
    title: string
    client: string
    result: string
    image: string
  }[]
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'brand-development',
    icon: '🎯',
    title: 'Brand Development',
    shortDesc: 'Build a powerful brand identity that resonates with your audience',
    description: 'Create a distinctive brand identity that sets you apart in the marketplace. We help you define your brand story, values, and visual identity to create lasting impressions.',
    category: 'branding',
    features: [
      'Brand Strategy & Positioning',
      'Brand Identity Design',
      'Logo & Visual System',
      'Brand Guidelines',
      'Brand Architecture',
      'Brand Messaging Framework'
    ],
    image: '/media/brand.jpg',
    price: 'From $3,500/project',
    tagline: 'Build a Brand That Stands Out',
    overview: 'Your brand is more than just a logo—it\'s the complete experience your customers have with your business. Our brand development services combine strategic thinking with creative excellence to build brands that not only look great but also drive business results. We work with you to define your brand\'s unique position, craft compelling narratives, and create visual identities that resonate with your target audience.',
    benefits: [
      'Establish a unique market position that differentiates you from competitors',
      'Build brand recognition and recall among your target audience',
      'Create emotional connections with customers that drive loyalty',
      'Increase perceived value and justify premium pricing',
      'Ensure consistency across all customer touchpoints',
      'Build a scalable brand foundation for future growth'
    ],
    detailedFeatures: [
      {
        title: 'Brand Strategy',
        description: 'Comprehensive research and strategic planning to define your brand positioning, target audience, and competitive advantages.',
        icon: '🎯'
      },
      {
        title: 'Visual Identity',
        description: 'Create stunning logos, color palettes, typography systems, and visual elements that bring your brand to life.',
        icon: '🎨'
      },
      {
        title: 'Brand Guidelines',
        description: 'Detailed documentation ensuring consistent brand application across all channels and materials.',
        icon: '📖'
      },
      {
        title: 'Messaging Framework',
        description: 'Craft compelling brand stories, taglines, and messaging that resonates with your audience.',
        icon: '💬'
      },
      {
        title: 'Brand Architecture',
        description: 'Structure your portfolio of brands, sub-brands, and products for maximum clarity and impact.',
        icon: '🏗️'
      },
      {
        title: 'Implementation Support',
        description: 'Guidance and support for rolling out your new brand across all touchpoints.',
        icon: '🚀'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & Research',
        description: 'Deep dive into your business, market, competitors, and target audience to uncover insights and opportunities.'
      },
      {
        step: '02',
        title: 'Strategy Development',
        description: 'Define your brand positioning, personality, values, and messaging framework based on research insights.'
      },
      {
        step: '03',
        title: 'Creative Development',
        description: 'Design your visual identity including logo, colors, typography, and supporting brand elements.'
      },
      {
        step: '04',
        title: 'Guidelines & Launch',
        description: 'Create comprehensive brand guidelines and support your brand launch across all channels.'
      }
    ],
    pricing: [
      {
        name: 'Starter Brand',
        price: '$3,500',
        description: 'Essential brand development for new businesses',
        features: [
          'Brand strategy workshop',
          'Logo design (3 concepts)',
          'Basic color palette',
          'Typography selection',
          'Basic brand guidelines (PDF)',
          'Social media assets',
          '2 revision rounds'
        ]
      },
      {
        name: 'Professional Brand',
        price: '$7,500',
        description: 'Comprehensive branding for growing businesses',
        features: [
          'Full brand strategy & positioning',
          'Logo design (5 concepts)',
          'Extended color system',
          'Typography system',
          'Brand pattern & textures',
          'Comprehensive brand guidelines',
          'Marketing collateral templates',
          'Social media kit',
          'Email signature templates',
          'Unlimited revisions'
        ],
        popular: true
      },
      {
        name: 'Enterprise Brand',
        price: 'Custom',
        description: 'Complete brand transformation for established companies',
        features: [
          'Full brand audit & research',
          'Strategic positioning workshop',
          'Complete visual identity system',
          'Brand architecture strategy',
          'Sub-brand development',
          'Interactive brand portal',
          'Complete marketing collateral',
          'Brand launch strategy',
          'Staff training & workshops',
          'Ongoing brand support',
          'Unlimited revisions'
        ]
      }
    ],
    faqs: [
      {
        question: 'How long does the brand development process take?',
        answer: 'A typical brand development project takes 6-12 weeks depending on the scope. Starter packages can be completed in 4-6 weeks, while comprehensive enterprise rebranding may take 3-4 months to ensure all touchpoints are properly addressed.'
      },
      {
        question: 'What\'s the difference between brand identity and brand strategy?',
        answer: 'Brand strategy defines who you are, what you stand for, and how you position yourself in the market. Brand identity is the visual expression of that strategy—your logo, colors, typography, and design elements. Both are essential for a strong brand.'
      },
      {
        question: 'Do you help with brand implementation?',
        answer: 'Yes! We provide comprehensive brand guidelines and can support your brand rollout across all channels. Our Professional and Enterprise packages include implementation guidance, and we can also provide ongoing support for brand application.'
      },
      {
        question: 'Can you rebrand our existing business?',
        answer: 'Absolutely. We specialize in both new brand development and rebranding. We\'ll conduct a thorough audit of your current brand, understand what\'s working and what isn\'t, and develop a strategy for evolution or transformation that maintains equity while modernizing your image.'
      },
      {
        question: 'What do we need to provide to get started?',
        answer: 'We\'ll need information about your business, target audience, competitors, and goals. During our discovery phase, we\'ll conduct stakeholder interviews and workshops to gather insights. If you have existing brand materials or research, those are helpful but not required.'
      }
    ],
    caseStudies: [
      {
        title: 'TechVision - Complete Brand Transformation',
        client: 'TechVision Systems',
        result: 'New brand identity increased brand recall by 340% and helped secure $5M in Series A funding',
        image: '/media/121758.jpg'
      },
      {
        title: 'GreenLife - Sustainable Brand Launch',
        client: 'GreenLife Organics',
        result: 'Brand positioning led to 250% increase in retail partnerships within 6 months of launch',
        image: '/media/121758.jpg'
      },
      {
        title: 'UrbanFit - Fitness Brand Revitalization',
        client: 'UrbanFit Gyms',
        result: 'Rebranding campaign resulted in 180% increase in new memberships and 45% improvement in retention',
        image: '/media/121758.jpg'
      }
    ]
  },
  {
    id: '2',
    slug: 'digital-marketing',
    icon: '📱',
    title: 'Digital Marketing',
    shortDesc: 'Comprehensive digital strategies that drive online growth and engagement',
    description: 'Maximize your online presence with data-driven digital marketing strategies. From social media to SEO, we cover all aspects of your digital ecosystem.',
    category: 'digital',
    features: [
      'Social Media Marketing',
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click Advertising (PPC)',
      'Email Marketing Campaigns',
      'Content Marketing',
      'Analytics & Reporting'
    ],
    image: '/media/121758.jpg',
    price: 'From $2,500/month',
    tagline: 'Dominate the Digital Landscape',
    overview: 'In today\'s digital-first world, your online presence is your business card, storefront, and sales team combined. Our digital marketing services leverage the latest tools, platforms, and strategies to help you reach, engage, and convert your target audience across all digital channels. We combine creative excellence with data-driven optimization to deliver measurable results and sustainable growth.',
    benefits: [
      'Increase online visibility and reach your target audience where they are',
      'Generate high-quality leads at a lower cost than traditional marketing',
      'Build engaged communities around your brand on social platforms',
      'Track and measure every aspect of your marketing performance',
      'Scale successful campaigns quickly and efficiently',
      'Stay ahead of digital trends and algorithm changes'
    ],
    detailedFeatures: [
      {
        title: 'Social Media Management',
        description: 'Strategic content creation, community management, and paid social advertising across all major platforms.',
        icon: '📱'
      },
      {
        title: 'SEO Optimization',
        description: 'Technical SEO, content optimization, and link building to improve organic search rankings and traffic.',
        icon: '🔍'
      },
      {
        title: 'PPC Campaigns',
        description: 'Targeted paid advertising on Google, Facebook, LinkedIn, and other platforms for immediate results.',
        icon: '💰'
      },
      {
        title: 'Email Marketing',
        description: 'Automated email campaigns, newsletters, and nurture sequences that convert prospects into customers.',
        icon: '✉️'
      },
      {
        title: 'Content Strategy',
        description: 'Strategic content planning, creation, and distribution to attract and engage your target audience.',
        icon: '📝'
      },
      {
        title: 'Analytics & Insights',
        description: 'Comprehensive tracking, reporting, and insights to optimize performance and ROI.',
        icon: '📊'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Digital Audit',
        description: 'Comprehensive analysis of your current digital presence, competitors, and opportunities across all channels.'
      },
      {
        step: '02',
        title: 'Strategy Development',
        description: 'Create a customized digital marketing roadmap with clear objectives, tactics, and KPIs.'
      },
      {
        step: '03',
        title: 'Campaign Execution',
        description: 'Launch and manage campaigns across selected channels with consistent monitoring and optimization.'
      },
      {
        step: '04',
        title: 'Optimize & Scale',
        description: 'Continuous testing, analysis, and refinement to improve results and scale successful initiatives.'
      }
    ],
    pricing: [
      {
        name: 'Digital Starter',
        price: '$2,500',
        description: 'Essential digital marketing for small businesses',
        features: [
          'Social media management (2 platforms)',
          'Basic SEO optimization',
          'Monthly content calendar',
          'Email marketing setup',
          'Monthly performance reports',
          'Email support'
        ]
      },
      {
        name: 'Digital Growth',
        price: '$5,000',
        description: 'Comprehensive digital marketing for growing businesses',
        features: [
          'Social media management (4 platforms)',
          'Advanced SEO & content marketing',
          'PPC campaign management',
          'Email marketing automation',
          'Bi-weekly strategy calls',
          'Advanced analytics & reporting',
          'Dedicated account manager',
          'Priority support'
        ],
        popular: true
      },
      {
        name: 'Digital Enterprise',
        price: 'Custom',
        description: 'Full-service digital marketing for large organizations',
        features: [
          'Multi-channel campaign management',
          'Enterprise SEO & technical optimization',
          'Multi-platform PPC management',
          'Advanced marketing automation',
          'Influencer partnerships',
          'Real-time analytics dashboard',
          'Weekly strategy sessions',
          'Dedicated marketing team',
          'Custom integrations',
          '24/7 priority support'
        ]
      }
    ],
    faqs: [
      {
        question: 'Which digital channels should we focus on?',
        answer: 'The right channels depend on your target audience, business goals, and industry. During our digital audit, we analyze where your audience is most active and which channels offer the best ROI for your specific situation. We typically recommend starting with 2-3 core channels and expanding from there.'
      },
      {
        question: 'How quickly will we see results?',
        answer: 'Results vary by channel. PPC advertising can generate leads within days, while SEO typically takes 3-6 months to show significant results. Social media builds momentum over time. We provide realistic timelines for each channel and focus on sustainable, long-term growth rather than quick wins.'
      },
      {
        question: 'Do you handle content creation?',
        answer: 'Yes! Our team includes content creators, designers, and videographers who can produce all the content needed for your digital campaigns—from social media posts and blog articles to videos and infographics.'
      },
      {
        question: 'How do you measure success?',
        answer: 'We establish clear KPIs during the strategy phase based on your business goals—whether that\'s website traffic, leads, sales, engagement, or brand awareness. We provide regular reports showing performance against these metrics and the ROI of your digital marketing investment.'
      },
      {
        question: 'Can we manage some channels ourselves?',
        answer: 'Absolutely! We can work with your in-house team and focus our efforts on specific channels while you manage others. We\'re also happy to provide training and consultation to build your team\'s capabilities.'
      }
    ],
    caseStudies: [
      {
        title: 'E-Commerce Boost - 400% Revenue Growth',
        client: 'StyleHub Fashion',
        result: 'Integrated digital strategy increased online revenue by 400% and reduced customer acquisition cost by 55%',
        image: '/media/121758.jpg'
      },
      {
        title: 'B2B Lead Generation Success',
        client: 'TechSolutions Corp',
        result: 'LinkedIn and content marketing campaign generated 350 qualified leads in 6 months, 45% conversion rate',
        image: '/media/121758.jpg'
      },
      {
        title: 'Local Business Digital Transformation',
        client: 'Urban Eats Restaurants',
        result: 'Social media and local SEO strategy increased foot traffic by 180% across 8 locations',
        image: '/media/121758.jpg'
      }
    ]
  },
  {
    id: '3',
    slug: 'marketing-strategy-campaigns',
    icon: '🎯',
    title: 'Marketing Strategy & Campaigns',
    shortDesc: 'Strategic marketing campaigns that deliver measurable business results',
    description: 'Develop and execute comprehensive marketing strategies and campaigns that drive growth. From planning to execution, we ensure every campaign delivers maximum impact.',
    category: 'strategy',
    features: [
      'Integrated Campaign Strategy',
      'Market Research & Insights',
      'Campaign Planning & Execution',
      'Multi-Channel Coordination',
      'Performance Analytics',
      'ROI Optimization'
    ],
    image: '/media/2149337287.jpg',
    price: 'From $4,000/month',
    tagline: 'Strategic Campaigns That Drive Results',
    overview: 'Great marketing campaigns don\'t happen by accident—they require strategic thinking, meticulous planning, and flawless execution. Our marketing strategy and campaign services combine deep market insights with creative excellence to develop campaigns that cut through the noise and drive meaningful business results. We handle everything from initial strategy to campaign execution and optimization, ensuring your marketing investments deliver maximum ROI.',
    benefits: [
      'Align marketing initiatives with business objectives for maximum impact',
      'Reach target audiences with precisely coordinated multi-channel campaigns',
      'Increase campaign effectiveness through data-driven insights and optimization',
      'Reduce wasted spend by focusing resources on highest-performing channels',
      'Build brand momentum with consistent, integrated messaging',
      'Track and prove marketing ROI with comprehensive analytics'
    ],
    detailedFeatures: [
      {
        title: 'Strategic Planning',
        description: 'Comprehensive campaign strategy development aligned with business goals and market opportunities.',
        icon: '🎯'
      },
      {
        title: 'Market Research',
        description: 'In-depth audience insights, competitive analysis, and market trends to inform campaign strategy.',
        icon: '🔍'
      },
      {
        title: 'Creative Development',
        description: 'Compelling campaign concepts, messaging, and creative assets that resonate with your audience.',
        icon: '🎨'
      },
      {
        title: 'Multi-Channel Execution',
        description: 'Coordinated campaign deployment across digital, social, traditional, and experiential channels.',
        icon: '📡'
      },
      {
        title: 'Performance Tracking',
        description: 'Real-time monitoring and analysis of campaign performance across all channels and touchpoints.',
        icon: '📊'
      },
      {
        title: 'Optimization & Scaling',
        description: 'Continuous testing and refinement to maximize campaign effectiveness and ROI.',
        icon: '⚡'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Strategy & Planning',
        description: 'Define campaign objectives, target audience, key messages, and success metrics through collaborative workshops.'
      },
      {
        step: '02',
        title: 'Creative Development',
        description: 'Develop campaign concepts, creative assets, and content across all required channels and formats.'
      },
      {
        step: '03',
        title: 'Campaign Launch',
        description: 'Execute coordinated multi-channel campaign launch with all assets, messaging, and tracking in place.'
      },
      {
        step: '04',
        title: 'Monitor & Optimize',
        description: 'Track performance in real-time, make data-driven adjustments, and optimize for maximum results.'
      }
    ],
    pricing: [
      {
        name: 'Campaign Starter',
        price: '$4,000',
        description: 'Single campaign planning and execution',
        features: [
          'Campaign strategy development',
          'Target audience research',
          'Campaign creative concept',
          'Up to 3 channel execution',
          'Basic performance tracking',
          'Campaign report & insights',
          '1 month support'
        ]
      },
      {
        name: 'Campaign Pro',
        price: '$8,000',
        description: 'Comprehensive multi-campaign strategy',
        features: [
          'Quarterly marketing strategy',
          'Multiple campaign planning',
          'Advanced audience research',
          'Full creative development',
          'Multi-channel coordination',
          'Real-time performance dashboard',
          'Monthly strategy reviews',
          'Ongoing optimization',
          '3 months support'
        ],
        popular: true
      },
      {
        name: 'Campaign Enterprise',
        price: 'Custom',
        description: 'Year-round strategic marketing partnership',
        features: [
          'Annual marketing strategy',
          'Unlimited campaigns',
          'Market intelligence reports',
          'Full creative services',
          'Enterprise-wide coordination',
          'Advanced analytics & attribution',
          'Weekly strategy sessions',
          'Dedicated campaign team',
          'Crisis management support',
          'Ongoing partnership'
        ]
      }
    ],
    faqs: [
      {
        question: 'What\'s included in a campaign strategy?',
        answer: 'A comprehensive campaign strategy includes market research and insights, clear objectives and KPIs, target audience definition, messaging framework, creative direction, channel strategy, budget allocation, timeline, and measurement plan. We document everything so your team understands the "why" behind every decision.'
      },
      {
        question: 'How do you ensure campaigns stay on brand?',
        answer: 'We work within your brand guidelines (or help create them if needed) and ensure all campaign elements align with your brand identity, voice, and values. Every creative asset goes through a review and approval process to maintain consistency.'
      },
      {
        question: 'Can you manage both online and offline campaigns?',
        answer: 'Yes! We specialize in integrated campaigns that span digital, social, traditional media, events, and experiential marketing. The key is ensuring all channels work together cohesively to amplify your message and drive results.'
      },
      {
        question: 'How do you measure campaign success?',
        answer: 'We establish clear KPIs during the planning phase based on your business objectives. Throughout the campaign, we track metrics like reach, engagement, leads, conversions, and sales. After completion, we provide comprehensive analysis of what worked, what didn\'t, and recommendations for future campaigns.'
      },
      {
        question: 'What if a campaign isn\'t performing well?',
        answer: 'We monitor campaigns in real-time and can quickly pivot if something isn\'t working. This might mean adjusting messaging, reallocating budget to better-performing channels, or trying new creative approaches. Our agile approach ensures we maximize results even when initial assumptions need adjustment.'
      }
    ],
    caseStudies: [
      {
        title: 'Product Launch Campaign - 500K Impressions',
        client: 'InnovateTech',
        result: 'Integrated launch campaign generated 500K impressions and 2,500 qualified leads in first month',
        image: '/media/121758.jpg'
      },
      {
        title: 'Brand Awareness Campaign - 300% Increase',
        client: 'GreenEarth Products',
        result: 'Multi-channel awareness campaign increased brand recognition by 300% in target markets',
        image: '/media/121758.jpg'
      },
      {
        title: 'Seasonal Campaign - 250% Sales Lift',
        client: 'RetailPro Stores',
        result: 'Holiday campaign strategy drove 250% increase in seasonal sales compared to previous year',
        image: '/media/121758.jpg'
      }
    ]
  },
  {
    id: '4',
    slug: 'public-relations',
    icon: '📰',
    title: 'Public Relations',
    shortDesc: 'Build and protect your reputation with strategic PR and media relations',
    description: 'Manage your public image and media relationships with expert PR strategies. From press releases to crisis management, we help you control the narrative.',
    category: 'pr',
    features: [
      'Media Relations & Outreach',
      'Press Release Writing & Distribution',
      'Crisis Communication',
      'Thought Leadership',
      'Event PR & Coordination',
      'Reputation Management'
    ],
    image: '/media/public relations.jpg',
    price: 'From $3,000/month',
    tagline: 'Shape Your Story, Protect Your Reputation',
    overview: 'In today\'s interconnected world, your reputation is your most valuable asset. Our public relations services help you build, maintain, and protect your brand\'s reputation through strategic media relations, thought leadership, and crisis management. We work with journalists, influencers, and stakeholders to ensure your story is told accurately and amplify your messages to the right audiences at the right time.',
    benefits: [
      'Build credibility and trust through earned media coverage',
      'Position executives as industry thought leaders',
      'Manage and mitigate reputational risks proactively',
      'Reach new audiences through strategic media partnerships',
      'Amplify marketing messages with third-party validation',
      'Navigate crises with confidence and minimize damage'
    ],
    detailedFeatures: [
      {
        title: 'Media Relations',
        description: 'Build and maintain relationships with journalists, secure media coverage, and manage press inquiries.',
        icon: '📰'
      },
      {
        title: 'Press Materials',
        description: 'Craft compelling press releases, media kits, and pitch materials that get journalists\' attention.',
        icon: '📝'
      },
      {
        title: 'Thought Leadership',
        description: 'Position your executives as industry experts through bylines, speaking opportunities, and expert commentary.',
        icon: '🎤'
      },
      {
        title: 'Crisis Management',
        description: 'Prepare for and manage potential crises with strategic communication plans and rapid response.',
        icon: '🚨'
      },
      {
        title: 'Event PR',
        description: 'Maximize visibility for launches, announcements, and events with strategic PR support.',
        icon: '🎯'
      },
      {
        title: 'Monitoring & Analysis',
        description: 'Track media coverage, sentiment, and share of voice to measure PR impact and identify opportunities.',
        icon: '📊'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Situation Analysis',
        description: 'Assess current reputation, media landscape, and opportunities. Develop key messages and PR strategy.'
      },
      {
        step: '02',
        title: 'Relationship Building',
        description: 'Identify and build relationships with relevant journalists, influencers, and media outlets.'
      },
      {
        step: '03',
        title: 'Story Execution',
        description: 'Pitch stories, distribute press materials, secure coverage, and coordinate media opportunities.'
      },
      {
        step: '04',
        title: 'Monitor & Amplify',
        description: 'Track coverage, measure impact, and amplify positive stories across all channels.'
      }
    ],
    pricing: [
      {
        name: 'PR Essentials',
        price: '$3,000',
        description: 'Core PR services for emerging brands',
        features: [
          'Monthly press release',
          'Media list development',
          'Basic media outreach',
          'Media monitoring',
          'Monthly coverage report',
          'Email support'
        ]
      },
      {
        name: 'PR Professional',
        price: '$6,000',
        description: 'Comprehensive PR for growing companies',
        features: [
          '2 press releases per month',
          'Strategic media outreach',
          'Thought leadership development',
          'Crisis communication plan',
          'Media training',
          'Bi-weekly status calls',
          'Advanced media monitoring',
          'Quarterly strategy review',
          'Dedicated PR specialist'
        ],
        popular: true
      },
      {
        name: 'PR Enterprise',
        price: 'Custom',
        description: 'Full-service PR for established organizations',
        features: [
          'Unlimited press releases',
          'Proactive media relations',
          'Executive thought leadership',
          '24/7 crisis support',
          'Event PR & coordination',
          'Influencer partnerships',
          'Real-time media monitoring',
          'Weekly strategy sessions',
          'Dedicated PR team',
          'White-glove service'
        ]
      }
    ],
    faqs: [
      {
        question: 'How do you secure media coverage?',
        answer: 'We build genuine relationships with journalists in your industry, understand what stories they\'re looking for, and pitch newsworthy angles that align with their editorial needs. We focus on earned media through compelling stories rather than paying for coverage.'
      },
      {
        question: 'Can you guarantee media placements?',
        answer: 'While we can\'t guarantee specific placements (that would be advertising, not PR), we have a strong track record of securing coverage for our clients. We focus on creating genuinely newsworthy stories and building relationships that lead to ongoing media opportunities.'
      },
      {
        question: 'What is crisis communication?',
        answer: 'Crisis communication involves preparing for and responding to situations that could damage your reputation—from product recalls to leadership scandals. We help you prepare response plans, act quickly when issues arise, and protect your reputation through strategic communication.'
      },
      {
        question: 'How long does it take to see PR results?',
        answer: 'PR is a long-term investment. Initial media coverage can happen within the first month, but building strong media relationships and establishing thought leadership typically takes 3-6 months. Crisis management results are immediate when needed.'
      },
      {
        question: 'Do you work with local or national media?',
        answer: 'Both! We tailor our media strategy to your goals and target audience. This might include local media for community-focused businesses, national outlets for broader reach, or trade publications for B2B companies. We work with the media that matters most to your business.'
      }
    ],
    caseStudies: [
      {
        title: 'Tech Startup Launch - 50+ Media Mentions',
        client: 'NextGen AI',
        result: 'Launch PR campaign secured coverage in TechCrunch, Forbes, and 50+ tech publications',
        image: '/media/121758.jpg'
      },
      {
        title: 'Crisis Management - Reputation Protected',
        client: 'HealthCare Plus',
        result: 'Strategic crisis response minimized negative coverage and maintained stakeholder confidence',
        image: '/media/121758.jpg'
      },
      {
        title: 'Thought Leadership - Industry Recognition',
        client: 'Financial Services Group',
        result: 'CEO positioned as industry expert with 20+ speaking engagements and featured in major business publications',
        image: '/media/121758.jpg'
      }
    ]
  },
  {
    id: '5',
    slug: 'creative-production',
    icon: '🎬',
    title: 'Creative Production',
    shortDesc: 'High-quality content production from concept to completion',
    description: 'Bring your creative vision to life with professional production services. From video and photography to design and animation, we create content that captivates.',
    category: 'creative',
    features: [
      'Video Production',
      'Photography & Image Creation',
      'Graphic Design',
      'Animation & Motion Graphics',
      'Audio Production',
      'Post-Production & Editing'
    ],
    image: '/media/creative production.jpg',
    price: 'From $2,000/project',
    tagline: 'Create Content That Captivates',
    overview: 'Great content is the currency of modern marketing. Our creative production services combine technical expertise with artistic vision to create stunning visual and audio content that captures attention and drives engagement. Whether you need corporate videos, product photography, or animated explainers, our team handles every aspect of production from initial concept through final delivery.',
    benefits: [
      'Create professional-quality content that elevates your brand',
      'Engage audiences with visually compelling stories',
      'Increase conversion rates with high-quality product imagery',
      'Build content libraries for multi-channel marketing',
      'Reduce production costs with efficient workflows',
      'Access full-service production without in-house overhead'
    ],
    detailedFeatures: [
      {
        title: 'Video Production',
        description: 'Full-service video production including commercials, corporate videos, testimonials, and social media content.',
        icon: '🎬'
      },
      {
        title: 'Photography',
        description: 'Professional photography for products, corporate headshots, events, and marketing campaigns.',
        icon: '📸'
      },
      {
        title: 'Graphic Design',
        description: 'Creative design for marketing materials, infographics, social media graphics, and digital assets.',
        icon: '🎨'
      },
      {
        title: 'Animation',
        description: 'Motion graphics, explainer videos, animated logos, and visual effects that bring ideas to life.',
        icon: '✨'
      },
      {
        title: 'Audio Production',
        description: 'Podcast production, voiceovers, jingles, and sound design for multimedia projects.',
        icon: '🎵'
      },
      {
        title: 'Post-Production',
        description: 'Professional editing, color grading, sound mixing, and finishing for all content types.',
        icon: '✂️'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Concept Development',
        description: 'Collaborate on creative concepts, storyboards, and production plans that align with your goals.'
      },
      {
        step: '02',
        title: 'Pre-Production',
        description: 'Handle all logistics including scheduling, location scouting, casting, and resource coordination.'
      },
      {
        step: '03',
        title: 'Production',
        description: 'Execute the shoot or recording with professional equipment, crew, and creative direction.'
      },
      {
        step: '04',
        title: 'Post-Production',
        description: 'Edit, enhance, and finalize content with professional post-production and delivery in required formats.'
      }
    ],
    pricing: [
      {
        name: 'Single Project',
        price: '$2,000',
        description: 'One-off production for specific needs',
        features: [
          'Single video or photo shoot',
          'Basic concept development',
          'Half-day production',
          'Standard editing',
          'Up to 2 deliverable formats',
          '2 revision rounds',
          'Digital delivery'
        ]
      },
      {
        name: 'Content Package',
        price: '$8,000',
        description: 'Multiple projects and ongoing content needs',
        features: [
          '3-5 projects per month',
          'Strategic content planning',
          'Full-day productions',
          'Advanced editing & effects',
          'Multiple deliverable formats',
          'Unlimited revisions',
          'Content library access',
          'Priority scheduling',
          'Dedicated producer'
        ],
        popular: true
      },
      {
        name: 'Production Studio',
        price: 'Custom',
        description: 'Complete production solution for enterprises',
        features: [
          'Unlimited projects',
          'Full creative services',
          'Multi-day productions',
          'Cinema-quality production',
          'Complete post-production',
          'Asset management system',
          'On-demand availability',
          'Dedicated production team',
          'Equipment rental included',
          'White-label options'
        ]
      }
    ],
    faqs: [
      {
        question: 'What types of videos can you produce?',
        answer: 'We produce all types of video content including commercials, corporate videos, product demos, testimonials, event coverage, social media content, explainer videos, training videos, and more. Each project is tailored to your specific goals and audience.'
      },
      {
        question: 'Do you provide equipment and crew?',
        answer: 'Yes! We have professional equipment and can assemble the right crew for your project—from camera operators and lighting technicians to sound engineers and directors. Everything is included in our production pricing.'
      },
      {
        question: 'How long does production take?',
        answer: 'Timelines vary by project complexity. A simple video might take 2-3 weeks from concept to delivery, while complex productions can take 4-8 weeks. We provide detailed timelines during the planning phase and keep you updated throughout.'
      },
      {
        question: 'Can you shoot at our location?',
        answer: 'Absolutely! We can shoot at your office, retail location, factory, or any venue that works for your project. We can also help find and secure locations if needed.'
      },
      {
        question: 'What do we get at the end?',
        answer: 'You receive fully edited, finished content in all required formats—whether that\'s video files for social media, web, and TV, high-resolution images, or print-ready designs. You also get the rights to use the content across all your marketing channels.'
      },
      {
        question: 'Can you match our brand style?',
        answer: 'Yes! We work within your brand guidelines to ensure all produced content maintains consistent look, feel, and quality. If you don\'t have established guidelines, we can help develop a content style guide.'
      }
    ],
    caseStudies: [
      {
        title: 'Brand Campaign - Award-Winning Video',
        client: 'Lifestyle Brands Co.',
        result: 'Campaign video won 3 industry awards and generated 2M+ views across social platforms',
        image: '/media/121758.jpg'
      },
      {
        title: 'Product Launch - Visual Content Library',
        client: 'TechGear Products',
        result: 'Comprehensive photo and video library increased conversion rates by 45% across e-commerce',
        image: '/media/121758.jpg'
      },
      {
        title: 'Corporate Documentary - Employee Engagement',
        client: 'Global Corp Industries',
        result: 'Documentary-style corporate video increased employee engagement scores by 35%',
        image: '/media/121758.jpg'
      }
    ]
  },
  {
    id: '6',
    slug: 'corporate-communication',
    icon: '💼',
    title: 'Corporate Communication',
    shortDesc: 'Strategic internal and external communication that strengthens your organization',
    description: 'Enhance organizational communication with strategic planning and execution. From internal communications to stakeholder relations, we ensure your messages are clear and effective.',
    category: 'corporate',
    features: [
      'Internal Communications Strategy',
      'Executive Communications',
      'Change Management Communication',
      'Employee Engagement',
      'Stakeholder Relations',
      'Corporate Messaging'
    ],
    image: '/media/type-of-corporate-communication.png',
    price: 'From $3,500/month',
    tagline: 'Align Your Organization Through Communication',
    overview: 'Effective communication is the foundation of successful organizations. Our corporate communication services help you align internal teams, engage employees, and manage stakeholder relationships through strategic, clear, and consistent communication. We work with leadership to develop messaging frameworks, communication plans, and engagement strategies that drive organizational success.',
    benefits: [
      'Align employees around company vision, values, and objectives',
      'Increase employee engagement and reduce turnover',
      'Navigate organizational change with clear, supportive communication',
      'Build trust with stakeholders through transparent communication',
      'Strengthen company culture and employer brand',
      'Improve leadership communication effectiveness'
    ],
    detailedFeatures: [
      {
        title: 'Internal Strategy',
        description: 'Develop comprehensive internal communication strategies that engage employees and drive alignment.',
        icon: '📋'
      },
      {
        title: 'Executive Communications',
        description: 'Craft messaging for leadership including town halls, announcements, and stakeholder updates.',
        icon: '👔'
      },
      {
        title: 'Change Management',
        description: 'Support organizational changes with strategic communication plans that reduce resistance.',
        icon: '🔄'
      },
      {
        title: 'Employee Engagement',
        description: 'Create programs and campaigns that boost morale, recognition, and company culture.',
        icon: '🤝'
      },
      {
        title: 'Stakeholder Relations',
        description: 'Manage communications with investors, board members, and other key stakeholders.',
        icon: '🎯'
      },
      {
        title: 'Measurement & Analysis',
        description: 'Track communication effectiveness and employee sentiment to optimize strategies.',
        icon: '📊'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Communication Audit',
        description: 'Assess current communication practices, identify gaps, and understand stakeholder needs.'
      },
      {
        step: '02',
        title: 'Strategy Development',
        description: 'Create comprehensive communication strategy with clear objectives, channels, and messaging.'
      },
      {
        step: '03',
        title: 'Implementation',
        description: 'Execute communication plans with consistent messaging across all internal and external channels.'
      },
      {
        step: '04',
        title: 'Monitor & Refine',
        description: 'Track engagement, gather feedback, and continuously improve communication effectiveness.'
      }
    ],
    pricing: [
      {
        name: 'Communication Essentials',
        price: '$3,500',
        description: 'Core corporate communication support',
        features: [
          'Monthly newsletter development',
          'Executive message drafting',
          'Basic internal campaigns',
          'Communication templates',
          'Quarterly strategy review',
          'Email support'
        ]
      },
      {
        name: 'Communication Pro',
        price: '$7,000',
        description: 'Comprehensive communication management',
        features: [
          'Full internal communication strategy',
          'Executive communications support',
          'Change management planning',
          'Employee engagement programs',
          'Stakeholder communication',
          'Intranet content management',
          'Monthly strategy sessions',
          'Communication training',
          'Dedicated specialist'
        ],
        popular: true
      },
      {
        name: 'Communication Enterprise',
        price: 'Custom',
        description: 'Enterprise-wide communication solution',
        features: [
          'Enterprise communication strategy',
          'C-suite communications support',
          'Complex change initiatives',
          'Global communication programs',
          'Crisis communication planning',
          'Advanced engagement platforms',
          'Weekly strategy sessions',
          'Leadership training & coaching',
          'Dedicated communication team',
          '24/7 support'
        ]
      }
    ],
    faqs: [
      {
        question: 'What is corporate communication?',
        answer: 'Corporate communication encompasses all internal and external communication that supports organizational goals—from employee newsletters and town halls to stakeholder reports and crisis communication. It ensures everyone connected to your organization receives clear, consistent, and timely information.'
      },
      {
        question: 'Why is internal communication important?',
        answer: 'Effective internal communication drives employee engagement, alignment, and productivity. It helps employees understand company goals, feel connected to leadership, navigate changes, and become brand ambassadors. Poor internal communication leads to confusion, disengagement, and turnover.'
      },
      {
        question: 'How do you measure communication effectiveness?',
        answer: 'We track metrics like email open rates, intranet engagement, town hall attendance, employee survey scores, and sentiment analysis. We also conduct regular pulse checks and feedback sessions to understand what\'s working and what needs improvement.'
      },
      {
        question: 'Can you help with change management?',
        answer: 'Yes! Change management communication is one of our specialties. We help you craft messaging that explains the "why" behind changes, addresses concerns, and provides clear information about what employees can expect. This reduces resistance and increases successful change adoption.'
      },
      {
        question: 'Do you work with remote and hybrid teams?',
        answer: 'Absolutely. We understand the unique communication challenges of remote and hybrid work environments. We help you leverage digital tools, create engaging virtual events, and ensure no one feels left out regardless of where they work.'
      }
    ],
    caseStudies: [
      {
        title: 'Merger Communication - Smooth Integration',
        client: 'Global Financial Services',
        result: 'Change communication strategy achieved 92% employee satisfaction during complex merger',
        image: '/media/121758.jpg'
      },
      {
        title: 'Employee Engagement - 40% Increase',
        client: 'Tech Solutions Inc.',
        result: 'Internal communication overhaul increased employee engagement scores by 40% in 12 months',
        image: '/media/121758.jpg'
      },
      {
        title: 'Culture Transformation - Award-Winning',
        client: 'Manufacturing Corp',
        result: 'Communication campaign won Best Internal Communication award and reduced turnover by 25%',
        image: '/media/121758.jpg'
      }
    ]
  },
  {
    id: '7',
    slug: 'training-consultancy',
    icon: '🎓',
    title: 'Training & Consultancy',
    shortDesc: 'Expert training and strategic consultation to build your team\'s capabilities',
    description: 'Empower your team with professional training and strategic consultation. From marketing workshops to leadership development, we build capabilities that drive long-term success.',
    category: 'consulting',
    features: [
      'Marketing Training Workshops',
      'Leadership Development',
      'Strategic Consultation',
      'Team Capability Building',
      'Custom Training Programs',
      'Ongoing Advisory Services'
    ],
    image: '/media/84917.jpg',
    price: 'From $2,500/session',
    tagline: 'Build Capabilities That Last',
    overview: 'The best investment you can make is in your team\'s capabilities. Our training and consultancy services combine decades of marketing and business expertise with practical, hands-on learning to help your team develop skills that drive real business results. Whether you need one-off workshops, comprehensive training programs, or ongoing strategic consultation, we tailor our approach to your specific needs and goals.',
    benefits: [
      'Build in-house marketing and communication capabilities',
      'Reduce dependency on external agencies over time',
      'Develop leadership and strategic thinking skills',
      'Stay current with latest marketing trends and tools',
      'Improve team performance and confidence',
      'Access expert guidance for critical business decisions'
    ],
    detailedFeatures: [
      {
        title: 'Marketing Workshops',
        description: 'Hands-on training in digital marketing, content creation, social media, SEO, and more.',
        icon: '📚'
      },
      {
        title: 'Strategic Consultation',
        description: 'One-on-one advisory sessions with senior consultants on business and marketing challenges.',
        icon: '🎯'
      },
      {
        title: 'Leadership Development',
        description: 'Executive coaching and leadership programs to develop high-performing leaders.',
        icon: '👔'
      },
      {
        title: 'Custom Programs',
        description: 'Tailored training programs designed specifically for your team\'s needs and skill gaps.',
        icon: '🛠️'
      },
      {
        title: 'Tools & Resources',
        description: 'Access to frameworks, templates, and resources to implement learnings immediately.',
        icon: '📦'
      },
      {
        title: 'Ongoing Support',
        description: 'Post-training support and advisory services to ensure successful implementation.',
        icon: '🤝'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Needs Assessment',
        description: 'Identify skill gaps, learning objectives, and desired outcomes through consultation and assessment.'
      },
      {
        step: '02',
        title: 'Program Design',
        description: 'Develop customized training curriculum and consultation approach tailored to your needs.'
      },
      {
        step: '03',
        title: 'Delivery',
        description: 'Conduct engaging, interactive training sessions or consultation meetings with practical exercises.'
      },
      {
        step: '04',
        title: 'Implementation Support',
        description: 'Provide ongoing support, resources, and follow-up to ensure successful application of learnings.'
      }
    ],
    pricing: [
      {
        name: 'Workshop',
        price: '$2,500',
        description: 'Single training session for your team',
        features: [
          'Half-day workshop (4 hours)',
          'Up to 15 participants',
          'Custom content development',
          'Interactive exercises',
          'Training materials',
          'Certificate of completion',
          'Post-session Q&A'
        ]
      },
      {
        name: 'Training Program',
        price: '$12,000',
        description: 'Comprehensive multi-session training',
        features: [
          '6 training sessions (3 months)',
          'Up to 20 participants',
          'Customized curriculum',
          'Hands-on projects',
          'Individual assessments',
          'Resource library access',
          'Implementation support',
          'Progress tracking',
          'Final certification'
        ],
        popular: true
      },
      {
        name: 'Advisory Partnership',
        price: 'Custom',
        description: 'Ongoing consultation and training',
        features: [
          'Unlimited consultation hours',
          'Custom training programs',
          'Executive coaching',
          'Strategic planning support',
          'Team skill development',
          'Quarterly team workshops',
          'On-demand expertise access',
          'Priority scheduling',
          'Dedicated consultant',
          'Annual partnership'
        ]
      }
    ],
    faqs: [
      {
        question: 'Who should attend the training?',
        answer: 'Our training programs are designed for various audiences—from marketing teams and communications professionals to executives and business owners. We tailor content and delivery style to match your team\'s experience level and roles.'
      },
      {
        question: 'Can training be done remotely?',
        answer: 'Yes! We offer both in-person and virtual training options. Our virtual sessions are highly interactive and include breakout rooms, polls, and hands-on exercises to maintain engagement.'
      },
      {
        question: 'What topics can you train on?',
        answer: 'We cover a wide range of topics including digital marketing, content strategy, social media, SEO, branding, communications, leadership, strategic planning, and more. We can also develop custom programs for specialized topics relevant to your industry.'
      },
      {
        question: 'How is consultancy different from training?',
        answer: 'Training focuses on building your team\'s skills and knowledge. Consultancy involves working directly with you to solve specific business challenges, develop strategies, or make important decisions. Many clients benefit from both—training for capability building and consultation for strategic guidance.'
      },
      {
        question: 'Do you provide ongoing support after training?',
        answer: 'Yes! All training programs include follow-up support to help with implementation. Our Training Program and Advisory Partnership tiers include extended support periods. We want to ensure your team successfully applies what they learn.'
      },
      {
        question: 'Can you create industry-specific training?',
        answer: 'Absolutely. We customize all training content to your industry, using relevant examples, case studies, and exercises. Whether you\'re in healthcare, technology, manufacturing, or any other sector, we make the learning applicable to your specific context.'
      }
    ],
    caseStudies: [
      {
        title: 'Marketing Team Upskilling - 60% Efficiency Gain',
        client: 'RetailCo',
        result: '6-month training program increased team efficiency by 60% and reduced agency costs by $100K',
        image: '/media/121758.jpg'
      },
      {
        title: 'Leadership Development - Executive Transformation',
        client: 'Financial Services Group',
        result: 'Leadership coaching program improved executive performance ratings by 45% across C-suite',
        image: '/media/121758.jpg'
      },
      {
        title: 'Digital Marketing Workshop - Immediate Results',
        client: 'SME Collective',
        result: 'Workshop attendees increased social media engagement by average of 200% within 30 days',
        image: '/media/121758.jpg'
      }
    ]
  }
]

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

// Helper function to get all service slugs (useful for static generation)
export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug)
}

// Helper function to get related services (excluding current service)
export function getRelatedServices(currentSlug: string, limit: number = 3): Service[] {
  return services
    .filter(service => service.slug !== currentSlug)
    .slice(0, limit)
}

// Categories configuration
export const categories = [
  { id: 'all', name: 'All Services' },
  { id: 'branding', name: 'Branding' },
  { id: 'digital', name: 'Digital' },
  { id: 'strategy', name: 'Strategy' },
  { id: 'pr', name: 'Public Relations' },
  { id: 'creative', name: 'Creative' },
  { id: 'corporate', name: 'Corporate' },
  { id: 'consulting', name: 'Consulting' },
]