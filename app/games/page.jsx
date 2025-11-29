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
  Timer,
  Flame,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// --- DATA KUIS PREMIUM (10 Soal + Pembahasan) ---
const rawQuizData = [
  {
    question: "Organ manakah yang berfungsi memompa darah ke seluruh tubuh?",
    options: ["Paru-paru", "Jantung", "Ginjal", "Hati"],
    correct: 1,
    explanation:
      "Jantung bertindak sebagai pompa ganda yang mengalirkan darah kaya oksigen ke seluruh tubuh dan darah miskin oksigen ke paru-paru.",
  },
  {
    question: "Pembuluh darah yang membawa darah KELUAR dari jantung disebut?",
    options: ["Vena", "Kapiler", "Arteri", "Aorta"],
    correct: 2,
    explanation:
      "Arteri (pembuluh nadi) selalu membawa darah menjauhi jantung, sedangkan Vena membawa darah menuju jantung.",
  },
  {
    question: "Sel darah yang berfungsi mengangkut oksigen adalah?",
    options: ["Leukosit", "Trombosit", "Eritrosit", "Plasma"],
    correct: 2,
    explanation:
      "Eritrosit (Sel Darah Merah) mengandung hemoglobin yang berfungsi mengikat dan mengedarkan oksigen.",
  },
  {
    question: "Penyakit tekanan darah tinggi sering disebut sebagai?",
    options: ["Anemia", "Hipertensi", "Leukemia", "Hemofilia"],
    correct: 1,
    explanation:
      "Hipertensi adalah kondisi medis kronis di mana tekanan darah di arteri meningkat.",
  },
  {
    question: "Berapa jumlah ruangan pada jantung manusia?",
    options: ["Dua", "Tiga", "Empat", "Lima"],
    correct: 2,
    explanation:
      "Jantung manusia terdiri dari 4 ruang: Serambi Kanan, Serambi Kiri, Bilik Kanan, dan Bilik Kiri.",
  },
  {
    question:
      "Komponen darah yang berfungsi dalam proses pembekuan darah saat luka adalah?",
    options: ["Plasma Darah", "Eritrosit", "Leukosit", "Trombosit"],
    correct: 3,
    explanation:
      "Trombosit (keping darah) akan pecah saat menyentuh permukaan kasar (luka) dan mengeluarkan enzim trombokinase untuk pembekuan.",
  },
  {
    question:
      "Sel darah putih yang bertugas melawan infeksi kuman penyakit disebut?",
    options: ["Leukosit", "Eritrosit", "Trombosit", "Hemoglobin"],
    correct: 0,
    explanation:
      "Leukosit (Sel Darah Putih) adalah bagian utama dari sistem kekebalan tubuh untuk melawan infeksi.",
  },
  {
    question:
      "Pembuluh darah yang mengalirkan darah KEMBALI menuju jantung adalah?",
    options: ["Arteri", "Vena", "Aorta", "Kapiler"],
    correct: 1,
    explanation:
      "Vena (pembuluh balik) memiliki katup-katup yang menjaga agar darah mengalir satu arah kembali ke jantung.",
  },
  {
    question: "Penyakit keturunan dimana darah sukar membeku disebut?",
    options: ["Anemia", "Leukemia", "Varises", "Hemofilia"],
    correct: 3,
    explanation:
      "Hemofilia adalah gangguan genetik di mana darah kekurangan faktor pembekuan, sehingga luka sulit menutup.",
  },
  {
    question:
      "Arteri terbesar dalam tubuh manusia yang keluar langsung dari bilik kiri jantung adalah?",
    options: ["Vena Cava", "Aorta", "Arteri Pulmonalis", "Vena Pulmonalis"],
    correct: 1,
    explanation:
      "Aorta adalah pembuluh arteri utama dan terbesar yang mengalirkan darah bersih dari jantung ke seluruh tubuh.",
  },
];

