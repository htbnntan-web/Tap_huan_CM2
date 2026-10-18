import React, { useState } from 'react';
import {
  COMPARISON_CRITERIA,
  CORE_SHIFTS,
  DOCUMENT_HEADER,
  ComparisonCriterion,
} from '../data/presentationData';
import {
  ArrowRight,
  Check,
  Search,
  Users,
  BookOpen,
  Building2,
  X,
} from 'lucide-react';

interface SlideProps {
  onJumpToSlide: (slideId: number) => void;
  onExportPptx?: () => void;
  isExportingPptx?: boolean;
}

/* Helper to bold and highlight specific key phrases from the original PDF with high projector contrast in Blue & Gold */
function renderHighlightedText(text: string, highlights: string[]) {
  if (!highlights || highlights.length === 0) return text;
  let parts: (string | React.ReactNode)[] = [text];

  highlights.forEach((phrase, phraseIdx) => {
    const nextParts: (string | React.ReactNode)[] = [];
    parts.forEach((part, partIdx) => {
      if (typeof part !== 'string') {
        nextParts.push(part);
        return;
      }
      const splitIndex = part.toLowerCase().indexOf(phrase.toLowerCase());
      if (splitIndex === -1) {
        nextParts.push(part);
      } else {
        const before = part.slice(0, splitIndex);
        const match = part.slice(splitIndex, splitIndex + phrase.length);
        const after = part.slice(splitIndex + phrase.length);
        if (before) nextParts.push(before);
        nextParts.push(
          <strong
            key={`${phraseIdx}-${partIdx}`}
            className="font-extrabold text-[#1E3A8A] bg-[#FEF08A] px-1 rounded-xs underline decoration-[#1E3A8A] decoration-2 underline-offset-4"
          >
            {match}
          </strong>
        );
        if (after) nextParts.push(after);
      }
    });
    parts = nextParts;
  });

  return parts;
}

/* ============================================================================
   SLIDE 01: COVER & PARADIGM SHIFT OVERVIEW (ROYAL BLUE & GOLD BANNER STYLE)
   ============================================================================ */
