import Gallery from '@/components/Gallery';
import { Helmet } from 'react-helmet';

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Galeri Wisata - Wisata Bahari Lampung</title>
        <meta name="description" content="Lihat dokumentasi perjalanan wisata kami di Lampung. Foto-foto pantai dan aktivitas seru lainnya." />
        <meta property="og:title" content="Galeri Wisata - Wisata Bahari Lampung" />
        <meta property="og:description" content="Galeri dokumentasi wisata pantai di Lampung." />
        <meta property="og:url" content="https://wisata-bahari-lampung.vercel.app/gallery" />
      </Helmet>
      <Gallery />
    </>
  );
}
