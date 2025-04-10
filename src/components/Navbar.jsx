import { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (

<>   
<Helmet>
  <title>Wisata Bahari Lampung - Tour Guide Pantai Terbaik</title>
  <meta
    name="description"
    content="Nikmati pengalaman wisata pantai terbaik di Lampung bersama tour guide lokal berpengalaman. Booking sekarang juga!"
  />
  <meta
    name="keywords"
    content="wisata lampung, tour guide lampung, pantai lampung, wisata bahari, trip pantai, travel guide lampung"
  />
  <meta name="author" content="Wisata Bahari Lampung" />

  <meta
    property="og:title"
    content="Wisata Bahari Lampung - Tour Guide Pantai Terbaik"
  />
  <meta
    property="og:description"
    content="Eksplor keindahan pantai di Lampung dengan tour guide lokal yang ramah dan berpengalaman."
  />
  <meta
    property="og:image"
    content="https://wisata-bahari-lampung.vercel.app/assets/images/og-cover.jpg"
  />
  <meta
    property="og:url"
    content="https://wisata-bahari-lampung.vercel.app"
  />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Wisata Bahari Lampung" />
  <meta
    name="twitter:description"
    content="Nikmati wisata bahari di Lampung yang tak terlupakan."
  />
  <meta
    name="twitter:image"
    content="https://wisata-bahari-lampung.vercel.app/assets/images/og-cover.jpg"
  />

  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Wisata Bahari Lampung",
        "url": "https://wisata-bahari-lampung.vercel.app",
        "logo": "https://wisata-bahari-lampung.vercel.app/assets/images/logo.png",
        "description": "Tour guide lokal terpercaya di Lampung untuk pengalaman wisata bahari terbaik.",
        "areaServed": {
          "@type": "Place",
          "name": "Lampung, Indonesia"
        }
      }
    `}
  </script>
</Helmet>


    <nav className="bg-white shadow-lg fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-3">
          <img src="/assets/images/logo.png" alt="Logo" className="h-10" />
          <h1 className="text-2xl font-pacifico text-tropical-green">WisataBahari Lampung</h1>
        </div>


        {/* Desktop Menu */}
        <Scrollspy
            items={['about', 'services', 'gallery', 'contact']}
            currentClassName="text-tropical-green font-semibold border-b-2 border-tropical-green"
            className="hidden md:flex space-x-8 text-gray-700 font-medium tracking-wide"
            offset={-100}
            >
            <li><a href="#about" className="hover:text-tropical-blue transition">Tentang</a></li>
            <li><a href="#services" className="hover:text-tropical-blue transition">Layanan</a></li>
            <li><a href="#gallery" className="hover:text-tropical-blue transition">Galeri</a></li>
            <li><a href="#contact" className="hover:text-tropical-blue transition">Kontak</a></li>
        </Scrollspy>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-7 h-7 text-tropical-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-2 text-gray-700 font-medium border-t border-gray-100">
          <li><a href="#about" className="block py-2 hover:text-tropical-blue">Tentang</a></li>
          <li><a href="#services" className="block py-2 hover:text-tropical-blue">Layanan</a></li>
          <li><a href="#gallery" className="block py-2 hover:text-tropical-blue">Galeri</a></li>
          <li><a href="#contact" className="block py-2 hover:text-tropical-blue">Kontak</a></li>
        </ul>
      )}
    </nav>
    </>
  );
};

export default Navbar;
