/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useCallback } from 'react';
import { SLIDES } from './data/presentationData';
import {
  Slide01Cover,
  Slide02Governance,
  Slide03Pedagogy,
  Slide04Assessment,
  Slide05RecordsAndSociety,
  Slide06CoreShiftsPart1,
  Slide07CoreShiftsPart2,
  Slide08FullMatrix,
  Slide09RoleImpact,
  Slide10Summary,
} from './components/SlideRenderers';
import { PrintableHandout, SlideGridModal } from './components/PrintAndGridModal';
import { exportPresentationToPptx } from './utils/exportPptx';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  LayoutGrid,
  Maximize2,
  Minimize2,
  MessageSquareText,
} from 'lucide-react';

export default function App() {
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);
  const [isGridOpen, setIsGridOpen] = useState<boolean>(false);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState<boolean>(false);
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const [isExportingPptx, setIsExportingPptx] = useState<boolean>(false);

  const totalSlides = SLIDES.length;
  const activeSlide = SLIDES.find((s) => s.id === currentSlideId) || SLIDES[0];

  const goToNextSlide = useCallback(() => {
    setCurrentSlideId((prev) => (prev < totalSlides ? prev + 1 : prev));
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideId((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  const handleExportPptx = useCallback(async () => {
    if (isExportingPptx) return;
    setIsExportingPptx(true);
    try {
      await exportPresentationToPptx();
    } finally {
      setIsExportingPptx(false);
    }
  }, [isExportingPptx]);

  const togglePresentationMode = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsPresentationMode(true);
      } else {
        await document.exitFullscreen();
        setIsPresentationMode(false);
      }
    } catch {
      // Fallback for sandboxed iframe environments where requestFullscreen may be blocked
      setIsPresentationMode((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsPresentationMode(false);
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Do not intercept keys when typing in search input
      if (
        document.activeElement &&
        (document.activeElement.tagName === 'INPUT' ||
          document.activeElement.tagName === 'TEXTAREA')
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlideId(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlideId(totalSlides);
      } else if (e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        setIsGridOpen((prev) => !prev);
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setShowSpeakerNotes((prev) => !prev);
      } else if (e.key === 'Escape' && isGridOpen) {
        setIsGridOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, totalSlides, isGridOpen]);

  const renderSlideBody = () => {
    switch (currentSlideId) {
      case 1:
        return (
          <Slide01Cover
            onJumpToSlide={setCurrentSlideId}
            onExportPptx={handleExportPptx}
            isExportingPptx={isExportingPptx}
          />
        );
      case 2:
        return <Slide02Governance />;
      case 3:
        return <Slide03Pedagogy />;
      case 4:
        return <Slide04Assessment />;
      case 5:
        return <Slide05RecordsAndSociety />;
      case 6:
        return <Slide06CoreShiftsPart1 />;
      case 7:
        return <Slide07CoreShiftsPart2 />;
      case 8:
        return <Slide08FullMatrix />;
      case 9:
        return <Slide09RoleImpact />;
      case 10:
        return (
          <Slide10Summary
            onJumpToSlide={setCurrentSlideId}
            onExportPptx={handleExportPptx}
            isExportingPptx={isExportingPptx}
          />
        );
      default:
        return <Slide01Cover onJumpToSlide={setCurrentSlideId} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-950 selection:bg-[#FACC15] selection:text-[#1E3A8A]">
      {/* Strict 3-Zone Top Bar Contract in Deep Royal Blue & Gold */}
      {!isPresentationMode && (
        <header className="flex items-center justify-between gap-8 px-6 py-3.5 border-b-2 border-[#FACC15] bg-gradient-to-r from-[#1E3A8A] via-[#1D4ED8] to-[#172554] shadow-sm no-print">
          {/* Zone 1: Single text element wordmark in Vibrant Gold */}
          <a
            href="#slide-1"
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlideId(1);
            }}
            className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-[#FACC15] whitespace-nowrap shrink-0"
          >
            Thông tư 15/2026/TT-BGDĐT
          </a>

          {/* Zone 2: 4 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-white">
            <a
              href="#tong-quan"
              onClick={(e) => {
                e.preventDefault();
                setCurrentSlideId(1);
              }}
              className={`hover:text-[#FACC15] transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeSlide.chapter === 'overview'
                  ? 'text-[#FACC15] underline decoration-[#FACC15] decoration-2 underline-offset-8'
                  : ''
              }`}
            >
              Tổng quan
            </a>
            <a
              href="#so-sanh"
              onClick={(e) => {
                e.preventDefault();
                setCurrentSlideId(2);
              }}
              className={`hover:text-[#FACC15] transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeSlide.chapter === 'comparison'
                  ? 'text-[#FACC15] underline decoration-[#FACC15] decoration-2 underline-offset-8'
                  : ''
              }`}
            >
              7 Tiêu chí so sánh
            </a>
            <a
              href="#chuyen-dich"
              onClick={(e) => {
                e.preventDefault();
                setCurrentSlideId(6);
              }}
              className={`hover:text-[#FACC15] transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeSlide.chapter === 'core_shifts'
                  ? 'text-[#FACC15] underline decoration-[#FACC15] decoration-2 underline-offset-8'
                  : ''
              }`}
            >
              4 Chuyển dịch cốt lõi
            </a>
            <a
              href="#tra-cuu"
              onClick={(e) => {
                e.preventDefault();
                setCurrentSlideId(8);
              }}
              className={`hover:text-[#FACC15] transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeSlide.chapter === 'matrix'
                  ? 'text-[#FACC15] underline decoration-[#FACC15] decoration-2 underline-offset-8'
                  : ''
              }`}
            >
              Bảng tra cứu đầy đủ
            </a>
          </nav>

          {/* Zone 3: 1 primary action (Export PPTX in Gold & Royal Blue) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleExportPptx}
              disabled={isExportingPptx}
              className="px-4 py-2 text-xs sm:text-sm font-extrabold text-[#1E3A8A] bg-[#FACC15] rounded-lg hover:bg-[#FDE047] disabled:opacity-50 transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 shadow-xs"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>{isExportingPptx ? 'Đang xuất .PPTX...' : 'Xuất file .PPTX'}</span>
            </button>
          </div>
        </header>
      )}

      {/* Horizontal Slide Progress Rail */}
      <div className="h-1.5 w-full bg-slate-300 no-print">
        <div
          className="h-full bg-[#1E3A8A] transition-transform duration-200 origin-left"
          style={{ transform: `scaleX(${currentSlideId / totalSlides})` }}
        />
      </div>

      {/* Main Slide Stage */}
      <main className="flex-1 flex flex-col justify-between max-w-[1380px] w-full mx-auto px-4 sm:px-8 py-5 sm:py-6 no-print">
        {/* Slide Frame Container */}
        <div className="flex-1 bg-white border-2 border-slate-300 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between min-h-[560px]">
          {/* Slide Header for Slides 2..10 in Royal Blue & Gold Banner */}
          {currentSlideId !== 1 && (
            <div className="bg-gradient-to-r from-[#1E3A8A] via-[#1D4ED8] to-[#172554] border-2 border-[#FACC15] rounded-xl px-6 py-4 mb-6 flex flex-wrap items-center justify-between gap-4 shadow-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-[#FDE047] font-extrabold">
                  <span>{activeSlide.chapterLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{activeSlide.indexLabel}</span>
                </div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#FACC15] uppercase tracking-wide">
                  {activeSlide.title}
                </h1>
                <p className="text-sm sm:text-base font-bold text-white">
                  {activeSlide.subtitle}
                </p>
              </div>

              <div className="text-xs sm:text-sm font-mono font-extrabold text-[#FDE047] bg-black/25 px-3 py-1.5 rounded-lg border border-white/20 tabular-nums shrink-0">
                TT 32/2020 → TT 15/2026
              </div>
            </div>
          )}

          {/* Active Slide Body */}
          <div className="flex-1 flex flex-col justify-center">{renderSlideBody()}</div>
        </div>

        {/* Optional Speaker Notes Panel */}
        {showSpeakerNotes && (
          <div className="mt-4 bg-gradient-to-r from-[#1E3A8A] to-[#0F172A] border-2 border-[#FACC15] text-white rounded-xl p-5 flex items-start justify-between gap-4 shadow-md">
            <div className="space-y-1">
              <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#FACC15] font-extrabold">
                Ghi chú thuyết trình · {activeSlide.indexLabel}
              </div>
              <p className="text-sm sm:text-base text-white font-semibold leading-relaxed">
                {activeSlide.speakerNotes}
              </p>
            </div>
            <button
              onClick={() => setShowSpeakerNotes(false)}
              className="text-xs sm:text-sm font-extrabold text-[#FACC15] hover:underline whitespace-nowrap shrink-0"
            >
              Ẩn ghi chú
            </button>
          </div>
        )}

        {/* Bottom Presentation Control Deck */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 pt-1">
          {/* Left: Slide Grid, Speaker Notes & Fullscreen Toggles */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setIsGridOpen(true)}
              className="px-3.5 py-2 text-xs sm:text-sm font-extrabold text-slate-950 bg-white border-2 border-slate-400 rounded-lg hover:border-[#1E3A8A] transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <LayoutGrid className="w-4 h-4 text-[#1E3A8A]" />
              <span>Mục lục 10 Slide</span>
            </button>

            <button
              onClick={() => setShowSpeakerNotes((prev) => !prev)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-extrabold rounded-lg border-2 transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 ${
                showSpeakerNotes
                  ? 'bg-[#1E3A8A] text-[#FACC15] border-[#FACC15]'
                  : 'bg-white text-slate-950 border-slate-400 hover:border-[#1E3A8A]'
              }`}
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Ghi chú báo cáo viên</span>
            </button>

            <button
              onClick={togglePresentationMode}
              className="px-3.5 py-2 text-xs sm:text-sm font-extrabold text-slate-950 bg-white border-2 border-slate-400 rounded-lg hover:border-[#1E3A8A] transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              {isPresentationMode ? (
                <>
                  <Minimize2 className="w-4 h-4 text-[#1E3A8A]" />
                  <span>Thoát toàn màn hình</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4 text-[#1E3A8A]" />
                  <span>Toàn màn hình</span>
                </>
              )}
            </button>

            <button
              onClick={handleExportPptx}
              disabled={isExportingPptx}
              className="px-3.5 py-2 text-xs sm:text-sm font-extrabold text-[#1E3A8A] bg-[#FACC15] border-2 border-[#1E3A8A] rounded-lg hover:bg-[#FDE047] disabled:opacity-50 transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Download className="w-4 h-4 text-[#1E3A8A] stroke-[2.5]" />
              <span>{isExportingPptx ? 'Đang tạo .PPTX...' : 'Tải file .PPTX'}</span>
            </button>
          </div>

          {/* Center: Numbered Slide Selector (1..10) */}
          <div className="hidden xl:flex items-center gap-1 bg-white border-2 border-slate-400 rounded-lg p-1">
            {SLIDES.map((s) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlideId(s.id)}
                title={s.title}
                className={`w-8 h-7 text-xs font-mono font-extrabold tabular-nums rounded transition-colors whitespace-nowrap shrink-0 ${
                  s.id === currentSlideId
                    ? 'bg-[#1E3A8A] text-[#FACC15]'
                    : 'text-slate-900 hover:bg-slate-200'
                }`}
              >
                {s.id < 10 ? `0${s.id}` : s.id}
              </button>
            ))}
          </div>

          {/* Right: Prev / Next Slide Navigation */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={goToPrevSlide}
              disabled={currentSlideId === 1}
              className="px-4 py-2 text-xs sm:text-sm font-extrabold bg-white border-2 border-slate-400 text-slate-950 rounded-lg hover:border-[#1E3A8A] disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              <span>Slide trước</span>
            </button>

            <span className="text-sm font-mono font-extrabold text-slate-950 tabular-nums px-2 whitespace-nowrap shrink-0">
              {currentSlideId} / {totalSlides}
            </span>

            <button
              onClick={goToNextSlide}
              disabled={currentSlideId === totalSlides}
              className="px-4 py-2 text-xs sm:text-sm font-extrabold bg-[#1E3A8A] text-[#FACC15] border-2 border-[#FACC15] rounded-lg hover:bg-[#172554] disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-xs"
            >
              <span>Slide tiếp</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </main>

      {/* Slide Grid Modal */}
      <SlideGridModal
        isOpen={isGridOpen}
        currentSlideId={currentSlideId}
        onSelectSlide={setCurrentSlideId}
        onClose={() => setIsGridOpen(false)}
      />

      {/* Printable Handout View */}
      <PrintableHandout />
    </div>
  );
}
