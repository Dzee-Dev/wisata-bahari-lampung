import About from '@/components/About';
import { Helmet } from 'react-helmet';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Tentang Kami - Wisata Bahari Lampung</title>
        <meta name="description" content="Pelajari lebih lanjut tentang Wisata Bahari Lampung, tour guide lokal terpercaya untuk perjalanan wisata di Lampung." />
        <meta property="og:title" content="Tentang Kami - Wisata Bahari Lampung" />
        <meta property="og:description" content="Kenali tim dan visi dari Wisata Bahari Lampung." />
        <meta property="og:url" content="https://wisata-bahari-lampung.vercel.app/about" />
      </Helmet>
      <About />
    </>
  );
}
