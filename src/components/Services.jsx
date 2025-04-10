import { Helmet } from "react-helmet";

const services = [
    {
      title: "Tour Pantai Pribadi",
      desc: "Nikmati keindahan pantai tersembunyi dengan pemandu pribadi lokal.",
      icon: "🌅",
      color: "bg-tropical-yellow",
    },
    {
      title: "Snorkeling & Diving",
      desc: "Eksplorasi dunia bawah laut yang eksotis dan penuh warna.",
      icon: "🤿",
      color: "bg-tropical-green",
    },
    {
      title: "Wisata Budaya",
      desc: "Kunjungi desa-desa lokal dan alami tradisi khas masyarakat pantai.",
      icon: "🏝️",
      color: "bg-tropical-coral",
    },
  ];
  
  const Services = () => {

    return (
        // SEO Meta Tags
        <>
        <Helmet>
        <title>Layanan Wisata - Wisata Bahari Lampung</title>
        <meta name="description" content="Kami menyediakan layanan tour pantai, snorkeling, guide lokal, dan perjalanan wisata khusus untuk keluarga atau rombongan." />
        <meta property="og:title" content="Layanan Wisata - Wisata Bahari Lampung" />
        <meta property="og:description" content="Layanan lengkap untuk pengalaman wisata bahari Anda di Lampung." />
        <meta property="og:image" content="https://yourdomain.com/assets/images/services-cover.jpg" />
        <meta property="og:url" content="https://yourdomain.com/services" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Layanan Wisata Bahari Lampung",
              "provider": {
                "@type": "Organization",
                "name": "Wisata Bahari Lampung",
                "url": "https://yourdomain.com/services"
              },
              "serviceType": "Paket Wisata Bahari",
              "areaServed": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Lampung",
                  "addressRegion": "Lampung",
                  "addressCountry": "ID"
                }
              },
              "offers": {
                "@type": "OfferCatalog",
                "name": "Paket Wisata",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tour Pantai Pribadi",
                      "description": "Nikmati pantai dengan tour privat bersama guide profesional."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Snorkeling & Diving",
                      "description": "Jelajahi keindahan bawah laut Lampung dengan aman dan nyaman."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Paket Wisata Keluarga",
                      "description": "Liburan menyenangkan untuk keluarga lengkap dengan aktivitas seru."
                    }
                  }
                ]
              }
            }
          `}
        </script>
    </Helmet>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-pacifico text-tropical-green">
            Layanan Kami
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 shadow-lg text-white ${service.color} hover:scale-105 transform transition duration-300`}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-base font-medium">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
    );
  };
  
  export default Services;
  