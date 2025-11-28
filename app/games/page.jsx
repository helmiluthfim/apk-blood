"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gamepad2,
  X,
  BrainCircuit,
  ChevronRight,
  Trophy,
  ThumbsUp,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

// --- DATA KUIS (10 Soal) ---
const rawQuizData = [
  {
    question: "Organ manakah yang berfungsi memompa darah ke seluruh tubuh?",
    options: ["Paru-paru", "Jantung", "Ginjal", "Hati"],
    correct: 1, // Jantung
  },
  {
    question: "Pembuluh darah yang membawa darah KELUAR dari jantung disebut?",
    options: ["Vena", "Kapiler", "Arteri", "Aorta"],
    correct: 2, // Arteri
  },
  {
    question: "Sel darah yang berfungsi mengangkut oksigen adalah?",
    options: ["Leukosit", "Trombosit", "Eritrosit", "Plasma"],
    correct: 2, // Eritrosit
  },
  {
    question: "Penyakit tekanan darah tinggi sering disebut sebagai?",
    options: ["Anemia", "Hipertensi", "Leukemia", "Hemofilia"],
    correct: 1, // Hipertensi
  },
  {
    question: "Berapa jumlah ruangan pada jantung manusia?",
    options: ["Dua", "Tiga", "Empat", "Lima"],
    correct: 2, // Empat
  },
  {
    question:
      "Komponen darah yang berfungsi dalam proses pembekuan darah saat luka adalah?",
    options: ["Plasma Darah", "Eritrosit", "Leukosit", "Trombosit"],
    correct: 3, // Trombosit
  },
  {
    question:
      "Sel darah putih yang bertugas melawan infeksi kuman penyakit disebut?",
    options: ["Leukosit", "Eritrosit", "Trombosit", "Hemoglobin"],
    correct: 0, // Leukosit
  },
  {
    question:
      "Pembuluh darah yang mengalirkan darah KEMBALI menuju jantung adalah?",
    options: ["Arteri", "Vena", "Aorta", "Kapiler"],
    correct: 1, // Vena
  },
  {
    question: "Penyakit keturunan dimana darah sukar membeku disebut?",
    options: ["Anemia", "Leukemia", "Varises", "Hemofilia"],
    correct: 3, // Hemofilia
  },
  {
    question:
      "Arteri terbesar dalam tubuh manusia yang keluar langsung dari bilik kiri jantung adalah?",
    options: ["Vena Cava", "Aorta", "Arteri Pulmonalis", "Vena Pulmonalis"],
    correct: 1, // Aorta
  },
];

