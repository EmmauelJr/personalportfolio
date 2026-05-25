import hero_bg from './hero_bg.jpg';
import profile_photo from './profile_photo.png';
import project1 from './project1.png';
import project2 from './project2.png'
import project3 from './project3.png'
import project4 from './project4.png'
import github from './github.png'
import whatsapp from './whatsapp.png'
import twitter from './twitter.png'
import telephone from './telephone.png'
import { Code2, Lightbulb, Mail, MapPin, Phone, Rocket, Users } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const assets = {
    hero_bg,
    profile_photo,
};

export const images = [
    { icon: github, href: '#'},
    { icon: whatsapp, href: '#'},
    { icon: twitter, href: '#'},
    { icon: telephone, href: '#'}
]

export const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonials", label: "Testimonials"},
];

export const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

export const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

export const skills = [
    {skill: 'React'},
    {skill: 'Node.js'},
    {skill: 'Typescript'},
    {skill: 'Tailwind CSS'},
    {skill: 'Express'},
    {skill: 'SQL'},
    {skill: 'Github'},
    {skill: 'HTML'},
    {skill: 'CSS'},
    {skill: 'Javascript'},
    {skill: 'Microsoft Office'},
];

export const highlights = [
    {
        icon: Code2,
        title: 'Clean Code',
        description: 
            'Writing maintainable, scalable code that stands the test of time.',
    },
    {
        icon: Rocket,
        title: 'Performance',
        description:
            'Optimizing for speed and delivering lightning-fast user experiences.'
    },
    {
        icon: Users,
        title: 'Collaboration',
        description:
            'Working closely with teams to bring ideas to life.',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description:
            'Staying ahead with the latest technologies and best practices.',
    },
];

export const projects = [
    {
        title: 'Velora Suites',
        description:
            'A modern luxury hotel offering elegantly designed rooms, exceptional comfort, and a refined stay experience for both relaxation and convenience.',
        image: project1,
        tags: ['React', 'Javascript', 'NodeJS', 'Clerk', 'React-dom', 'React-router-dom'],
        link: '#',
        github: '#',
    },
    {
        title: 'CodeFlow',
        description:
            'A developer-focused platform designed to streamline coding workflows, making it easier to build, manage, and scale projects efficiently.',
        image: project2,
        tags: ['React', 'Node.js', 'Typescript',],
        link: '#',
        github: '#',
    },
    {
        title: 'Agency.ai',
        description:
            'An AI-powered platform concept that brings marketing, analytics, and automation into one seamless experience, designed to simplify operations and support scalable business growth.',
        image: project3,
        tags: ['React', 'Motion', 'Picomatch', 'React-dom', 'React-hot-toast', 'tailwindcss'],
        link: '#',
        github: '#',
    },
    {
        title: 'QuickGPT',
        description: 
            'A fast, AI-powered assistance designed to deliver instant responses and streamline everyday tasks with speed and simplicity.',
        image: project4,
        tags: ['React', 'moment', 'prismjs', 'react-dom', 'react-icons', 'react-markdown', 'react-router-dom'],
        link: '#',
        github: '#',
    },
];

export const experiences = [
    {
        period: '2026 - Present',
        role: 'Intern - Backend Developer',
        company: 'Pacific Computer Center',
        description: 
            'Learning backend development, focusing on building server-side applications, working with APIs, and managing databases.',
        technologies: ['React', 'Node.js', 'SQL', 'Javascript', 'Express'],
        current: true,
    },
    {
        period: '2024 - Present',
        role: 'Student - Frontend Developer',
        company: 'Self-Employed',
        description: 
            'Designing and building responsive web interfaces with a focus on usability, performance, and clean UI.',
        technologies: ['React', 'Node.js', 'Typescript', 'Javascript', 'tailwindcss', 'HTML', 'CSS'],
        current: true,
    },
];

export const testimonials = [
    {
        quote:
            "Emmanuel Junior is one of the most talented developers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
        author: 'Richard Nelson',
        role: 'CTO, Tech Innovators Inc',
        avatar: 
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
        quote:
            "Working with Emmanuel Junior was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
        author: 'Michael Rodriguez',
        role: 'Product Manager, Digital Solutions',
        avatar: 
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
        quote:
            "Emmanuel Junior's expertise in React and Typescript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
        author: 'Emily Watson',
        role: 'Engineering Lead, Startup Labs',
        avatar: 
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    },
    {
        quote:
            "Not only is Emmanuel Junior technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
        author: 'David Kim',
        role: 'CEO, Innovation Hub',
        avatar: 
            "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200",
    },
    
];

export const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'emmanueljunior@example.com',
        href: 'mailto:emmanueljunior@example.com',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '(+234) 0123456789',
        href: 'tel:+2340123456789',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Calabar, Nigeria',
        href: '#',
    },
];

export const socialLinks = [
    {
        icon: FaGithub, href: '#', label: 'Github'
    },
    {
        icon: FaLinkedin, href: '#', label: 'Linkedin'
    },
    {
        icon: FaTwitter, href: '#', label: 'Twitter'
    },
];

export const footerLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#contact", label: "Contact"},
];