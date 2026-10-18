import React from 'react';
import { COMPARISON_CRITERIA, CORE_SHIFTS, DOCUMENT_HEADER, SLIDES } from '../data/presentationData';
import { X } from 'lucide-react';

interface SlideGridModalProps {
  isOpen: boolean;
  currentSlideId: number;
  onSelectSlide: (slideId: number) => void;
  onClose: () => void;
}

export function SlideGridModal({
  isOpen,
  currentSlideId,
  onSelectSlide,
  onClose,
}: SlideGridModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 no-print"
      onClick={onClose}
    >
      <div
        className="bg-slate-100 border-2 border-[#FACC15] rounded-2xl max-w-6xl w-full max-h-[88vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-[#FACC15] bg-gradient-to-r from-[#1E3A8A] to-[#172554] text-white">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-[#FACC15] uppercase tracking-wide">
              Mục lục 10 Slide Trình chiếu
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
              Chọn bất kỳ slide nào để chuyển trực tiếp · Phím tắt: Phím mũi tên Trái/Phải hoặc Space
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#FACC15] hover:bg-white/15 transition-colors"
            aria-label="Đóng danh sách slide"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SLIDES.map((slide) => {
            const isCurrent = slide.id === currentSlideId;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
                className={`text-left p-4 rounded-xl border-2 transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] text-white border-[#FACC15] shadow-md'
                    : 'bg-white text-slate-950 border-slate-300 hover:border-[#1E3A8A]'
                }`}
              >
                <div>
                  <div
                    className={`flex items-center justify-between text-xs font-mono font-extrabold mb-2 ${
                      isCurrent ? 'text-[#FDE047]' : 'text-[#1E3A8A]'
                    }`}
                  >
                    <span>{slide.indexLabel}</span>
                    <span>{slide.chapterLabel}</span>
                  </div>
                  <h3
                    className={`text-base font-extrabold leading-snug ${
                      isCurrent ? 'text-[#FACC15]' : 'text-slate-950'
                    }`}
                  >
                    {slide.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm font-semibold mt-2 leading-relaxed ${
                      isCurrent ? 'text-white' : 'text-slate-800'
                    }`}
                  >
                    {slide.subtitle}
                  </p>
                </div>

                <div
                  className={`mt-4 pt-3 border-t text-xs font-mono font-extrabold flex items-center justify-between ${
                    isCurrent
                      ? 'border-blue-300/30 text-[#FACC15]'
                      : 'border-slate-200 text-slate-900'
                  }`}
                >
                  <span>{isCurrent ? 'Đang trình chiếu' : 'Nhấn để mở slide'}</span>
                  <span className="tabular-nums">#{slide.id}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* Printable full document handout when user triggers window.print() */
export function PrintableHandout() {
  return (
    <div className="hidden print-only p-8 space-y-8 text-slate-950 bg-white">
      <div className="border-b-2 border-slate-900 pb-4">
        <h1 className="text-2xl font-extrabold">{DOCUMENT_HEADER.mainTitle}</h1>
        <p className="text-sm font-semibold text-slate-900 mt-2">- {DOCUMENT_HEADER.tt32Summary}</p>
        <p className="text-sm font-semibold text-slate-900 mt-1">- {DOCUMENT_HEADER.tt15Summary}:</p>
      </div>

      <div>
        <h2 className="text-lg font-extrabold mb-3">{DOCUMENT_HEADER.section1Title}</h2>
        <table className="w-full border-collapse border-2 border-slate-900 text-xs">
          <thead>
            <tr className="bg-slate-200">
              <th className="border-2 border-slate-900 p-2 text-left w-1/5 font-extrabold">
                Tiêu chí
              </th>
              <th className="border-2 border-slate-900 p-2 text-left w-2/5 font-extrabold">
                Thông tư 32/2020/TT-BGDĐT
              </th>
              <th className="border-2 border-slate-900 p-2 text-left w-2/5 font-extrabold">
                Thông tư 15/2026/TT-BGDĐT
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_CRITERIA.map((row) => (
              <tr key={row.id} className="align-top">
                <td className="border-2 border-slate-900 p-2 font-extrabold">{row.criterion}</td>
                <td className="border-2 border-slate-900 p-2 font-semibold">{row.tt32_2020}</td>
                <td className="border-2 border-slate-900 p-2 font-bold">{row.tt15_2026}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-extrabold">{DOCUMENT_HEADER.section2Title}</h2>
        {CORE_SHIFTS.map((shift) => (
          <div key={shift.code} className="space-y-1">
            <h3 className="text-sm font-extrabold">
              {shift.code}. {shift.title}:
            </h3>
            <p className="text-xs font-semibold leading-relaxed">- {shift.verbatimContent}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
