import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border border-slate-700 rounded-xl overflow-hidden mb-4 bg-slate-900/50">
      <button
        onClick={onClick} // Menggunakan fungsi dari parent
        className="w-full flex items-center justify-between p-4 text-left bg-slate-800/50 hover:bg-slate-800 transition-colors duration-200"
      >
        <span className="font-semibold text-slate-100">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="text-slate-400" size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 text-slate-300 border-t border-slate-700/50 leading-relaxed text-sm md:text-base bg-slate-900/30">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
