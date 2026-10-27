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
} from 'lucide-react';

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState<string>('pro');

  const WHATSAPP_NUMBER = '628111234567'; // Ganti dengan nomor WA Anda
  const getWaLink = (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Shield className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                Komplek<span className="text-blue-600">ku</span>
              </span>
              <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                Smart Community
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#fitur" className="hover:text-blue-600 transition-colors">
              Fitur Unggulan
            </a>
            <a href="#paket" className="hover:text-blue-600 transition-colors">
              3 Pilihan Paket
            </a>
            <a href="#custom-request" className="hover:text-blue-600 transition-colors">
              Request Fitur Khusus
            </a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">
              Tanya Jawab
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={getWaLink('Halo Admin Komplekku, saya ingin konsultasi aplikasi untuk komplek kami.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Konsultasi Demo</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center">
          <div className="w-[800px] h-[400px] bg-gradient-to-tr from-blue-100/70 via-indigo-50/50 to-transparent blur-3xl rounded-full mt-[-100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Platform Komunitas & Keamanan Perumahan Modern</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.15]">
            Iuran Otomatis, Keamanan Satpam, & Kas Transparan dalam{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Satu Aplikasi
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tinggalkan pencatatan manual di buku dan grup WA yang berantakan. Komplekku menghubungkan
            Warga, Pengurus RT/RW, dan Satpam secara real-time dengan sistem rekonsiliasi bank otomatis.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#paket"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all text-base"
            >
              <span>Lihat 3 Tingkat Paket</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={getWaLink('Halo, saya tertarik dengan aplikasi Komplekku dan ingin coba demo aplikasinya.')}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all text-base"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Tanya Fitur Kustom via WA</span>
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="text-2xl lg:text-3xl font-extrabold text-blue-600">0 Detik</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">Cek Mutasi Otomatis (Moota)</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="text-2xl lg:text-3xl font-extrabold text-indigo-600">3 Shift</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">Rotasi Jaga Satpam 24 Jam</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="text-2xl lg:text-3xl font-extrabold text-emerald-600">100%</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">Transparansi Kas RT / RW</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="text-2xl lg:text-3xl font-extrabold text-purple-600">Custom</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">Bebas Request Fitur Sesuai SOP</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FITUR UTAMA SHOWCASE */}
      <section id="fitur" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Kemampuan Aplikasi Lengkap
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Dibuat Khusus Menyelesaikan Masalah Riil Komplek Hunian
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Iuran & Mutasi Bank Otomatis</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Warga transfer dengan 3 digit kode unik. Sistem Moota mendeteksi pembayaran secara realtime
                langsung mengubah status tagihan jadi lunas tanpa perlu konfirmasi manual bendahara.
              </p>
              <ul className="text-xs font-medium text-slate-500 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Mendukung BCA, Mandiri, BRI, BNI, dll.
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Kuitansi digital otomatis diterbitkan
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pos Keamanan Satpam 3 Shift</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Layar khusus satpam gerbang utama: buku tamu digital, patroli berkala, monitoring rumah
                kosong, dan alarm SOS pintar yang hanya bergetar keras di HP petugas yang sedang On-Duty.
              </p>
              <ul className="text-xs font-medium text-slate-500 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Shift Pagi (07-15), Sore (15-23), Malam (23-07)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Peta koordinat rumah pelapor insiden
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Buku Kas Transparan RT & RW</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Pisahkan saldo dan pembukuan uang kas RT dan RW secara terisolasi. Warga dapat memantau
                aliran kas masuk dan keluar secara terbuka untuk menjaga kepercayaan lingkungan.
              </p>
              <ul className="text-xs font-medium text-slate-500 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Filter dropdown multi-RT & RW
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Ekspor rekapan keuangan instan
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bell className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Tombol Darurat (Panic SOS)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Sekali tekan, sirine strobo dan getar menyala di pos satpam dengan info blok rumah dan jenis
                insiden (Medis, Kebakaran, Maling, Gempa).
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Radar Pengaduan Lingkungan</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Warga dapat memotret jalan berlubang, sampah liar, atau fasilitas rusak. Dilengkapi status
                pengerjaan (Menunggu, Diproses, Selesai) dan dukungan upvote warga.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Marketplace & Chat Tetangga</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Dukung UMKM warga komplek untuk jualan makanan atau jasa. Dilengkapi ruang obrolan warga
                tanpa perlu membagikan nomor pribadi jika tidak diinginkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TIGA TINGKATAN PAKET (3-TIER PRICING & MATRIX) */}
      <section id="paket" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
              <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
              <span>Pilihan Investasi Komplek</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              3 Tingkatan Paket Aplikasi Komplekku
            </h2>
            <p className="mt-4 text-slate-600 text-base">
              Pilih paket yang paling pas dengan skala hunian Anda. Bisa mulai dari tingkat RT, RW lengkap,
              hingga paket Kustomisasi Khusus untuk pengembang perumahan.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* TIER 1: STARTER (PAKET RT) */}
            <div
              className={`bg-white rounded-3xl p-8 border transition-all flex flex-col justify-between ${
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
                <h3 className="text-2xl font-extrabold text-slate-900">Paket RT Mandiri</h3>
                <p className="text-slate-500 text-xs mt-1 mb-6">
                  Sangat cocok untuk 1 lingkungan Rukun Tetangga (RT) atau cluster mini (20–60 rumah).
                </p>

                <div className="border-t border-slate-100 pt-6 space-y-3.5 text-sm">
                  <div className="font-semibold text-slate-900 text-xs uppercase tracking-wider">
                    Fitur Termasuk:
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Direktori Warga & Manajemen Kartu Keluarga (KK)</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Pembuatan Tagihan Iuran & Slip Pembayaran Manual</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Buku Kas & Catatan Pemasukan/Pengeluaran RT</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Tombol Panic SOS Warga ke Pengurus</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Chat Lingkungan RT & Buletin Pengumuman</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={getWaLink('Halo, saya tertarik dengan Paket 1 (Starter RT) Komplekku.')}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                >
                  <span>Pilih Paket RT</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* TIER 2: PRO (PAKET RW & CLUSTER) - HIGHLIGHTED */}
            <div
              className={`bg-white rounded-3xl p-8 border-2 relative transition-all flex flex-col justify-between ${
                selectedTier === 'pro'
                  ? 'border-blue-600 shadow-2xl ring-4 ring-blue-600/10'
                  : 'border-blue-500 shadow-md'
              }`}
              onClick={() => setSelectedTier('pro')}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide shadow-md">
                Paling Direkomendasikan
              </div>

              <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs mb-4">
                  Tier 2: Pro Komplek
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Paket RW & Cluster Mandiri</h3>
                <p className="text-slate-500 text-xs mt-1 mb-6">
                  Solusi komprehensif untuk kawasan RW multi-RT dan perumahan yang memiliki Pos Satpam aktif.
                </p>

                <div className="border-t border-slate-100 pt-6 space-y-3.5 text-sm">
                  <div className="font-semibold text-blue-900 text-xs uppercase tracking-wider">
                    Semua Fitur Tier 1, Ditambah:
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Otomasi Rekonsiliasi Moota:</strong> Mutasi bank
                      terverifikasi tanpa unggah struk manual.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Console Pos Satpam 3 Shift:</strong> Pagi, Sore,
                      Malam + Sirine SOS pintar khusus regu on-duty.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Buku Tamu Digital & Pass Warga:</strong> Validasi tamu
                      gerbang utama via PIN / izin masuk.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Denah Interaktif Leaflet:</strong> Peta sebaran 50+
                      rumah warga & pemantauan rumah kosong.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Hierarki Multi-RT & RW:</strong> Kas terpisah per RT
                      dan rekapan agregat RW.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={getWaLink('Halo, saya tertarik dengan Paket 2 (Pro RW & Cluster) Komplekku.')}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition-all"
                >
                  <span>Pilih Paket Pro RW</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* TIER 3: CUSTOM ENTERPRISE (CUSTOM ON-DEMAND) */}
            <div
              className={`bg-white rounded-3xl p-8 border transition-all flex flex-col justify-between ${
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
                <h3 className="text-2xl font-extrabold text-slate-900">Custom on Request</h3>
                <p className="text-slate-500 text-xs mt-1 mb-6">
                  Untuk Pengembang Perumahan (Developer), Kawasan Komersil Terpadu, atau Komplek Mewah.
                </p>

                <div className="border-t border-slate-100 pt-6 space-y-3.5 text-sm">
                  <div className="font-semibold text-indigo-900 text-xs uppercase tracking-wider">
                    Semua Fitur Tier 2 + Permintaan Kustom:
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Bebas Request Fitur Baru:</strong> Alur khusus, modul
                      booking lapangan/fasilitas, sistem denda, dll.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Integrasi Barrier Gate & RFID:</strong> Palang pintu
                      otomatis gerbang terhubung ke data warga.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">Integrasi CCTV Live Stream:</strong> Pantau kamera
                      CCTV sudut komplek langsung di app.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">White-label & Domain Sendiri:</strong> Logo komplek,
                      warna brand, dan database dedicated.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-700">
                    <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Dedicated Support 24/7 & Pelatihan On-Site Satpam/Pengurus.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={getWaLink('Halo, saya dari perumahan / developer ingin diskusi Paket 3 (Custom Enterprise) dan request fitur khusus.')}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                >
                  <span>Konsultasi Fitur Kustom</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. REQUEST FITUR ON-DEMAND BANNER */}
      <section id="custom-request" className="py-16 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-4">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Kustomisasi Tanpa Batas</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Punya Alur Komplek Sendiri? Kami Buatkan Fiturnya!
                </h2>
                <p className="mt-4 text-slate-300 text-base leading-relaxed">
                  Tiap perumahan punya aturan lokal yang unik. Anda dapat memesan fitur kustom yang langsung
                  ditanamkan ke dalam aplikasi, seperti sistem denda otomatis, booking fasilitas clubhouse,
                  voting pemilihan ketua RT online, hingga integrasi gate RFID.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-slate-400">
                  <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/10">✓ Palang Pintu RFID / QR</span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/10">✓ WhatsApp Bot Notifikasi</span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/10">✓ Booking Lapangan / Balai</span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/10">✓ E-Voting Pemilihan Pengurus</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                <a
                  href={getWaLink('Halo, saya ingin request fitur kustom untuk perumahan kami:')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold shadow-lg shadow-blue-600/30 transition-all text-base active:scale-95"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Ajukan Request Fitur</span>
                </a>
                <span className="text-xs text-slate-400 mt-2">Respon cepat via WhatsApp langsung tim developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PERTANYAAN UMUM (FAQ) */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Tanya Jawab Seputar Komplekku
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Apakah aplikasi bisa dijalankan di HP warga dan komputer pos satpam?',
                a: 'Ya, 100%! Aplikasi Komplekku dibangun cross-platform responsif. Warga cukup memakai HP Android/iOS, sedangkan pos satpam dan bendahara bisa membukanya lewat layar tablet atau laptop/komputer web.',
              },
              {
                q: 'Bagaimana cara kerja pembayaran iuran otomatis Moota?',
                a: 'Setiap tagihan iuran diberikan kode unik 3 digit di belakang nominal. Saat warga transfer via m-Banking apa pun, sistem Moota mendeteksi mutasi uang masuk rekening RT/RW secara realtime dan status di aplikasi langsung berganti menjadi Lunas.',
              },
              {
                q: 'Jika satpam sedang libur, apakah HP-nya tetap bunyi alarm SOS?',
                a: 'Tidak! Komplekku memiliki manajemen 3 shift (Pagi, Sore, Malam). Sirine darurat keras hanya memicu getar dan audio di handphone satpam yang sedang berstatus On-Duty.',
              },
              {
                q: 'Apakah komplek kami bisa meminta penambahan fitur khusus yang belum ada?',
                a: 'Tentu saja! Melalui Paket Tier 3 (Custom Enterprise), tim kami dapat membangun fitur sesuai spesifikasi SOP perumahan Anda, termasuk integrasi alat fisik seperti barrier gate RFID.',
              },
              {
                q: 'Bagaimana keamanan data pribadi warga?',
                a: 'Data tersimpan di server Supabase terenkripsi dengan proteksi Row Level Security (RLS). Warga hanya dapat melihat data yang relevan dengan RT-nya sendiri, dan data privat KTP/KK tidak diakses publik.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      activeFaq === idx ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Shield className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Komplek<span className="text-blue-500">ku</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a href="#fitur" className="hover:text-white transition-colors">
                Fitur
              </a>
              <a href="#paket" className="hover:text-white transition-colors">
                Paket
              </a>
              <a href="#custom-request" className="hover:text-white transition-colors">
                Request Fitur
              </a>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
              <a
                href={getWaLink('Halo Admin Komplekku')}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Kontak Developer
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} Komplekku. All rights reserved. Solusi Smart Residential & Pos Keamanan.
            </div>
            <div>
              Dibangun dengan modern stack untuk performa cepat dan keandalan tinggi.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
