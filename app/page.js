"use client";
import { motion } from "framer-motion";
import { BookOpen, Gamepad2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 p-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 max-w-2xl w-full"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-blue-500 mb-4">
          Blood Flow
        </h1>
        <p className="text-slate-400 mb-12 text-lg">
          Media Pembelajaran Interaktif Tubuh Manusia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              router.push("/materi/pengantar-sistem-peredaran-darah")
            }
            className="group relative p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-red-500/50 transition-all shadow-2xl flex flex-col items-center gap-4 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="bg-red-500/20 p-4 rounded-full text-red-500">
              <BookOpen size={48} />
            </div>
            <h2 className="text-2xl font-bold text-white">Materi</h2>
            <p className="text-slate-400 text-sm">
              Pelajari anatomi jantung, darah, dan penyakit terkait.
            </p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/games")}
            className="group relative p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all shadow-2xl flex flex-col items-center gap-4 overflow-hidden"
          >
            {/* FIX: bg-linear-to-br diganti menjadi bg-gradient-to-br */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="bg-blue-500/20 p-4 rounded-full text-blue-500">
              <Gamepad2 size={48} />
            </div>
            <h2 className="text-2xl font-bold text-white">Games</h2>
            <p className="text-slate-400 text-sm">
              Uji pemahamanmu melalui permainan interaktif.
            </p>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
