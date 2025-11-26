"use client";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import peredaranDarahImage from "../../../../public/peredaranDarah.png";

export default function Page({ setSidebarOpen }) {
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

              {/* Tempat gambar */}
              <motion.div variants={itemVariants} className="mb-12 group">
                <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60" />
                  <Image
                    src={peredaranDarahImage}
                    alt="Anatomi Jantung"
                    width={2000}
                    height={1200}
                    className="w-full h-auto max-h-[450px] object-contain md:object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <p className="text-white font-medium text-sm bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg inline-block border border-white/10">
                      Visualisasi Anatomi Jantung
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
            next ➜
          </Link>
        </div>
      </div>
    </main>
  );
}
