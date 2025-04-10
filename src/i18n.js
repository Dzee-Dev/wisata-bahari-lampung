import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  id: {
    translation: {
      welcome: 'Selamat Datang di Wisata Bahari Lampung',
      description: 'Nikmati keindahan alam bahari Lampung bersama kami!',
      bookNow: 'Pesan Sekarang',
      contact: 'Kontak',
      gallery: 'Galeri',
      services: 'Layanan',
      about: 'Tentang Kami'
    }
  },
  en: {
    translation: {
      welcome: 'Welcome to Wisata Bahari Lampung',
      description: 'Enjoy the beauty of Lampung’s sea tourism with us!',
      bookNow: 'Book Now',
      contact: 'Contact',
      gallery: 'Gallery',
      services: 'Services',
      about: 'About Us'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'id',
  fallbackLng: 'id',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
