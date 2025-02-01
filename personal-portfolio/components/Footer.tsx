import { Code2, Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Link from 'next/link'

const navigation = {
  codding: [
    { name: 'Codeforces', href: '/' },
    { name: 'Codechef', href: '/' },
    { name: 'Leetcode', href: '/' },
    { name: 'Stopstalk', href: '/' },
    { name: 'Hackkerank', href: '/' },
  ],
  main: [
    { name: 'Blog', href: '/blog' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/coderskamrul',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/coderskamrul/',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://x.com/CodersKamrul',
      icon: Twitter,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/CodersKamrul/',
      icon: Facebook,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 m-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="h-8 w-8" />
              <span className="font-bold text-xl">Portfolio</span>
            </Link>
            <p className="text-muted-foreground text-justify">
            I have solved 1,500+ problems focused on Data Structures and Algorithms (DSA) and Object-Oriented Programming (OOP). I have actively participated in national and international programming contests, including the prestigious ACM ICPC, achieving recognition as an ICPC Asia West Finalist in 2023.            </p>
          </div>

       

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Judge Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigation.codding.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

             {/* Contact Info */}
             <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>mdkamrul2058@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+880 1635499809</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Uttara, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-primary"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}