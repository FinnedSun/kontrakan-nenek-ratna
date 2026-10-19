"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "./icons";

export type GalleryState = {
  photos: string[];
  index: number;
  label: string;
} | null;

export function Gallery({
  state,
  onClose,
  onNavigate,
}: {
  state: GalleryState;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  const step = useCallback(
    (dir: number) => {
      if (!state) return;
      const n = state.photos.length;
      onNavigate((state.index + dir + n) % n);
    },
    [state, onNavigate]
  );

  useEffect(() => {
    if (!state) return;
    restoreRef.current = document.activeElement as HTMLElement;
    const dialog = dialogRef.current;
    dialog?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      } else if (e.key === "Tab") {
        const focusables = dialog?.querySelectorAll<HTMLElement>(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      restoreRef.current?.focus();
    };
  }, [state, onClose, step]);

  if (!state) return null;

  const { photos, index, label } = state;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Galeri foto ${label}`}
      tabIndex={-1}
      className="fixed inset-0 z-50 bg-ink/95 flex flex-col"
    >
      <div className="flex items-center justify-between px-4 py-3 text-paper">
        <p className="font-display text-sm md:text-base">
          {label} — {index + 1} / {photos.length}
        </p>
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 rounded-md border border-line-dark px-3 py-2 text-sm hover:bg-ink-2 transition-colors"
        >
          <CloseIcon className="h-4 w-4" /> Tutup
        </button>
      </div>
      <div className="relative flex-1 min-h-0 px-4 pb-4">
        <Image
          src={photos[index]}
          alt={`${label} foto ${index + 1} dari ${photos.length}`}
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>
      <div className="flex items-center justify-center gap-3 px-4 pb-5">
        <button
          onClick={() => step(-1)}
          className="inline-flex items-center gap-2 rounded-md border border-line-dark px-4 py-2 text-sm text-paper hover:bg-ink-2 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4" /> Sebelumnya
        </button>
        <button
          onClick={() => step(1)}
          className="inline-flex items-center gap-2 rounded-md border border-line-dark px-4 py-2 text-sm text-paper hover:bg-ink-2 transition-colors"
        >
          Berikutnya <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
