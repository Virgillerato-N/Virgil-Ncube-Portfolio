import {
  PortfolioProject,
  WorkExperienceItem,
  SkillCategory,
  EducationItem,
  ReferenceItem,
} from '../types';

// Images imported directly from assets
import virgilPortrait from '../assets/images/cv_profile.jpeg';
import brandIdentityMockup from '../assets/images/brand_identity_mockup_1785230259489.jpg';
import uiUxWebMockup from '../assets/images/ui_ux_web_mockup_1785230274364.jpg';
import photoboothEventDesign from '../assets/images/photobooth_event_design_1785230286690.jpg';

export const PROFILE_INFO = {
  name: 'Virgil Ncube',
  title: 'Creative Director & Graphic Designer',
  subtitle: 'Graphic Designer | UI/UX & Web Designer | Brand Strategist',
  email: 'virgilnc3@gmail.com',
  phone: '+27 79 348 8194',
  location: 'Gauteng, South Africa',
  portfolioWebflowUrl: 'https://virgil-ncubes-portfolio.webflow.io/',
  portraitImage: virgilPortrait,
  aboutMe: `Results-oriented Creative successful at applying technical skills to create art that informs and engages customers. Clear communicator and collaborative team player with an eye for detail and well-versed in liaising with clients and creating high-impact marketing campaigns.`,
  summaryText: `I have worked as a graphic designer, social media manager, photo booth operator, and creative director. On a personal level, I am detail-oriented, organized, and precise in my work. I am comfortable working independently or as part of a dynamic, fast-paced team. I appreciate your time and look forward to connecting and bringing creative excellence to your organization.`,
};

