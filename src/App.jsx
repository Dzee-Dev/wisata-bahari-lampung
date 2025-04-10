import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>Wisata Bahari Lampung - Tour Guide Pantai Terbaik</title>
        <meta name="description" content="Nikmati tour pantai eksotis di Lampung bersama Wisata Bahari Lampung. Layanan guide profesional & ramah wisatawan lokal maupun mancanegara." />
        <meta name="keywords" content="wisata lampung, tour guide lampung, pantai lampung, wisata bahari, trip pantai, travel guide lampung" />
        <meta name="author" content="Wisata Bahari Lampung" />

        {/* OG Meta untuk share ke sosial media */}
        <meta property="og:title" content="Wisata Bahari Lampung - Tour Guide Pantai Terbaik" />
        <meta property="og:description" content="Eksplor keindahan pantai Lampung bersama guide profesional. Booking sekarang!" />
        <meta property="og:image" content="https://yourdomain.com/assets/images/og-cover.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wisata Bahari Lampung" />
        <meta name="twitter:description" content="Nikmati keindahan pantai di Lampung bareng guide lokal!" />
        <meta name="twitter:image" content="https://yourdomain.com/assets/images/og-cover.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/assets/images/favicon.png" type="image/png" />
      </Helmet>

      <Navbar />
      <main className="pt-20"> {/* kasih padding buat offset navbar */}
        <section id="hero">
          <Hero />
        </section>
        <section id="about" className="pt-20">
          <About />
        </section>
        <section id="services" className="pt-20">
          <Services />
        </section>
        <section id="gallery" className="pt-20">
          <Gallery />
        </section>
        <section id="contact" className="pt-20">
          <Contact />
        </section>
        <section id="footer" className="pt-20">
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
