"use client";

import clsx from "clsx";
import {
  X,
  ChevronDown,
  Activity,
  ShieldAlert,
  Menu,
  HeartPulse,
  Stethoscope,
  Home, // 1. Menambahkan import icon Home
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const pathname = usePathname();

  const menu = [
    {
      id: 1,
      title: "Sistem Peredaran Darah",
      icons: <Activity size={20} />,
      link: "/materi",
      option: [
        {
          id: "pengantar",
          title: "Pengantar",
          link: "/materi/pengantar-sistem-peredaran-darah",
        },
        {
          id: "jantung",
          title: "Jantung",
          link: "/materi/jantung",
        },
        { id: "arteri", title: "Arteri", link: "/materi/arteri" },
        { id: "vena", title: "Vena", link: "/materi/vena" },
        { id: "kapiler", title: "Kapiler", link: "/materi/kapiler" },
        { id: "darah", title: "Darah", link: "/materi/darah" },
      ],
    },
    {
      id: 2,
      title: "Gangguan & Penyakit",
      icons: <ShieldAlert size={20} />,
      link: "/materi/penyakit",
      option: [],
    },
    {
      id: 3,
      title: "Upaya & Pencegahan",
      icons: <Stethoscope size={20} />,
      link: "/materi/pencegahan",
      option: [],
    },
  ];

  // LOGIC: Auto-open menu jika user sedang berada di halaman submenu
  useEffect(() => {
    menu.forEach((item, index) => {
      if (
        item.option &&
        item.option.length > 0 &&
        item.option.some((sub) => sub.link === pathname)
      ) {
        setActiveMenu(index);
      }
    });
  }, [pathname]);

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <>
      {/* MOBILE TOGGLE BUTTON */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-slate-800 text-white shadow-lg hover:bg-slate-700 transition-colors"
      >
        <Menu size={24} />
      </button>

      {/* OVERLAY (Mobile Only) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR CONTAINER */}
      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-50 w-72 bg-slate-950 border-r border-slate-800 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 shadow-2xl flex flex-col h-screen",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* HEADER */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800 shrink-0 bg-slate-950">
          <h2 className="font-bold text-lg tracking-wide text-white flex items-center gap-2">
            <HeartPulse className="text-red-500" />
            <Link href="/">BloodFlow</Link>
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-1 text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* SCROLLABLE MENU AREA */}
        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1 custom-scrollbar">
          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Menu Utama
          </p>

          {menu.map((item, index) => {
            // Cek apakah menu induk aktif
            const isParentActive =
              pathname === item.link || pathname.startsWith(item.link);
            const hasSubmenu = item.option && item.option.length > 0;
            const isOpen = activeMenu === index;

            return (
              <div key={item.id} className="mb-1">
                {hasSubmenu ? (
                  // --- MENU DENGAN DROPDOWN ---
                  <div>
                    <button
                      onClick={() => toggleMenu(index)}
                      className={clsx(
                        "w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 group",
                        isOpen
                          ? "bg-slate-800/50 text-white"
                          : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={clsx(
                            isParentActive
                              ? "text-red-400"
                              : "text-slate-500 group-hover:text-slate-300"
                          )}
                        >
                          {item.icons}
                        </span>
                        <span className="text-sm font-medium line-clamp-1">
                          {item.title}
                        </span>
                      </div>
                      <ChevronDown
                        size={16}
                        className={clsx(
                          "transition-transform duration-300 ease-in-out text-slate-500",
                          isOpen ? "rotate-180 text-red-400" : "rotate-0"
                        )}
                      />
                    </button>

                    {/* SUBMENU CONTAINER */}
                    <div
                      className={clsx(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        isOpen
                          ? "max-h-96 opacity-100 mt-1"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      {/* Garis Vertikal (Tree Line) */}
                      <ul className="ml-5 pl-3 border-l border-slate-800 space-y-1">
                        {item.option.map((sub) => {
                          const isSubActive = pathname === sub.link;
                          return (
                            <li key={sub.id}>
                              <Link
                                href={sub.link}
                                onClick={() => setSidebarOpen(false)}
                                className={clsx(
                                  "block px-3 py-2 text-sm rounded-md transition-colors duration-200",
                                  isSubActive
                                    ? "bg-red-600 text-white font-medium "
                                    : "text-slate-500 hover:text-slate-200 hover:bg-slate-800/30"
                                )}
                              >
                                {sub.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ) : (
                  // --- MENU TANPA DROPDOWN ---
                  <Link
                    href={item.link}
                    onClick={() => setSidebarOpen(false)}
                    className={clsx(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                      isParentActive
                        ? "bg-red-600 text-white shadow-md shadow-red-900/20"
                        : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
                    )}
                  >
                    <span
                      className={clsx(
                        isParentActive
                          ? "text-white"
                          : "text-slate-500 group-hover:text-slate-300"
                      )}
                    >
                      {item.icons}
                    </span>
                    <span className="text-sm font-medium">{item.title}</span>
                  </Link>
                )}
              </div>
            );
          })}

          {/* 2. Tombol Kembali ke Menu Awal (Beranda) */}
          <Link
            href="/"
            onClick={() => setSidebarOpen(false)}
            className={clsx(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group mb-6", // mb-6 untuk jarak pemisah
              pathname === "/"
                ? "bg-red-600 text-white shadow-md shadow-red-900/20"
                : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
            )}
          >
            <span
              className={clsx(
                pathname === "/"
                  ? "text-white"
                  : "text-slate-500 group-hover:text-slate-300"
              )}
            >
              <Home size={20} />
            </span>
            <span className="text-sm font-medium">
              Kembali Ke Halaman Utama
            </span>
          </Link>
          {/* Batas penambahan tombol */}
        </div>

        {/* FOOTER / APP INFO */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 text-center">
          <p className="text-xs font-semibold text-slate-400">
            Blood Flow v1.1.0
          </p>
          <p className="text-[10px] text-slate-600 mt-1">
            © 2025 Hak Cipta Dilindungi.
          </p>
        </div>
      </aside>
    </>
  );
}