export function Slide01Cover({ onJumpToSlide }: SlideProps) {
  return (
    <div className="flex flex-col justify-between h-full gap-6">
      {/* Top Ceremonial Royal Blue & Gold Banner */}
      <div className="bg-gradient-to-r from-[#1E3A8A] via-[#1D4ED8] to-[#172554] rounded-xl p-6 sm:p-8 border-2 border-[#FACC15] shadow-md text-center space-y-3">
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-[#FDE047]">
          <span>CHUYÊN ĐỀ QUẢN TRỊ GIÁO DỤC</span>
          <span aria-hidden="true">·</span>
          <span>BỘ GIÁO DỤC VÀ ĐÀO TẠO</span>
          <span aria-hidden="true">·</span>
          <span>PHÂN TÍCH ĐỐI CHIẾU CHÍNH SÁCH</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#FACC15] uppercase leading-tight tracking-wide drop-shadow-xs">
          {DOCUMENT_HEADER.mainTitle}
        </h1>

        <p className="text-base sm:text-lg font-bold text-white max-w-4xl mx-auto leading-relaxed">
          Báo cáo phân tích toàn diện <span className="text-[#FDE047] underline underline-offset-4">07 tiêu chí bản chất nội hàm</span> và{' '}
          <span className="text-[#FDE047] underline underline-offset-4">04 nội dung chuyển dịch cốt lõi</span> định hình mô hình nhà trường tự chủ, nhân văn và hiện đại
        </p>
      </div>

      {/* Two-Column High-Contrast Paradigm Contrast */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* TT 32/2020 */}
        <div className="lg:col-span-5 bg-slate-100 border-2 border-slate-400 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between border-b-2 border-slate-300 pb-2.5">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider font-extrabold text-slate-800">
                MÔ HÌNH CŨ · HÀNH CHÍNH QUY TRÌNH
              </span>
              <span className="font-mono text-sm font-extrabold text-slate-900 tabular-nums">
                2020
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950">
              Thông tư 32/2020/TT-BGDĐT
            </h2>
            <p className="text-base text-slate-900 font-semibold leading-relaxed">
              Mang nặng tính <span className="font-extrabold text-[#1E3A8A]">quản lý hành chính, giám sát quy trình</span>. Tổ chức vận hành theo mệnh lệnh, kế hoạch phân phối cứng, nhiều loại hồ sơ sổ sách cá nhân và hình thức kỷ luật tạm dừng học.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t-2 border-slate-300 text-xs sm:text-sm text-slate-900 font-bold flex items-center justify-between">
            <span>Trọng tâm: Tuân thủ quy trình & danh mục</span>
            <span>Bắt buộc HĐ trường công</span>
          </div>
        </div>

        {/* Directional Arrow Column */}
        <div className="lg:col-span-1 flex lg:flex-col items-center justify-center py-1">
          <div className="w-12 h-12 rounded-full bg-[#1E3A8A] border-2 border-[#FACC15] text-[#FACC15] flex items-center justify-center shadow-md">
            <ArrowRight className="w-6 h-6 stroke-[2.5]" />
          </div>
        </div>

        {/* TT 15/2026 - Deep Navy Blue & Gold Highlight Box */}
        <div className="lg:col-span-6 bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] border-2 border-[#FACC15] rounded-xl p-6 shadow-md flex flex-col justify-between text-white">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between border-b border-blue-400/40 pb-2.5">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#FACC15] font-extrabold">
                MÔ HÌNH MỚI · QUẢN TRỊ KIẾN TẠO
              </span>
              <span className="font-mono text-sm text-[#FACC15] font-extrabold tabular-nums">
                2026
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
              Thông tư 15/2026/TT-BGDĐT
            </h2>
            <p className="text-base sm:text-lg text-white font-semibold leading-relaxed">
              Chuyển dịch mạnh sang <span className="font-extrabold text-[#FDE047] underline decoration-[#FACC15] underline-offset-4">mô hình quản trị kiến tạo, mở quyền chủ động, lấy người học làm trung tâm và thúc đẩy đổi mới</span>. Trao quyền gắn với trách nhiệm giải trình, số hóa 100% hồ sơ và ứng dụng AI.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-blue-400/40 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-[#FDE047] font-bold">
            <span>Linh hoạt ngữ liệu SGK · Ứng dụng AI</span>
            <span aria-hidden="true">·</span>
            <span>Bỏ đình chỉ học · 100% hồ sơ điện tử</span>
          </div>
        </div>
      </div>

      {/* Bottom Quick-Jump Structure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        <button
          onClick={() => onJumpToSlide(2)}
          className="text-left p-4 rounded-xl border-2 border-slate-300 bg-white hover:border-[#1E3A8A] hover:bg-blue-50/50 transition-colors group shadow-2xs"
        >
          <div className="font-mono text-xs font-extrabold text-[#1E3A8A] tabular-nums">
            PHẦN 01 · TIÊU CHÍ 1–4
          </div>
          <div className="text-base font-extrabold text-slate-950 mt-1 group-hover:text-[#1E3A8A] transition-colors">
            Quản trị, Bộ máy & Chuyên môn
          </div>
        </button>
        <button
          onClick={() => onJumpToSlide(4)}
          className="text-left p-4 rounded-xl border-2 border-slate-300 bg-white hover:border-[#1E3A8A] hover:bg-blue-50/50 transition-colors group shadow-2xs"
        >
          <div className="font-mono text-xs font-extrabold text-[#1E3A8A] tabular-nums">
            PHẦN 01 · TIÊU CHÍ 5–7
          </div>
          <div className="text-base font-extrabold text-slate-950 mt-1 group-hover:text-[#1E3A8A] transition-colors">
            Đánh giá, Sổ sách & Xã hội
          </div>
        </button>
        <button
          onClick={() => onJumpToSlide(6)}
          className="text-left p-4 rounded-xl border-2 border-slate-300 bg-white hover:border-[#1E3A8A] hover:bg-blue-50/50 transition-colors group shadow-2xs"
        >
          <div className="font-mono text-xs font-extrabold text-[#1E3A8A] tabular-nums">
            PHẦN 02 · MỤC 2.1–2.4
          </div>
          <div className="text-base font-extrabold text-slate-950 mt-1 group-hover:text-[#1E3A8A] transition-colors">
            04 Chuyển dịch Cốt lõi
          </div>
        </button>
        <button
          onClick={() => onJumpToSlide(8)}
          className="text-left p-4 rounded-xl border-2 border-slate-300 bg-white hover:border-[#1E3A8A] hover:bg-blue-50/50 transition-colors group shadow-2xs"
        >
          <div className="font-mono text-xs font-extrabold text-[#1E3A8A] tabular-nums">
            MA TRẬN TOÀN VĂN
          </div>
          <div className="text-base font-extrabold text-slate-950 mt-1 group-hover:text-[#1E3A8A] transition-colors">
            Bảng đối chiếu 7 tiêu chí
          </div>
        </button>
      </div>
    </div>
  );
}

/* ============================================================================
   REUSABLE DUAL-CRITERION SLIDE LAYOUT (FOR SLIDES 02, 03)
   ============================================================================ */
function DualCriteriaComparison({
  criteria,
  visualSummaryTitle,
  visualSummaryItems,
}: {
  criteria: ComparisonCriterion[];
  visualSummaryTitle: string;
  visualSummaryItems: { label: string; before: string; after: string }[];
}) {
  return (
    <div className="flex flex-col justify-between h-full gap-5">
      <div className="space-y-5">
        {criteria.map((item) => (
          <div
            key={item.id}
            className="bg-white border-2 border-slate-300 rounded-xl p-5 shadow-xs"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 mb-4 border-b-2 border-slate-200">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-extrabold text-white bg-[#1E3A8A] px-2.5 py-1 rounded tabular-nums">
                  TIÊU CHÍ 0{item.id}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                  {item.criterion}
                </h3>
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#1E3A8A]">
                {item.shiftSummary}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* TT 32/2020 */}
              <div className="bg-slate-100 border-2 border-slate-300 rounded-lg p-4">
                <div className="text-xs sm:text-sm font-mono uppercase tracking-wider font-extrabold text-slate-800 mb-2">
                  Thông tư 32/2020/TT-BGDĐT (Cũ)
                </div>
                <p className="text-base sm:text-[17px] text-slate-950 font-semibold leading-relaxed">
                  {item.tt32_2020}
                </p>
              </div>

              {/* TT 15/2026 */}
              <div className="bg-[#EFF6FF] border-2 border-[#1E3A8A] rounded-lg p-4">
                <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#1E3A8A] font-extrabold mb-2">
                  Thông tư 15/2026/TT-BGDĐT (Mới)
                </div>
                <p className="text-base sm:text-[17px] text-slate-950 font-bold leading-relaxed">
                  {renderHighlightedText(item.tt15_2026, item.tt15_highlights)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Key Takeaway Strip (Deep Navy Blue & Gold Style) */}
      <div className="bg-gradient-to-r from-[#1E3A8A] via-[#172554] to-[#0F172A] border-2 border-[#FACC15] text-white rounded-xl p-5 shadow-md">
        <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#FACC15] font-extrabold mb-3">
          {visualSummaryTitle}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visualSummaryItems.map((v, idx) => (
            <div key={idx} className="border-t border-blue-300/40 pt-3">
              <div className="text-xs sm:text-sm text-[#FDE047] font-extrabold uppercase tracking-wide">
                {v.label}
              </div>
              <div className="text-xs sm:text-sm text-blue-100 line-through font-medium mt-1">
                {v.before}
              </div>
              <div className="text-sm sm:text-base font-extrabold text-white mt-1 flex items-start gap-1.5">
                <ArrowRight className="w-4 h-4 text-[#FACC15] shrink-0 mt-1" />
                <span>{v.after}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   SLIDE 02: CRITERIA 1 & 2 (TRIẾT LÝ VẬN HÀNH & TỔ CHỨC BỘ MÁY)
   ============================================================================ */
export function Slide02Governance() {
  const criteria = COMPARISON_CRITERIA.slice(0, 2);
  return (
    <DualCriteriaComparison
      criteria={criteria}
      visualSummaryTitle="TÂM ĐIỂM ĐỔI MỚI QUẢN TRỊ NHÀ TRƯỜNG (TIÊU CHÍ 01 & 02)"
      visualSummaryItems={[
        {
          label: 'Cơ chế vận hành',
          before: 'Quản lý theo mệnh lệnh hành chính, tuân thủ quy trình',
          after: 'Quản trị trao quyền, phân cấp gắn với trách nhiệm giải trình',
        },
        {
          label: 'Hội đồng trường công lập',
          before: 'Bắt buộc có Hội đồng trường với quy trình biểu quyết phức tạp',
          after: 'Cắt giảm khâu hành chính trung gian ở trường công lập',
        },
        {
          label: 'Vai trò người đứng đầu',
          before: 'Hội đồng trường công lập nắm quyền phê duyệt kế hoạch',
          after: 'Đề cao vai trò và trách nhiệm cá nhân của Hiệu trưởng',
        },
      ]}
    />
  );
}

/* ============================================================================
   SLIDE 03: CRITERIA 3 & 4 (TỰ CHỦ CHUYÊN MÔN & KHÔNG GIAN HỌC TẬP)
   ============================================================================ */
export function Slide03Pedagogy() {
  const criteria = COMPARISON_CRITERIA.slice(2, 4);
  return (
    <DualCriteriaComparison
      criteria={criteria}
      visualSummaryTitle="TÂM ĐIỂM ĐỔI MỚI CHUYÊN MÔN & KHÔNG GIAN HỌC TẬP (TIÊU CHÍ 03 & 04)"
      visualSummaryItems={[
        {
          label: 'Kế hoạch & Ngữ liệu SGK',
          before: 'Phân phối cứng; chỉ đề xuất chọn SGK theo danh mục',
          after: 'Chủ động, linh hoạt sử dụng ngữ liệu bài học/chủ đề phù hợp thực tiễn',
        },
        {
          label: 'Công nghệ & Thiết bị dạy học',
          before: 'Hoạt động lý thuyết, bài tập, thí nghiệm cơ bản',
          after: 'Tự làm thiết bị dạy học ứng dụng AI; tích hợp STEM/STEAM, năng lực số',
        },
        {
          label: 'Hợp tác & Ngoại ngữ',
          before: 'Tham quan, cắm trại trong khuôn khổ truyền thống',
          after: 'Hợp tác cơ sở công nghệ, sản xuất; Tiếng Anh thành ngôn ngữ thứ hai',
        },
      ]}
    />
  );
}

/* ============================================================================
   SLIDE 04: CRITERION 5 (ĐÁNH GIÁ HỌC SINH & KỶ LUẬT)
   ============================================================================ */
export function Slide04Assessment() {
  const item = COMPARISON_CRITERIA[4];
  return (
    <div className="flex flex-col justify-between h-full gap-6">
      {/* Main Verbatim Comparison Card */}
      <div className="bg-white border-2 border-slate-300 rounded-xl p-6 shadow-xs">
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 mb-5 border-b-2 border-slate-200">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-extrabold text-white bg-[#1E3A8A] px-2.5 py-1 rounded tabular-nums">
              TIÊU CHÍ 05
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
              {item.criterion}
            </h3>
          </div>
          <span className="text-xs sm:text-sm font-extrabold text-[#1E3A8A]">
            Bước ngoặt nhân văn vì sự tiến bộ của người học
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-100 border-2 border-slate-300 rounded-lg p-5">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-wider font-extrabold text-slate-800 mb-2">
              Thông tư 32/2020/TT-BGDĐT (Cũ)
            </div>
            <p className="text-base sm:text-lg text-slate-950 font-semibold leading-relaxed">
              Chú trọng xếp loại, nhận xét; duy trì hình thức kỷ luật{' '}
              <span className="italic font-extrabold text-red-800 underline">
                "Tạm dừng học ở trường có thời hạn"
              </span>
              .
            </p>
          </div>

          <div className="bg-[#EFF6FF] border-2 border-[#1E3A8A] rounded-lg p-5">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#1E3A8A] font-extrabold mb-2">
              Thông tư 15/2026/TT-BGDĐT (Mới)
            </div>
            <p className="text-base sm:text-lg text-slate-950 font-bold leading-relaxed">
              {renderHighlightedText(item.tt15_2026, item.tt15_highlights)}
            </p>
          </div>
        </div>
      </div>

      {/* 4 Detailed Pillars of Criterion 5 in Deep Navy Blue & Gold/White */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] border-2 border-[#FACC15] text-white rounded-xl p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="font-mono text-xs font-extrabold text-[#FDE047] tabular-nums">
              01 · NHẬN XÉT
            </div>
            <h4 className="text-lg font-extrabold text-[#FACC15] mt-1">
              Giảm nhận xét hình thức
            </h4>
            <p className="text-sm sm:text-base text-white font-medium mt-2 leading-relaxed">
              Loại bỏ các lời phê khuôn mẫu, thủ tục; chuyển sang đánh giá quá trình vì sự tiến bộ thực chất của học sinh.
            </p>
          </div>
          <div className="pt-3 mt-4 border-t border-blue-300/30 text-xs font-extrabold text-[#FDE047]">
            ▲ Tập trung vào sự tiến bộ
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] border-2 border-[#FACC15] text-white rounded-xl p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="font-mono text-xs font-extrabold text-[#FDE047] tabular-nums">
              02 · NGUYÊN TẮC
            </div>
            <h4 className="text-lg font-extrabold text-[#FACC15] mt-1">
              Tuyệt đối không so sánh
            </h4>
            <p className="text-sm sm:text-base text-white font-medium mt-2 leading-relaxed">
              Triệt tiêu bệnh thành tích và việc so sánh giữa các học sinh; tôn trọng nhịp độ phát triển cá nhân.
            </p>
          </div>
          <div className="pt-3 mt-4 border-t border-blue-300/30 text-xs font-extrabold text-[#FDE047]">
            ▲ Tôn trọng cá biệt hóa
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] border-2 border-[#FACC15] text-white rounded-xl p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="font-mono text-xs font-extrabold text-[#FDE047] tabular-nums">
              03 · KỶ LUẬT
            </div>
            <h4 className="text-lg font-extrabold text-[#FACC15] mt-1">
              Bỏ đình chỉ / buộc thôi học
            </h4>
            <p className="text-sm sm:text-base text-white font-medium mt-2 leading-relaxed">
              Chấm dứt hình thức kỷ luật "Tạm dừng học ở trường có thời hạn", đảm bảo quyền được đến trường liên tục.
            </p>
          </div>
          <div className="pt-3 mt-4 border-t border-blue-300/30 text-xs font-extrabold text-[#FDE047]">
            ■ Bãi bỏ tạm dừng học
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] border-2 border-[#FACC15] text-white rounded-xl p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="font-mono text-xs font-extrabold text-[#FDE047] tabular-nums">
              04 · ĐỒNG HÀNH
            </div>
            <h4 className="text-lg font-extrabold text-[#FACC15] mt-1">
              Tư vấn tâm lý học đường
            </h4>
            <p className="text-sm sm:text-base text-white font-medium mt-2 leading-relaxed">
              Chú trọng bảo vệ sức khỏe tâm thần và tăng cường công tác tư vấn tâm lý học đường hỗ trợ học sinh.
            </p>
          </div>
          <div className="pt-3 mt-4 border-t border-blue-300/30 text-xs font-extrabold text-[#FDE047]">
            ▲ Bảo vệ sức khỏe tâm thần
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   SLIDE 05: CRITERIA 6 & 7 (HỒ SƠ SỔ SÁCH & GẮN KẾT GIA ĐÌNH - XÃ HỘI)
   ============================================================================ */
export function Slide05RecordsAndSociety() {
  const item6 = COMPARISON_CRITERIA[5];
  const item7 = COMPARISON_CRITERIA[6];

  return (
    <div className="flex flex-col justify-between h-full gap-5">
      {/* Criterion 6 with High-Contrast Checklist */}
      <div className="bg-white border-2 border-slate-300 rounded-xl p-5 shadow-xs">
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 mb-4 border-b-2 border-slate-200">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-extrabold text-white bg-[#1E3A8A] px-2.5 py-1 rounded tabular-nums">
              TIÊU CHÍ 06
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-950">
              {item6.criterion} — Cắt giảm tối đa hồ sơ cá nhân & Ưu tiên 100% hồ sơ điện tử
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-5 bg-slate-100 border-2 border-slate-300 rounded-lg p-4 flex flex-col justify-between">
            <div>
              <div className="text-xs sm:text-sm font-mono uppercase tracking-wider font-extrabold text-slate-800 mb-2">
                Thông tư 32/2020/TT-BGDĐT (Cũ)
              </div>
              <p className="text-base text-slate-950 font-semibold leading-relaxed">
                {item6.tt32_2020}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t-2 border-slate-300 text-xs sm:text-sm font-bold text-slate-800">
              4 loại hồ sơ bắt buộc đối với cá nhân giáo viên
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#EFF6FF] border-2 border-[#1E3A8A] rounded-lg p-4">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#1E3A8A] font-extrabold mb-2">
              Thông tư 15/2026/TT-BGDĐT (Mới)
            </div>
            <p className="text-base text-slate-950 font-bold leading-relaxed mb-4">
              {renderHighlightedText(item6.tt15_2026, item6.tt15_highlights)}
            </p>

            {/* Visual Document Audit */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-bold">
              <div className="p-2.5 rounded border-2 border-red-700 bg-red-100 text-slate-950 flex items-center gap-2">
                <X className="w-4 h-4 text-red-800 stroke-[3] shrink-0" />
                <span>
                  <strong className="text-red-900">BỎ:</strong> Kế hoạch giáo dục cá nhân của GV
                </span>
              </div>
              <div className="p-2.5 rounded border-2 border-red-700 bg-red-100 text-slate-950 flex items-center gap-2">
                <X className="w-4 h-4 text-red-800 stroke-[3] shrink-0" />
                <span>
                  <strong className="text-red-900">BỎ:</strong> Sổ theo dõi đánh giá riêng của GV
                </span>
              </div>
              <div className="p-2.5 rounded border-2 border-[#1E3A8A] bg-blue-100 text-slate-950 flex items-center gap-2">
                <Check className="w-4 h-4 text-[#1E3A8A] stroke-[3] shrink-0" />
                <span>
                  <strong className="text-[#1E3A8A]">CHỈ GIỮ:</strong> Giáo án, Sổ chủ nhiệm, Sổ Đội
                </span>
              </div>
              <div className="p-2.5 rounded border-2 border-[#1E3A8A] bg-blue-100 text-slate-950 flex items-center gap-2">
                <Check className="w-4 h-4 text-[#1E3A8A] stroke-[3] shrink-0" />
                <span>
                  <strong className="text-[#1E3A8A]">ƯU TIÊN:</strong> 100% hồ sơ điện tử
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Criterion 7 */}
      <div className="bg-white border-2 border-slate-300 rounded-xl p-5 shadow-xs">
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 mb-4 border-b-2 border-slate-200">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-extrabold text-white bg-[#1E3A8A] px-2.5 py-1 rounded tabular-nums">
              TIÊU CHÍ 07
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-950">
              {item7.criterion} — Từ thông báo hành chính sang Đối tác giáo dục đồng hành
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="bg-slate-100 border-2 border-slate-300 rounded-lg p-4">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-wider font-extrabold text-slate-800 mb-2">
              Thông tư 32/2020/TT-BGDĐT (Cũ)
            </div>
            <p className="text-base sm:text-[17px] text-slate-950 font-semibold leading-relaxed">
              {item7.tt32_2020}
            </p>
          </div>

          <div className="bg-[#EFF6FF] border-2 border-[#1E3A8A] rounded-lg p-4">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#1E3A8A] font-extrabold mb-2">
              Thông tư 15/2026/TT-BGDĐT (Mới)
            </div>
            <p className="text-base sm:text-[17px] text-slate-950 font-bold leading-relaxed">
              {renderHighlightedText(item7.tt15_2026, item7.tt15_highlights)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   SLIDES 06 & 07: CORE SHIFTS (2.1 - 2.4)
   ============================================================================ */
function CoreShiftCard({ shift }: { shift: typeof CORE_SHIFTS[0] }) {
  return (
    <div className="bg-white border-2 border-slate-300 rounded-xl overflow-hidden flex flex-col justify-between shadow-sm">
      <div>
        {/* Top Royal Blue & Gold Header Strip */}
        <div className="bg-gradient-to-r from-[#1E3A8A] to-[#172554] px-6 py-4 border-b-2 border-[#FACC15]">
          <div className="flex items-center justify-between text-xs font-mono font-extrabold uppercase tracking-widest text-[#FDE047] mb-1">
            <span>NỘI DUNG CHUYỂN DỊCH {shift.code}</span>
            <span>MỤC 2 · CỐT LÕI</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#FACC15] leading-snug">
            {shift.title}
          </h3>
        </div>

        <div className="p-6 space-y-5">
          {/* Verbatim Document Quote Box */}
          <div className="bg-[#EFF6FF] border-2 border-[#1E3A8A] rounded-lg p-4">
            <div className="text-xs font-mono uppercase tracking-wider font-extrabold text-[#1E3A8A] mb-1.5">
              Nguyên văn nội dung chuyển dịch
            </div>
            <p className="text-base sm:text-[17px] text-slate-950 font-bold leading-relaxed">
              “{shift.verbatimContent}”
            </p>
          </div>

          {/* Before -> After Transition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-3.5 rounded-lg bg-slate-100 border-2 border-slate-300">
              <div className="text-xs font-mono font-extrabold text-slate-800 uppercase">
                Trước đây (TT 32/2020)
              </div>
              <div className="text-sm text-slate-950 mt-1 font-bold">{shift.fromState}</div>
            </div>
            <div className="p-3.5 rounded-lg bg-blue-50 border-2 border-[#1E3A8A]">
              <div className="text-xs font-mono text-[#1E3A8A] uppercase font-extrabold">
                Chuyển dịch (TT 15/2026)
              </div>
              <div className="text-sm text-slate-950 mt-1 font-extrabold">{shift.toState}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Checklist */}
      <div className="px-6 py-4 bg-slate-100 border-t-2 border-slate-300">
        <div className="text-xs font-mono uppercase tracking-wider font-extrabold text-[#1E3A8A] mb-2.5">
          Trọng tâm thực thi tại Tổ chuyên môn & Nhà trường
        </div>
        <ul className="space-y-2">
          {shift.actionItems.map((action, i) => (
            <li
              key={i}
              className="text-sm text-slate-950 font-bold flex items-start gap-2"
            >
              <Check className="w-4 h-4 text-[#1E3A8A] stroke-[3] shrink-0 mt-0.5" />
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Slide06CoreShiftsPart1() {
  const shifts = CORE_SHIFTS.slice(0, 2);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full items-stretch">
      {shifts.map((shift) => (
        <CoreShiftCard key={shift.code} shift={shift} />
      ))}
    </div>
  );
}

export function Slide07CoreShiftsPart2() {
  const shifts = CORE_SHIFTS.slice(2, 4);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full items-stretch">
      {shifts.map((shift) => (
        <CoreShiftCard key={shift.code} shift={shift} />
      ))}
    </div>
  );
}

/* ============================================================================
   SLIDE 08: FULL 7-CRITERIA INTERACTIVE COMPARISON TABLE
   ============================================================================ */
export function Slide08FullMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'governance' | 'pedagogy' | 'student_social'
  >('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCriteria = COMPARISON_CRITERIA.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !q ||
      item.criterion.toLowerCase().includes(q) ||
      item.tt32_2020.toLowerCase().includes(q) ||
      item.tt15_2026.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Filter & Search Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white border-2 border-slate-300 rounded-xl p-3">
        {/* Interactive Filter Segmented Control */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200 rounded-lg">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-extrabold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-[#1E3A8A] text-[#FACC15] shadow-xs'
                : 'text-slate-900 hover:bg-white'
            }`}
          >
            Tất cả (7 tiêu chí)
          </button>
          <button
            onClick={() => setSelectedCategory('governance')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-extrabold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'governance'
                ? 'bg-[#1E3A8A] text-[#FACC15] shadow-xs'
                : 'text-slate-900 hover:bg-white'
            }`}
          >
            Quản trị & Bộ máy (2)
          </button>
          <button
            onClick={() => setSelectedCategory('pedagogy')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-extrabold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'pedagogy'
                ? 'bg-[#1E3A8A] text-[#FACC15] shadow-xs'
                : 'text-slate-900 hover:bg-white'
            }`}
          >
            Chuyên môn & Phương pháp (2)
          </button>
          <button
            onClick={() => setSelectedCategory('student_social')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-extrabold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'student_social'
                ? 'bg-[#1E3A8A] text-[#FACC15] shadow-xs'
                : 'text-slate-900 hover:bg-white'
            }`}
          >
            Học sinh, Hồ sơ & Xã hội (3)
          </button>
        </div>

        {/* Search Input */}
        <div className="relative flex-1 min-w-[240px] max-w-xs">
          <Search className="w-4 h-4 text-slate-700 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm từ khóa (VD: AI, hồ sơ, đình chỉ...)"
            className="w-full pl-9 pr-8 py-1.5 text-xs sm:text-sm font-bold bg-slate-50 border-2 border-slate-300 rounded-lg text-slate-950 placeholder:text-slate-600 focus:outline-none focus:border-[#1E3A8A]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-700 hover:text-slate-950"
              aria-label="Xóa tìm kiếm"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Verbatim High-Contrast Table */}
      <div className="bg-white border-2 border-slate-400 rounded-xl overflow-hidden flex-1 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-400 bg-[#1E3A8A] text-xs sm:text-sm font-mono uppercase tracking-wider text-[#FACC15] font-extrabold">
                <th className="py-3.5 px-4 w-[22%]">Tiêu chí</th>
                <th className="py-3.5 px-4 w-[36%] border-l-2 border-blue-800 text-white">
                  Thông tư 32/2020/TT-BGDĐT
                </th>
                <th className="py-3.5 px-4 w-[42%] border-l-2 border-blue-800 text-[#FACC15]">
                  Thông tư 15/2026/TT-BGDĐT (Mới)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-300 text-sm sm:text-base">
              {filteredCriteria.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-8 text-center text-slate-900 font-bold">
                    Không tìm thấy tiêu chí phù hợp với từ khóa "{searchQuery}".
                  </td>
                </tr>
              ) : (
                filteredCriteria.map((row) => (
                  <tr key={row.id} className="hover:bg-blue-50/40 transition-colors align-top">
                    <td className="py-3.5 px-4 font-extrabold text-slate-950 bg-slate-50">
                      <div className="font-mono text-xs font-extrabold text-[#1E3A8A] tabular-nums mb-0.5">
                        0{row.id} · {row.categoryLabel}
                      </div>
                      {row.criterion}
                    </td>
                    <td className="py-3.5 px-4 text-slate-900 font-semibold border-l-2 border-slate-300 leading-relaxed">
                      {row.tt32_2020}
                    </td>
                    <td className="py-3.5 px-4 text-slate-950 font-bold border-l-2 border-slate-300 bg-[#EFF6FF] leading-relaxed">
                      {renderHighlightedText(row.tt15_2026, row.tt15_highlights)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   SLIDE 09: INTERACTIVE ROLE-BASED PRACTICAL LENS
   ============================================================================ */
export function Slide09RoleImpact() {
  const [activeRole, setActiveRole] = useState<'principal' | 'teacher' | 'student_parent'>(
    'principal'
  );

  const roleDetails = {
    principal: {
      title: 'Hiệu trưởng & Lãnh đạo Cơ sở Giáo dục',
      subtitle:
        'Chuyển từ cơ chế phê duyệt trung gian sang tự chủ gắn với trách nhiệm giải trình cá nhân',
      icon: Building2,
      changes: [
        {
          aspect: 'Cơ chế vận hành & Trách nhiệm',
          tt32: 'Quản lý theo mệnh lệnh hành chính, tuân thủ quy trình; Hội đồng trường công lập nắm quyền phê duyệt kế hoạch giáo dục.',
          tt15: 'Quản trị trao quyền, phân cấp, gắn quyền tự chủ với trách nhiệm giải trình của người đứng đầu và cơ sở giáo dục.',
        },
        {
          aspect: 'Tổ chức Hội đồng trường',
          tt32: 'Bắt buộc Hội đồng trường ở trường công lập với nhiều quy trình biểu quyết phức tạp.',
          tt15: 'Chỉ quy định Hội đồng trường đối với trường tư thục (cắt giảm khâu hành chính trung gian ở trường công, đề cao vai trò và trách nhiệm cá nhân của Hiệu trưởng).',
        },
        {
          aspect: 'Mở rộng hợp tác & Quản lý hồ sơ số',
          tt32: 'Kiểm tra hình thức sổ sách in ấn; phối hợp gia đình nặng tính hành chính thông báo.',
          tt15: 'Mở rộng hợp tác với cơ sở công nghệ, sản xuất; chuyển sổ sách quản lý sang dữ liệu số, hồ sơ điện tử; thiết lập cơ chế đối thoại và đo lường mức độ hài lòng.',
        },
      ],
    },
    teacher: {
      title: 'Tổ Chuyên môn & Đội ngũ Giáo viên',
      subtitle:
        'Giải phóng khỏi sổ sách hành chính lẻ tẻ, mở rộng quyền tự chủ ngữ liệu và công nghệ AI',
      icon: BookOpen,
      changes: [
        {
          aspect: 'Xây dựng Kế hoạch & Sử dụng Ngữ liệu SGK',
          tt32: 'Xây dựng kế hoạch theo phân phối cứng; chỉ đề xuất chọn sách giáo khoa và tài liệu tham khảo theo danh mục; dạy đúng từng trang sách.',
          tt15: 'Chủ động và linh hoạt thực hiện kế hoạch; chủ động thay thế, cập nhật ngữ liệu đời sống, tình huống thực tế hoặc dữ liệu địa phương đạt chuẩn đầu ra.',
        },
        {
          aspect: 'Hồ sơ, Sổ sách Giáo viên',
          tt32: 'Phải có Kế hoạch giáo dục cá nhân (năm học), Giáo án, Sổ theo dõi đánh giá, Sổ chủ nhiệm; in ấn kiểm tra hình thức.',
          tt15: 'Bỏ Kế hoạch giáo dục cá nhân của GV, bỏ Sổ theo dõi đánh giá riêng của GV (chỉ giữ Giáo án, Sổ chủ nhiệm, Sổ Đội); ưu tiên 100% hồ sơ điện tử.',
        },
        {
          aspect: 'Đổi mới Phương pháp & Thiết bị dạy học',
          tt32: 'Hoạt động cơ bản: lý thuyết, bài tập, thực hành, thí nghiệm, dự án, tham quan, cắm trại.',
          tt15: 'Xây dựng chủ đề tích hợp liên môn, STEM/STEAM; chủ động ứng dụng trí tuệ nhân tạo (AI), công nghệ số vào soạn giảng, tự làm thiết bị dạy học ứng dụng AI.',
        },
      ],
    },
    student_parent: {
      title: 'Học sinh, Gia đình & Xã hội',
      subtitle:
        'Lấy người học làm trung tâm, bảo vệ sức khỏe tâm thần và xây dựng đối tác giáo dục đồng hành',
      icon: Users,
      changes: [
        {
          aspect: 'Đánh giá Học sinh',
          tt32: 'Chú trọng xếp loại, nhận xét mang tính khuôn mẫu, thủ tục.',
          tt15: 'Giảm nhận xét hình thức, đánh giá quá trình vì sự tiến bộ của từng cá nhân; triệt tiêu bệnh thành tích và tuyệt đối không so sánh giữa các học sinh.',
        },
        {
          aspect: 'Kỷ luật Học đường & Tâm lý',
          tt32: 'Duy trì hình thức kỷ luật "Tạm dừng học ở trường có thời hạn".',
          tt15: 'Bỏ hình thức đình chỉ/buộc thôi học; chú trọng bảo vệ sức khỏe tâm thần và tư vấn tâm lý học đường.',
        },
        {
          aspect: 'Gắn kết Gia đình & Xã hội',
          tt32: 'Phối hợp chung, nặng tính hành chính thông báo và huy động đóng góp cơ sở vật chất.',
          tt15: 'Đối tác giáo dục đồng hành: Thiết lập cơ chế đối thoại, tiếp nhận phản hồi định kỳ, khảo sát đo lường mức độ hài lòng của phụ huynh/học sinh.',
        },
      ],
    },
  };

  const current = roleDetails[activeRole];

  return (
    <div className="flex flex-col justify-between h-full gap-5">
      {/* Role Selector Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button
          onClick={() => setActiveRole('principal')}
          className={`p-4 rounded-xl border-2 text-left transition-colors ${
            activeRole === 'principal'
              ? 'bg-[#1E3A8A] text-white border-[#FACC15] shadow-md'
              : 'bg-white text-slate-950 border-slate-300 hover:border-[#1E3A8A]'
          }`}
        >
          <div
            className={`font-mono text-xs font-extrabold ${
              activeRole === 'principal' ? 'text-[#FDE047]' : 'text-[#1E3A8A]'
            }`}
          >
            VAI TRÒ 01
          </div>
          <div
            className={`text-lg font-extrabold mt-0.5 ${
              activeRole === 'principal' ? 'text-[#FACC15]' : 'text-slate-950'
            }`}
          >
            Hiệu trưởng & Nhà trường
          </div>
        </button>

        <button
          onClick={() => setActiveRole('teacher')}
          className={`p-4 rounded-xl border-2 text-left transition-colors ${
            activeRole === 'teacher'
              ? 'bg-[#1E3A8A] text-white border-[#FACC15] shadow-md'
              : 'bg-white text-slate-950 border-slate-300 hover:border-[#1E3A8A]'
          }`}
        >
          <div
            className={`font-mono text-xs font-extrabold ${
              activeRole === 'teacher' ? 'text-[#FDE047]' : 'text-[#1E3A8A]'
            }`}
          >
            VAI TRÒ 02
          </div>
          <div
            className={`text-lg font-extrabold mt-0.5 ${
              activeRole === 'teacher' ? 'text-[#FACC15]' : 'text-slate-950'
            }`}
          >
            Tổ chuyên môn & Giáo viên
          </div>
        </button>

        <button
          onClick={() => setActiveRole('student_parent')}
          className={`p-4 rounded-xl border-2 text-left transition-colors ${
            activeRole === 'student_parent'
              ? 'bg-[#1E3A8A] text-white border-[#FACC15] shadow-md'
              : 'bg-white text-slate-950 border-slate-300 hover:border-[#1E3A8A]'
          }`}
        >
          <div
            className={`font-mono text-xs font-extrabold ${
              activeRole === 'student_parent' ? 'text-[#FDE047]' : 'text-[#1E3A8A]'
            }`}
          >
            VAI TRÒ 03
          </div>
          <div
            className={`text-lg font-extrabold mt-0.5 ${
              activeRole === 'student_parent' ? 'text-[#FACC15]' : 'text-slate-950'
            }`}
          >
            Học sinh & Phụ huynh
          </div>
        </button>
      </div>

      {/* Selected Role Content */}
      <div className="bg-white border-2 border-slate-300 rounded-xl p-6 flex-1 flex flex-col justify-between shadow-xs">
        <div className="border-b-2 border-slate-200 pb-4 mb-5">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E3A8A]">
            {current.title}
          </h3>
          <p className="text-sm sm:text-base font-bold text-slate-800 mt-1">
            {current.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {current.changes.map((c, idx) => (
            <div
              key={idx}
              className="border-2 border-slate-300 rounded-xl p-4 flex flex-col justify-between bg-slate-50"
            >
              <div>
                <div className="font-mono text-xs text-white bg-[#1E3A8A] inline-block px-2 py-0.5 rounded font-extrabold tabular-nums">
                  ĐIỂM THAY ĐỔI 0{idx + 1}
                </div>
                <h4 className="text-lg font-extrabold text-slate-950 mt-2 mb-3">
                  {c.aspect}
                </h4>

                <div className="space-y-3 text-sm">
                  <div className="p-3.5 rounded-lg bg-white border-2 border-slate-300 text-slate-900 font-semibold">
                    <span className="font-mono text-xs uppercase block text-slate-800 font-extrabold mb-1">
                      TT 32/2020 (Cũ):
                    </span>
                    {c.tt32}
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#EFF6FF] border-2 border-[#1E3A8A] text-slate-950 font-bold">
                    <span className="font-mono text-xs uppercase block text-[#1E3A8A] font-extrabold mb-1">
                      TT 15/2026 (Mới):
                    </span>
                    {c.tt15}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   SLIDE 10: EXECUTIVE SUMMARY & ACTION CHECKLIST
   ============================================================================ */
export function Slide10Summary({
  onJumpToSlide,
  onExportPptx,
  isExportingPptx,
}: SlideProps) {
  return (
    <div className="flex flex-col justify-between h-full gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Column 1: What is Removed / Reduced */}
        <div className="bg-white border-2 border-slate-400 rounded-xl overflow-hidden shadow-xs">
          <div className="bg-slate-800 px-6 py-3.5 border-b-2 border-[#FACC15] flex items-center justify-between">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#FACC15] font-extrabold">
              CẮT GIẢM & BÃI BỎ TRONG THÔNG TƯ 15/2026
            </span>
            <span className="font-mono text-xs text-white font-bold">
              GIẢI PHÓNG HÀNH CHÍNH
            </span>
          </div>

          <ul className="p-6 space-y-4 text-sm sm:text-base text-slate-950 font-semibold">
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-700 stroke-[3] shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-slate-950">
                  Cắt giảm khâu hành chính trung gian ở trường công:
                </strong>{' '}
                Chỉ quy định Hội đồng trường đối với trường tư thục; bỏ quy trình biểu quyết phức tạp ở trường công lập.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-700 stroke-[3] shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-slate-950">
                  Bỏ 02 loại hồ sơ cá nhân của giáo viên:
                </strong>{' '}
                Bỏ Kế hoạch giáo dục cá nhân của GV và bỏ Sổ theo dõi đánh giá riêng của GV; không yêu cầu in ấn kiểm tra hình thức.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-700 stroke-[3] shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-slate-950">
                  Bỏ hình thức kỷ luật đình chỉ/buộc thôi học:
                </strong>{' '}
                Chấm dứt hình thức kỷ luật "Tạm dừng học ở trường có thời hạn".
              </div>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-700 stroke-[3] shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-slate-950">
                  Triệt tiêu bệnh thành tích & nhận xét khuôn mẫu:
                </strong>{' '}
                Tuyệt đối không so sánh giữa các học sinh; giảm nhận xét hình thức, thủ tục.
              </div>
            </li>
          </ul>
        </div>

        {/* Column 2: What is Empowered / Created */}
        <div className="bg-white border-2 border-[#1E3A8A] rounded-xl overflow-hidden shadow-xs">
          <div className="bg-[#1E3A8A] px-6 py-3.5 border-b-2 border-[#FACC15] flex items-center justify-between">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#FACC15] font-extrabold">
              TRAO QUYỀN & KIẾN TẠO TRONG THÔNG TƯ 15/2026
            </span>
            <span className="font-mono text-xs text-white font-bold">
              TỰ CHỦ & ĐỔI MỚI
            </span>
          </div>

          <ul className="p-6 space-y-4 text-sm sm:text-base text-slate-950 font-semibold">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#1E3A8A] stroke-[3] shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-[#1E3A8A]">
                  Quản trị trao quyền gắn với trách nhiệm giải trình:
                </strong>{' '}
                Đề cao vai trò và trách nhiệm cá nhân của Hiệu trưởng và cơ sở giáo dục.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#1E3A8A] stroke-[3] shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-[#1E3A8A]">
                  Linh hoạt ngữ liệu đạt chuẩn đầu ra:
                </strong>{' '}
                Tổ chuyên môn chủ động thay thế, cập nhật ngữ liệu đời sống, tình huống thực tế, dữ liệu địa phương.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#1E3A8A] stroke-[3] shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-[#1E3A8A]">
                  Ứng dụng AI, STEM/STEAM & Hồ sơ điện tử 100%:
                </strong>{' '}
                Tự làm thiết bị dạy học ứng dụng AI; đưa vào STEM/STEAM, năng lực số; định hướng Tiếng Anh thành ngôn ngữ thứ hai.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#1E3A8A] stroke-[3] shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-[#1E3A8A]">
                  Tư vấn tâm lý & Đối tác giáo dục đồng hành:
                </strong>{' '}
                Bảo vệ sức khỏe tâm thần học sinh; đối thoại định kỳ và khảo sát mức độ hài lòng của phụ huynh/học sinh.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Summary Banner (Deep Navy Blue & Gold) */}
      <div className="bg-gradient-to-r from-[#1E3A8A] via-[#172554] to-[#0F172A] border-2 border-[#FACC15] text-white rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
        <div className="space-y-1">
          <div className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#FACC15] font-extrabold">
            THÔNG ĐIỆP CỐT LÕI CỦA THÔNG TƯ 15/2026/TT-BGDĐT
          </div>
          <p className="text-base sm:text-lg font-extrabold text-white">
            “Chuyển dịch mạnh sang mô hình quản trị kiến tạo, mở quyền chủ động, lấy người học làm trung tâm và thúc đẩy đổi mới.”
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => onJumpToSlide(1)}
            className="px-4 py-2.5 text-xs sm:text-sm font-extrabold bg-white/15 hover:bg-white/25 text-white rounded-lg border border-white/40 transition-colors whitespace-nowrap shrink-0"
          >
            Quay về Slide 01
          </button>
          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 text-xs sm:text-sm font-extrabold bg-white/15 hover:bg-white/25 text-white rounded-lg border border-white/40 transition-colors whitespace-nowrap shrink-0"
          >
            In / Lưu PDF
          </button>
          {onExportPptx && (
            <button
              onClick={onExportPptx}
              disabled={isExportingPptx}
              className="px-4 py-2.5 text-xs sm:text-sm font-extrabold bg-[#FACC15] hover:bg-[#FDE047] disabled:opacity-50 text-[#1E3A8A] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              {isExportingPptx ? 'Đang tạo file .PPTX...' : 'Tải xuống PowerPoint (.PPTX)'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
