"use client";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import AccordionItem from "@/app/components/AccordionItem";
import penyakitList from "@/app/data/penyakitList";

// --- PERBAIKAN DISINI: Import Context ---
// Pastikan path ini sesuai dengan lokasi file yang Anda buat di Langkah 1
import { ImagePreviewContext } from "@/app/components/ImageContext";

export default function Page({ setSidebarOpen }) {
  const [openIndex, setOpenIndex] = useState(null);

  // STATE: Untuk menyimpan URL gambar yang sedang dibuka
  const [selectedImage, setSelectedImage] = useState(null);

  const getImageSrc = (img) => {
    if (!img) return null;
    return typeof img === "string" ? img : img.src;
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // WRAPPER PROVIDER
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

            <div className="prose prose-invert prose-lg text-slate-300 leading-relaxed">
              <div className="space-y-6">
                <p>
                  Sistem peredaran darah manusia memiliki peran yang sangat
                  vital dalam menjaga kelangsungan hidup...
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
              href="/materi/vena"
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

        {/* --- KOMPONEN MODAL / LIGHTBOX --- */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition z-50"
              >
                <X size={28} />
              </button>

              <motion.img
                // Gunakan helper function untuk memastikan src string yang benar
                src={getImageSrc(selectedImage)}
                alt="Full preview"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </ImagePreviewContext.Provider>
  );
}
