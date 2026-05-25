import React from 'react'
import { footerLinks, socialLinks } from '../assets/assets';

export const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer className='py-12 border-t border-border'>
        <div className='container mx-auto px-6'>
            <div className='flex flex-col md:flex-row items-center justify-between 
            gap-8'>
                {/* Logo & Copyright */}
                <div className='text-center md:text-left'>
                    <a href="#" className='text-xl font-bold tracking-tighter'>
                        PM <span className='text-primary'>.</span>
                    </a>
                    <p className='text-sm text-muted-foreground mt-2'>
                        © {currentYear} Emmanuel Junior. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Links */}
            <nav className='flex flex-wrap justify-center gap-8'>
                {footerLinks.map((link) => (
                    <a 
                        key={link.href}
                        href={link.href}
                        className='text-sm text-muted-foreground 
                        hover:text-foreground transition-colors'
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            {/* Social Links */}
            <div className='flex items-center gap-4'>
                {socialLinks.map((social) => (
                    <a 
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className='p-2 rounded-full glass hover:bg-primary/10 
                        hover:text-primary transition-all'
                    >
                        <social.icon className='w-5 h-5' />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}
