"use client";
import { Menu, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image dari Next.js
import AccordionItem from "@/app/components/AccordionItem";
import penyakitList from "@/app/data/penyakitList";
import { ImagePreviewContext } from "@/app/components/ImageContext";

export default function Page({ setSidebarOpen }) {
  const [openIndex, setOpenIndex] = useState(null);

  // STATE: Menyimpan data gambar yang sedang diklik (bisa berupa object import atau string url)
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);

  // EFFECT: Kunci scroll body saat modal terbuka
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // https://youtu.be/a3J4Jo2uTlU?si=v2-LoaSi6puh7Zoj

  const videoId = "a3J4Jo2uTlU";

  return (
    // Context Provider membungkus konten agar anak komponen (AccordionItem) bisa set gambar
    <ImagePreviewContext.Provider
      value={{ handleImageClick: setSelectedImage }}
    >
      <main className="flex-1 flex flex-col h-full relative w-full bg-slate-950">
        {/* Header Mobile */}
        <header className="md:hidden p-4 bg-slate-900 border-b border-slate-800 flex items-center gap-4 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 bg-slate-800 rounded text-white hover:bg-slate-700 transition"
          >
            <Menu size={20} />
          </button>
          <span className="font-bold text-sm truncate text-slate-100">
            Penyakit Terkait Sistem Peredaran Darah
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
              Penyakit-penyakit Terkait Sistem Peredaran Darah
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
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
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
              <div className="space-y-6">
                <p>
                  Sistem peredaran darah manusia memiliki peran yang sangat
                  vital dalam menjaga kelangsungan hidup, karena berfungsi
                  mengedarkan oksigen, zat makanan, hormon, serta mengangkut
                  sisa metabolisme ke seluruh tubuh. Jika salah satu
                  komponennya, seperti jantung, pembuluh darah, atau darah,
                  mengalami gangguan, maka sirkulasi tubuh dapat terganggu dan
                  menimbulkan berbagai penyakit kardiovaskular yang berbahaya.
                </p>

                {/* BAGIAN DROPDOWN PENYAKIT */}
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Jenis-jenis Gangguan:
                  </h3>

                  {penyakitList.map((penyakit, index) => (
                    <AccordionItem
                      key={penyakit.id}
                      title={penyakit.title}
                      isOpen={openIndex === index}
                      onClick={() => handleToggle(index)}
                    >
                      {penyakit.content}
                    </AccordionItem>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Navigasi */}
          <div className="h-20"></div>
          <div className="max-w-3xl mx-auto mt-4 mb-10 flex justify-between items-center gap-4">
            <Link
              href="/materi/darah"
              className="bg-red-600 px-5 py-3 rounded-lg text-white font-medium hover:bg-red-700 transition-colors duration-200"
            >
              ⬅ Prev
            </Link>
            <Link
              href="/materi/pencegahan"
              className="bg-red-600 px-5 py-3 rounded-lg text-white font-medium hover:bg-red-700 transition-colors duration-200"
            >
              Next ➜
            </Link>
          </div>
        </div>

        {/* --- KOMPONEN MODAL / LIGHTBOX (UPDATED) --- */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)} // Tutup saat klik background
            >
              {/* Tombol Close (X) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 text-white rounded-full hover:bg-red-600 transition-colors border border-white/20"
              >
                <X size={28} />
              </button>

              {/* Container Gambar Fullscreen dengan Next/Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()} // Cegah tutup saat klik gambar
                className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center rounded-lg overflow-hidden"
              >
                <Image
                  src={selectedImage}
                  alt="Detail Penyakit Fullscreen"
                  fill // Fitur fill agar responsif mengikuti container
                  className="object-contain" // Gambar tidak terpotong
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
    </ImagePreviewContext.Provider>
  );
}
