"use client";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import jantungImage from "../../../public/jantung.jpg";
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
        <span className="font-bold text-sm truncate">
          Jantung: Sang Pompa Utama
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
          <div className="mb-6 flex items-center gap-3 text-red-500">
            <span className="text-slate-500 text-sm font-mono uppercase tracking-wider">
              Bab Materi
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
            Jantung: Sang Pompa Utama
          </h1>

          <div className="prose prose-invert prose-lg text-slate-300 leading-relaxed">
            <div className="space-y-4">
              <p>
                Jantung adalah organ berotot yang berfungsi sebagai pompa utama
                sistem peredaran darah manusia. Jantung bekerja terus-menerus
                untuk memompa darah yang membawa oksigen dan zat gizi ke seluruh
                tubuh, serta mengembalikan darah yang membawa sisa metabolisme
                ke paru-paru dan organ pembuangan.
              </p>
              <p>
                Secara fisiologis, jantung merupakan bagian dari sistem
                kardiovaskular, yang terdiri dari jantung, pembuluh darah, dan
                darah.
              </p>

              {/* Tempat gambar */}
              <motion.div variants={itemVariants} className="mb-12 group">
                <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60" />
                  <Image
                    src={jantungImage}
                    alt="Anatomi Jantung"
                    width={2000}
                    height={1000}
                    className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <p className="text-white font-medium text-sm bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg inline-block border border-white/10">
                      Visualisasi Anatomi Jantung
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">
                    Struktur Jantung
                  </h4>
                  <ul className="text-base text-slate-200 space-y-3 list-disc pl-6">
                    <li>
                      <strong>Empat Ruangan:</strong> Jantung terbagi menjadi
                      dua serambi (Atrium) dan dua bilik (Ventrikel). Serambi
                      kanan dan kiri memisahkan aliran darah ke bilik kanan dan
                      kiri.
                    </li>
                    <li>
                      <strong>Empat Katup:</strong> Katup trikuspid (antara
                      serambi kanan dan bilik kanan), katup pulmonal (antara
                      bilik kanan dan arteri pulmonalis), katup mitral (antara
                      serambi kiri dan bilik kiri), dan katup aorta (antara
                      bilik kiri dan aorta).
                    </li>
                    <li>
                      <strong>Dinding Jantung:</strong> Terdiri dari tiga
                      lapisan: endokardium (lapisan dalam), miokardium (otot
                      jantung), dan epikardium (lapisan luar).
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-bold text-white mb-2">Fungsi Jantung</h4>
                  <ul className="text-base text-slate-200 space-y-3 list-disc pl-6">
                    <li>
                      <strong>Memompa Darah:</strong> Mengedarkan darah kaya
                      oksigen dari paru-paru ke seluruh tubuh dan membawa darah
                      yang mengandung karbon dioksida kembali ke paru-paru untuk
                      pengeluaran.
                    </li>
                    <li>
                      <strong>Siklus Jantung:</strong> Terdapat dua siklus
                      utama: siklus sistolik (kontraksi) dan diastolik
                      (relaksasi), yang memastikan aliran darah yang kontinu dan
                      efisien.
                    </li>
                  </ul>
                </div>
                <div className="overflow-x-auto mt-4">
                  <h4 className="font-bold text-white mb-2">
                    Gangguan Pada Jantung
                  </h4>
                  <table className="w-full border border-slate-600 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-slate-700 text-white">
                        <th className="px-4 py-2 text-left">Penyakit</th>
                        <th className="px-4 py-2 text-left">Keterangan</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-200">
                      <tr className="border-t border-slate-600">
                        <td className="px-4 py-2 font-semibold">
                          Serangan jantung (infark miokard)
                        </td>
                        <td className="px-4 py-2">
                          Terjadi saat aliran darah ke otot jantung tersumbat.
                        </td>
                      </tr>
                      <tr className="border-t border-slate-600">
                        <td className="px-4 py-2 font-semibold">Aritmia</td>
                        <td className="px-4 py-2">
                          Gangguan irama detak jantung (terlalu cepat, lambat,
                          atau tidak teratur).
                        </td>
                      </tr>
                      <tr className="border-t border-slate-600">
                        <td className="px-4 py-2 font-semibold">
                          Gagal jantung
                        </td>
                        <td className="px-4 py-2">
                          Jantung tidak mampu memompa darah dengan efektif.
                        </td>
                      </tr>
                      <tr className="border-t border-slate-600">
                        <td className="px-4 py-2 font-semibold">
                          Penyakit jantung koroner
                        </td>
                        <td className="px-4 py-2">
                          Penyempitan pembuluh darah koroner akibat plak lemak.
                        </td>
                      </tr>
                      <tr className="border-t border-slate-600">
                        <td className="px-4 py-2 font-semibold">
                          Katup jantung bocor
                        </td>
                        <td className="px-4 py-2">
                          Katup tidak menutup sempurna sehingga darah mengalir
                          balik.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="h-20"></div>
        <div className="max-w-3xl mx-auto mt-4 mb-10 flex justify-between items-center gap-4">
          <Link
            href="/materi/pengantar-sistem-peredaran-darah"
            className="bg-red-600 px-5 py-3 rounded-lg text-white font-medium hover:bg-red-700 transition-colors duration-200"
          >
            ⬅ Previous
          </Link>
          <Link
            href="/materi/arteri"
            className="bg-red-600 px-5 py-3 rounded-lg text-white font-medium hover:bg-red-700 transition-colors duration-200"
          >
            next ➜
          </Link>
        </div>
      </div>
    </main>
  );
}
