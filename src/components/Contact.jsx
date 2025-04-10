import { Helmet } from "react-helmet";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToTelegram = async () => {
    const botToken = "7848633507:AAEiz0UlLBfuX-gmFLgdFZKE_yJ3ZmU9L3k"; // Ganti dengan milikmu
    const chatId = "1044646698"; // Pastikan ini ID kamu, awali "-" jika grup

    const text = `📩 Pesan Baru dari Website Wisata Bahari Lampung\n\n👤 Nama: ${form.nama}\n📧 Email: ${form.email}\n📝 Pesan: ${form.pesan}`;

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Email tidak valid.");
      return;
    }

    try {
      setLoading(true);
      await sendToTelegram();
      alert("Pesan berhasil dikirim ke Telegram!");
      setForm({ nama: "", email: "", pesan: "" });
    } catch (err) {
      console.error(err);
      alert("Gagal mengirim pesan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Kontak Kami - Wisata Bahari Lampung</title>
        <meta
          name="description"
          content="Hubungi Wisata Bahari Lampung untuk reservasi, informasi paket wisata, atau pertanyaan lainnya."
        />
        <meta property="og:title" content="Kontak Kami - Wisata Bahari Lampung" />
        <meta
          property="og:description"
          content="Hubungi kami untuk informasi wisata atau pemesanan tour guide."
        />
        <meta
          property="og:image"
          content="https://dzee-dev.github.io/wisata-bahari-lampung/assets/images/contact-cover.jpg"
        />
        <meta property="og:url" content="https://dzee-dev.github.io/wisata-bahari-lampung/contact" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "Wisata Bahari Lampung",
                "url": "https://dzee-dev.github.io/wisata-bahari-lampung/contact",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+6281234567890",
                  "contactType": "Customer Service",
                  "areaServed": "ID",
                  "availableLanguage": ["Indonesian", "English"]
                }
              }
            }
          `}
        </script>
      </Helmet>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 font-pacifico text-tropical-blue">
            Hubungi Kami
          </h2>

          <p className="text-gray-600 mb-8">
            Tertarik dengan layanan kami? Isi formulir di bawah ini dan kami akan segera menghubungi Anda!
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nama"
              placeholder="Nama Anda"
              value={form.nama}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-tropical-green"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-tropical-green"
            />
            <textarea
              name="pesan"
              rows="5"
              placeholder="Pesan"
              value={form.pesan}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-tropical-green"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-tropical-green text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-emerald-600 transition duration-300 disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "Kirim Pesan"}
            </button>
          </form>
        </div>

        <div className="w-full h-96 mt-6 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Lokasi Wisata Bahari Lampung"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952.34576075296!2d105.3527351!3d-5.6408395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e409b7352d0b2b7%3A0x6e71e4ce63228bc5!2sPantai%20Ketapang%20Lampung!5e0!3m2!1sid!2sid!4v1712722055533!5m2!1sid!2sid"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
