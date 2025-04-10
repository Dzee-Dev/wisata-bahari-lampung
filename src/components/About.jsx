import { Helmet } from "react-helmet";

const About = () => {

    return (
    <>
    <Helmet>
        <title>Tentang Kami - Wisata Bahari Lampung</title>
        <meta name="description" content="Wisata Bahari Lampung adalah penyedia layanan tour guide pantai profesional di Lampung. Temukan siapa kami dan visi misi kami." />
        <meta property="og:title" content="Tentang Kami - Wisata Bahari Lampung" />
        <meta property="og:description" content="Kenali lebih dekat tim tour guide terpercaya dari Lampung." />
        <meta property="og:image" content="https://yourdomain.com/assets/images/about-cover.jpg" />
        <meta property="og:url" content="https://yourdomain.com/about" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Wisata Bahari Lampung",
              "url": "https://yourdomain.com/about",
              "logo": "https://yourdomain.com/assets/images/logo.png",
              "description": "Wisata Bahari Lampung menyediakan tour guide profesional dan pengalaman wisata bahari terbaik di Lampung.",
              "foundingDate": "2020-01-01",
              "founders": [{
                "@type": "Person",
                "name": "Nama Pendiri"
              }],
              "location": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Lampung",
                  "addressCountry": "ID"
                }
              }
            }
          `}
        </script>
    </Helmet>
    
      <section id="about" className="py-20 px-6 bg-tropical-blue text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-pacifico drop-shadow-md">
            Tentang Kami
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
            Wisata Bahari adalah penyedia layanan tour guide lokal yang berdedikasi untuk
            memberikan pengalaman terbaik menjelajahi keindahan alam pantai tropis. Kami percaya
            bahwa perjalanan tak hanya soal tempat, tapi juga tentang cerita, budaya, dan koneksi
            dengan masyarakat lokal.
          </p>
        </div>
      </section>

      </>
    );
  };
  
  export default About;
  