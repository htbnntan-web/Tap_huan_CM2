import type PptxGenJS from 'pptxgenjs';
import {
  COMPARISON_CRITERIA,
  CORE_SHIFTS,
  DOCUMENT_HEADER,
  SLIDES,
} from '../data/presentationData';

const COLORS = {
  bgLight: 'F8FAFC',
  white: 'FFFFFF',
  slate100: 'F1F5F9',
  slate200: 'E2E8F0',
  slate400: '94A3B8',
  slate800: '1E293B',
  slate950: '0F172A',
  royalBlue: '1E3A8A',
  navyDark: '172554',
  gold: 'FACC15',
  blueLight: 'EFF6FF',
};

function addSlideHeader(
  slide: PptxGenJS.Slide,
  pptx: PptxGenJS,
  kicker: string,
  title: string,
  subtitle: string
) {
  slide.background = { color: COLORS.bgLight };

  // Royal Blue & Gold Header Banner Box
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.4,
    y: 0.25,
    w: 12.53,
    h: 1.15,
    fill: { color: COLORS.royalBlue },
    line: { color: COLORS.gold, width: 2 },
    rectRadius: 0.06,
  });

  // Kicker
  slide.addText(kicker.toUpperCase(), {
    x: 0.6,
    y: 0.32,
    w: 12.1,
    h: 0.24,
    fontSize: 9.5,
    bold: true,
    color: COLORS.gold,
    fontFace: 'Arial',
    charSpacing: 1.2,
  });

  // Title
  slide.addText(title.toUpperCase(), {
    x: 0.6,
    y: 0.56,
    w: 12.1,
    h: 0.44,
    fontSize: 19,
    bold: true,
    color: COLORS.gold,
    fontFace: 'Arial',
  });

  // Subtitle
  slide.addText(subtitle, {
    x: 0.6,
    y: 1.0,
    w: 12.1,
    h: 0.3,
    fontSize: 11,
    bold: true,
    color: COLORS.white,
    fontFace: 'Arial',
  });
}

function addSlideFooter(slide: PptxGenJS.Slide, slideNum: number, total: number) {
  slide.addText(
    `So sánh Thông tư 32/2020/TT-BGDĐT và Thông tư 15/2026/TT-BGDĐT   |   Trang ${slideNum} / ${total}`,
    {
      x: 0.4,
      y: 7.1,
      w: 12.53,
      h: 0.25,
      fontSize: 10,
      bold: true,
      color: COLORS.slate800,
      fontFace: 'Arial',
      align: 'right',
    }
  );
}