export default function GamesPage() {
  // State Management
  const [gameState, setGameState] = useState("start"); // 'start', 'playing', 'result'
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // --- LOGIC FUNCTIONS ---

  // Fungsi untuk mengacak array (Fisher-Yates Shuffle)
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const startQuiz = () => {
    // Acak soal setiap kali kuis dimulai
    const questions = shuffleArray(rawQuizData);
    setShuffledQuestions(questions);

    setScore(0);
    setCurrentQIndex(0);
    setGameState("playing");
  };

  const handleAnswer = (selectedIndex) => {
    // Gunakan shuffledQuestions, bukan rawQuizData
    const currentQuestion = shuffledQuestions[currentQIndex];
    const isCorrect = selectedIndex === currentQuestion.correct;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Delay sedikit agar user merasa tombol ditekan, lalu pindah soal
    setTimeout(() => {
      if (currentQIndex < shuffledQuestions.length - 1) {
        setCurrentQIndex((prev) => prev + 1);
      } else {
        setGameState("result");
      }
    }, 200);
  };

  const getResultFeedback = () => {
    // Total skor maksimal = 10 soal * 10 poin = 100
    // Atau sesuaikan bobot jika ingin tetap 20 poin per soal (total 200)
    // Di sini saya ubah bobot menjadi 10 agar total 100
    const finalScore = score * 10;

    if (finalScore >= 80) {
      return {
        icon: <Trophy size={40} />,
        color: "bg-green-500",
        shadow: "shadow-green-500/30",
        text: "text-green-400",
        message: "Luar Biasa! Kamu sangat memahami materi ini.",
      };
    } else if (finalScore >= 60) {
      return {
        icon: <ThumbsUp size={40} />,
        color: "bg-yellow-500",
        shadow: "shadow-yellow-500/30",
        text: "text-yellow-400",
        message: "Bagus! Tingkatkan lagi belajarmu.",
      };
    } else {
      return {
        icon: <BookOpen size={40} />,
        color: "bg-red-500",
        shadow: "shadow-red-500/30",
        text: "text-red-400",
        message: "Jangan menyerah, yuk baca materinya lagi!",
      };
    }
  };

  // --- RENDER HELPERS ---
  const feedback = gameState === "result" ? getResultFeedback() : null;
  // Pastikan shuffledQuestions tidak kosong untuk menghindari error render awal (div by zero)
  const totalQuestions = shuffledQuestions.length || rawQuizData.length;
  const progressPercent = (currentQIndex / totalQuestions) * 100;

  // Helper untuk mendapatkan pertanyaan saat ini dengan aman
  const currentQuestionData = shuffledQuestions[currentQIndex];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* HEADER */}
      <div className="p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center z-10">
        <h2 className="font-bold text-lg flex items-center gap-2">
          <Gamepad2 className="text-blue-500" /> Kuis Evaluasi
        </h2>
        <Link
          href="/"
          className="p-2 hover:bg-slate-800 rounded text-slate-400 transition-colors"
        >
          <X size={20} />
        </Link>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full relative">
        <AnimatePresence mode="wait">
          {/* 1. START SCREEN */}
          {gameState === "start" && (
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-6 w-full"
            >
              <div className="bg-blue-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto text-blue-500 mb-4 ring-4 ring-blue-500/10">
                <BrainCircuit size={48} />
              </div>
              <h3 className="text-3xl font-bold text-white">Uji Pemahamanmu</h3>
              <p className="text-slate-400 leading-relaxed">
                Jawab 10 pertanyaan acak seputar sistem peredaran darah untuk
                menguji pengetahuanmu.
              </p>
              <button
                onClick={startQuiz}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl font-bold text-white shadow-lg shadow-blue-900/20 transition-all transform active:scale-95"
              >
                Mulai Kuis
              </button>
            </motion.div>
          )}

          {/* 2. QUESTION SCREEN */}
          {gameState === "playing" && currentQuestionData && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full space-y-6"
            >
              {/* Stats Bar */}
              <div className="flex justify-between text-sm text-slate-400 font-mono bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                <span>
                  Soal <span className="text-white">{currentQIndex + 1}</span>/
                  <span className="text-slate-500">{totalQuestions}</span>
                </span>
                <span>
                  Skor Sementara:{" "}
                  <span className="text-blue-400">{score * 10}</span>
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-blue-500 h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Question Text */}
              <div className="min-h-[100px] flex items-center">
                <h3 className="text-xl md:text-2xl font-bold leading-relaxed text-slate-100">
                  {currentQuestionData.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestionData.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full p-4 text-left bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 rounded-xl transition-all active:scale-95 flex justify-between items-center group"
                  >
                    <span className="font-medium text-slate-200 group-hover:text-white">
                      {option}
                    </span>
                    <ChevronRight
                      size={16}
                      className="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* 3. RESULT SCREEN */}
          {gameState === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 w-full"
            >
              <div className="bg-slate-900/80 backdrop-blur p-8 rounded-3xl border border-slate-800 shadow-2xl">
                {/* Score Icon */}
                <div
                  className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 text-white ${feedback.color} ${feedback.shadow} shadow-lg ring-4 ring-white/10`}
                >
                  {feedback.icon}
                </div>

                <h3 className="text-slate-400 uppercase tracking-widest text-xs font-bold mb-2">
                  Skor Akhir Kamu
                </h3>

                {/* Animated Number (Simple implementation) */}
                <div className="text-6xl font-black text-white mb-4 tracking-tight">
                  {score * 10}
                </div>

                <p className={`mb-8 font-medium text-lg ${feedback.text}`}>
                  {feedback.message}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={startQuiz}
                    className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl font-bold transition-colors text-white"
                  >
                    Ulangi Kuis
                  </button>
                  <Link
                    href="/"
                    className="flex-1 py-3 bg-white text-slate-900 hover:bg-slate-200 rounded-xl font-bold transition-colors shadow-lg"
                  >
                    Menu Utama
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
