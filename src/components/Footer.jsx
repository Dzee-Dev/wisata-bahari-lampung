const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Wisata Bahari Lampung</h2>
            <p className="text-sm">Nikmati pengalaman wisata bahari terbaik di Lampung bersama kami.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Kontak</h3>
            <p className="text-sm">Jl. Ketapang Bahari No. 12, Lampung</p>
            <p className="text-sm">📞 0812-3456-7890</p>
            <p className="text-sm">📧 info@baharilampung.id</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Ikuti Kami</h3>
            <div className="flex gap-3 mt-2">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-pink-400">Instagram</a>
              <a href="#" className="hover:text-sky-400">Twitter</a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-8 border-t border-white/20 pt-4">
          &copy; {new Date().getFullYear()} Wisata Bahari Lampung. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  