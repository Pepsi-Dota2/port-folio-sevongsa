"use client"
import { useState, useEffect } from 'react';
import { Code, Briefcase, Mail, Github, Linkedin, Award, BookOpen, ChevronDown, Phone, Languages } from 'lucide-react';

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 80 },
        { name: 'Node.js', level: 40 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 70 },
        { name: 'flutter', level: 80 },
        { name: 'bloc + cubit state manegement', level: 80 },
        { name: 'Chat GPT', level: 100 },
        { name: 'Git hub coplilot', level: 100 },
    ];

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack online store',
            tech: ['React', 'Node.js', 'PostgreSQL', 'redux', 'medusa Js'],
            image: '🛍️'
        },
        {
            title: 'CF Manager App',
            description: 'A collaborative project management platform featuring real-time task updates, team coordination tools, and seamless workflow tracking.',
            tech: ['React.Ts', 'PostgreSQL', 'WebSocket'],
            image: '📋'
        },
        {
            title: 'Garbage Collection App',
            description: 'A mobile application for managing and tracking garbage collection schedules, including payment integration and user role management. Developed as a college graduation project.',
            tech: ['Flutter', 'Bloc + Cubit', 'Firebase'],
            image: '🚛'
        }
    ];

    const experience = [
        {
            role: 'Frontend Developer',
            company: 'Tech Company',
            period: '2024',
            description: 'intern ship and working on various front-end projects using Flutter'
        },
        {
            role: 'Frontend Developer',
            company: 'Tech Company',
            period: '2025',
            description: 'Developer front-end  CF Manager application using React and TypeScript'
        },
        {
            role: 'Full stack Developer',
            company: 'Tech Company',
            period: '2025',
            description: 'Developer front-end  and back-end  E-commerce application using Medusa Js , React , next js and PostgreSQL + prisma'
        }
    ];

    const scrollToSection = (sectionId: any) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert('Message sent! (This is a demo)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-black dark:text-white">SI</h1>
                    <div className="flex gap-8">
                        {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`capitalize hover:text-yellow-400 transition-colors ${activeSection === item ? 'text-yellow-400' : 'text-gray-600 dark:text-gray-300'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="h-screen pt-16">
                <div className="flex h-[70%] px-8 md:px-20 lg:px-32">
                    <div
                        className={`w-full md:w-[60%] mx-auto flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                            }`}
                    >
                        <div
                            className={`w-full  mx-auto flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                                }`}
                            style={{
                                backgroundImage: "url('/test.png')",
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                maxHeight: '1500px',
                                height: '100%',
                                minHeight: '800px',
                            }}

                        >
                            <div className="grid grid-cols-1 items-center justify-center">
                                <Code
                                    size={80}
                                    className={`text-yellow-400 mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-180'
                                        }`}
                                />
                                <h1
                                    className={`text-black dark:text-white text-5xl md:text-6xl font-bold transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                        }`}
                                >
                                    Sevongsa
                                </h1>
                                <h1
                                    className={`text-black dark:text-white text-5xl md:text-6xl font-bold transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                        }`}
                                >
                                    Invongthep.
                                </h1>
                                <div
                                    className={`border-b-4 border-yellow-400 pt-5 transition-all duration-700 delay-500 ${isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'
                                        }`}
                                />
                                <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">Full Stack Developer</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`hidden md:flex w-[40%] mx-auto flex-col justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                            }`}
                    >
                        <h1 className="text-black dark:text-gray-400 font-medium">- introduction</h1>
                        <h1 className="text-2xl font-medium text-black dark:text-white pt-4">
                            Developer based in Thong phan thrng, Laos. <br />
                            I create websites, applications, and everything in between.
                        </h1>
                        <p className="pt-5 text-black dark:text-gray-400 leading-relaxed">
                            I believe great results come from curiosity, dedication, and clear communication.
                            I enjoy turning ideas into real, practical solutions while maintaining a strong focus
                            on quality and user experience.
                        </p>
                    </div>
                </div>

                <div className="relative z-50 h-[30%] bg-gray-100 dark:bg-[#708993] grid grid-cols-1 md:grid-cols-2 gap-4 px-8 md:px-20 lg:px-32 items-center">
                    <div>
                        <h1 className="text-black dark:text-gray-300 font-bold">- Contact</h1>
                        <h1 className="text-2xl font-bold text-black dark:text-gray-300 pt-4">
                            Any Type of Query & Discussion
                        </h1>
                    </div>
                    <div>
                        <p className="mt-4 text-black font-bold text-base dark:text-gray-200 leading-relaxed">
                            You can't use up creativity,<br />
                            the more you use, the more you have <br />
                            in your significant mind.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="text-gray-400" size={32} />
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen py-20 px-8 md:px-20 lg:px-32 bg-gray-50 dark:bg-gray-800">
                <h2 className="text-4xl font-bold text-black dark:text-white mb-12">About Me</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            I'm a passionate developer with a keen eye for creating elegant solutions to complex problems.
                            With years of experience in web development, I specialize in building responsive, user-friendly
                            applications that make a difference.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            My journey in tech started with curiosity and has grown into a career I'm truly passionate about.
                            I'm constantly learning new technologies and best practices to deliver exceptional results.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <Award className="text-yellow-400 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-black dark:text-white">Quick Learner</h3>
                                <p className="text-gray-600 dark:text-gray-400">Fast at picking up new technologies and concepts</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Code className="text-yellow-400 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-black dark:text-white">AI Enthusiast</h3>
                                <p className="text-gray-600 dark:text-gray-400">Exploring machine learning and AI technologies - GDG DevFest participant</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <BookOpen className="text-yellow-400 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-black dark:text-white">Continuous Learner</h3>
                                <p className="text-gray-600 dark:text-gray-400">Always exploring new technologies</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Briefcase className="text-yellow-400 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-black dark:text-white">Team Player</h3>
                                <p className="text-gray-600 dark:text-gray-400">Collaborative and eager to contribute</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Languages className="text-yellow-400 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-black dark:text-white">Language</h3>
                                <p className="text-gray-600 dark:text-gray-400">English beginner </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="min-h-screen py-20 px-8 md:px-20 lg:px-32 bg-white dark:bg-gray-900">
                <h2 className="text-4xl font-bold text-black dark:text-white mb-12">Skills & Technologies</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index}>
                            <div className="flex justify-between mb-2">
                                <span className="text-lg font-medium text-black dark:text-white">{skill.name}</span>
                                <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                <div
                                    className="bg-yellow-400 h-3 rounded-full transition-all duration-1000"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen py-20 px-8 md:px-20 lg:px-32 bg-gray-50 dark:bg-gray-800">
                <h2 className="text-4xl font-bold text-black dark:text-white mb-12">Featured Projects</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="text-6xl mb-4">{project.image}</div>
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-yellow-400/20 text-yellow-600 dark:text-yellow-400 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="min-h-screen py-20 px-8 md:px-20 lg:px-32 bg-white dark:bg-gray-900">
                <h2 className="text-4xl font-bold text-black dark:text-white mb-12">Experience & Learning</h2>
                <div className="space-y-8">
                    {experience.map((exp, index) => (
                        <div key={index} className="border-l-4 border-yellow-400 pl-6">
                            <h3 className="text-2xl font-bold text-black dark:text-white">{exp.role}</h3>
                            <p className="text-lg text-yellow-600 dark:text-yellow-400 mb-2">{exp.company}</p>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">{exp.period}</p>
                            <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen py-20 px-8 md:px-20 lg:px-32 bg-gray-50 dark:bg-gray-800">
                <h2 className="text-4xl font-bold text-black dark:text-white mb-12">Get In Touch</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Mail className="text-yellow-400" size={24} />
                                <span className="text-black dark:text-white">sevongsa invongthepl@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-yellow-400" size={24} />
                                <span className="text-black dark:text-white">97973029 - 57398879</span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 text-center">
                <p>© 2024 Sevongsa Invongthep. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Portfolio;