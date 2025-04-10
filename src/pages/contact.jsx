import Contact from '@/components/Contact';
import { Helmet } from 'react-helmet';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Kontak Kami - Wisata Bahari Lampung</title>
        <meta name="description" content="Hubungi Wisata Bahari Lampung untuk pemesanan tour, informasi layanan, dan pertanyaan umum." />
        <meta property="og:title" content="Kontak Kami - Wisata Bahari Lampung" />
        <meta property="og:description" content="Kami siap membantu Anda merencanakan perjalanan wisata terbaik di Lampung." />
        <meta property="og:url" content="https://wisata-bahari-lampung.vercel.app/contact" />
      </Helmet>
      <Contact />
    </>
  );
}