"use client";
import { ArrowLeft, Gamepad2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center p-6">
      <div className="bg-slate-900 p-12 rounded-3xl border border-slate-800 shadow-2xl max-w-lg w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

        <div className="bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-600">
          <Gamepad2 size={40} />
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">Segera Hadir</h2>
        <p className="text-slate-400 mb-8">
          Modul permainan interaktif sedang dalam pengembangan. Silakan pelajari
          materi terlebih dahulu.
        </p>

        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold transition-all flex items-center justify-center gap-2 mx-auto hover:bg-slate-200 hover:scale-[1.03] active:scale-[0.98]"
        >
          <ArrowLeft size={20} /> Kembali ke Menu
        </button>
      </div>
    </div>
  );
}
