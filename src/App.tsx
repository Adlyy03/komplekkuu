import { useState } from 'react';
import {
  Shield,
  CreditCard,
  Bell,
  Users,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Phone,
  MessageSquare,
  Lock,
  Eye,
  Sliders,
  ChevronDown,
  Check,
  Star,
  Menu,
  X,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState<string>('pro');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRoleTab, setActiveRoleTab] = useState<'warga' | 'rt' | 'rw' | 'satpam' | 'dev'>('warga');

  const WHATSAPP_NUMBER = '628111234567'; // Nomor WhatsApp resmi admin/developer
  const getWaLink = (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans pb-16 md:pb-0">
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25">
              <Shield className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900">
                Komplek<span className="text-blue-600">ku</span>
              </span>
              <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                Smart Community
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#masalah-solusi" className="hover:text-blue-600 transition-colors">
              Mengapa Kami
            </a>
            <a href="#fitur" className="hover:text-blue-600 transition-colors">
              Fitur Unggulan
            </a>
            <a href="#peran" className="hover:text-blue-600 transition-colors">
              Akses Peran
            </a>
            <a href="#paket" className="hover:text-blue-600 transition-colors">
              Paket & Harga
            </a>
            <a href="#custom-request" className="hover:text-blue-600 transition-colors">
              Request Fitur
            </a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={getWaLink('Halo Admin Komplekku, saya ingin konsultasi dan coba demo aplikasinya.')}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Coba Demo</span>
            </a>

            {/* Hamburger Button for Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
            <a
              href="#masalah-solusi"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              Mengapa Komplekku
            </a>
            <a
              href="#fitur"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              Fitur Unggulan
            </a>
            <a
              href="#peran"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              Akses 5 Peran
            </a>
            <a
              href="#paket"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              Paket & Pilihan Harga
            </a>
            <a
              href="#custom-request"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              Request Fitur Kustom
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              Tanya Jawab (FAQ)
            </a>
            <div className="pt-2">
              <a
                href={getWaLink('Halo Admin Komplekku, saya ingin coba demo langsung.')}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-blue-600 text-white shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hubungi Kami via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center">
          <div className="w-[340px] sm:w-[650px] lg:w-[900px] h-[340px] bg-gradient-to-tr from-blue-100/80 via-indigo-50/60 to-transparent blur-3xl rounded-full mt-[-60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold tracking-wide mb-5 sm:mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Platform Komunitas & Keamanan Perumahan #1</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.2] sm:leading-[1.15]">
            Iuran Otomatis, Pos Satpam Terpantau, & Kas Transparan dalam{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
              Satu Aplikasi
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
            Tinggalkan pencatatan manual di buku kas dan grup WhatsApp yang berantakan. Komplekku
            menghubungkan <strong>Warga</strong>, <strong>Pengurus RT/RW</strong>, dan <strong>Satpam</strong> secara real-time
            dengan verifikasi transfer bank otomatis.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <a
              href="#paket"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 transition-all text-sm sm:text-base active:scale-95"
            >
              <span>Lihat Pilihan Paket</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={getWaLink('Halo, saya tertarik dengan Komplekku dan ingin konsultasi paket yang cocok.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all text-sm sm:text-base active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Konsultasi Cepat (WhatsApp)</span>
            </a>
          </div>

          {/* Quick Metrics Cards */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm text-left">
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <Zap className="w-5 h-5" />
                <span className="text-xl sm:text-2xl font-black">0 Menit</span>
              </div>
              <div className="text-xs font-semibold text-slate-500">Verifikasi Iuran Multi-Bank Otomatis</div>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm text-left">
              <div className="flex items-center gap-2 text-indigo-600 mb-1">
                <Clock className="w-5 h-5" />
                <span className="text-xl sm:text-2xl font-black">3 Shift</span>
              </div>
              <div className="text-xs font-semibold text-slate-500">Jadwal Jaga & SOS Satpam 24 Jam</div>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm text-left">
              <div className="flex items-center gap-2 text-emerald-600 mb-1">
                <Eye className="w-5 h-5" />
                <span className="text-xl sm:text-2xl font-black">100%</span>
              </div>
              <div className="text-xs font-semibold text-slate-500">Transparansi Kas Saldo RT & RW</div>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm text-left">
              <div className="flex items-center gap-2 text-purple-600 mb-1">
                <Sliders className="w-5 h-5" />
                <span className="text-xl sm:text-2xl font-black">Custom</span>
              </div>
              <div className="text-xs font-semibold text-slate-500">Bebas Request Fitur Sesuai SOP</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MASALAH VS SOLUSI (BEFORE & AFTER) */}
      <section id="masalah-solusi" className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              Evaluasi Lingkungan
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Cara Lama yang Melelahkan vs Solusi Komplekku
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Transformasi pengelolaan perumahan agar pengurus tidak stres dan warga merasa aman serta transparan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Box Cara Lama */}
            <div className="bg-red-50/60 rounded-3xl p-6 sm:p-8 border border-red-200/80">
              <div className="flex items-center gap-3 text-red-700 font-extrabold text-lg sm:text-xl mb-6">
                <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <span>Cara Konvensional (Bikin Ribet)</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Penagihan Pintu ke Pintu:</strong> Bendahara cape nagih, warga sering lupa atau sungkan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Kecurigaan Uang Kas:</strong> Laporan cuma setahun sekali, muncul syak wasangka antarwarga.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Buku Tamu Kertas:</strong> Identitas tamu tidak jelas, buku basah, data mudah hilang saat ada insiden.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Darurat Lambat:</strong> Teriak atau telepon grup WA saat maling/kebakaran yang lambat direspon satpam.</span>
                </li>
              </ul>
            </div>

            {/* Box Komplekku */}
            <div className="bg-emerald-50/60 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 shadow-sm">
              <div className="flex items-center gap-3 text-emerald-800 font-extrabold text-lg sm:text-xl mb-6">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <span>Dengan Komplekku (Otomatis & Tenang)</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 font-bold shrink-0 mt-0.5" />
                  <span><strong>Verifikasi Transfer Otomatis:</strong> Cek mutasi bank 24 jam dengan kode unik tanpa cek manual.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 font-bold shrink-0 mt-0.5" />
                  <span><strong>Buku Kas Live 24 Jam:</strong> Setiap rupiah masuk dan keluar terlihat oleh warga secara transparan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 font-bold shrink-0 mt-0.5" />
                  <span><strong>Buku Tamu Digital & QR Pass:</strong> Satpam catat tamu dalam 10 detik, verifikasi izin warga terhubung.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 font-bold shrink-0 mt-0.5" />
                  <span><strong>Tombol Panic SOS Cerdas:</strong> Sirine keras bergetar di HP satpam yang bertugas + lokasi rumah akurat.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FITUR UNGGULAN LENGKAP */}
      <section id="fitur" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              Fitur Lengkap Teruji
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Semua Kebutuhan Perumahan Modern dalam Satu Genggaman
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Dirancang khusus dari pengalaman nyata pengurus lingkungan di Indonesia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* 1. Iuran Otomatis */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <CreditCard className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                Otomatisasi Iuran & Tagihan
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Generate tagihan batch per RT atau KK. Dilengkapi kode unik otomatis yang mendeteksi transfer
                rekening bank pengurus tanpa perlu kirim foto struk.
              </p>
              <div className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg inline-block">
                ✓ Otomatis terbit kuitansi digital
              </div>
            </div>

            {/* 2. Pos Satpam 3 Shift */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Lock className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                Pos Satpam & Rotasi 3 Shift
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Sistem rotasi jaga 8 jam: Shift 1 Pagi (07-15), Shift 2 Sore (15-23), dan Shift 3 Malam (23-07).
                Lengkap dengan buku tamu digital dan data rumah kosong warga yang sedang mudik.
              </p>
              <div className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg inline-block">
                ✓ Sirine SOS hanya aktif di petugas On-Duty
              </div>
            </div>

            {/* 3. Panic SOS */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Bell className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                Tombol Panic SOS Darurat
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Warga dalam bahaya medis, kebakaran, atau ancaman kriminal cukup menekan 1 tombol. Alarm keras
                strobo langsung memandu petugas menuju koordinat nomor rumah pelapor.
              </p>
              <div className="text-xs font-semibold text-red-700 bg-red-50 px-3 py-1.5 rounded-lg inline-block">
                ✓ Navigasi peta & tombol telepon langsung
              </div>
            </div>

            {/* 4. Kas Keuangan RT/RW */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Eye className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                Buku Kas Transparan RT & RW
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Pemisahan rekening dan saldo kas antara RT dan tingkat RW. Setiap pengeluaran dicatat dengan
                kategori, foto nota, dan dapat dipantau bersama tanpa syak wasangka.
              </p>
              <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg inline-block">
                ✓ Filter dropdown wilayah & ekspor laporan
              </div>
            </div>

            {/* 5. Radar Pengaduan */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                Radar Pengaduan Lingkungan
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Foto fasilitas rusak, lampu mati, atau sampah liar. Laporan dipetakan dengan status penanganan
                jelas (Menunggu, Dikerjakan, Tuntas) serta sistem upvote warga sekitar.
              </p>
              <div className="text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg inline-block">
                ✓ Terhubung langsung ke pengurus RT
              </div>
            </div>

            {/* 6. Marketplace & Direktori Warga */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
                Marketplace UMKM & Chat Warga
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Dukung perputaran ekonomi tetangga dengan lapak jualan makanan dan jasa antar-komplek. Dilengkapi
                chat grup lingkungan yang bersih dari spam iklan.
              </p>
              <div className="text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-lg inline-block">
                ✓ Chat privat aman dengan tetangga
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MULTI-ROLE PREVIEW (AKSES 5 PILAR) */}
      <section id="peran" className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              Hak Akses Spesifik
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Satu Ekosistem, Disesuaikan untuk Setiap Peran
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Setiap pengguna login dengan tampilan yang dirancang khusus sesuai tugas dan tanggung jawabnya.
            </p>
          </div>

          {/* Role Tabs */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 max-w-3xl mx-auto pb-3 mb-8 justify-start sm:justify-center">
            {[
              { id: 'warga', label: 'Warga Hunian' },
              { id: 'rt', label: 'Ketua RT' },
              { id: 'rw', label: 'Ketua RW' },
              { id: 'satpam', label: 'Petugas Satpam' },
              { id: 'dev', label: 'Pengembang / Admin' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveRoleTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeRoleTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Role Tab Content Box */}
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10">
            {activeRoleTab === 'warga' && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase mb-2">Peran: Warga (Resident)</div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                    Mudah Bayar Iuran, Aman, & Kenal Tetangga
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Warga dapat cek tagihan bulanan langsung dari smartphone, membayar dalam hitungan detik,
                    melihat laporan kas RT secara terbuka, membuat izin tamu gerbang, serta memicu alarm darurat SOS jika terjadi hal darurat.
                  </p>
                  <ul className="text-xs sm:text-sm space-y-2 text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Login mudah cukup nomor WhatsApp / Nomor KK
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Kuitansi otomatis tersimpan di riwayat
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-xs space-y-3">
                  <div className="font-bold text-slate-900 border-b pb-2 flex justify-between">
                    <span>Menu Utama Warga</span>
                    <span className="text-blue-600">Mobile Responsive</span>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-900">
                    <strong>Tagihan Iuran:</strong> Otomatis lunas dengan kode unik tanpa upload struk.
                  </div>
                  <div className="p-3 bg-red-50 rounded-xl text-red-900">
                    <strong>Tombol SOS:</strong> Siaga 24 jam ke pos satpam terdekat.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl text-slate-700">
                    <strong>Buku Tamu:</strong> Buat PIN izin tamu untuk kerabat/kurir paket.
                  </div>
                </div>
              </div>
            )}

            {activeRoleTab === 'rt' && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase mb-2">Peran: Ketua RT</div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                    Otomasi Penagihan & Manajemen Warga RT
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Ketua dan Bendahara RT tidak perlu lagi mencatat di buku tulis. Cukup buat tagihan satu kali,
                    sistem otomatis mencatat siapa saja yang sudah lunas dan siapa yang menunggak.
                  </p>
                  <ul className="text-xs sm:text-sm space-y-2 text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Rekapitulasi kas masuk & keluar RT real-time
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Pengesahan pengaduan masalah fasilitas lingkungan
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-xs space-y-3">
                  <div className="font-bold text-slate-900 border-b pb-2 flex justify-between">
                    <span>Dashboard Pengurus RT</span>
                    <span className="text-indigo-600">RT Level Access</span>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-xl text-emerald-900">
                    <strong>Kas Saldo RT:</strong> Transparan ke seluruh warga RT bersangkutan.
                  </div>
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-900">
                    <strong>Generate Tagihan:</strong> Sekali klik untuk 50+ rumah sekaligus.
                  </div>
                </div>
              </div>
            )}

            {activeRoleTab === 'rw' && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase mb-2">Peran: Ketua RW / Paguyuban</div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                    Monitoring Agregat Seluruh RT & Kas Pusat
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Melihat kinerja iuran dari RT 01 hingga RT 10 secara komprehensif. Mengatur alokasi dana
                    kegiatan RW, koordinasi pos satpam induk, dan pengumuman tingkat kawasan.
                  </p>
                  <ul className="text-xs sm:text-sm space-y-2 text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Filter dan perbandingan keaktifan antar-RT
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Pengawasan operasional keamanan dan patroli satpam
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-xs space-y-3">
                  <div className="font-bold text-slate-900 border-b pb-2 flex justify-between">
                    <span>Pusat Koordinasi RW</span>
                    <span className="text-purple-600">Multi-RT Overview</span>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-xl text-purple-900">
                    <strong>Kas Agregat:</strong> Penggabungan saldo kas RW dan iuran keamanan.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl text-slate-700">
                    <strong>Broadcast Pengumuman:</strong> Warta resmi ke semua RT dalam 1 detik.
                  </div>
                </div>
              </div>
            )}

            {activeRoleTab === 'satpam' && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase mb-2">Peran: Satpam (Security Guard)</div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                    Console Layar Taktis Pos Jaga & SOS
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Dirancang dengan tombol-tombol besar ramah tablet/ponsel untuk petugas jaga.
                    Cek izin tamu masuk, pantau status rumah kosong yang ditinggal bepergian, dan terima sinyal bahaya SOS.
                  </p>
                  <ul className="text-xs sm:text-sm space-y-2 text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Rotasi jadwal 3 shift (Pagi, Sore, Malam)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Tombol satu klik "Selesaikan Insiden (Beres & Aman)"
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-xs space-y-3">
                  <div className="font-bold text-slate-900 border-b pb-2 flex justify-between">
                    <span>Pos Gerbang Satpam</span>
                    <span className="text-red-600">Tactical HUD</span>
                  </div>
                  <div className="p-3 bg-red-50 rounded-xl text-red-900 font-semibold">
                    🚨 Monitor Darurat SOS: Alarm strobo getar + peta rumah pelapor.
                  </div>
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-900">
                    📋 Buku Tamu Digital: Scan pass warga atau input nopol kendaraan.
                  </div>
                </div>
              </div>
            )}

            {activeRoleTab === 'dev' && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase mb-2">Peran: Pengembang / Estate Admin</div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                    Tata Kelola Komplek, Modul, & Integrasi Kustom
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Akses kontrol penuh untuk developer kawasan atau pengelola komersil. Aktif/nonaktifkan
                    modul fitur, atur rekening perbankan, dan kelola denah koordinat rumah warga.
                  </p>
                  <ul className="text-xs sm:text-sm space-y-2 text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Integrasi API gateway bank & webhook otomatis
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Bebas tambah modul khusus perumahan
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-xs space-y-3">
                  <div className="font-bold text-slate-900 border-b pb-2 flex justify-between">
                    <span>Developer Console</span>
                    <span className="text-indigo-600">Full System Control</span>
                  </div>
                  <div className="p-3 bg-indigo-50 rounded-xl text-indigo-900">
                    <strong>Peta Koordinat Leaflet:</strong> Pengaturan 54+ titik rumah warga.
                  </div>
                  <div className="p-3 bg-slate-100 rounded-xl text-slate-800">
                    <strong>Modul Flags:</strong> Nyalakan/matikan fitur sesuai kebutuhan komplek.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. CARA KERJA 3 LANGKAH IMPLEMENTASI */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              Cepat & Tanpa Ribet
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Hanya Butuh 3 Langkah untuk Memulai
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Tim kami membantu proses onboarding data komplek sampai siap digunakan warga dan satpam.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 text-center relative shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-blue-500/20">
                1
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Input Data Rumah & Warga</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kirimkan daftar nomor rumah dan nomor kontak warga via Excel. Tim kami bantu setup database perumahan Anda.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 text-center relative shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-indigo-500/20">
                2
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Aktivasi Satpam & Pengurus</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Satpam dan pengurus diberikan akun instan. Langsung bisa digunakan di HP atau tablet pos gerbang jaga.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 text-center relative shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-emerald-500/20">
                3
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Komplek Berjalan Otomatis</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Warga login dengan mudah, tagihan terverifikasi otomatis, dan lingkungan jadi aman, tenang, dan transparan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PILIHAN PAKET & HARGA (3 TINGKATAN) */}
      <section id="paket" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
              <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
              <span>Investasi Terjangkau untuk Lingkungan</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              3 Tingkatan Pilihan Paket Komplekku
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Mulai dari skala Rukun Tetangga (RT), RW & Cluster Mandiri, hingga Paket Kustom Pengembang Kawasan.
            </p>

            {/* Billing Toggle (Monthly / Yearly) */}
            <div className="mt-6 inline-flex items-center p-1 bg-slate-100 rounded-2xl border border-slate-200">
              <button
                type="button"
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Langganan Bulanan
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  billingPeriod === 'yearly'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <span>Tahunan</span>
                <span className="text-[10px] bg-amber-400 text-slate-900 font-extrabold px-1.5 py-0.5 rounded-full">
                  Hemat 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
            {/* TIER 1: STARTER RT */}
            <div
              className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all flex flex-col justify-between ${
                selectedTier === 'starter'
                  ? 'border-blue-600 shadow-xl ring-2 ring-blue-600/20'
                  : 'border-slate-200 shadow-sm hover:border-slate-300'
              }`}
              onClick={() => setSelectedTier('starter')}
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs mb-4">
                  Tier 1: Starter
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Paket RT Mandiri</h3>
                <p className="text-slate-500 text-xs mt-1 mb-6">
                  Cocok untuk 1 lingkungan RT atau cluster mini (20 hingga 60 rumah warga).
                </p>

                {/* Price Tag */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-xs font-semibold text-slate-500">Mulai dari</div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">
                      {billingPeriod === 'monthly' ? 'Rp 149.000' : 'Rp 119.000'}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">/ bulan</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Atau hanya ~Rp 2.500 per rumah / bulan
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-5 space-y-3 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                    Fitur Termasuk:
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Direktori Warga & Kartu Keluarga (KK)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Tagihan Iuran & Verifikasi Transfer Manual</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Buku Kas & Transparansi Keuangan RT</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Tombol Panic SOS Warga ke Pengurus</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Chat Lingkungan RT & Buletin Warta</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={getWaLink(
                    `Halo Admin, saya ingin berlangganan Paket 1 (Starter RT) Komplekku [Periode: ${billingPeriod}].`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                >
                  <span>Pilih Paket RT</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* TIER 2: PRO RW & CLUSTER MANDIRI (RECOMMENDED) */}
            <div
              className={`bg-white rounded-3xl p-6 sm:p-8 border-2 relative transition-all flex flex-col justify-between ${
                selectedTier === 'pro'
                  ? 'border-blue-600 shadow-2xl ring-4 ring-blue-600/10'
                  : 'border-blue-500 shadow-md'
              }`}
              onClick={() => setSelectedTier('pro')}
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-wide shadow-md">
                Paling Direkomendasikan
              </div>

              <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs mb-4">
                  Tier 2: Pro Komplek
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Paket RW & Cluster Mandiri</h3>
                <p className="text-slate-500 text-xs mt-1 mb-6">
                  Solusi komplit untuk lingkungan multi-RT, perumahan cluster, dan komplek berpos satpam aktif.
                </p>

                {/* Price Tag */}
                <div className="mb-6 p-4 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="text-xs font-semibold text-blue-800">Mulai dari</div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl sm:text-3xl font-black text-blue-900">
                      {billingPeriod === 'monthly' ? 'Rp 399.000' : 'Rp 319.000'}
                    </span>
                    <span className="text-xs font-semibold text-blue-700">/ bulan</span>
                  </div>
                  <div className="text-[11px] text-blue-600 mt-1">
                    Mencakup s.d. 300 rumah warga & 3 shift satpam
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-5 space-y-3 text-xs sm:text-sm">
                  <div className="font-bold text-blue-900 text-xs uppercase tracking-wider">
                    Semua Fitur Tier 1, Ditambah:
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Verifikasi Multi-Bank Otomatis:</strong> Cek mutasi transfer
                      masuk real-time 24 jam dengan kode unik.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Console Pos Satpam 3 Shift:</strong> Pagi, Sore, Malam +
                      sirine darurat getar pintar khusus petugas on-duty.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Buku Tamu Digital Gerbang:</strong> Validasi tamu & kurir
                      paket via PIN atau izin warga.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Denah Interaktif Koordinat Rumah:</strong> Peta 50+ rumah
                      dan monitoring rumah kosong yang ditinggal mudik.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Hierarki Multi-RT di bawah RW:</strong> Kas terpisah tiap RT
                      dan agregat RW.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={getWaLink(
                    `Halo Admin, saya ingin berlangganan Paket 2 (Pro RW & Cluster) Komplekku [Periode: ${billingPeriod}].`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 transition-all active:scale-95"
                >
                  <span>Pilih Paket Pro RW</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* TIER 3: CUSTOM ENTERPRISE (CUSTOM ON-DEMAND) */}
            <div
              className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all flex flex-col justify-between ${
                selectedTier === 'enterprise'
                  ? 'border-indigo-600 shadow-xl ring-2 ring-indigo-600/20'
                  : 'border-slate-200 shadow-sm hover:border-slate-300'
              }`}
              onClick={() => setSelectedTier('enterprise')}
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-indigo-100 text-indigo-800 font-bold text-xs mb-4">
                  Tier 3: Custom Enterprise
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Custom on Request</h3>
                <p className="text-slate-500 text-xs mt-1 mb-6">
                  Untuk Pengembang Perumahan (Developer), Kawasan Komersil Terpadu, atau Komplek Hunian Mewah.
                </p>

                {/* Price Tag */}
                <div className="mb-6 p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
                  <div className="text-xs font-semibold text-indigo-800">Biaya Investasi</div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl sm:text-3xl font-black text-indigo-950">Mulai Rp 1.499.000</span>
                  </div>
                  <div className="text-[11px] text-indigo-600 mt-1">
                    Setup lisensi & kustomisasi alur sesuai SOP
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-5 space-y-3 text-xs sm:text-sm">
                  <div className="font-bold text-indigo-900 text-xs uppercase tracking-wider">
                    Semua Fitur Tier 2 + Fitur Sesuai Permintaan:
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Bebas Request Fitur Baru:</strong> Alur khusus, sistem booking
                      clubhouse/lapangan, denda otomatis, dll.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Integrasi Palang Pintu & RFID:</strong> Barrier gate otomatis
                      terhubung ke identitas warga & pembayaran.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Integrasi CCTV Live Stream:</strong> Akses pantau kamera CCTV
                      sudut gerbang langsung dari aplikasi.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">White-label & Domain Sendiri:</strong> Logo komplek, warna
                      identitas, dan server database mandiri.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-700">
                    <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Prioritas Support 24/7 & Pelatihan On-Site Pengurus/Satpam.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={getWaLink(
                    'Halo Admin, saya mewakili pengembang/kawasan ingin konsultasi Paket 3 (Custom Enterprise) dan request fitur khusus.'
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                >
                  <span>Konsultasi Fitur Kustom</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BANNER REQUEST FITUR ON-DEMAND */}
      <section
        id="custom-request"
        className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 backdrop-blur-xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-4">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Kustomisasi Tanpa Batas</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Punya Alur Komplek Sendiri? Kami Buatkan Fiturnya!
                </h2>
                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  Setiap perumahan punya aturan lokal yang unik. Anda dapat meminta penambahan modul khusus yang langsung
                  dibangun dan ditanamkan ke dalam sistem Komplekku, mulai dari sistem palang pintu RFID, voting pemilihan
                  ketua RT online, hingga bot WhatsApp reminder otomatis.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5 text-xs font-medium text-slate-300">
                  <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/10">✓ Palang Pintu RFID / QR Gate</span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/10">✓ WhatsApp Bot Tagihan</span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/10">✓ Reservasi Lapangan / Balai Warga</span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/10">✓ E-Voting Pemilihan Pengurus</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center">
                <a
                  href={getWaLink('Halo, saya punya kebutuhan fitur khusus untuk komplek kami. Ingin diskusi langsung:')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold shadow-lg shadow-blue-600/30 transition-all text-sm sm:text-base active:scale-95"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Ajukan Request Fitur</span>
                </a>
                <span className="text-xs text-slate-400 mt-2 text-center lg:text-right">
                  Konsultasi gratis langsung dengan software engineer kami
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. KEAMANAN & PRIVASI DATA */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1">
                Data Privasi & Keamanan Tingkat Tinggi
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kami menerapkan arsitektur <em>Row Level Security (RLS)</em> di mana data warga hanya dapat diakses
                oleh lingkungan RT-nya sendiri. Nomor ponsel dan nomor KK dienkripsi, mencegah kebocoran data
                ke pihak luar yang tidak bertanggung jawab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TANYA JAWAB LENGKAP (FAQ - 10 ITEMS) */}
      <section id="faq" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              FAQ Lengkap
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Jawaban ringkas dan jelas seputar teknis, biaya, dan implementasi aplikasi Komplekku.
            </p>
          </div>

          <div className="space-y-3.5">
            {[
              {
                q: '1. Apakah warga lansia yang kurang paham teknologi tetap bisa menggunakannya?',
                a: 'Sangat bisa! Antarmuka Komplekku didesain sederhana dengan font besar dan navigasi intuitif. Warga cukup membuka aplikasi untuk melihat tagihan atau menekan tombol darurat SOS. Untuk warga yang belum memiliki smartphone, pengurus RT dapat mencatatkan iuran dan menerbitkan kuitansi manual atas namanya.',
              },
              {
                q: '2. Bagaimana cara kerja verifikasi pembayaran iuran otomatis tanpa kirim bukti transfer?',
                a: 'Sistem memberikan nominal dengan 3 angka kode unik di akhir tagihan (contoh: Rp 150.214). Saat warga transfer lewat ATM atau m-Banking apa pun (BCA, Mandiri, BRI, BNI, dll), sistem membaca mutasi masuk secara otomatis dalam hitungan detik dan langsung mengubah status iuran menjadi Lunas.',
              },
              {
                q: '3. Bagaimana jika ada warga yang transfer tanpa menggunakan kode unik?',
                a: 'Tidak masalah. Aplikasi tetap menyediakan opsi unggah bukti transfer manual. Bendahara RT/RW memiliki tombol verifikasi cepat dengan 1 klik untuk menyetujui mutasi manual tersebut.',
              },
              {
                q: '4. Bagaimana cara kerja sistem shift satpam 8 jam?',
                a: 'Komplekku membagi jadwal jaga ke dalam 3 regu: Shift 1 Pagi (07:00-15:00), Shift 2 Sore (15:00-23:00), dan Shift 3 Malam (23:00-07:00). Sistem secara otomatis mengaktifkan notifikasi dan sirine getar hanya pada smartphone satpam yang sedang berdinas (On-Duty), sehingga satpam yang sedang istirahat tidak terganggu.',
              },
              {
                q: '5. Bisakah kami meminta penambahan fitur khusus yang belum ada di aplikasi?',
                a: 'Bisa sekali! Melalui Paket Tier 3 (Custom Enterprise), tim software engineer kami dapat membangun fitur sesuai SOP unik komplek Anda, seperti modul reservasi clubhouse, denda keterlambatan iuran, atau voting digital.',
              },
              {
                q: '6. Bisakah diintegrasikan dengan palang pintu otomatis (boom gate) perumahan?',
                a: 'Bisa. Pada Paket Custom Enterprise, sistem Komplekku dapat dihubungkan dengan controller barrier gate gerbang perumahan via kartu RFID warga atau barcode scanner pass tamu.',
              },
              {
                q: '7. Apakah aplikasi harus di-install dari Google Play Store / App Store?',
                a: 'Komplekku tersedia dalam bentuk Mobile App siap pasang dan juga Web Dashboard responsif yang dapat langsung dibuka lewat browser Chrome/Safari di HP, tablet, maupun laptop tanpa wajib install aplikasi berat.',
              },
              {
                q: '8. Berapa lama proses implementasi data komplek sampai siap pakai?',
                a: 'Rata-rata hanya membutuhkan 1 hingga 2 hari kerja. Tim kami akan membantu mengonversi data warga (blok/nomor rumah) dari file Excel yang Anda miliki ke dalam sistem database.',
              },
              {
                q: '9. Apakah ada kontrak jangka panjang atau bisa berhenti sewaktu-waktu?',
                a: 'Tidak ada kontrak mengikat yang memberatkan. Anda bebas memilih langganan bulanan tanpa pinalti jika ingin berhenti, atau memilih paket tahunan untuk mendapatkan potongan harga hemat 20%.',
              },
              {
                q: '10. Bagaimana jaminan keamanan data Kartu Keluarga (KK) dan nomor telepon warga?',
                a: 'Seluruh basis data disimpan di cloud server bersertifikasi dengan isolasi Row Level Security (RLS). Pengurus RT lain atau komplek lain tidak memiliki akses terhadap data warga komplek Anda.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                      activeFaq === idx ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 sm:py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Shield className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Komplek<span className="text-blue-500">ku</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs sm:text-sm">
              <a href="#masalah-solusi" className="hover:text-white transition-colors">
                Solusi
              </a>
              <a href="#fitur" className="hover:text-white transition-colors">
                Fitur
              </a>
              <a href="#paket" className="hover:text-white transition-colors">
                Harga Paket
              </a>
              <a href="#custom-request" className="hover:text-white transition-colors">
                Request Fitur
              </a>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
              <a
                href={getWaLink('Halo Admin Komplekku, saya butuh bantuan teknis.')}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Kontak Tim
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
            <div>
              &copy; {new Date().getFullYear()} Komplekku. All rights reserved. Platform Smart Residential & Pos Satpam.
            </div>
            <div>
              Dukungan integrasi bank & kustomisasi alur perumahan.
            </div>
          </div>
        </div>
      </footer>

      {/* 12. MOBILE-ONLY STICKY BOTTOM ACTION BAR (CONVERSION BOOSTER) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 flex items-center justify-between gap-3 shadow-lg">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 font-semibold">Mulai dari</span>
          <span className="text-sm font-black text-blue-600">Rp 149.000<span className="text-[10px] font-normal text-slate-500">/bln</span></span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#paket"
            className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200"
          >
            Pilihan Paket
          </a>
          <a
            href={getWaLink('Halo, saya ingin tanya paket Komplekku lewat WhatsApp.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat WA</span>
          </a>
        </div>
      </div>
    </div>
  );
}
