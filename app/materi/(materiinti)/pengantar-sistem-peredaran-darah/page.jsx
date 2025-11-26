"use client";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

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
                Tubuh manusia merupakan sistem yang kompleks. Sistem peredaran
                darah berfungsi seperti jaringan transportasi yang mengalirkan
                oksigen, zat makanan, hormon, dan zat penting lainnya ke seluruh
                sel tubuh.
              </p>
              <p>
                Selain itu, sistem ini bertugas mengambil sisa metabolisme
                seperti karbon dioksida dan urea untuk dibuang melalui paru-paru
                dan ginjal. Jantung berdetak sekitar 70 kali per menit untuk
                menjaga aliran ini tetap stabil.
              </p>

              {/* Tempat gambar */}
              <div className="w-full h-48 bg-slate-800 rounded-xl border-2 border-dashed border-slate-600 flex items-center justify-center text-slate-500 mb-4">
                [TEMPAT GAMBAR: Diagram Sistem Peredaran Darah]
              </div>

              <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-800">
                <h4 className="font-bold text-blue-300 mb-2">Fungsi Utama:</h4>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>Mengalirkan nutrisi dan oksigen.</li>
                  <li>Mengangkut sisa metabolisme (CO₂).</li>
                  <li>Menjaga suhu tubuh dan keseimbangan pH.</li>
                </ul>
              </div>
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
