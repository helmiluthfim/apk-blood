"use client";
import {
  Activity,
  Heart,
  Menu,
  ShieldAlert,
  Utensils,
  Brain,
  Moon,
  WeighinScale,
  Stethoscope,
  Scale,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page({ setSidebarOpen }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const tips = [
    {
      icon: <Utensils className="text-green-400" size={22} />,
      title: "Pola Makan Sehat",
      desc: "Konsumsi sayur, buah, biji-bijian; kurangi lemak jenuh, gula, dan garam.",
    },
    {
      icon: <Activity className="text-blue-400" size={22} />,
      title: "Rutin Berolahraga",
      desc: "Minimal 30 menit per hari: jalan kaki, bersepeda, berenang.",
    },
    {
      icon: <ShieldAlert className="text-red-400" size={22} />,
      title: "Hindari Rokok & Alkohol",
      desc: "Merokok merusak pembuluh darah; batasi konsumsi alkohol.",
    },
    {
      icon: <Brain className="text-purple-400" size={22} />,
      title: "Kelola Stres",
      desc: "Meditasi, yoga, dan aktivitas relaksasi menurunkan tekanan darah.",
    },
    {
      icon: <Scale className="text-yellow-400" size={22} />,
      title: "Berat Badan Ideal",
      desc: "Obesitas berisiko hipertensi, diabetes, dan penyakit jantung.",
    },
    {
      icon: <Moon className="text-indigo-400" size={22} />,
      title: "Cukup Tidur",
      desc: "Tidur 7–9 jam membantu memperbaiki sel & kesehatan pembuluh darah.",
    },
    {
      icon: <Stethoscope className="text-teal-400" size={22} />,
      title: "Cek Kesehatan Rutin",
      desc: "Pantau tekanan darah, kolesterol, dan gula darah secara berkala.",
    },
  ];

  return (
    <main className="flex-1 flex flex-col h-full relative w-full">
      <header className="md:hidden p-4 bg-slate-900 border-b border-slate-800 flex items-center gap-4 sticky top-0 z-40 shadow-lg shadow-black/20">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 bg-slate-800 rounded text-white hover:bg-slate-700 transition"
        >
          <Menu size={20} />
        </button>
        <span className="font-bold text-sm truncate text-white">
          Upaya & Pencegahan Penyakit Peredaran Darah
        </span>
      </header>

      <div className="flex-1 overflow-y-auto p-6 md:p-12 scroll-smooth bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider shadow-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              Bab Materi Anatomi
            </span>
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 pb-4 border-b border-slate-800">
            Upaya & Pencegahan Penyakit Pada Peredaran Darah
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Berikut adalah langkah efektif untuk menjaga kesehatan sistem
            peredaran darah, mengurangi risiko penyakit jantung, serta menjaga
            fungsi pembuluh darah tetap optimal.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-slate-800/50 backdrop-blur-md p-5 rounded-xl border border-slate-700 hover:border-slate-500 transition cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-3">
                  {tip.icon}
                  <h3 className="text-slate-100 font-semibold text-base">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {tip.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="h-24" />

        <div className="max-w-4xl mx-auto mt-4 mb-10 flex justify-start items-center">
          <Link
            href="/materi/penyakit"
            className="bg-red-600 px-5 py-3 rounded-lg text-white font-medium hover:bg-red-700 transition shadow-md"
          >
            ⬅ Prev
          </Link>
        </div>
      </div>
    </main>
  );
}