export async function exportPresentationToPptx(): Promise<void> {
  const pptxModule = await import('pptxgenjs');
  const PptxGenConstructor = pptxModule.default || pptxModule;
  const pptx = new PptxGenConstructor();
  pptx.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5 inches
  pptx.author = 'Bộ Giáo dục và Đào tạo - Tài liệu Tập huấn';
  pptx.company = 'Cơ sở Giáo dục';
  pptx.subject = DOCUMENT_HEADER.mainTitle;
  pptx.title = 'So sánh Thông tư 32/2020/TT-BGDĐT và Thông tư 15/2026/TT-BGDĐT';

  const totalSlides = 10;

  /* ==========================================================================
     SLIDE 01: COVER SLIDE (ROYAL BLUE & GOLD BANNER STYLE)
     ========================================================================== */
  const slide1 = pptx.addSlide();
  slide1.background = { color: COLORS.bgLight };
  slide1.addNotes(SLIDES[0].speakerNotes);

  // Top Ceremonial Royal Blue Banner
  slide1.addShape(pptx.ShapeType.roundRect, {
    x: 0.4,
    y: 0.35,
    w: 12.53,
    h: 2.05,
    fill: { color: COLORS.royalBlue },
    line: { color: COLORS.gold, width: 2.5 },
    rectRadius: 0.08,
  });

  slide1.addText('CHUYÊN ĐỀ QUẢN TRỊ GIÁO DỤC  ·  PHÂN TÍCH ĐỐI CHIẾU CHÍNH SÁCH', {
    x: 0.6,
    y: 0.5,
    w: 12.1,
    h: 0.3,
    fontSize: 11,
    bold: true,
    color: COLORS.gold,
    fontFace: 'Arial',
    align: 'center',
    charSpacing: 1.5,
  });

  slide1.addText(DOCUMENT_HEADER.mainTitle.toUpperCase(), {
    x: 0.6,
    y: 0.85,
    w: 12.1,
    h: 0.9,
    fontSize: 23,
    bold: true,
    color: COLORS.gold,
    fontFace: 'Arial',
    align: 'center',
    valign: 'middle',
  });

  slide1.addText(
    'Phân tích toàn diện 07 tiêu chí bản chất nội hàm và 04 nội dung chuyển dịch (thay đổi) cốt lõi',
    {
      x: 0.6,
      y: 1.82,
      w: 12.1,
      h: 0.38,
      fontSize: 13,
      bold: true,
      color: COLORS.white,
      fontFace: 'Arial',
      align: 'center',
    }
  );

  // Left Box: TT 32/2020
  slide1.addShape(pptx.ShapeType.roundRect, {
    x: 0.4,
    y: 2.65,
    w: 5.95,
    h: 4.2,
    fill: { color: COLORS.white },
    line: { color: COLORS.slate800, width: 1.5 },
    rectRadius: 0.08,
  });

  slide1.addText('MÔ HÌNH CŨ  ·  2020', {
    x: 0.7,
    y: 2.85,
    w: 5.35,
    h: 0.28,
    fontSize: 10.5,
    bold: true,
    color: COLORS.royalBlue,
    fontFace: 'Arial',
  });

  slide1.addText('Thông tư 32/2020/TT-BGDĐT', {
    x: 0.7,
    y: 3.15,
    w: 5.35,
    h: 0.45,
    fontSize: 19,
    bold: true,
    color: COLORS.slate950,
    fontFace: 'Arial',
  });

  slide1.addText(
    'Mang nặng tính quản lý hành chính, giám sát quy trình.\n\n• Quản lý theo mệnh lệnh hành chính, tuân thủ quy trình\n• Bắt buộc Hội đồng trường ở trường công lập với quy trình biểu quyết phức tạp\n• Xây dựng kế hoạch theo phân phối cứng; nhiều hồ sơ sổ sách cá nhân\n• Duy trì hình thức kỷ luật "Tạm dừng học ở trường có thời hạn"',
    {
      x: 0.7,
      y: 3.7,
      w: 5.35,
      h: 2.9,
      fontSize: 12.5,
      bold: true,
      color: COLORS.slate950,
      fontFace: 'Arial',
      valign: 'top',
      lineSpacingMultiple: 1.2,
    }
  );

  // Right Box: TT 15/2026 (Deep Navy & Gold)
  slide1.addShape(pptx.ShapeType.roundRect, {
    x: 6.75,
    y: 2.65,
    w: 6.18,
    h: 4.2,
    fill: { color: COLORS.navyDark },
    line: { color: COLORS.gold, width: 2 },
    rectRadius: 0.08,
  });

  slide1.addText('MÔ HÌNH MỚI  ·  2026  ·  QUẢN TRỊ KIẾN TẠO', {
    x: 7.05,
    y: 2.85,
    w: 5.55,
    h: 0.28,
    fontSize: 10.5,
    bold: true,
    color: COLORS.gold,
    fontFace: 'Arial',
  });

  slide1.addText('Thông tư 15/2026/TT-BGDĐT', {
    x: 7.05,
    y: 3.15,
    w: 5.55,
    h: 0.45,
    fontSize: 19,
    bold: true,
    color: COLORS.gold,
    fontFace: 'Arial',
  });

  slide1.addText(
    'Chuyển dịch mạnh sang mô hình quản trị kiến tạo, mở quyền chủ động, lấy người học làm trung tâm và thúc đẩy đổi mới.\n\n• Quản trị trao quyền, phân cấp gắn với trách nhiệm giải trình\n• Cắt giảm khâu hành chính trung gian ở trường công lập\n• Linh hoạt ngữ liệu SGK, tích hợp STEM/STEAM, ứng dụng AI\n• Bỏ đình chỉ/buộc thôi học; cắt giảm tối đa hồ sơ cá nhân (100% điện tử)',
    {
      x: 7.05,
      y: 3.7,
      w: 5.55,
      h: 2.9,
      fontSize: 12.5,
      bold: true,
      color: COLORS.white,
      fontFace: 'Arial',
      valign: 'top',
      lineSpacingMultiple: 1.2,
    }
  );

  addSlideFooter(slide1, 1, totalSlides);

  /* ==========================================================================
     HELPER FOR DUAL CRITERIA SLIDES (SLIDES 02, 03, 05)
     ========================================================================== */
  const buildDualCriteriaSlide = (
    slideIndex: number,
    kicker: string,
    title: string,
    subtitle: string,
    notes: string,
    c1: typeof COMPARISON_CRITERIA[0],
    c2: typeof COMPARISON_CRITERIA[0]
  ) => {
    const slide = pptx.addSlide();
    addSlideHeader(slide, pptx, kicker, title, subtitle);
    slide.addNotes(notes);

    [c1, c2].forEach((item, idx) => {
      const yOffset = idx === 0 ? 1.55 : 4.25;

      // Outer Card
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.4,
        y: yOffset,
        w: 12.53,
        h: 2.52,
        fill: { color: COLORS.white },
        line: { color: COLORS.slate800, width: 1.5 },
        rectRadius: 0.06,
      });

      // Criterion Header
      slide.addText(`TIÊU CHÍ 0${item.id}: ${item.criterion.toUpperCase()}`, {
        x: 0.65,
        y: yOffset + 0.12,
        w: 12.0,
        h: 0.32,
        fontSize: 13,
        bold: true,
        color: COLORS.royalBlue,
        fontFace: 'Arial',
      });

      // Left Subcard: TT 32/2020
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.65,
        y: yOffset + 0.5,
        w: 5.8,
        h: 1.82,
        fill: { color: COLORS.slate100 },
        line: { color: COLORS.slate400, width: 1.25 },
        rectRadius: 0.05,
      });

      slide.addText('THÔNG TƯ 32/2020/TT-BGDĐT (CŨ)', {
        x: 0.85,
        y: yOffset + 0.6,
        w: 5.4,
        h: 0.25,
        fontSize: 10,
        bold: true,
        color: COLORS.slate800,
        fontFace: 'Arial',
      });

      slide.addText(item.tt32_2020, {
        x: 0.85,
        y: yOffset + 0.88,
        w: 5.4,
        h: 1.3,
        fontSize: 12,
        bold: true,
        color: COLORS.slate950,
        fontFace: 'Arial',
        valign: 'top',
        lineSpacingMultiple: 1.15,
      });

      // Right Subcard: TT 15/2026
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 6.68,
        y: yOffset + 0.5,
        w: 6.0,
        h: 1.82,
        fill: { color: COLORS.blueLight },
        line: { color: COLORS.royalBlue, width: 1.75 },
        rectRadius: 0.05,
      });

      slide.addText('THÔNG TƯ 15/2026/TT-BGDĐT (MỚI)', {
        x: 6.88,
        y: yOffset + 0.6,
        w: 5.6,
        h: 0.25,
        fontSize: 10,
        bold: true,
        color: COLORS.royalBlue,
        fontFace: 'Arial',
      });

      slide.addText(item.tt15_2026, {
        x: 6.88,
        y: yOffset + 0.88,
        w: 5.6,
        h: 1.3,
        fontSize: 12,
        bold: true,
        color: COLORS.slate950,
        fontFace: 'Arial',
        valign: 'top',
        lineSpacingMultiple: 1.15,
      });
    });

    addSlideFooter(slide, slideIndex, totalSlides);
  };

  /* ==========================================================================
     SLIDE 02: CRITERIA 1 & 2
     ========================================================================== */
  buildDualCriteriaSlide(
    2,
    '1. Bảng so sánh bản chất nội hàm  ·  Tiêu chí 01 & 02',
    'Triết lý Vận hành & Tổ chức Bộ máy Nhà trường',
    'Trao quyền gắn với trách nhiệm giải trình và cắt giảm khâu hành chính trung gian ở trường công lập',
    SLIDES[1].speakerNotes,
    COMPARISON_CRITERIA[0],
    COMPARISON_CRITERIA[1]
  );

  /* ==========================================================================
     SLIDE 03: CRITERIA 3 & 4
     ========================================================================== */
  buildDualCriteriaSlide(
    3,
    '1. Bảng so sánh bản chất nội hàm  ·  Tiêu chí 03 & 04',
    'Quyền Tự chủ Chuyên môn & Không gian Học tập Mở',
    'Linh hoạt sử dụng ngữ liệu SGK, tự làm thiết bị ứng dụng AI, STEM/STEAM và Tiếng Anh ngôn ngữ thứ hai',
    SLIDES[2].speakerNotes,
    COMPARISON_CRITERIA[2],
    COMPARISON_CRITERIA[3]
  );

  /* ==========================================================================
     SLIDE 04: CRITERION 5 (ĐÁNH GIÁ HỌC SINH & KỶ LUẬT)
     ========================================================================== */
  const slide4 = pptx.addSlide();
  const c5 = COMPARISON_CRITERIA[4];
  addSlideHeader(
    slide4,
    pptx,
    '1. Bảng so sánh bản chất nội hàm  ·  Tiêu chí 05',
    'Đánh giá Học sinh & Kỷ luật Tích cực, Nhân văn',
    'Đánh giá vì sự tiến bộ, tuyệt đối không so sánh học sinh, bỏ đình chỉ/buộc thôi học'
  );
  slide4.addNotes(SLIDES[3].speakerNotes);

  // Top Comparison Box
  slide4.addShape(pptx.ShapeType.roundRect, {
    x: 0.4,
    y: 1.55,
    w: 5.95,
    h: 2.3,
    fill: { color: COLORS.white },
    line: { color: COLORS.slate800, width: 1.5 },
    rectRadius: 0.06,
  });

  slide4.addText('THÔNG TƯ 32/2020/TT-BGDĐT (CŨ)', {
    x: 0.65,
    y: 1.72,
    w: 5.45,
    h: 0.25,
    fontSize: 10.5,
    bold: true,
    color: COLORS.slate800,
    fontFace: 'Arial',
  });

  slide4.addText(c5.tt32_2020, {
    x: 0.65,
    y: 2.05,
    w: 5.45,
    h: 1.6,
    fontSize: 13.5,
    bold: true,
    color: COLORS.slate950,
    fontFace: 'Arial',
    valign: 'top',
    lineSpacingMultiple: 1.2,
  });

  slide4.addShape(pptx.ShapeType.roundRect, {
    x: 6.65,
    y: 1.55,
    w: 6.28,
    h: 2.3,
    fill: { color: COLORS.blueLight },
    line: { color: COLORS.royalBlue, width: 2 },
    rectRadius: 0.06,
  });

  slide4.addText('THÔNG TƯ 15/2026/TT-BGDĐT (MỚI)', {
    x: 6.9,
    y: 1.72,
    w: 5.75,
    h: 0.25,
    fontSize: 10.5,
    bold: true,
    color: COLORS.royalBlue,
    fontFace: 'Arial',
  });

  slide4.addText(c5.tt15_2026, {
    x: 6.9,
    y: 2.05,
    w: 5.75,
    h: 1.6,
    fontSize: 13.5,
    bold: true,
    color: COLORS.slate950,
    fontFace: 'Arial',
    valign: 'top',
    lineSpacingMultiple: 1.2,
  });

  // 4 Bottom Pillars in Deep Navy Blue & Gold
  const pillars5 = [
    {
      head: '01. Giảm nhận xét hình thức',
      desc: 'Đánh giá quá trình vì sự tiến bộ thực chất; giảm bớt lời nhận xét khuôn mẫu, thủ tục.',
    },
    {
      head: '02. Không so sánh học sinh',
      desc: 'Triệt tiêu bệnh thành tích và tuyệt đối không so sánh giữa các học sinh với nhau.',
    },
    {
      head: '03. Bỏ đình chỉ / buộc thôi học',
      desc: 'Bãi bỏ hình thức kỷ luật "Tạm dừng học ở trường có thời hạn", đảm bảo quyền học tập.',
    },
    {
      head: '04. Tâm lý học đường',
      desc: 'Chú trọng bảo vệ sức khỏe tâm thần và tăng cường tư vấn tâm lý học đường.',
    },
  ];

  pillars5.forEach((p, idx) => {
    const xPos = 0.4 + idx * 3.18;
    slide4.addShape(pptx.ShapeType.roundRect, {
      x: xPos,
      y: 4.15,
      w: 2.98,
      h: 2.65,
      fill: { color: COLORS.navyDark },
      line: { color: COLORS.gold, width: 1.5 },
      rectRadius: 0.06,
    });

    slide4.addText(p.head, {
      x: xPos + 0.18,
      y: 4.35,
      w: 2.62,
      h: 0.55,
      fontSize: 12.5,
      bold: true,
      color: COLORS.gold,
      fontFace: 'Arial',
      valign: 'top',
    });

    slide4.addText(p.desc, {
      x: xPos + 0.18,
      y: 5.0,
      w: 2.62,
      h: 1.6,
      fontSize: 11.5,
      bold: true,
      color: COLORS.white,
      fontFace: 'Arial',
      valign: 'top',
      lineSpacingMultiple: 1.2,
    });
  });

  addSlideFooter(slide4, 4, totalSlides);

  /* ==========================================================================
     SLIDE 05: CRITERIA 6 & 7 (HỒ SƠ SỔ SÁCH & GIA ĐÌNH - XÃ HỘI)
     ========================================================================== */
  buildDualCriteriaSlide(
    5,
    '1. Bảng so sánh bản chất nội hàm  ·  Tiêu chí 06 & 07',
    'Tinh giản Hồ sơ Sổ sách & Đối tác Giáo dục Đồng hành',
    'Cắt giảm tối đa hồ sơ cá nhân (ưu tiên 100% điện tử) và thiết lập cơ chế đối thoại phụ huynh/học sinh',
    SLIDES[4].speakerNotes,
    COMPARISON_CRITERIA[5],
    COMPARISON_CRITERIA[6]
  );

  /* ==========================================================================
     SLIDES 06 & 07: CORE SHIFTS 2.1 - 2.4
     ========================================================================== */
  const buildCoreShiftSlide = (
    slideNum: number,
    kicker: string,
    title: string,
    subtitle: string,
    notes: string,
    s1: typeof CORE_SHIFTS[0],
    s2: typeof CORE_SHIFTS[0]
  ) => {
    const slide = pptx.addSlide();
    addSlideHeader(slide, pptx, kicker, title, subtitle);
    slide.addNotes(notes);

    [s1, s2].forEach((shift, idx) => {
      const xPos = idx === 0 ? 0.4 : 6.8;
      const cardW = 6.13;

      slide.addShape(pptx.ShapeType.roundRect, {
        x: xPos,
        y: 1.55,
        w: cardW,
        h: 5.3,
        fill: { color: COLORS.white },
        line: { color: COLORS.royalBlue, width: 1.75 },
        rectRadius: 0.06,
      });

      slide.addText(`CHUYỂN DỊCH CỐT LÕI ${shift.code}`, {
        x: xPos + 0.25,
        y: 1.72,
        w: cardW - 0.5,
        h: 0.25,
        fontSize: 10.5,
        bold: true,
        color: COLORS.royalBlue,
        fontFace: 'Arial',
      });

      slide.addText(shift.title, {
        x: xPos + 0.25,
        y: 2.0,
        w: cardW - 0.5,
        h: 0.75,
        fontSize: 14,
        bold: true,
        color: COLORS.slate950,
        fontFace: 'Arial',
        valign: 'top',
      });

      // Verbatim Box
      slide.addShape(pptx.ShapeType.roundRect, {
        x: xPos + 0.25,
        y: 2.82,
        w: cardW - 0.5,
        h: 1.72,
        fill: { color: COLORS.blueLight },
        line: { color: COLORS.royalBlue, width: 1.5 },
        rectRadius: 0.05,
      });

      slide.addText(`“${shift.verbatimContent}”`, {
        x: xPos + 0.4,
        y: 2.94,
        w: cardW - 0.8,
        h: 1.48,
        fontSize: 11.5,
        bold: true,
        color: COLORS.slate950,
        fontFace: 'Arial',
        valign: 'top',
        lineSpacingMultiple: 1.15,
      });

      // Action items
      slide.addText('TRỌNG TÂM THỰC HIỆN TẠI NHÀ TRƯỜNG:', {
        x: xPos + 0.25,
        y: 4.68,
        w: cardW - 0.5,
        h: 0.25,
        fontSize: 10.5,
        bold: true,
        color: COLORS.royalBlue,
        fontFace: 'Arial',
      });

      const bulletText = shift.actionItems.map((a) => `• ${a}`).join('\n');
      slide.addText(bulletText, {
        x: xPos + 0.25,
        y: 4.98,
        w: cardW - 0.5,
        h: 1.7,
        fontSize: 11.5,
        bold: true,
        color: COLORS.slate950,
        fontFace: 'Arial',
        valign: 'top',
        lineSpacingMultiple: 1.2,
      });
    });

    addSlideFooter(slide, slideNum, totalSlides);
  };

  buildCoreShiftSlide(
    6,
    '2. Một số nội dung chuyển dịch (thay đổi) cốt lõi  ·  Mục 2.1 & 2.2',
    'Linh hoạt Ngữ liệu Đạt chuẩn Đầu ra & Giải phóng Hành chính',
    'Chủ động thay thế ngữ liệu thực tế và chuyển hẳn giáo án, sổ sách quản lý sang dữ liệu số',
    SLIDES[5].speakerNotes,
    CORE_SHIFTS[0],
    CORE_SHIFTS[1]
  );

  buildCoreShiftSlide(
    7,
    '2. Một số nội dung chuyển dịch (thay đổi) cốt lõi  ·  Mục 2.3 & 2.4',
    'Đổi mới Phương pháp gắn với Công nghệ Mới & Tư duy Đánh giá',
    'Tích hợp liên môn STEM/STEAM, ứng dụng AI và triệt tiêu bệnh thành tích, không so sánh học sinh',
    SLIDES[6].speakerNotes,
    CORE_SHIFTS[2],
    CORE_SHIFTS[3]
  );

  /* ==========================================================================
     SLIDES 08 & 09: FULL COMPARISON TABLE (PART 1: 1-4, PART 2: 5-7)
     ========================================================================== */
  const buildTableSlide = (
    slideNum: number,
    subtitle: string,
    rowsData: typeof COMPARISON_CRITERIA
  ) => {
    const slide = pptx.addSlide();
    addSlideHeader(
      slide,
      pptx,
      '1. Bảng so sánh bản chất nội hàm  ·  Bảng tổng hợp nguyên văn',
      'Bảng So sánh Bản chất Nội hàm (Thông tư 32/2020 & Thông tư 15/2026)',
      subtitle
    );
    slide.addNotes(SLIDES[7].speakerNotes);

    const tableRows: PptxGenJS.TableRow[] = [
      [
        {
          text: 'TIÊU CHÍ',
          options: {
            bold: true,
            fill: { color: COLORS.royalBlue },
            color: COLORS.gold,
            fontSize: 11.5,
            fontFace: 'Arial',
            margin: 6,
          },
        },
        {
          text: 'THÔNG TƯ 32/2020/TT-BGDĐT',
          options: {
            bold: true,
            fill: { color: COLORS.royalBlue },
            color: COLORS.white,
            fontSize: 11.5,
            fontFace: 'Arial',
            margin: 6,
          },
        },
        {
          text: 'THÔNG TƯ 15/2026/TT-BGDĐT (MỚI)',
          options: {
            bold: true,
            fill: { color: COLORS.royalBlue },
            color: COLORS.gold,
            fontSize: 11.5,
            fontFace: 'Arial',
            margin: 6,
          },
        },
      ],
    ];

    rowsData.forEach((r) => {
      tableRows.push([
        {
          text: `${r.id}. ${r.criterion}`,
          options: {
            bold: true,
            fill: { color: COLORS.white },
            color: COLORS.royalBlue,
            fontSize: 11,
            fontFace: 'Arial',
            valign: 'top',
            margin: 6,
          },
        },
        {
          text: r.tt32_2020,
          options: {
            bold: true,
            fill: { color: COLORS.slate100 },
            color: COLORS.slate950,
            fontSize: 11,
            fontFace: 'Arial',
            valign: 'top',
            margin: 6,
          },
        },
        {
          text: r.tt15_2026,
          options: {
            bold: true,
            fill: { color: COLORS.blueLight },
            color: COLORS.slate950,
            fontSize: 11,
            fontFace: 'Arial',
            valign: 'top',
            margin: 6,
          },
        },
      ]);
    });

    slide.addTable(tableRows, {
      x: 0.4,
      y: 1.55,
      w: 12.53,
      colW: [2.73, 4.6, 5.2],
      border: { type: 'solid', pt: 1.25, color: COLORS.slate800 },
    });

    addSlideFooter(slide, slideNum, totalSlides);
  };

  buildTableSlide(
    8,
    'Phần 1: Đối chiếu nguyên văn từ Tiêu chí 01 đến Tiêu chí 04',
    COMPARISON_CRITERIA.slice(0, 4)
  );

  buildTableSlide(
    9,
    'Phần 2: Đối chiếu nguyên văn từ Tiêu chí 05 đến Tiêu chí 07',
    COMPARISON_CRITERIA.slice(4, 7)
  );

  /* ==========================================================================
     SLIDE 10: EXECUTIVE SUMMARY (CẮT GIẢM vs TRAO QUYỀN)
     ========================================================================== */
  const slide10 = pptx.addSlide();
  addSlideHeader(
    slide10,
    pptx,
    'Tổng kết & Triển khai tại Cơ sở Giáo dục',
    'Tổng kết Đối chiếu: Giải phóng Hành chính & Mở quyền Chủ động',
    'Hệ thống hóa các quy định cắt giảm/bãi bỏ và các không gian tự chủ kiến tạo theo Thông tư 15/2026/TT-BGDĐT'
  );
  slide10.addNotes(SLIDES[9].speakerNotes);

  // Left Box: Cắt giảm & Bãi bỏ
  slide10.addShape(pptx.ShapeType.roundRect, {
    x: 0.4,
    y: 1.55,
    w: 6.1,
    h: 5.3,
    fill: { color: COLORS.white },
    line: { color: COLORS.slate800, width: 2 },
    rectRadius: 0.06,
  });

  slide10.addText('CẮT GIẢM & BÃI BỎ (GIẢI PHÓNG HÀNH CHÍNH)', {
    x: 0.68,
    y: 1.75,
    w: 5.55,
    h: 0.3,
    fontSize: 11.5,
    bold: true,
    color: COLORS.slate800,
    fontFace: 'Arial',
  });

  slide10.addText(
    '1. Cắt giảm khâu hành chính trung gian ở trường công:\nChỉ quy định Hội đồng trường đối với trường tư thục; bỏ quy trình biểu quyết phức tạp ở trường công lập.\n\n2. Cắt giảm tối đa hồ sơ cá nhân của giáo viên:\nBỏ Kế hoạch giáo dục cá nhân của GV và bỏ Sổ theo dõi đánh giá riêng của GV; không yêu cầu in ấn kiểm tra hình thức.\n\n3. Bỏ hình thức đình chỉ / buộc thôi học:\nChấm dứt hình thức kỷ luật "Tạm dừng học ở trường có thời hạn".\n\n4. Triệt tiêu bệnh thành tích & nhận xét khuôn mẫu:\nTuyệt đối không so sánh giữa các học sinh; giảm nhận xét hình thức, thủ tục.',
    {
      x: 0.68,
      y: 2.15,
      w: 5.55,
      h: 4.5,
      fontSize: 11.5,
      bold: true,
      color: COLORS.slate950,
      fontFace: 'Arial',
      valign: 'top',
      lineSpacingMultiple: 1.18,
    }
  );

  // Right Box: Trao quyền & Kiến tạo
  slide10.addShape(pptx.ShapeType.roundRect, {
    x: 6.83,
    y: 1.55,
    w: 6.1,
    h: 5.3,
    fill: { color: COLORS.navyDark },
    line: { color: COLORS.gold, width: 2 },
    rectRadius: 0.06,
  });

  slide10.addText('TRAO QUYỀN & KIẾN TẠO (TỰ CHỦ & ĐỔI MỚI)', {
    x: 7.11,
    y: 1.75,
    w: 5.55,
    h: 0.3,
    fontSize: 11.5,
    bold: true,
    color: COLORS.gold,
    fontFace: 'Arial',
  });

  slide10.addText(
    '1. Quản trị trao quyền gắn với trách nhiệm giải trình:\nĐề cao vai trò và trách nhiệm cá nhân của Hiệu trưởng và cơ sở giáo dục.\n\n2. Linh hoạt ngữ liệu đạt chuẩn đầu ra:\nTổ chuyên môn chủ động thay thế, cập nhật ngữ liệu đời sống, tình huống thực tế, dữ liệu địa phương.\n\n3. Ứng dụng AI, STEM/STEAM & Hồ sơ điện tử 100%:\nTự làm thiết bị dạy học ứng dụng AI; chỉ giữ Giáo án, Sổ chủ nhiệm, Sổ Đội; định hướng Tiếng Anh thành ngôn ngữ thứ hai.\n\n4. Tư vấn tâm lý & Đối tác giáo dục đồng hành:\nBảo vệ sức khỏe tâm thần; đối thoại định kỳ, khảo sát mức độ hài lòng của phụ huynh/học sinh.',
    {
      x: 7.11,
      y: 2.15,
      w: 5.55,
      h: 4.5,
      fontSize: 11.5,
      bold: true,
      color: COLORS.white,
      fontFace: 'Arial',
      valign: 'top',
      lineSpacingMultiple: 1.18,
    }
  );

  addSlideFooter(slide10, 10, totalSlides);

  await pptx.writeFile({
    fileName: 'So_sanh_Thong_tu_32_2020_va_Thong_tu_15_2026.pptx',
  });
}
