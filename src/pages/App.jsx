import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BelieveGlobalImage from '../assets/global-trade.png'
import ShubhamInsuranceImage from '../assets/shubham-insurance.png'
import ClientBackImage from '../assets/ClientBackImage.jpg'
import ProjectDeliverImage from '../assets/ProjectDeliverImage.jpeg'
import CodeCommitImage from '../assets/codecommitImage.jpg'
import YearExperienceImage from '../assets/YearExperienceImage.jpg'
import WhatsAppLogo from '../assets/whatsapp_logo.png'
import { Mail, ExternalLink, Code2, Briefcase, User, Download, Moon, Sun, Menu, X, ArrowRight, Sparkles, Zap, Globe, Layers, Terminal,
  Database, Phone, GitBranch, Award, TrendingUp, Coffee, BookOpenText } from 'lucide-react';
import { FaLinkedin, FaGithub, FaPython, FaJava, FaJs } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import FloatingCTA from '../components/CTAbuttons';



export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Initialize theme from localStorage or default to light (false)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
    
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Update localStorage and DOM class when theme changes
    if (darkMode) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = {
  frontend: [
    { name: 'React.js', icon: <Code2 className="w-5 h-5" />, color: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript', icon: <Layers className="w-5 h-5" />, color: 'from-blue-400 to-indigo-500' },
    { name: 'JavaScript', icon: <FaJs className="w-5 h-5" />, color: 'from-yellow-400 to-orange-500' },
    { name: 'Tailwind CSS', icon: <Sparkles className="w-5 h-5" />, color: 'from-teal-400 to-cyan-500' },
  ],
  languages: [
    { name: 'Python', icon: <FaPython className="w-5 h-5" />, color: 'from-pink-400 to-rose-500' },
    { name: 'Java', icon: <FaJava className="w-5 h-5" />, color: 'from-green-400 to-emerald-500' },
    { name: 'C / C++', icon: <Terminal className="w-5 h-5" />, color: 'from-indigo-400 to-purple-500' },
  ],
  tools: [
    { name: 'Git & GitHub', icon: <GitBranch className="w-5 h-5" />, color: 'from-purple-400 to-pink-500' },
    { name: 'Vercel', icon: <SiVercel className="w-5 h-5" />, color: 'from-gray-800 to-black' },
  ]
};

  const projects = [
    {
      title: 'Believe Global Trade',
      description: 'Believe Global Trade is a international trading and dynamic export company driven by trust, quality, and global connectivity.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion' ],
      live: '#',
      github: '#',
      image: BelieveGlobalImage,
      featured: true
    },
    {
      title: 'Shubham Insurance and Investement',
      description: 'Shubham Insurance & Investment - Your trusted LIC advisor and insurance partner in Surat for over 15 years.',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Chromatic', 'Styled Components'],
      live: '#',
      github: '#',
      image: ShubhamInsuranceImage,
      featured: true
    },
    {
      title: 'Billing with React',
      description: 'Generating a bill with perfect equations using a values which taken from user by an user-friendly form.',
      tech: ['React', 'html', 'css', 'javascript', 'react libraries'],
      live: '#',
      github: '#',
      gradient: 'from-green-600 via-emerald-600 to-teal-600',
      featured: false
    },
    {
      title: 'CineMad - Explore the Extraordinary',
      description: 'A movies website with modern ui/ux, animation and styling. a website where you can watch or downloads your favourite movies or webshows.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'OpenAI'],
      live: '#',
      github: '#',
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      featured: false
    },
    {
      title: 'E-Commerce Restaurant App',
      description: 'e-commerce restaurant application where you can order various food dishes from restaurant.',
      tech: ['XML', 'Kotlin', 'Android', 'AI'],
      live: '#',
      github: '#',
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      featured: false
    }
  ];

  const experiences = [
    {
      title: 'React JS Developer',
      company: 'Dexton Technology',
      period: '2025 - 2026',
      description: 'Developed scalable web applications using React.js, contributing to frontend architecture and implementing modern UI solutions.',
      achievements: [
        'Architected 5+ responsive web applications',
        'Optimized user experience through performance improvements',
        'Collaborated with cross-functional teams on project delivery'
      ],
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: 'Diploma in Computer Engineering',
      company: 'Shri K. J. polytechnic, Bharuch',
      period: '2023 - 2026',
      description: 'Completed comprehensive computer engineering curriculum with focus on modern web technologies and software development practices.',
      achievements: [
        'Developed 25+ academic projects across multiple programming languages',
        'Mastered 10+ modern technologies and frameworks',
        'Achieved excellent academic performance in technical subjects'
      ],
      icon: <BookOpenText className="w-6 h-6" />
    }
  ];

  const achievements = [
    { label: 'Years Experience', value: '1+', icon: <Award className="w-8 h-8" />, image: YearExperienceImage },
    { label: 'Projects Delivered', value: '10+', icon: <Layers className="w-8 h-8" />, image: ProjectDeliverImage },
    { label: 'Happy Clients', value: '5+', icon: <Coffee className="w-8 h-8" />, image: ClientBackImage },
    { label: 'Code Commits', value: '2K+', icon: <GitBranch className="w-8 h-8" />, image: CodeCommitImage }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.0 }}
      >

    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500 relative overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-6000"></div>
        </div>

        {/* Custom Cursor */}
        <div 
          className="hidden lg:block fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference bg-white transition-transform duration-100"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: `translate(-50%, -50%) scale(${cursorVariant === 'hover' ? 2 : 1})`
          }}
        />

        {/* Sticky Navbar */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
        <nav className="fixed top-0 w-full backdrop-blur-xl bg-white/60 dark:bg-slate-950/60 z-40 transition-all duration-300 border-b border-white/20 dark:border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex-shrink-0 group">
                <div className="relative">
                  <span className="text-2xl md:text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                    Rohit Mahale
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                    )}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-2 sm:space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-3 rounded-xl hover:bg-gray-200/50 dark:hover:bg-slate-800/50 transition-all duration-300 hover:scale-110 relative group"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-90 transition-transform duration-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-700 group-hover:rotate-12 transition-transform duration-500" />
                  )}
                </button>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-3 rounded-xl hover:bg-gray-200/50 dark:hover:bg-slate-800/50 transition-all duration-300"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl">
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 relative">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <div className="inline-block">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full border border-blue-600/20 dark:border-blue-600/30 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Available for freelance</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                    <span className="block text-gray-900 dark:text-white mb-1">Hey, I'm</span>
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                      Rohit Mahale
                    </span>
                  </h1>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-300">
                    React Developer & Frontend Architect
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                  I craft pixel-perfect, high-performance web experiences that blend beautiful design with cutting-edge technology. 
                  Specialized in building scalable React applications that users love.
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="group px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
                  >
                    View My Work
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-4 sm:px-6 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 dark:border-slate-700 text-sm sm:text-base"
                  >
                    Let's Talk
                  </button>
                </div>

                <div className="flex gap-3 sm:gap-4 pt-2">
                  {[
                    { icon: <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />, href: '#', color: 'hover:text-purple-600' },
                    { icon: <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />, href: '#', color: 'hover:text-blue-600' },
                    { icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />, href: '#', color: 'hover:text-pink-600' }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className={`p-3 sm:p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-700 dark:text-gray-300 ${social.color} border border-gray-200/50 dark:border-slate-700/50`}
                      onMouseEnter={() => setCursorVariant('hover')}
                      onMouseLeave={() => setCursorVariant('default')}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* 3D Floating Card */}
              <div className="hidden lg:block relative">
                <div className="relative w-full h-[600px] perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl transform rotate-6 opacity-20 blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-800/80 dark:to-slate-900/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50 h-full flex flex-col justify-center space-y-4 hover:scale-105 transition-transform duration-500">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl">
                        <Code2 className="w-12 h-12 text-blue-600" />
                        <div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Specialization</div>
                          <div className="font-bold text-gray-900 dark:text-white">Frontend / React JS Development</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl">
                        <Zap className="w-12 h-12 text-purple-600" />
                        <div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Focus</div>
                          <div className="font-bold text-gray-900 dark:text-white">Performance, UX and Logic</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-600/10 to-red-600/10 rounded-2xl">
                        <TrendingUp className="w-12 h-12 text-pink-600" />
                        <div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Approach</div>
                          <div className="font-bold text-gray-900 dark:text-white">Scalable Solutions & Critical Thinking</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-slate-700">
                      {achievements.slice(0, 4).map((achievement, idx) => (
                        <div key={idx} className="text-center p-4 bg-white/50 dark:bg-slate-900/50 rounded-xl relative overflow-hidden">
                          <div className="absolute inset-0">
                            <img src={achievement.image} alt={achievement.label} className="w-full h-full object-cover" />
                          </div>
                          <div className='absolute inset-0 w-full h-full bg-black/60'></div>
                          <div className="relative z-10">
                            <div className="text-3xl font-black bg-white bg-clip-text text-transparent">
                              {achievement.value}
                            </div>
                            <div className="text-xs md:text-sm font-semibold text-white dark:text-gray-400 mt-1">
                              {achievement.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          >
        <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full border border-blue-600/20 dark:border-blue-600/30">
                  <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">About Me</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white  mb-4">
                Turning Ideas Into
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">
                  Digital Reality
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                A passionate developer who loves creating seamless user experiences
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Code2 className="w-8 h-8" />,
                  title: 'Clean Code',
                  description: 'Writing maintainable, scalable code following industry best practices and design patterns.',
                  gradient: 'from-blue-600 to-cyan-600'
                },
                {
                  icon: <Layers className="w-8 h-8" />,
                  title: 'Modern Stack',
                  description: 'Leveraging cutting-edge technologies like React, TypeScript, Next.js, and Tailwind CSS.',
                  gradient: 'from-purple-600 to-pink-600'
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Performance',
                  description: 'Optimizing every millisecond with code splitting, lazy loading, and efficient algorithms.',
                  gradient: 'from-orange-600 to-red-600'
                }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-slate-700/50 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                  <div className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-xl text-white mb-4 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-white/70 to-white/40 dark:from-slate-800/70 dark:to-slate-900/40 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/50">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    My Journey in Web Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    With over 5 years of professional experience, I've had the privilege of working with startups, 
                    agencies, and enterprise companies. My passion lies in building products that not only look 
                    amazing but also solve real problems.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    I believe in continuous learning and staying ahead of the curve. Whether it's mastering a new 
                    framework, optimizing performance, or mentoring junior developers, I'm always pushing boundaries.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {['React', 'JavaScript', 'Tailwind', 'Next.js', 'Node.js', 'HTML', 'CSS'].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-300 border border-blue-600/20 dark:border-blue-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-slate-700/50 text-center hover:scale-105 transition-transform duration-300"
                    >
                      <div className="inline-flex p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl text-white mb-4">
                        {achievement.icon}
                      </div>
                      <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        {achievement.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          >
        <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-600/20 dark:to-pink-600/20 rounded-full border border-purple-600/20 dark:border-purple-600/30">
                  <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">Technical Expertise</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                Skills & Technologies
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Constantly evolving toolkit for building modern web applications
              </p>
            </div>

            <div className="space-y-12">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 capitalize">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, idx) => (
                      <div
                        key={idx}
                        className="group relative bg-slate-50 dark:bg-slate-800/30 backdrop-blur-sm rounded-xl px-4 py-3 border border-slate-100/50 dark:border-slate-700/30 hover:border-slate-200/50 dark:hover:border-slate-600/30 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`inline-flex p-2 bg-gradient-to-br ${skill.color} rounded-lg text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                            {skill.icon}
                          </div>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          >
        <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600/10 to-orange-600/10 dark:from-pink-600/20 dark:to-orange-600/20 rounded-full border border-pink-600/20 dark:border-pink-600/30">
                  <Layers className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  <span className="text-sm font-semibold text-pink-600 dark:text-pink-400">Portfolio</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                A showcase of my recent work and creative solutions. And some of projects
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {projects.filter(p => p.featured).map((project, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-white/10 dark:border-slate-700/30"
                >
                  <div className={`relative h-64 overflow-hidden`}>
                    {project.image && (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/90 transform group-hover:scale-110 transition-transform duration-500">
                        <Code2 className="w-24 h-24" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/30">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.live}
                        className="w-full group/btn flex items-center justify-center gap-2 px-3 md:px-6 py-1 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-5 h-5 group-hover/btn:rotate-45 transition-transform duration-300" />
                        View
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-white/10 dark:border-slate-700/30 hover:-translate-y-1"
                >
                  <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code2 className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded text-xs font-semibold text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      <a href={project.live} className="w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          >
        <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent via-purple-50/50 to-transparent dark:via-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600/10 to-teal-600/10 dark:from-green-600/20 dark:to-teal-600/20 rounded-full border border-green-600/20 dark:border-green-600/30">
                  <Briefcase className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">Education & Career Path</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                Work Experience
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                My professional journey and key accomplishments
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600"></div>

              <div className="space-y-8 md:space-y-16">
                {experiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-8 ${
                      idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot - Mobile */}
                    <div className="flex md:hidden absolute left-0 top-0 w-8 h-8 bg-white dark:bg-slate-800 rounded-full items-center justify-center shadow-lg border-4 border-slate-100 dark:border-slate-700 z-10">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    </div>
                    
                    {/* Timeline Dot - Desktop */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full items-center justify-center shadow-lg border-4 border-slate-100 dark:border-slate-700 z-10">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="flex md:hidden w-full pl-12">
                      <div className="w-full">
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700">
                            {exp.period}
                          </span>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:-translate-y-1">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg text-white flex-shrink-0">
                              {exp.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {exp.title}
                              </h3>
                              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                                {exp.company}
                              </p>
                              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {exp.description}
                              </p>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            {exp.achievements.map((achievement, achIdx) => (
                              <div key={achIdx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex w-full">
                      <div className={`flex-1 ${idx % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <div className="inline-block">
                          <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium mb-4 border border-slate-200 dark:border-slate-700">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="bg-slate-50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:-translate-y-1">
                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                              {exp.company}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                              {exp.description}
                            </p>
                          </div>
                          
                          <div className="space-y-2">
                            {exp.achievements.map((achievement, achIdx) => (
                              <div key={achIdx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>

        {/* Resume Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          >
        <section id="resume" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
              <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 text-center space-y-4 sm:space-y-6">
                  <div className="inline-flex p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                    <Download className="w-8 sm:w-10 md:w-12 h-8 sm:w-10 md:w-12 text-white" />
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                    Download My Resume
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed px-4">
                    Get a comprehensive overview of my skills, experience, projects, and achievements in a beautifully designed PDF format.
                  </p>
                  
                  <div className="pt-2 sm:pt-4">
                    <button className="group/download inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-blue-600 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-white/50 transform hover:-translate-y-1 transition-all duration-300">
                      <Download className="w-5 h-5 sm:w-6 sm:h-6 group-hover/download:animate-bounce" />
                      Download CV
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/download:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  <div className="pt-4 sm:pt-8 flex justify-center gap-4 sm:gap-8 text-white/80">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold">PDF</div>
                      <div className="text-xs sm:text-sm">Format</div>
                    </div>
                    <div className="w-px bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold">2MB</div>
                      <div className="text-xs sm:text-sm">Size</div>
                    </div>
                    <div className="w-px bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold">2024</div>
                      <div className="text-xs sm:text-sm">Updated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          >
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600/10 to-red-600/10 dark:from-orange-600/20 dark:to-red-600/20 rounded-full border border-orange-600/20 dark:border-orange-600/30">
                  <Mail className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">Get In Touch</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                Let's Work Together
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Have a project in mind? Let's create something amazing together
              </p>
            </div>

            <div className="flex items-center justify-center">
              {/* Contact Info */}
              <div className="w-full lg:w-2/3 space-y-6">
                <div className="bg-gradient-to-br from-white/70 to-white/40 dark:from-slate-800/70 dark:to-slate-900/40 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 dark:border-slate-700/50 text-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {[
                      // { icon: <Phone className="w-6 h-6" />, label: 'Mobile No.', value: '+91 9924060875', href: 'tel:+91 9924060875' },
                      { 
                        icon: <Mail className="w-6 h-6" />, 
                        label: 'Email', 
                        value: 'rohitmahale0020@gmail.com', 
                        href: 'mailto:rohitmahale0020@gmail.com',
                        chip: 'rohit mahale - Email'
                      },
                      { 
                        icon: <FaLinkedin className="w-6 h-6" />, 
                        label: 'LinkedIn', 
                        value: 'linkedin.com/in/RohitMahale', 
                        href: 'https://linkedin.com/in/rohitmahale07',
                        chip: 'rohit mahale - LinkedIn'
                      }
                    ].map((contact, idx) => (
                      <a
                        key={idx}
                        href={contact.href}
                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/50 dark:bg-slate-900/50 rounded-xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-300 group border border-gray-200/50 dark:border-slate-700/50 relative"
                      >
                        {contact.chip && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 shadow-lg">
                            {contact.chip}
                          </div>
                        )}
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                          {contact.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">{contact.label}</div>
                          <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{contact.value}</div>
                        </div>
                        
                      </a>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          >
        <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border-t border-gray-200/50 dark:border-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {'<Rohit Mahale/>'}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Crafting digital experiences with passion.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="flex gap-3 sm:gap-4">
                  {[
                    { 
                      icon: <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />, 
                      href: 'https://github.com/rohitmahale07',
                      chip: 'rohit mahale - Github'
                    },
                    { 
                      icon: <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />, 
                      href: 'https://linkedin.com/in/RohitMahale',
                      chip: 'rohit mahale - LinkedIn'
                    },
                    { 
                      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, 
                      href: 'mailto:rohitmahale0020@gmail.com',
                      chip: 'rohit mahale - Email'
                    }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="group relative p-2 sm:p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-gray-700 dark:text-gray-300 hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      {social.icon}
                      {social.chip && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                          {social.chip}
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} Rohit Mahale</p>
                <p>Built with React, JavaScript & Tailwind CSS</p>
              </div>
            </div>
          </div>
        </footer>
        </motion.div>
        
        {/* WhatsApp Button */}
        {/* <a
          href="https://wa.me/919924060875"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center backdrop-blur-xl bg-opacity-90 z-50"
          aria-label="Contact on WhatsApp"
        >
          <img 
            src={WhatsAppLogo} 
            alt="WhatsApp" 
            className="w-8 h-8 object-contain filter brightness-0 invert"
          />
        </a> */}
     
      <FloatingCTA />
     
     
     
      </div>
    </div>
   </motion.div>
  </AnimatePresence>
  );
}