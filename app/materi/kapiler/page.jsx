"use client";
import { Menu, Heart, Shield, Activity, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import kapilerImage from "../../../public/kapiler.jpg";
import Link from "next/link";

// Variabel animasi untuk efek muncul bertahap
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Page({ setSidebarOpen }) {
  return (
    <main className="flex-1 flex flex-col h-full relative w-full bg-slate-950 text-slate-200 selection:bg-red-500/30">
      {/* Background Gradient Spot - Memberikan atmosfer kedalaman */}
      <div className="fixed top-0 left-0 w-full h-96 bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Mobile - Glass Effect */}
      <header className="md:hidden px-6 py-4 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex items-center gap-4 sticky top-0 z-40">
        <button
          onClick={() => setSidebarOpen(true)}
          className="px-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-white transition-colors"
        >
          <Menu size={20} />
        </button>
        <span className="font-bold text-lg tracking-tight text-white">
          Kapiler.
        </span>
      </header>

      {/* Content Scroll */}
      <div className="flex-1 overflow-y-auto scroll-smooth">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto p-6 md:p-12 relative z-10"
        >
          {/* Breadcrumb / Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider shadow-sm shadow-red-900/20">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Bab Materi Anatomi
            </span>
          </motion.div>

          {/* Title Section */}
          <motion.div variants={itemVariants} className="mb-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6 tracking-tight">
              Pembuluh Kapiler
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl border-l-2 border-slate-700 pl-6">
              Pembuluh kapiler adalah pembuluh darah halus dan sangat kecil yang
              menghubungkan ujung arteriol (cabang kecil arteri) dengan ujung
              venula (cabang kecil vena). Fungsi utama kapiler adalah tempat
              terjadinya pertukaran zat antara darah dan sel-sel tubuh. Kapiler
              dapat diibaratkan sebagai jembatan penghubung antara sistem
              pembuluh darah yang membawa darah dari jantung (arteri) dengan
              sistem yang mengembalikan darah ke jantung (vena).
            </p>
          </motion.div>

          {/* Main Image Section with Modern Frame */}
          <motion.div variants={itemVariants} className="mb-12 group">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60" />
              <Image
                src={kapilerImage}
                alt="Anatomi Jantung"
                width={2000}
                height={1000}
                className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <p className="text-white font-medium text-sm bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg inline-block border border-white/10">
                  Visualisasi Anatomi Kapiler
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bento Grid Layout untuk Materi */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Card 1: Struktur */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:border-slate-600 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/20 transition-colors">
                <Shield size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Struktur Kapiler
              </h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>
                    <strong>Dinding Sangat Tipis:</strong> Terdiri dari satu
                    lapisan sel endotelium, memungkinkan pertukaran zat dengan
                    mudah.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>
                    <strong>Jaringan Jala:</strong> Membentuk jaringan halus
                    yang menghubungkan arteri dan vena.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Card 2: Fungsi (Arteri vs Vena logic from original text) */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:border-slate-600 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <Activity size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Fungsi Utama
              </h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>
                    <strong>Pertukaran Zat:</strong> Tempat di mana pertukaran
                    gas (oksigen dan karbon dioksida), nutrisi, dan limbah
                    terjadi antara darah dan sel-sel tubuh.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>
                    <strong>Regulasi Aliran Darah:</strong> Menyesuaikan aliran
                    darah berdasarkan kebutuhan jaringan.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Modern Table Section */}
          <motion.div variants={itemVariants} className="w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-red-500 rounded-full" />
              <h2 className="text-2xl font-bold text-white">
                Jenis-jenis Pembuluh Kapiler
              </h2>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              {/* Desktop Header */}
              <div className="hidden md:grid grid-cols-12 bg-slate-800/50 border-b border-slate-700 text-sm font-semibold text-slate-300 uppercase tracking-wider">
                <div className="col-span-3 px-6 py-4">Jenis Kapiler</div>
                <div className="col-span-5 px-6 py-4 border-l border-slate-700/50">
                  Penyebab
                </div>
                <div className="col-span-4 px-6 py-4 border-l border-slate-700/50">
                  Dampak Klinis
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-slate-800">
                {[
                  {
                    jenis: "Kapiler kontinu",
                    "ciri-ciri":
                      "Dindingnya utuh tanpa celah besar, hanya memungkinkan pertukaran molekul kecil",
                    contoh: "Otot, kulit, otak",
                  },
                  {
                    jenis: "Kapiler fenestrata",
                    "ciri-ciri":
                      "Memiliki pori-pori kecil (fenestra) untuk melewatkan zat berukuran sedang",
                    contoh: "Ginjal, usus, kelenjar endokrin",
                  },
                  {
                    jenis: "Kapiler sinusoid (disontinu)",
                    "ciri-ciri":
                      "Memiliki celah besar di antara sel-sel endotel untuk melewatkan sel darah dan molekul besar",
                    contoh: "Hati, limpa, sumsum tulang",
                  },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-12 hover:bg-slate-800/30 transition-colors group"
                  >
                    {/* Mobile Label displayed as content in mobile view handled via css classes mostly or explicit structure */}

                    {/* Col 1: Jenis Kapiler */}
                    <div className="col-span-3 px-6 py-4 flex items-center">
                      <div className="md:hidden w-24 shrink-0 text-slate-500 text-xs font-bold uppercase mr-2">
                        Jenis Kapiler
                      </div>
                      <span className="font-semibold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity" />
                        {row.jenis}
                      </span>
                    </div>

                    {/* Col 2: Penyebab */}
                    <div className="col-span-5 px-6 py-2 md:py-4 text-slate-400 text-sm md:text-base md:border-l md:border-slate-800/50 flex items-center">
                      <div className="md:hidden w-24 shrink-0 text-slate-500 text-xs font-bold uppercase mr-2">
                        Ciri-Ciri
                      </div>
                      {row["ciri-ciri"]}
                    </div>

                    {/* Col 3: Dampak */}
                    <div className="col-span-4 px-6 py-2 md:py-4 text-slate-400 text-sm md:text-base md:border-l md:border-slate-800/50 flex items-center mb-2 md:mb-0">
                      <div className="md:hidden w-24 shrink-0 text-slate-500 text-xs font-bold uppercase mr-2">
                        Contoh Lokasi
                      </div>
                      {row.contoh}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="h-32"></div>
          <div className="max-w-3xl mx-auto mt-4 mb-10 flex justify-between items-center gap-4">
            <Link
              href="/materi/vena"
              className="bg-red-600 px-5 py-3 rounded-lg text-white font-medium hover:bg-red-700 transition-colors duration-200"
            >
              ⬅ Previous
            </Link>
            <Link
              href="/materi/darah"
              className="bg-red-600 px-5 py-3 rounded-lg text-white font-medium hover:bg-red-700 transition-colors duration-200"
            >
              next ➜
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
