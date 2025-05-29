'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Tentang Kami', path: '/#tentang' },
    { name: 'Layanan Hukum', path: '/#layanan' },
    { name: 'Klien Kami', path: '/#klien' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router]);

  return (
    <nav className="w-full z-50 transition-all md:px-24 ">
      <div className="lg:container mx-auto p-6 ">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/images/LOGO.png" width={200} height={100} alt='Kawan Legal' />
          </Link>


          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  href={item.path}
                  className={`${isScrolled ? 'text-black' : 'text-black'} font-reguler transition-colors hover-underline-animation`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link href="/#footer">
                <div className="bg-red px-8 py-2 rounded-md">
                    <p className='text-white'>Kontak kami</p>
                </div>
            </Link>
          </div>

          <button 
            className="md:hidden p-2 flex flex-col justify-center items-center"
            aria-label='hamburger'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span 
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }`} >
            </span>
            <span 
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} >
            </span>
            <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
              ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
            </span>  
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="flex flex-col px-2 md:hidden my-4 space-y-4 transition-all duration-500 ease-out">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isScrolled ? 'text-black' : 'text-black'} font-medium transition-colors hover-underline-animation`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}