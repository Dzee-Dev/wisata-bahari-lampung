const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/tropical-hero.jpg')" }}
    >
      {/* Overlay gradasi */}
      <div className="bg-gradient-to-br from-tropical-green/70 to-tropical-blue/60 absolute inset-0 backdrop-blur-sm"></div>

      {/* Konten Utama */}
      <div className="relative z-10 text-white text-center p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-pacifico drop-shadow-2xl leading-tight">
          Selamat Datang di <br /> <span className="text-tropical-yellow">Wisata Bahari Lampung</span>
        </h1>
        <p className="text-lg md:text-xl font-medium mb-8 drop-shadow-md">
          Eksplorasi keindahan pantai eksotis bersama tour guide lokal yang berpengalaman dan ramah.
        </p>
        <a
          href="https://wa.me/62895609931196?text=Halo%20Wisata%20Bahari%20Lampung%2C%20saya%20ingin%20booking%20tour!%20Bisa%20bantu%20saya%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-tropical-yellow text-black px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-yellow-400 transition duration-300 hover:scale-105"
        >
          Pesan Sekarang
        </a>
      </div>
    </section>
  );
};

export default Hero;
