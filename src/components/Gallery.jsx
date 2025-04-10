import { Helmet } from "react-helmet";

const galleryImages = [
    "/assets/images/gallery1.jpg",
    "/assets/images/gallery2.jpg",
    "/assets/images/gallery3.jpg",
    "/assets/images/gallery4.jpg",
    "/assets/images/gallery5.jpg",
    "/assets/images/gallery6.jpg",
  ];
  
  const Gallery = () => {

    return (
    <>
    <Helmet>
      <title>Galeri Wisata - Wisata Bahari Lampung</title>
      <meta
        name="description"
        content="Lihat momen-momen terbaik dari perjalanan wisata bersama Wisata Bahari Lampung. Dokumentasi tour pantai dan kegiatan lainnya."
      />
      <meta property="og:title" content="Galeri Wisata - Wisata Bahari Lampung" />
      <meta
        property="og:description"
        content="Kumpulan foto dan video perjalanan wisata di pantai Lampung."
      />
      <meta
        property="og:image"
        content="https://wisata-bahari-lampung.vercel.app/assets/images/gallery-cover.jpg"
      />
      <meta
        property="og:url"
        content="https://wisata-bahari-lampung.vercel.app/gallery"
      />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Galeri Wisata Bahari Lampung",
            "url": "https://wisata-bahari-lampung.vercel.app/gallery",
            "image": [
              "https://wisata-bahari-lampung.vercel.app/assets/gallery/img1.jpg",
              "https://wisata-bahari-lampung.vercel.app/assets/gallery/img2.jpg",
              "https://wisata-bahari-lampung.vercel.app/assets/gallery/img3.jpg"
            ],
            "description": "Kumpulan foto dan dokumentasi wisata bersama Wisata Bahari Lampung."
          }
        `}
      </script>
    </Helmet>


        
      <section id="gallery" className="py-20 px-6 bg-tropical-yellow">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-pacifico text-tropical-green">
            Galeri Keindahan
          </h2>
  
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-48 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      </>
    );
  };
  
  export default Gallery;
  