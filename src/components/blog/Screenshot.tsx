import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScreenshotProps {
  src: string;
  alt?: string;
  caption?: string;
}

export default function Screenshot({ src, alt = "", caption }: ScreenshotProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className="my-6">
        <button
          onClick={() => setOpen(true)}
          className="w-full block cursor-zoom-in"
        >
          <img
            src={src}
            alt={alt || caption || ""}
            className="w-full rounded-lg border border-gray-100 hover:border-gray-300 transition-colors"
          />
        </button>
        {caption && (
          <figcaption className="mt-2 text-center text-xs text-gray-400">
            {caption}
          </figcaption>
        )}
      </figure>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-zoom-out p-4"
          >
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={src}
              alt={alt || caption || ""}
              className="max-w-full max-h-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
