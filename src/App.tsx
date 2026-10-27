import { useState } from 'react';
import {
  Shield,
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
  ChevronDown,
  Check,
  Menu,
  X,
  AlertTriangle,
  ShieldCheck,
  UploadCloud,
  ChevronRight,
} from 'lucide-react';

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState<string>('pro');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRoleTab, setActiveRoleTab] = useState<'warga' | 'rt' | 'rw' | 'satpam' | 'dev'>('warga');

  const WHATSAPP_NUMBER = '628111234567'; // Hotline resmi Komplekku
  const getWaLink = (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white pb-20 md:pb-0 overflow-x-clip">
      {/* 1. NAVBAR (PROFESIONAL ENTERPRISE) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md shadow-slate-900/10 group-hover:bg-blue-600 transition-colors">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-2xl tracking-tight text-slate-900">
                  Komplek<span className="text-blue-600">ku</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-700 rounded border border-slate-200">
                  B2B Estate
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium hidden sm:block -mt-0.5">
                Residential & Security System
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#masalah-solusi" className="hover:text-blue-600 transition-colors">
              Komparasi
            </a>
            <a href="#fitur" className="hover:text-blue-600 transition-colors">
              Modul Fitur
            </a>
            <a href="#peran" className="hover:text-blue-600 transition-colors">
              Akses Peran
            </a>
            <a href="#paket" className="hover:text-blue-600 transition-colors">
              Paket & Lisensi
            </a>
            <a href="#custom-request" className="hover:text-blue-600 transition-colors">
              Request Fitur
            </a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={getWaLink('Halo Tim Komplekku, saya ingin konsultasi dan presentasi sistem untuk perumahan kami.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 text-white hover:bg-blue-600 transition-colors shadow-xs active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
              <span>Jadwalkan Demo</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200"
              aria-label="Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2.5 shadow-xl animate-in slide-in-from-top duration-150">
            <a
              href="#masalah-solusi"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-800 hover:text-blue-600 border-b border-slate-100"
            >
              Perbandingan: Konvensional vs Komplekku
            </a>
            <a
              href="#fitur"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-800 hover:text-blue-600 border-b border-slate-100"
            >
              6 Fitur Unggulan Sistem
            </a>
            <a
              href="#peran"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-800 hover:text-blue-600 border-b border-slate-100"
            >
              Hak Akses 5 Peran (Warga s.d. Satpam)
            </a>
            <a
              href="#paket"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-800 hover:text-blue-600 border-b border-slate-100"
            >
              Pilihan Paket & Biaya Lisensi
            </a>
            <a
              href="#custom-request"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-800 hover:text-blue-600 border-b border-slate-100"
            >
              Request Modul Kustom
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-800 hover:text-blue-600"
            >
              Tanya Jawab Lengkap (FAQ)
            </a>
            <div className="pt-2">
              <a
                href={getWaLink('Halo, saya ingin konsultasi sistem Komplekku.')}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 text-white shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hubungi Sales via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION (PROFESIONAL, TANGIBLE, ANTI-AI SLOP) */}
      <section className="relative pt-10 pb-12 sm:pt-16 sm:pb-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Sistem Operasional Lingkungan & Keamanan Standar B2B</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Tata Kelola Iuran Rapi, Pos Satpam Terpantau, & Kas Terbuka 24 Jam
              </h1>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Solusi menyeluruh bagi perumahan cluster, RW, dan estate developer. Warga mengunggah bukti transfer,
                bendahara verifikasi dengan satu klik, satpam siaga dengan rotasi 3 shift, dan kas warga tersaji transparan.
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#paket"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all text-sm active:scale-95 text-center"
                >
                  <span>Lihat Pilihan Lisensi Paket</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={getWaLink('Halo, saya ingin konsultasi sistem Komplekku untuk perumahan kami.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all text-sm active:scale-95 text-center"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Konsultasi Teknis (WA)</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 font-bold" />
                  Verifikasi Slip Transfer Cepat
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 font-bold" />
                  3 Shift Satpam (Pagi/Sore/Malam)
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 font-bold" />
                  Enkripsi Data Supabase RLS
                </span>
              </div>
            </div>

            {/* Right Tactical Preview Card (Real UI Data, No Slop) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-3xl p-5 sm:p-6 text-white shadow-2xl border border-slate-800">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono text-slate-400 ml-2">komplekku.id/security</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">
                    Pos Gerbang
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {/* Satpam Shift Status */}
                  <div className="bg-slate-800/90 rounded-2xl p-3.5 border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                        S2
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Shift 2: Sore (15:00 - 23:00)</div>
                        <div className="text-[11px] text-slate-400">Petugas: Pak Joko & Pak Agus (On-Duty)</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-1 rounded border border-emerald-800">
                      Aktif
                    </span>
                  </div>

                  {/* Incoming Manual Dues Verification Card */}
                  <div className="bg-slate-800/90 rounded-2xl p-3.5 border border-slate-700/80">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-slate-300">Verifikasi Slip Transfer Baru</span>
                      <span className="text-[10px] text-amber-400 font-semibold">Menunggu Bendahara</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                      <div>
                        <div className="text-xs font-extrabold text-white">Blok B3 No. 14 (Bpk. Farhan)</div>
                        <div className="text-[10px] text-slate-400">Iuran Lingkungan & Keamanan Okt</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-blue-400">Rp 250.000</div>
                        <span className="text-[9px] text-slate-400">Foto Struk Terlampir</span>
                      </div>
                    </div>
                  </div>

                  {/* Panic SOS HUD Card */}
                  <div className="bg-red-950/40 border border-red-800/60 rounded-2xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
                        <Bell className="w-4 h-4 animate-bounce" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-red-200">Siaga Darurat SOS 24 Jam</div>
                        <div className="text-[10px] text-red-300/80">Sirine getar hanya ke HP regu aktif</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-white bg-red-600 px-2.5 py-1 rounded">
                      Monitor
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Kas Terbuka RT 03: <strong>Rp 18.420.000</strong></span>
                  <span className="text-blue-400 font-semibold">54 Rumah Terhubung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MASALAH VS SOLUSI (KANAN-KIRI BERDAMPINGAN UNTUK MOBILE) */}
      <section id="masalah-solusi" className="py-10 sm:py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              Evaluasi Pengelolaan Komplek
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Cara Konvensional vs Standar Komplekku
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Perbandingan langsung antara metode lama dan efisiensi platform Komplekku.
            </p>
          </div>

          {/* Side-by-Side 2 Columns on Mobile (Kiri Kanan Langsung) */}
          <div className="grid grid-cols-2 gap-2 sm:gap-6 max-w-5xl mx-auto">
            {/* SISI KIRI: CARA KONVENSIONAL */}
            <div className="bg-rose-50/70 border border-rose-200/90 rounded-2xl sm:rounded-3xl p-3 sm:p-7">
              <div className="flex items-center gap-1.5 sm:gap-2.5 text-rose-800 font-extrabold text-xs sm:text-lg mb-3 sm:mb-6 pb-2 border-b border-rose-200">
                <AlertTriangle className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-rose-600 shrink-0" />
                <span>Cara Konvensional</span>
              </div>
              <div className="space-y-3 sm:space-y-4 text-[11px] sm:text-sm text-slate-700">
                <div className="border-b border-rose-100 pb-2 sm:pb-3">
                  <div className="font-bold text-rose-900 flex items-center gap-1">
                    <X className="w-3 h-3 text-rose-600 shrink-0" /> Nagih Manual
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5">
                    Pengurus keliling pintu ke pintu, warga sungkan dan sering telat bayar.
                  </p>
                </div>

                <div className="border-b border-rose-100 pb-2 sm:pb-3">
                  <div className="font-bold text-rose-900 flex items-center gap-1">
                    <X className="w-3 h-3 text-rose-600 shrink-0" /> Kas Tertutup
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5">
                    Laporan kas cuma setahun sekali, memicu syak wasangka antar-tetangga.
                  </p>
                </div>

                <div className="border-b border-rose-100 pb-2 sm:pb-3">
                  <div className="font-bold text-rose-900 flex items-center gap-1">
                    <X className="w-3 h-3 text-rose-600 shrink-0" /> Buku Tamu Kertas
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5">
                    Buku basah, identitas tamu tidak jelas, data tercecer saat ada masalah.
                  </p>
                </div>

                <div>
                  <div className="font-bold text-rose-900 flex items-center gap-1">
                    <X className="w-3 h-3 text-rose-600 shrink-0" /> Tanggap Lambat
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5">
                    Darurat medis/kebakaran cuma teriak di grup WA yang sering tenggelam.
                  </p>
                </div>
              </div>
            </div>

            {/* SISI KANAN: DENGAN KOMPLEKKU */}
            <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-2xl sm:rounded-3xl p-3 sm:p-7 shadow-xs">
              <div className="flex items-center gap-1.5 sm:gap-2.5 text-emerald-800 font-extrabold text-xs sm:text-lg mb-3 sm:mb-6 pb-2 border-b border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                <span>Dengan Komplekku</span>
              </div>
              <div className="space-y-3 sm:space-y-4 text-[11px] sm:text-sm text-slate-700">
                <div className="border-b border-emerald-100 pb-2 sm:pb-3">
                  <div className="font-bold text-emerald-900 flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600 shrink-0 font-bold" /> Upload Slip & 1-Klik
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5">
                    Warga upload bukti transfer, bendahara approve instan, kuitansi otomatis.
                  </p>
                </div>

                <div className="border-b border-emerald-100 pb-2 sm:pb-3">
                  <div className="font-bold text-emerald-900 flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600 shrink-0 font-bold" /> Kas Terbuka 24 Jam
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5">
                    Saldo RT & RW transparan di HP warga lengkap dengan nota pengeluaran.
                  </p>
                </div>

                <div className="border-b border-emerald-100 pb-2 sm:pb-3">
                  <div className="font-bold text-emerald-900 flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600 shrink-0 font-bold" /> Buku Tamu Digital
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5">
                    Catat tamu dalam 10 detik, izin pass warga terhubung langsung ke pos.
                  </p>
                </div>

                <div>
                  <div className="font-bold text-emerald-900 flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600 shrink-0 font-bold" /> Alarm SOS Taktis
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5">
                    Sirine strobo bergetar keras di HP satpam bertugas + koordinat rumah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FITUR UNGGULAN (3 KOLOM KE SAMPING DI MOBILE, 3 DI ATAS & 3 DI BAWAH) */}
      <section id="fitur" className="py-10 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              Arsitektur Modul Terpadu
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              6 Fitur Unggulan Komplekku
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Dirancang ringkas dan terintegrasi untuk kebutuhan perumahan modern.
            </p>
          </div>

          {/* Grid 3 Kolom di Mobile & Desktop (3 Ke Samping, 3 Di Bawah) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6">
            {/* Card 1: Verifikasi Iuran Manual */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-xl sm:rounded-3xl p-2.5 sm:p-6 flex flex-col justify-between hover:border-blue-400 transition-colors">
              <div>
                <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-2 sm:mb-4">
                  <UploadCloud className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 line-clamp-2">
                  Verifikasi Iuran & Slip Bayar
                </h3>
                <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-slate-600 leading-snug line-clamp-3">
                  Warga unggah bukti transfer bank, bendahara verifikasi 1-klik, kuitansi digital otomatis terbit.
                </p>
              </div>
              <span className="mt-2 text-[9px] sm:text-xs font-bold text-blue-700 bg-blue-50 py-0.5 px-1.5 rounded inline-block self-start">
                Slip Struk
              </span>
            </div>

            {/* Card 2: Pos Satpam 3 Shift */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-xl sm:rounded-3xl p-2.5 sm:p-6 flex flex-col justify-between hover:border-blue-400 transition-colors">
              <div>
                <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2 sm:mb-4">
                  <Lock className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 line-clamp-2">
                  Pos Satpam 3 Shift Jaga
                </h3>
                <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-slate-600 leading-snug line-clamp-3">
                  Rotasi Shift 1 (Pagi), Shift 2 (Sore), Shift 3 (Malam). Buku tamu digital dan pantau rumah kosong.
                </p>
              </div>
              <span className="mt-2 text-[9px] sm:text-xs font-bold text-indigo-700 bg-indigo-50 py-0.5 px-1.5 rounded inline-block self-start">
                24 Jam Jaga
              </span>
            </div>

            {/* Card 3: Panic SOS Darurat */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-xl sm:rounded-3xl p-2.5 sm:p-6 flex flex-col justify-between hover:border-blue-400 transition-colors">
              <div>
                <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-2 sm:mb-4">
                  <Bell className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 line-clamp-2">
                  Tombol Panic SOS Darurat
                </h3>
                <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-slate-600 leading-snug line-clamp-3">
                  Sirine strobo getar HP khusus petugas on-duty + panduan peta koordinat rumah pelapor.
                </p>
              </div>
              <span className="mt-2 text-[9px] sm:text-xs font-bold text-rose-700 bg-rose-50 py-0.5 px-1.5 rounded inline-block self-start">
                Siaga Strobo
              </span>
            </div>

            {/* Card 4: Buku Kas RT & RW */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-xl sm:rounded-3xl p-2.5 sm:p-6 flex flex-col justify-between hover:border-blue-400 transition-colors">
              <div>
                <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 sm:mb-4">
                  <Eye className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 line-clamp-2">
                  Buku Kas Transparan RT/RW
                </h3>
                <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-slate-600 leading-snug line-clamp-3">
                  Pemisahan kas RT dan RW. Pemasukan dan pengeluaran tercatat rapi beserta lampiran nota.
                </p>
              </div>
              <span className="mt-2 text-[9px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 py-0.5 px-1.5 rounded inline-block self-start">
                Laporan Live
              </span>
            </div>

            {/* Card 5: Radar Pengaduan */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-xl sm:rounded-3xl p-2.5 sm:p-6 flex flex-col justify-between hover:border-blue-400 transition-colors">
              <div>
                <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-2 sm:mb-4">
                  <MapPin className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 line-clamp-2">
                  Radar Pengaduan Fasilitas
                </h3>
                <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-slate-600 leading-snug line-clamp-3">
                  Warga memotret fasilitas rusak dengan GPS. Dilengkapi sistem upvote dan progress tuntas.
                </p>
              </div>
              <span className="mt-2 text-[9px] sm:text-xs font-bold text-amber-700 bg-amber-50 py-0.5 px-1.5 rounded inline-block self-start">
                Upvote Warga
              </span>
            </div>

            {/* Card 6: Marketplace Tetangga */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-xl sm:rounded-3xl p-2.5 sm:p-6 flex flex-col justify-between hover:border-blue-400 transition-colors">
              <div>
                <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-2 sm:mb-4">
                  <Users className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 line-clamp-2">
                  Marketplace & Chat Warga
                </h3>
                <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-slate-600 leading-snug line-clamp-3">
                  Lapak jualan UMKM tetangga bebas perantara dan obrolan grup lingkungan tanpa spam.
                </p>
              </div>
              <span className="mt-2 text-[9px] sm:text-xs font-bold text-purple-700 bg-purple-50 py-0.5 px-1.5 rounded inline-block self-start">
                Sosial Warga
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MULTI-ROLE PREVIEW (ROLE TABS RAPIH TANPA SCROLL DI MOBILE) */}
      <section id="peran" className="py-10 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              Hak Akses Spesifik
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              5 Akses Peran dalam Satu Ekosistem
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Setiap pemangku kepentingan mendapatkan dashboard yang disesuaikan dengan tanggung jawabnya.
            </p>
          </div>

          {/* 5 Tabs Grid yang PAS di layar HP tanpa scroll horizontal */}
          <div className="grid grid-cols-5 p-1 bg-slate-200/70 rounded-2xl max-w-3xl mx-auto mb-6 sm:mb-8 border border-slate-300/80">
            {[
              { id: 'warga', label: 'Warga', sub: 'Hunian' },
              { id: 'rt', label: 'Ketua RT', sub: 'Pengurus' },
              { id: 'rw', label: 'Ketua RW', sub: 'Pusat' },
              { id: 'satpam', label: 'Satpam', sub: 'Pos Jaga' },
              { id: 'dev', label: 'Estate Dev', sub: 'Admin' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveRoleTab(tab.id as any)}
                className={`py-2 px-1 text-center rounded-xl transition-all ${
                  activeRoleTab === tab.id
                    ? 'bg-white text-slate-900 font-extrabold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 font-semibold'
                }`}
              >
                <div className="text-[11px] sm:text-sm leading-tight">{tab.label}</div>
                <div className="text-[9px] text-slate-500 hidden sm:block">{tab.sub}</div>
              </button>
            ))}
          </div>

          {/* Content Card Role */}
          <div className="max-w-4xl mx-auto bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xs">
            {activeRoleTab === 'warga' && (
              <div className="grid sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    Role Warga (Resident)
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2 mb-2">
                    Cek Iuran, Upload Struk, & Hubungi Pos Satpam
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Warga dapat melihat rincian tagihan per bulan, mengunggah bukti transfer, memantau transparansi
                    kas RT, mendaftarkan izin tamu kerabat, dan menekan tombol darurat SOS jika butuh pertolongan cepat.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100">✓ Kuitansi Digital Otomatis</span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100">✓ Chat Tetangga Tanpa Spam</span>
                  </div>
                </div>
                <div className="sm:col-span-5 bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                  <div className="font-bold text-slate-900 border-b pb-1.5">Tampilan HP Warga</div>
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-500 text-[10px] block">Tagihan Iuran Bulan Ini:</span>
                    <strong className="text-sm text-slate-900">Rp 200.000 (Menunggu Bayar)</strong>
                  </div>
                  <div className="p-2 bg-rose-50 rounded-lg text-rose-800 text-[11px] font-medium">
                    🚨 Tombol SOS Siaga langsung ke pos gerbang
                  </div>
                </div>
              </div>
            )}

            {activeRoleTab === 'rt' && (
              <div className="grid sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">
                    Role Ketua RT & Bendahara
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2 mb-2">
                    Approval Slip Bayar 1-Klik & Pembukuan Kas RT
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Lihat foto struk transfer yang dikirim warga dan setujui dengan 1 klik. Sistem otomatis mencatat
                    kas masuk, mengubah status tagihan jadi Lunas, dan memperbarui buku kas RT secara live.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100">✓ Tagihan Massal per RT</span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100">✓ Catat Pengeluaran + Nota</span>
                  </div>
                </div>
                <div className="sm:col-span-5 bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                  <div className="font-bold text-slate-900 border-b pb-1.5">Dashboard Bendahara RT</div>
                  <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200">
                    <span className="text-emerald-700 text-[10px] block">Total Kas RT 02:</span>
                    <strong className="text-sm text-emerald-900">Rp 16.500.000</strong>
                  </div>
                  <div className="p-2 bg-white rounded-lg border text-slate-700 text-[11px]">
                    ✓ 38 KK Lunas · 4 KK Perlu Approval
                  </div>
                </div>
              </div>
            )}

            {activeRoleTab === 'rw' && (
              <div className="grid sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 px-2 py-0.5 rounded">
                    Role Ketua RW & Paguyuban
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2 mb-2">
                    Rekapan Multi-RT & Koordinasi Keamanan
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ketua RW dapat memantau perbandingan keaktifan seluruh RT, mengelola kas paguyuban pusat,
                    mengawasi pos jaga satpam, dan menyiarkan pengumuman resmi ke seluruh kepala keluarga.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100">✓ Agregat Kas RW</span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100">✓ Pengawasan RT 01 s.d. RT 10</span>
                  </div>
                </div>
                <div className="sm:col-span-5 bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                  <div className="font-bold text-slate-900 border-b pb-1.5">Pusat Informasi RW</div>
                  <div className="p-2.5 bg-purple-50 rounded-xl border border-purple-200">
                    <span className="text-purple-700 text-[10px] block">Wilayah RW:</span>
                    <strong className="text-sm text-purple-900">8 RT Terintegrasi · 320 KK</strong>
                  </div>
                  <div className="p-2 bg-white rounded-lg border text-slate-700 text-[11px]">
                    📢 Broadcast Warta RW Terkirim Instan
                  </div>
                </div>
              </div>
            )}

            {activeRoleTab === 'satpam' && (
              <div className="grid sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                    Role Satpam (Security Guard)
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2 mb-2">
                    Layar Taktis Pos Gerbang, Tamu & SOS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sistem rotasi 3 shift (Pagi, Sore, Malam). Buku tamu digital dalam 10 detik, pemantauan rumah kosong,
                    serta penerimaan sinyal alarm bahaya SOS dengan tombol "Selesaikan Langsung (Beres & Aman)".
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100">✓ Alarm Cuma Aktif di Regu Dinas</span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100">✓ Tombol Taktis Ramah Tablet</span>
                  </div>
                </div>
                <div className="sm:col-span-5 bg-slate-900 p-4 rounded-2xl text-white space-y-2 text-xs">
                  <div className="font-bold text-amber-400 border-b border-slate-800 pb-1.5 flex justify-between">
                    <span>Pos Gerbang Utama</span>
                    <span>Shift 2: Sore</span>
                  </div>
                  <div className="p-2 bg-slate-800 rounded-lg text-slate-200 text-[11px]">
                    🚨 SOS HUD: Siaga insiden medis & kebakaran
                  </div>
                  <div className="p-2 bg-slate-800 rounded-lg text-slate-200 text-[11px]">
                    📋 Buku Tamu: 14 Kunjungan Hari Ini
                  </div>
                </div>
              </div>
            )}

            {activeRoleTab === 'dev' && (
              <div className="grid sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-800 px-2 py-0.5 rounded">
                    Role Estate Developer & Admin
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2 mb-2">
                    Kontrol Peta Kawasan & Konfigurasi Fitur
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Kelola denah koordinat 50+ rumah warga, aktivasi modul khusus perumahan, manajemen akun pengurus,
                    serta integrasi perangkat gerbang RFID atau CCTV kawasan.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100">✓ Modul Flags On/Off</span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100">✓ Peta Interaktif Leaflet</span>
                  </div>
                </div>
                <div className="sm:col-span-5 bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                  <div className="font-bold text-slate-900 border-b pb-1.5">Developer Management</div>
                  <div className="p-2 bg-white rounded-lg border text-slate-700 text-[11px]">
                    📍 Peta Kawasan: 54 Titik Rumah Terpetakan
                  </div>
                  <div className="p-2 bg-blue-50 text-blue-900 rounded-lg text-[11px]">
                    ⚙️ Dedicated Tenant: Database Terisolasi RLS
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. PILIHAN PAKET & HARGA INDUSTRI PROFESIONAL (RAPIH DI MOBILE) */}
      <section id="paket" className="py-12 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              Investasi Resmi Lingkungan
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              3 Pilihan Paket Lisensi Komplekku
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Biaya langganan transparan sesuai skala hunian dan fasilitas keamanan yang dibutuhkan.
            </p>

            {/* Toggle Billing Period */}
            <div className="mt-5 inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setBillingPeriod('monthly')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Bulanan
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod('yearly')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  billingPeriod === 'yearly'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <span>Tahunan</span>
                <span className="text-[10px] bg-amber-400 text-slate-900 font-extrabold px-1.5 py-0.2 rounded">
                  Hemat 20%
                </span>
              </button>
            </div>
          </div>

          {/* 3 Pricing Cards (Rapi dan Kompak di Mobile) */}
          <div className="grid lg:grid-cols-3 gap-5 sm:gap-8 items-stretch max-w-7xl mx-auto">
            {/* TIER 1: STARTER RT */}
            <div
              className={`bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border flex flex-col justify-between transition-all ${
                selectedTier === 'starter'
                  ? 'border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              onClick={() => setSelectedTier('starter')}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-bold text-[11px]">
                    Tier 1: Rukun Tetangga
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold">s.d. 80 KK</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Paket RT Mandiri</h3>
                <p className="text-slate-500 text-xs mt-1 mb-4">
                  Sangat cocok untuk pengelolaan 1 RT atau cluster hunian berpagar tunggal.
                </p>

                {/* Price Display */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-5">
                  <span className="text-[11px] text-slate-500 block">Biaya Lisensi:</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">
                      {billingPeriod === 'monthly' ? 'Rp 650.000' : 'Rp 520.000'}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">/ bln</span>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">
                    Termasuk pendampingan setup awal data warga
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="font-bold text-slate-900 uppercase text-[10px] tracking-wider mb-2">
                    Fitur Termasuk:
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Direktori Warga & Database Kartu Keluarga</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Upload Bukti Bayar & Approval 1-Klik Bendahara</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Buku Kas RT Live & Laporan Transparansi Warga</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Tombol Panic SOS Warga ke Pengurus</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Chat Grup Lingkungan & Buletin Pengumuman</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={getWaLink(
                    `Halo, saya ingin order Paket 1 (Starter RT Mandiri) Komplekku [Billing: ${billingPeriod}].`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors"
                >
                  <span>Pilih Paket RT</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* TIER 2: PRO RW & CLUSTER (Paling Direkomendasikan) */}
            <div
              className={`bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border-2 flex flex-col justify-between transition-all relative ${
                selectedTier === 'pro'
                  ? 'border-blue-600 ring-2 ring-blue-600/20 shadow-xl'
                  : 'border-blue-500 shadow-md'
              }`}
              onClick={() => setSelectedTier('pro')}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wide">
                Paling Direkomendasikan
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 font-bold text-[11px]">
                    Tier 2: RW & Estate
                  </span>
                  <span className="text-[11px] text-blue-700 font-bold">s.d. 350 KK</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Paket RW & Cluster Pro</h3>
                <p className="text-slate-500 text-xs mt-1 mb-4">
                  Solusi terpadu perumahan dengan pos satpam jaga aktif 24 jam dan koordinasi multi-RT.
                </p>

                {/* Price Display */}
                <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 mb-5">
                  <span className="text-[11px] text-blue-800 block">Biaya Lisensi:</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-black text-blue-950">
                      {billingPeriod === 'monthly' ? 'Rp 1.850.000' : 'Rp 1.480.000'}
                    </span>
                    <span className="text-xs text-blue-800 font-semibold">/ bln</span>
                  </div>
                  <span className="text-[10px] text-blue-700 mt-0.5 block">
                    Full console pos satpam 3 shift + multi RT
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="font-bold text-blue-900 uppercase text-[10px] tracking-wider mb-2">
                    Semua Fitur Tier 1, Ditambah:
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Console Pos Satpam 3 Shift:</strong> Pagi, Sore, Malam +
                      alarm getar khusus petugas berdinas.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Buku Tamu Digital Gerbang:</strong> Validasi pass tamu
                      kerabat/kurir via nomor PIN.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Denah Interaktif Koordinat Rumah:</strong> Peta Leaflet
                      50+ rumah & pantau rumah kosong warga mudik.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Hierarki Multi-RT di bawah RW:</strong> Kas terpisah tiap RT
                      dan kas gabungan paguyuban RW.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={getWaLink(
                    `Halo, saya ingin order Paket 2 (RW & Cluster Pro) Komplekku [Billing: ${billingPeriod}].`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all active:scale-95"
                >
                  <span>Pilih Paket Pro RW</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* TIER 3: CUSTOM ENTERPRISE (CUSTOM ON REQUEST) */}
            <div
              className={`bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border flex flex-col justify-between transition-all ${
                selectedTier === 'enterprise'
                  ? 'border-slate-900 ring-2 ring-slate-900/20 shadow-md'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              onClick={() => setSelectedTier('enterprise')}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 text-white font-bold text-[11px]">
                    Tier 3: Enterprise
                  </span>
                  <span className="text-[11px] text-slate-700 font-bold">Kawasan Besar</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Custom on Request</h3>
                <p className="text-slate-500 text-xs mt-1 mb-4">
                  Untuk Developer Perumahan, Townhouse Mewah, dan Kawasan Terpadu.
                </p>

                {/* Price Display */}
                <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 mb-5">
                  <span className="text-[11px] text-slate-600 block">Investasi Setup & Lisensi:</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">Mulai Rp 7.500.000</span>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">
                    Bebas request fitur kustom + integrasi alat fisik
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="font-bold text-slate-900 uppercase text-[10px] tracking-wider mb-2">
                    Fitur Sesuai Permintaan:
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Bebas Request Fitur Kustom:</strong> Alur denda iuran,
                      booking lapangan/balai warga, e-voting ketua RT.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Integrasi Palang Pintu Gerbang:</strong> Boom gate otomatis
                      RFID warga & scanner pass tamu.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Integrasi Streaming CCTV:</strong> Akses pantau kamera
                      gerbang langsung dari dashboard.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">White-label & Domain Sendiri:</strong> Logo komplek, nama domain,
                      dan server cloud dedicated.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={getWaLink(
                    'Halo Admin, saya ingin diskusi Paket 3 (Custom Enterprise) dan mengajukan request fitur khusus perumahan.'
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white transition-colors"
                >
                  <span>Konsultasi Fitur Kustom</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION REQUEST FITUR ON-DEMAND */}
      <section
        id="custom-request"
        className="py-12 sm:py-16 bg-slate-900 text-white relative border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-10">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-blue-500/20 text-blue-400 px-2.5 py-1 rounded">
                  Software On-Demand
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold mt-2 tracking-tight">
                  Punya Kebutuhan Spesifik? Kami Bangunkan Fiturnya!
                </h2>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Setiap komplek perumahan memiliki kearifan lokal dan SOP gerbang yang berbeda. Tim engineer kami
                  siap membangun modul tambahan yang terpasang langsung ke dalam sistem aplikasi Komplekku Anda.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="px-2.5 py-1 rounded-md bg-slate-700/60 border border-slate-600">
                    ✓ Palang Gerbang Barrier Gate RFID
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-700/60 border border-slate-600">
                    ✓ Booking Balai / Fasilitas Warga
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-700/60 border border-slate-600">
                    ✓ Sistem Denda Keterlambatan Iuran
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-700/60 border border-slate-600">
                    ✓ E-Voting Pemilihan Pengurus RT
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center">
                <a
                  href={getWaLink('Halo Tim Developer Komplekku, saya punya kebutuhan fitur kustom untuk perumahan kami:')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95 text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ajukan Request Modul</span>
                </a>
                <span className="text-[11px] text-slate-400 mt-2 text-center lg:text-right">
                  Konsultasi langsung dengan arsitek sistem
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ LENGKAP */}
      <section id="faq" className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              Pertanyaan Umum
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Tanya Jawab Seputar Komplekku
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Informasi teknis, cara kerja, dan implementasi lapangan.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: '1. Bagaimana alur pembayaran iuran dan verifikasinya?',
                a: 'Warga mentransfer iuran ke rekening bank resmi RT/RW yang tertera di aplikasi, kemudian mengunggah foto struk/slip transfer. Bendahara memiliki menu verifikasi cepat untuk mengecek kesesuaian nominal dan bukti pembayaran dengan satu klik persetujuan. Kuitansi digital otomatis terbit dan riwayat kas warga langsung terupdate.',
              },
              {
                q: '2. Apakah warga lansia yang kurang paham smartphone tetap bisa bayar iuran?',
                a: 'Bisa sekali! Jika ada warga yang membayar tunai ke ketua RT atau titip ke tetangga, bendahara RT dapat langsung mencatatkan pembayaran tersebut atas nama warga bersangkutan dari menu admin, sehingga pembukuan kas tetap 100% lengkap dan akurat.',
              },
              {
                q: '3. Bagaimana cara kerja pembagian jadwal 3 shift satpam?',
                a: 'Komplekku membagi giliran dinas satpam menjadi 3 regu: Shift 1 Pagi (07:00-15:00), Shift 2 Sore (15:00-23:00), dan Shift 3 Malam (23:00-07:00). Sirine darurat SOS dan getaran alarm ponsel hanya memicu perangkat satpam yang berstatus On-Duty, memastikan waktu istirahat satpam yang off-duty tidak terganggu.',
              },
              {
                q: '4. Bisakah aplikasi diintegrasikan dengan palang pintu otomatis (barrier gate)?',
                a: 'Bisa. Pada Paket Tier 3 (Custom Enterprise), tim teknis kami dapat mengintegrasikan controller gerbang perumahan dengan data warga melalui kartu RFID atau barcode scanner tamu.',
              },
              {
                q: '5. Berapa lama waktu yang dibutuhkan untuk onboarding komplek baru?',
                a: 'Cukup 1-2 hari kerja. Anda cukup menyerahkan data nomor rumah dan kontak warga via Excel. Tim Komplekku akan melakukan import data dan konfigurasi akun pengurus hingga siap pakai.',
              },
              {
                q: '6. Apakah ada sistem pengingat (reminder) untuk warga yang belum bayar iuran?',
                a: 'Ya, pengurus RT dapat melihat daftar warga yang belum bayar dan mengirimkan pengingat ramah lewat aplikasi maupun templat pesan WhatsApp secara langsung.',
              },
              {
                q: '7. Apakah data nomor telepon dan Kartu Keluarga (KK) warga aman?',
                a: 'Sangat aman. Basis data Komplekku dibangun di atas Supabase Enterprise dengan pengamanan ketat Row Level Security (RLS). Setiap RT hanya memiliki akses ke warganya sendiri dan tidak dapat mengintip data komplek perumahan lain.',
              },
              {
                q: '8. Jika ada kebutuhan fitur yang belum ada di aplikasi, apakah bisa dibuatkan?',
                a: 'Tentu bisa. Anda dapat memesan fitur kustom (seperti sistem sewa clubhouse, denda, atau modul pemilihan RT) melalui Paket Custom Enterprise.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-xs sm:text-sm pr-3 leading-snug">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      activeFaq === idx ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FOOTER (PROFESIONAL, TANGIBLE, LENGKAP) */}
      <footer className="bg-slate-900 text-slate-400 pt-12 pb-8 sm:pt-16 sm:pb-12">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
            {/* Col 1 */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="font-black text-xl text-white tracking-tight">Komplekku</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Platform sistem operasi manajemen perumahan terpadu, transparansi kas warga, dan koordinasi pos keamanan satpam.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[11px] text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Enkripsi SSL & Supabase RLS</span>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Modul Sistem</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#fitur" className="hover:text-white transition-colors">Iuran & Slip Struk</a></li>
                <li><a href="#fitur" className="hover:text-white transition-colors">Pos Satpam 3 Shift</a></li>
                <li><a href="#fitur" className="hover:text-white transition-colors">Tombol SOS Darurat</a></li>
                <li><a href="#fitur" className="hover:text-white transition-colors">Buku Kas RT & RW</a></li>
                <li><a href="#fitur" className="hover:text-white transition-colors">Radar Pengaduan</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Solusi Kawasan</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#paket" className="hover:text-white transition-colors">Perumahan Cluster</a></li>
                <li><a href="#paket" className="hover:text-white transition-colors">Rukun Tetangga (RT)</a></li>
                <li><a href="#paket" className="hover:text-white transition-colors">Rukun Warga (RW)</a></li>
                <li><a href="#custom-request" className="hover:text-white transition-colors">Townhouse & Estate</a></li>
                <li><a href="#custom-request" className="hover:text-white transition-colors">Developer Pengembang</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Hubungi Tim</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href={getWaLink('Halo Tim Sales Komplekku')}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                  >
                    <span>Konsultasi WhatsApp</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li className="text-slate-400">Senin - Minggu: 08.00 - 22.00 WIB</li>
                <li className="text-slate-500 text-[11px] mt-2">Dukungan setup on-site & remote seluruh Indonesia</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div>&copy; {new Date().getFullYear()} Komplekku. All rights reserved.</div>
            <div>Dirancang profesional dengan standar keamanan perbankan.</div>
          </div>
        </div>
      </footer>

      {/* 10. MOBILE BOTTOM STICKY ACTION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3.5 py-2.5 flex items-center justify-between gap-3 shadow-lg">
        <div>
          <span className="text-[10px] text-slate-500 font-semibold block leading-none">Paket Mulai</span>
          <span className="text-sm font-black text-slate-900 leading-tight">Rp 650.000<span className="text-[10px] font-normal text-slate-500">/bln</span></span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#paket"
            className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200"
          >
            Pilihan Paket
          </a>
          <a
            href={getWaLink('Halo, saya ingin tanya paket lisensi Komplekku lewat WhatsApp.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat WA</span>
          </a>
        </div>
      </div>
    </div>
  );
}
