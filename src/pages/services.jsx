import Services from '@/components/Services';
import { Helmet } from 'react-helmet';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Layanan Wisata - Wisata Bahari Lampung</title>
        <meta name="description" content="Pilih layanan wisata bahari kami seperti tour pantai, snorkeling, dan paket wisata keluarga di Lampung." />
        <meta property="og:title" content="Layanan Wisata - Wisata Bahari Lampung" />
        <meta property="og:description" content="Layanan lengkap untuk perjalanan Anda di Lampung." />
        <meta property="og:url" content="https://wisata-bahari-lampung.vercel.app/services" />
      </Helmet>
      <Services />
    </>
  );
}