export const WORK_EXPERIENCE: WorkExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Creative Director',
    company: 'Mpilonhle Wellness & Brokers Pty Ltd',
    location: 'Gauteng, South Africa',
    period: 'January 2017 – Present',
    isCurrent: true,
    description:
      'Leading overall visual identity, marketing strategy, and brand communications across digital and print media.',
    highlights: [
      'Managed end-to-end creative campaigns focused on meeting customer needs and strategic creative visions.',
      'Developed comprehensive marketing and strategic communication plans for multi-channel outreach.',
      'Preserved and reinforced strict corporate branding standards across all promotional materials.',
      'Collaborated with executive leadership to elevate brand market positioning in health & wellness insurance.',
    ],
    skillsUsed: ['Creative Direction', 'Brand Strategy', 'Adobe Creative Suite', 'Marketing Campaigns', 'Team Leadership'],
  },
  {
    id: 'exp-2',
    role: 'Graphic Designer',
    company: 'Chillipix Digital',
    location: 'Gauteng, South Africa',
    period: 'October 2022 – April 2023',
    description:
      'Key member of the production team responsible for crafting unique graphic designs, managing photobooth systems, and boosting sales.',
    highlights: [
      'Designed bespoke print and digital graphics for corporate and private events under production manager direction.',
      'Formed part of the active sales team, engaging clients to build rapport and generate qualified business leads.',
      'Operated and managed corporate photobooth setups, creating fun, engaging event environments while upholding brand standards.',
      'Contributed to increased business earnings through client retention and print product sales.',
    ],
    skillsUsed: ['Graphic Design', 'Desktop Publishing', 'Photobooth Operations', 'Client Liaising', 'Sales Rapport'],
  },
  {
    id: 'exp-3',
    role: 'Digital Designer',
    company: 'Figtree',
    location: 'Rosebank, Gauteng',
    period: '2015',
    description:
      'Designed responsive web interfaces and digital graphics adhering strictly to brand guidelines and web usability standards.',
    highlights: [
      'Aligned digital design concepts with core brand identity while maintaining web accessibility and usability standards.',
      'Gathered client requirements to define project scopes, milestones, and deliverable timelines.',
      'Maintained enthusiasm and high production output in a fast-paced agency environment.',
    ],
    skillsUsed: ['UI/UX Design', 'HTML/CSS', 'Web Design Standards', 'Client Consultation', 'Project Scoping'],
  },
  {
    id: 'exp-4',
    role: 'Junior Sales',
    company: 'OzoMed',
    location: 'Keywest & Northcliff, Gauteng',
    period: '2013',
    description:
      'Prospecting leads, demonstrating health products, and assisting sales teams to maintain strong customer relations.',
    highlights: [
      'Qualified incoming marketing and sales leads to assist with prospecting new client contacts.',
      'Helped sales professionals maintain customer relationships through structured follow-up calls.',
      'Demonstrated health products to prospective buyers and answered technical questions efficiently.',
    ],
    skillsUsed: ['Sales Qualification', 'Customer Relations', 'Verbal Communication', 'Lead Generation'],
  },
  {
    id: 'exp-5',
    role: 'Junior Digital Designer',
    company: 'Medscheme',
    location: 'Florida, Gauteng',
    period: '2011',
    description:
      'Supported team design initiatives, problem-solving, and client service in digital media production.',
    highlights: [
      'Participated in continuous process improvement through creative suggestions and team problem-solving.',
      'Collaborated with senior designers and content team members to achieve project target milestones.',
      'Provided friendly and efficient design service, resolving complex client feedback smoothly.',
    ],
    skillsUsed: ['Digital Media', 'Team Collaboration', 'Problem Solving', 'Design Execution'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Design & Creative Suites',
    icon: 'Palette',
    skills: [
      { name: 'Adobe Creative Suite', level: 5, description: 'Photoshop, Illustrator, InDesign, Premiere Pro' },
      { name: 'Corel Draw Creative Suite', level: 5, description: 'Vector illustration, layout preparation' },
      { name: 'Desktop Publishing', level: 5, description: 'Pre-press, magazine, catalog & print prep' },
      { name: 'Brand Identity & Guidelines', level: 5, description: 'Logo creation, brand manuals, collateral' },
      { name: 'Photography & Editing', level: 4, description: 'Studio lighting, photo retouching & composition' },
    ],
  },
  {
    title: 'Web & UI/UX Development',
    icon: 'Code',
    skills: [
      { name: 'UI/UX Design', level: 5, description: 'Wireframing, user journeys, responsive layouts' },
      { name: 'HTML5', level: 5, description: 'Semantic markup, accessibility standards' },
      { name: 'CSS3 & Styling', level: 5, description: 'Flexbox, CSS Grid, Tailwind CSS, animations' },
      { name: 'Webflow & CMS', level: 5, description: 'Webflow site creation, CMS structures, interactions' },
      { name: 'Web Usability Standards', level: 4, description: 'Cross-browser testing, mobile optimization' },
    ],
  },
  {
    title: 'Marketing & Digital Strategy',
    icon: 'TrendingUp',
    skills: [
      { name: 'Digital Marketing', level: 5, description: 'Campaign planning, multi-channel strategy' },
      { name: 'SEO (Search Engine Optimization)', level: 5, description: 'On-page SEO, keyword strategy, meta design' },
      { name: 'Social Media Management', level: 5, description: 'Visual assets, content scheduling, engagement' },
      { name: 'Event & Photobooth Branding', level: 5, description: 'Interactive photobooth templates, lead capture' },
    ],
  },
  {
    title: 'Professional & Communication',
    icon: 'CheckCircle2',
    skills: [
      { name: 'Decision Making & Strategy', level: 5, description: 'Creative direction, problem solving' },
      { name: 'Verbal & Client Communication', level: 5, description: 'Client pitch presentations, requirement gathering' },
      { name: 'Project Milestone Management', level: 5, description: 'Scope definition, deadline delivery' },
      { name: 'Team Leadership & Mentorship', level: 4, description: 'Collaboration across sales & design teams' },
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'edu-1',
    qualification: 'Diploma Live Design and Progressive Media',
    institution: 'Damelin',
    location: 'Randburg, Gauteng',
    year: '2004',
    category: 'Diploma',
  },
  {
    id: 'edu-2',
    qualification: 'Certificate Desktop Publishing',
    institution: 'Damelin',
    location: 'Randburg, Gauteng',
    year: '2003 - 2004',
    category: 'Certificate',
  },
  {
    id: 'edu-3',
    qualification: 'Diploma Ultimate Trading and Investing Programme',
    institution: 'Shaw Academy / Online',
    location: 'Online',
    year: '2018',
    category: 'Diploma',
  },
  {
    id: 'edu-4',
    qualification: 'Diploma Ultimate Digital Marketing Programme',
    institution: 'Shaw Academy / Online',
    location: 'Online',
    year: '2017',
    category: 'Diploma',
  },
  {
    id: 'edu-5',
    qualification: 'Diploma Ultimate Photography Programme',
    institution: 'Shaw Academy / Online',
    location: 'Online',
    year: '2017',
    category: 'Diploma',
  },
  {
    id: 'edu-6',
    qualification: 'Diploma Digital Marketing',
    institution: 'Shaw Academy / Online',
    location: 'Online',
    year: '2016',
    category: 'Diploma',
  },
];

export const REFERENCES_LIST: ReferenceItem[] = [
  {
    id: 'ref-1',
    name: 'Thembani Manyika',
    phone: '073 713 9509',
    relation: 'Production Manager & Professional Colleague',
    quote:
      'Virgil is a reliable, exceptionally precise designer who understands client briefs instantly and consistently produces high-quality artwork under tight deadlines.',
  },
  {
    id: 'ref-2',
    name: 'Wally Marais',
    phone: '083 799 8440',
    relation: 'Senior Client Lead & Business Partner',
    quote:
      'Virgil brings great energy, creative vision, and strong communication skills. His ability to balance creative beauty with business goals makes him an invaluable creative asset.',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'Mpilonhle Wellness Corporate Brand & Identity',
    category: 'Brand Identity',
    client: 'Mpilonhle Wellness & Brokers',
    year: '2023',
    image: brandIdentityMockup,
    featured: true,
    summary:
      'Complete corporate rebrand including brand guidelines manual, stationery set, promotional brochures, and digital collateral.',
    description:
      'As Creative Director at Mpilonhle Wellness & Brokers, Virgil led the complete brand overhaul to modernize the organization’s image in the health insurance sector. The project entailed creating a warm, approachable visual language with gold and navy blue palettes, typography guidelines, and branded collateral for print and digital channels.',
    deliverables: ['Brand Guidelines Book', 'Corporate Stationery Suite', 'Marketing Brochures', 'Digital Banners'],
    tools: ['Adobe Illustrator', 'InDesign', 'Photoshop', 'CorelDraw'],
  },
  {
    id: 'proj-2',
    title: 'Interactive Web & UI/UX Digital Experience',
    category: 'UI/UX & Web',
    client: 'Figtree & Webflow Web Design',
    year: '2022',
    image: uiUxWebMockup,
    featured: true,
    externalUrl: 'https://virgil-ncubes-portfolio.webflow.io/',
    summary:
      'Modern responsive website layout crafted with Webflow, high accessibility score, custom animation and fluid grid layouts.',
    description:
      'A sleek, responsive portfolio and digital experience designed for high convertibility and smooth user journeys. Features dark and light modes, interactive micro-animations, structured web layout hierarchy, and semantic HTML5/CSS3 architecture.',
    deliverables: ['Responsive Web Design', 'Interactive Wireframes', 'Webflow CMS Architecture', 'UI Kit'],
    tools: ['Webflow', 'HTML5', 'CSS3', 'Figma', 'UI/UX Research'],
  },
  {
    id: 'proj-3',
    title: 'Chillipix Corporate Event Photobooth & Print Design',
    category: 'Events & Photobooth',
    client: 'Chillipix Digital',
    year: '2023',
    image: photoboothEventDesign,
    featured: true,
    summary:
      'Custom print frame graphics, digital overlay templates, and photobooth marketing collateral for premier corporate functions.',
    description:
      'Designed vibrant, high-impact photo print strip layouts and digital social sharing graphics for corporate events in Gauteng. Built custom overlay designs tailored to each event’s branding while fostering interactive guest experiences.',
    deliverables: ['Photobooth Print Layouts', 'Digital Social Overlays', 'Event Signage Graphics', 'Lead Gen Formats'],
    tools: ['Adobe Photoshop', 'Illustrator', 'Desktop Publishing', 'Photobooth Software'],
  },
  {
    id: 'proj-4',
    title: 'Multi-Channel Digital Marketing & SEO Campaign',
    category: 'Marketing & SEO',
    client: 'Digital Marketing Showcase',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    summary:
      'Data-driven digital marketing strategy with custom social ad creatives, SEO keyphrases, and conversion analytics.',
    description:
      'Conceived and executed an integrated digital marketing strategy encompassing search engine optimization (SEO), social ad graphics, and lead generation funnels. Successfully drove high conversion rates and elevated search visibility for client campaigns.',
    deliverables: ['Social Media Ad Assets', 'SEO Keyword Strategy', 'Analytics Dashboard Design', 'Email Marketing Templates'],
    tools: ['Digital Marketing Strategy', 'SEO Tools', 'Adobe Photoshop', 'Google Analytics'],
  },
  {
    id: 'proj-5',
    title: 'High-Impact Magazine & Catalog Desktop Publishing',
    category: 'Graphic Design',
    client: 'Damelin & Agency Publishing',
    year: '2020',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    summary:
      'Multi-page publication design, pre-press color proofing, typographic formatting, and catalog layout.',
    description:
      'Leveraging deep desktop publishing mastery, created multi-page print layouts, magazine editorial spreads, and product catalogs. Prepared press-ready PDF proofs with precise bleed, crop marks, and color space separation.',
    deliverables: ['Editorial Magazine Spreads', 'Product Catalogs', 'Pre-Press CMYK Print Proofs'],
    tools: ['Adobe InDesign', 'CorelDraw', 'Photoshop', 'Desktop Publishing'],
  },
  {
    id: 'proj-6',
    title: 'Studio Portrait & Event Photography Series',
    category: 'Photography',
    client: 'Shaw Photography Portfolio',
    year: '2019',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    summary:
      'Professional portrait photography series showcasing studio lighting, color grading, and creative framing.',
    description:
      'A collection of professional photography capturing human emotion, event highlights, and product staging. Applying advanced lighting techniques and post-production retouching in Lightroom and Photoshop.',
    deliverables: ['Retouched High-Res Portraits', 'Event Coverage Imagery', 'Studio Lighting Setup'],
    tools: ['DSLR Camera', 'Adobe Lightroom', 'Photoshop Retouching'],
  },
];

export const HOBBIES = [
  { name: 'Photography', icon: 'Camera', label: 'Capturing moments & composition' },
  { name: 'Web & Tech Design', icon: 'Code2', label: 'Coding & modern UI/UX' },
  { name: 'Gaming', icon: 'Gamepad2', label: 'Interactive storytelling' },
  { name: 'Music & Guitar', icon: 'Music', label: 'Acoustic & creative rhythm' },
  { name: 'Fitness & Gym', icon: 'Dumbbell', label: 'Discipline & wellbeing' },
  { name: 'Problem Solving & Puzzles', icon: 'Puzzle', label: 'Strategic thinking' },
];