export default function GamesPage({ onBack }) {
  // State Management
  const [gameState, setGameState] = useState("start"); // 'start', 'playing', 'result'
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Premium Features State
  const [timeLeft, setTimeLeft] = useState(15);
  const [isAnswered, setIsAnswered] = useState(false); // Untuk stop timer & show explanation
  const [selectedOption, setSelectedOption] = useState(null);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  // --- LOGIC FUNCTIONS ---

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const startQuiz = () => {
    const questions = shuffleArray(rawQuizData);
    setShuffledQuestions(questions);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCurrentQIndex(0);
    setTimeLeft(15);
    setIsAnswered(false);
    setSelectedOption(null);
    setGameState("playing");
  };

  // Timer Logic
  useEffect(() => {
    if (gameState === "playing" && !isAnswered && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      handleTimeOut();
    }
  }, [timeLeft, gameState, isAnswered]);

  const handleTimeOut = () => {
    setIsAnswered(true);
    setStreak(0); // Reset streak jika waktu habis
    // Otomatis salah, tidak nambah skor
  };

  const handleAnswer = (selectedIndex) => {
    if (isAnswered) return; // Mencegah klik ganda

    setIsAnswered(true);
    setSelectedOption(selectedIndex);

    const currentQuestion = shuffledQuestions[currentQIndex];
    const isCorrect = selectedIndex === currentQuestion.correct;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setStreak((prev) => {
        const newStreak = prev + 1;
        if (newStreak > maxStreak) setMaxStreak(newStreak);
        return newStreak;
      });
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQIndex < shuffledQuestions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setTimeLeft(15); // Reset Timer
      setIsAnswered(false);
      setSelectedOption(null);
    } else {
      setGameState("result");
    }
  };

  const getResultFeedback = () => {
    const finalScore = score * 10;

    if (finalScore >= 80) {
      return {
        icon: <Trophy size={48} />,
        color: "bg-green-500",
        shadow: "shadow-green-500/30",
        text: "text-green-400",
        message: "Luar Biasa! Kamu ahli sistem peredaran darah.",
      };
    } else if (finalScore >= 60) {
      return {
        icon: <ThumbsUp size={48} />,
        color: "bg-yellow-500",
        shadow: "shadow-yellow-500/30",
        text: "text-yellow-400",
        message: "Bagus! Pengetahuanmu cukup solid.",
      };
    } else {
      return {
        icon: <BookOpen size={48} />,
        color: "bg-red-500",
        shadow: "shadow-red-500/30",
        text: "text-red-400",
        message: "Jangan menyerah, yuk pelajari materinya lagi!",
      };
    }
  };

  // --- RENDER HELPERS ---
  const currentQuestionData = shuffledQuestions[currentQIndex];
  const totalQuestions = shuffledQuestions.length || rawQuizData.length;
  const progressPercent = ((currentQIndex + 1) / totalQuestions) * 100;
  const timerPercent = (timeLeft / 15) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden font-sans relative">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* HEADER */}
      <div className="p-4 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex justify-between items-center z-20 sticky top-0">
        <h2 className="font-bold text-lg flex items-center gap-2">
          <Gamepad2 className="text-blue-500" />
          <span className="hidden sm:inline">Kuis Evaluasi</span>
        </h2>

        {/* Top Stats (Only show when playing) */}
        {gameState === "playing" && (
          <div className="flex items-center gap-4 text-sm font-bold">
            <div className="flex items-center gap-1 text-orange-400">
              <Flame
                size={18}
                className={streak > 1 ? "animate-pulse" : ""}
                fill={streak > 0 ? "currentColor" : "none"}
              />
              <span>{streak}</span>
            </div>
            <div className="flex items-center gap-1 text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              <span>Skor: {score * 10}</span>
            </div>
          </div>
        )}

        <Link
          href="/"
          className="p-2 hover:bg-slate-800 rounded-full text-slate-400 transition-colors"
        >
          <X size={20} />
        </Link>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 max-w-2xl mx-auto w-full relative z-10">
        <AnimatePresence mode="wait">
          {/* 1. START SCREEN */}
          {gameState === "start" && (
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8 w-full"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-28 h-28 rounded-3xl flex items-center justify-center mx-auto text-white shadow-2xl shadow-blue-500/20 transform rotate-3">
                  <BrainCircuit size={56} />
                </div>
                <div className="absolute -z-10 top-2 left-1/2 -translate-x-1/2 w-28 h-28 bg-blue-600/50 rounded-3xl blur-xl"></div>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                  Tantangan Pengetahuan
                </h3>
                <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
                  Uji pemahamanmu tentang sistem peredaran darah. <br />
                  <span className="text-blue-400 font-semibold">
                    10 Soal • 15 Detik/Soal • Mode Acak
                  </span>
                </p>
              </div>

              <button
                onClick={startQuiz}
                className="w-full py-4 bg-white text-slate-900 hover:bg-slate-200 rounded-2xl font-bold text-lg shadow-xl shadow-white/5 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
              >
                Mulai Sekarang <ArrowRight size={20} />
              </button>
            </motion.div>
          )}

          {/* 2. QUESTION SCREEN */}
          {gameState === "playing" && currentQuestionData && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col gap-6"
            >
              {/* Progress & Timer */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <span>Progress Soal</span>
                  <span>
                    {currentQIndex + 1} / {totalQuestions}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Timer Bar */}
              <div className="relative h-14 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center px-4 overflow-hidden">
                <div
                  className="absolute left-0 bottom-0 h-1 bg-red-500 transition-all duration-1000 ease-linear"
                  style={{ width: `${timerPercent}%` }}
                />
                <Timer
                  size={20}
                  className={
                    timeLeft <= 5
                      ? "text-red-500 animate-pulse"
                      : "text-slate-400"
                  }
                />
                <span
                  className={`ml-3 font-mono text-xl font-bold ${
                    timeLeft <= 5 ? "text-red-500" : "text-white"
                  }`}
                >
                  00:{timeLeft.toString().padStart(2, "0")}
                </span>
                {isAnswered && (
                  <span className="ml-auto text-xs font-bold bg-slate-800 px-2 py-1 rounded text-slate-400">
                    {timeLeft === 0 ? "Waktu Habis" : "Waktu Berhenti"}
                  </span>
                )}
              </div>

              {/* Question Card */}
              <div className="min-h-[120px] flex items-center justify-center text-center py-4">
                <h3 className="text-xl md:text-2xl font-bold leading-relaxed text-slate-100">
                  {currentQuestionData.question}
                </h3>
              </div>

              {/* Options Grid */}
              <div className="grid gap-3">
                {currentQuestionData.options.map((option, index) => {
                  // Determine state styles
                  let stateClass =
                    "bg-slate-800 border-slate-700 hover:bg-slate-700";
                  let icon = (
                    <ChevronRight
                      size={18}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  );

                  if (isAnswered) {
                    if (index === currentQuestionData.correct) {
                      stateClass =
                        "bg-green-500/20 border-green-500 text-green-200 ring-1 ring-green-500";
                      icon = (
                        <CheckCircle2 size={20} className="text-green-500" />
                      );
                    } else if (index === selectedOption) {
                      stateClass = "bg-red-500/20 border-red-500 text-red-200";
                      icon = <XCircle size={20} className="text-red-500" />;
                    } else {
                      stateClass =
                        "bg-slate-800/50 border-slate-800 text-slate-500 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={isAnswered}
                      className={`w-full p-4 rounded-xl border text-left font-medium transition-all duration-200 flex justify-between items-center group ${stateClass} ${
                        !isAnswered && "active:scale-[0.98]"
                      }`}
                    >
                      {option}
                      {icon}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next Button */}
              <AnimatePresence>
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400 mt-1">
                        <BookOpen size={18} />
                      </div>
                      <div className="text-sm text-slate-300 leading-relaxed">
                        <strong className="text-blue-400 block mb-1">
                          Pembahasan:
                        </strong>
                        {currentQuestionData.explanation}
                      </div>
                    </div>

                    <button
                      onClick={nextQuestion}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold shadow-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {currentQIndex < shuffledQuestions.length - 1
                        ? "Soal Selanjutnya"
                        : "Lihat Hasil"}{" "}
                      <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* 3. RESULT SCREEN */}
          {gameState === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center w-full max-w-md mx-auto"
            >
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Decor */}
                <div
                  className={`absolute top-0 left-0 w-full h-2 ${
                    getResultFeedback().color
                  }`}
                />

                <div
                  className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 text-white ${
                    getResultFeedback().color
                  } ${
                    getResultFeedback().shadow
                  } shadow-lg ring-4 ring-white/10`}
                >
                  {getResultFeedback().icon}
                </div>

                <div className="space-y-1 mb-6">
                  <h3 className="text-slate-400 uppercase tracking-widest text-xs font-bold">
                    Skor Akhir
                  </h3>
                  <div className="text-6xl font-black text-white tracking-tighter">
                    {score * 10}
                  </div>
                  <div className="text-sm font-medium text-slate-500">
                    Streak Terbaik:{" "}
                    <span className="text-orange-400 font-bold">
                      {maxStreak} 🔥
                    </span>
                  </div>
                </div>

                <p
                  className={`mb-8 font-medium text-lg px-4 py-2 rounded-lg bg-slate-800/50 ${
                    getResultFeedback().text
                  }`}
                >
                  "{getResultFeedback().message}"
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={startQuiz}
                    className="w-full py-3.5 bg-white text-slate-900 hover:bg-slate-200 rounded-xl font-bold transition-all shadow-lg active:scale-95"
                  >
                    Coba Lagi
                  </button>
                  <Link
                    href="/"
                    className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold transition-colors"
                  >
                    Kembali ke Menu
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
