"use client";
import { Menu, X, Play } from "lucide-react"; // Tambahkan import icon Play
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import peredaranDarahImage from "../../../../public/peredaranDarah.png";

export default function Page({ setSidebarOpen }) {
  // State untuk kontrol fullscreen (Gambar & Video)
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);

  // ID Video YouTube (diambil dari link yang Anda berikan)
  const videoId = "QLoqMruGbkc";

  // Effect untuk mengunci scroll body saat mode fullscreen aktif (untuk salah satu mode)
  useEffect(() => {
    if (isImageFullscreen || isVideoFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isImageFullscreen, isVideoFullscreen]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="flex-1 flex flex-col h-full relative w-full">
      {/* Header Mobile */}
      <header className="md:hidden p-4 bg-slate-900 border-b border-slate-800 flex items-center gap-4 sticky top-0 z-30">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 bg-slate-800 rounded text-white"
        >
          <Menu size={20} />
        </button>
        <span className="font-bold text-sm truncate text-white">
          Pengantar Sistem Peredaran Darah
        </span>
      </header>

      {/* Content Scroll */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12 scroll-smooth">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider shadow-sm shadow-red-900/20">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Bab Materi Anatomi
            </span>
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
            Pengantar Sistem Peredaran Darah
          </h1>

          {/* --- BAGIAN VIDEO YOUTUBE --- */}
          {/* Terletak di bawah judul, sebelum paragraf */}
          <motion.div variants={itemVariants} className="mb-10 group">
            <div
              onClick={() => setIsVideoFullscreen(true)}
              className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50 cursor-pointer aspect-video"
            >
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />

              {/* Thumbnail YouTube Otomatis */}
              <Image
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Video Thumbnail"
                width={1280}
                height={720}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Tombol Play di Tengah */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-900/50">
                  <Play fill="white" className="text-white ml-1" size={32} />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 p-4 z-20 pointer-events-none">
                <p className="text-white font-medium text-xs md:text-sm bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg inline-block border border-white/10">
                  Tonton Penjelasan Video
                </p>
              </div>
            </div>
          </motion.div>
          {/* --- END BAGIAN VIDEO --- */}

          <div className="prose prose-invert prose-lg text-slate-300 leading-relaxed">
            <div className="space-y-4">
              <p>
                Tubuh manusia merupakan sistem yang kompleks dan teratur. Salah
                satu sistem penting yang menjamin kehidupan adalah sistem
                peredaran darah. Sistem ini berfungsi seperti jaringan
                transportasi, yang mengalirkan oksigen, zat makanan, hormon, dan
                zat penting lainnya ke seluruh sel tubuh. Selain itu, sistem
                peredaran darah juga bertugas mengambil sisa metabolisme,
                seperti karbon dioksida dan urea, untuk dibuang melalui
                paru-paru dan ginjal.
              </p>
              <p>
                Jantung berperan sebagai pompa utama yang bekerja tanpa henti.
                Ia berdetak sekitar 70 kali per menit untuk menjaga aliran darah
                tetap stabil. Darah yang kaya oksigen dipompa dari jantung
                menuju seluruh tubuh, sedangkan darah yang telah membawa sisa
                metabolisme dikembalikan ke jantung untuk dibersihkan. Sementara
                itu, pembuluh darah berfungsi seperti pipa-pipa halus yang
                menjadi jalur perjalanan darah. Ada tiga jenis pembuluh darah,
                yaitu arteri, vena, dan kapiler, masing-masing memiliki fungsi
                yang berbeda namun saling berkaitan.
              </p>

              {/* Tempat gambar Original */}
              <motion.div variants={itemVariants} className="mb-12 group">
                <div
                  onClick={() => setIsImageFullscreen(true)}
                  className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60 pointer-events-none" />
                  <Image
                    src={peredaranDarahImage}
                    alt="Anatomi Darah"
                    width={2000}
                    height={1000}
                    className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20 pointer-events-none">
                    <p className="text-white font-medium text-sm bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg inline-block border border-white/10">
                      Klik untuk memperbesar Visualisasi
                    </p>
                  </div>
                </div>
              </motion.div>

              <p>
                Darah, sebagai cairan kehidupan, terdiri atas plasma darah dan
                sel-sel darah. Eritrosit (sel darah merah) bertugas membawa
                oksigen dengan bantuan hemoglobin, leukosit (sel darah putih)
                berperan melawan infeksi, dan trombosit (keping darah) membantu
                proses pembekuan saat luka. Keseimbangan ketiga komponen ini
                menjamin tubuh tetap sehat dan berfungsi optimal.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="h-20"></div>
        <div className="max-w-3xl mx-auto mt-4 mb-10 flex justify-end items-center gap-4">
          <Link
            href="/materi/jantung"
            className="bg-red-600 px-5 py-3 rounded-lg text-white font-medium hover:bg-red-700 transition-colors duration-200"
          >
            Next ➜
          </Link>
        </div>
      </div>

      {/* --- MODAL FULLSCREEN GAMBAR --- */}
      <AnimatePresence>
        {isImageFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsImageFullscreen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsImageFullscreen(false);
              }}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 text-white rounded-full hover:bg-red-600 transition-colors border border-white/20"
            >
              <X size={28} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center rounded-lg overflow-hidden"
            >
              <Image
                src={peredaranDarahImage}
                alt="Anatomi Jantung Fullscreen"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1200px"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MODAL FULLSCREEN VIDEO --- */}
      <AnimatePresence>
        {isVideoFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsVideoFullscreen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
          >
            {/* Tombol Close Video */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsVideoFullscreen(false);
              }}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 text-white rounded-full hover:bg-red-600 transition-colors border border-white/20"
            >
              <X size={28} />
            </button>

            {/* Container Video */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden bg-black shadow-2xl shadow-red-900/20 border border-slate-800"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
