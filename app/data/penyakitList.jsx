import Image from "next/image";
import { motion } from "framer-motion";
import React, { useContext } from "react";
// Pastikan path import ini sesuai dengan lokasi file context yang Anda buat di Langkah 1
import { ImagePreviewContext } from "@/app/components/ImageContext";

// Import gambar
import aterosklerosisImage from "../../public/aterosklerosis.jpg";
import koronerImage from "../../public/koroner.jpg";
import anemiaImage from "../../public/anemia.jpg";
import leukimiaImage from "../../public/leukimia.jpg";
import hemofiliaImage from "../../public/hemofilia.jpg";

// --- KOMPONEN REUSABLE UNTUK GAMBAR MEDIS ---
// Komponen ini membungkus styling rumit Anda agar kode lebih bersih
// dan menangani logika klik (Lightbox).
const MedicalImage = ({ src, alt, label = "Visualisasi Anatomi" }) => {
  // Mengambil fungsi handleImageClick dari Context
  // Menggunakan optional chaining (?.) untuk mencegah error jika context belum siap
  const context = useContext(ImagePreviewContext);
  const handleImageClick = context?.handleImageClick;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div variants={itemVariants} className="my-6 group cursor-pointer">
      <div
        onClick={(e) => {
          e.stopPropagation(); // Mencegah Accordion menutup saat gambar diklik
          if (handleImageClick) handleImageClick(src);
        }}
        className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60 pointer-events-none" />

        {/* Image */}
        <Image
          src={src}
          alt={alt}
          width={2000}
          height={1200}
          className="w-full h-auto max-h-[450px] object-contain md:object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badge / Label */}
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <div className="flex items-center gap-2">
            <p className="text-white font-medium text-sm bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg inline-block border border-white/10">
              {label}
            </p>
            {/* Indikator Zoom (Muncul saat hover) */}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-600 text-white text-xs px-2 py-1 rounded-lg font-bold">
              Tap to Zoom 🔍
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- DATA LIST ---
const penyakitList = [
  {
    id: "Hipertensi",
    title: "1. Hipertensi (Tekanan Darah Tinggi)",
    content: (
      <p className="mb-4">
        Hipertensi adalah kondisi medis di mana tekanan darah dalam arteri
        meningkat secara kronis. Kondisi ini sering disebut sebagai{" "}
        <strong className="text-red-500">
          &rdquo;pembunuh diam-diam&rdquo;
        </strong>{" "}
        karena sering kali tidak menunjukkan gejala yang jelas tetapi dapat
        menyebabkan masalah kesehatan serius seperti penyakit jantung, stroke,
        dan kerusakan ginjal. penyebab hipertensi tidak ada penyebab yang jelas,
        sering berhubungan dengan faktor genetik, diet, dan gaya hidup selain
        itu disebabkan oleh kondisi medis lain seperti penyakit ginjal, masalah
        hormonal, penggunaan obat tertentu, atau kondisi jantung tertentu.
      </p>
    ),
  },
  {
    id: "Aterosklerosis",
    title: "2. Aterosklerosis",
    content: (
      <>
        <p>
          Aterosklerosis adalah kondisi di mana plak lemak menumpuk di dinding
          arteri, menyebabkan penyempitan dan pengerasan arteri. Kondisi ini
          dapat mengganggu aliran darah dan berisiko menyebabkan berbagai
          komplikasi serius seperti penyakit jantung, stroke, dan penyakit
          arteri perifer.
        </p>

        {/* Menggunakan Komponen MedicalImage */}
        <MedicalImage
          src={aterosklerosisImage}
          alt="Anatomi Aterosklerosis"
          label="Visualisasi Anatomi Aterosklerosis"
        />

        <p>
          Penyebab Aterosklerosis adalah Kolesterol Tinggi: Kadar kolesterol LDL
          yang tinggi dapat menyebabkan pembentukan plak, Hipertensi: Tekanan
          darah tinggi dapat merusak dinding arteri, mempermudah pembentukan
          plak, Merokok: Bahan kimia dalam rokok dapat merusak lapisan dalam
          arteri, Diabetes: Kadar gula darah tinggi dapat merusak dinding
          arteri, Peradangan: Kondisi seperti arthritis atau infeksi tertentu
          dapat menyebabkan peradangan kronis yang merusak arteri, Faktor
          Genetik: Riwayat keluarga dengan penyakit jantung atau aterosklerosis
          meningkatkan risiko.
        </p>
      </>
    ),
  },
  {
    id: "Penyakit Jantung Koroner",
    title: "3. Penyakit Jantung Koroner",
    content: (
      <>
        <p>
          Kondisi di mana arteri koroner yang memasok darah ke otot jantung
          menjadi menyempit atau tersumbat akibat penumpukan plak lemak. Hal ini
          dapat mengurangi aliran darah yang kaya oksigen ke jantung dan
          menyebabkan berbagai masalah kardiovaskular.
        </p>

        <MedicalImage
          src={koronerImage}
          alt="Anatomi Penyakit Jantung Koroner"
          label="Visualisasi Anatomi Jantung Koroner"
        />

        <p>
          Gejala penyakit jantung coroner Rasa nyeri atau ketidaknyamanan di
          dada yang mungkin menjalar ke lengan, leher, rahang, bahu, atau
          punggung, Sesak Napas, Palpitasi, Kelelahan Ekstrem.
        </p>
      </>
    ),
  },
  {
    id: "Anemia",
    title: "4. Anemia",
    content: (
      <>
        <p>
          Kondisi medis di mana tubuh kekurangan jumlah sel darah merah atau
          hemoglobin yang cukup untuk mengangkut oksigen ke seluruh tubuh.
        </p>

        <MedicalImage
          src={anemiaImage}
          alt="Anatomi Anemia"
          label="Visualisasi Anatomi Anemia"
        />

        <p>
          Penyebab Anemia adalah Kekurangan Zat Besi, Kekurangan Vitamin B12,
          Penyakit Kronis, atau Kelainan Genetik.
        </p>
      </>
    ),
  },
  {
    id: "Leukemia",
    title: "5. Leukemia",
    content: (
      <>
        <p>
          Leukemia adalah jenis kanker yang mempengaruhi jaringan pembentuk
          darah, termasuk sumsum tulang dan sistem limfatik. Kondisi ini
          ditandai oleh produksi berlebihan sel darah putih abnormal.
        </p>

        <MedicalImage
          src={leukimiaImage}
          alt="Anatomi Leokimia"
          label="Visualisasi Anatomi Leukimia"
        />

        <p>
          Penyebab pasti leukemia tidak selalu diketahui, tetapi faktor risiko
          meliputi Genetik, Radiasi, dan Paparan Bahan Kimia.
        </p>
      </>
    ),
  },
  {
    id: "Hemofilia",
    title: "6. Hemofilia",
    content: (
      <>
        <p>
          Kelainan genetik yang menyebabkan darah sulit membeku karena tubuh
          kekurangan protein pembekuan darah tertentu.
        </p>

        <MedicalImage
          src={hemofiliaImage}
          alt="Anatomi Hemofilia"
          label="Visualisasi Anatomi Hemofilia"
        />

        <p>
          Hemofilia adalah penyakit genetik yang diturunkan dari orang tua
          kepada anak, lebih sering terjadi pada pria.
        </p>
      </>
    ),
  },
];

export default penyakitList;
