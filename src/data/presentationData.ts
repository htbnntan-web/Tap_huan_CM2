export interface ComparisonCriterion {
  id: number;
  category: 'governance' | 'pedagogy' | 'student_social';
  categoryLabel: string;
  criterion: string;
  tt32_2020: string;
  tt32_keywords: string[];
  tt15_2026: string;
  tt15_highlights: string[];
  shiftSummary: string;
}

export interface CoreShift {
  code: string;
  title: string;
  fromState: string;
  toState: string;
  verbatimContent: string;
  actionItems: string[];
  relatedCriterionIds: number[];
}

export interface SlideDefinition {
  id: number;
  chapter: 'overview' | 'comparison' | 'core_shifts' | 'matrix';
  chapterLabel: string;
  indexLabel: string;
  title: string;
  subtitle: string;
  speakerNotes: string;
}

export const DOCUMENT_HEADER = {
  mainTitle: 'I. So sánh giữa Thông tư 32/2020/TT-BGDĐT và Thông tư 15/2026/TT-BGDĐT',
  tt32Summary:
    'Thông tư 32/2020/TT-BGDĐT (mang nặng tính quản lý hành chính, giám sát quy trình)',
  tt15Summary:
    'Thông tư 15/2026/TT-BGDĐT (chuyển dịch mạnh sang mô hình quản trị kiến tạo, mở quyền chủ động, lấy người học làm trung tâm và thúc đẩy đổi mới)',
  section1Title: '1. Bảng so sánh bản chất nội hàm',
  section2Title: '2. Một số nội dung chuyển dịch (thay đổi) cốt lõi',
};

export const COMPARISON_CRITERIA: ComparisonCriterion[] = [
  {
    id: 1,
    category: 'governance',
    categoryLabel: 'Quản trị & Tổ chức',
    criterion: 'Triết lý & Cơ chế vận hành',
    tt32_2020:
      'Quản lý theo mệnh lệnh hành chính, tuân thủ quy trình; Hội đồng trường công lập nắm quyền phê duyệt kế hoạch giáo dục.',
    tt32_keywords: ['Mệnh lệnh hành chính', 'Tuân thủ quy trình', 'HĐ trường công phê duyệt KH'],
    tt15_2026:
      'Quản trị trao quyền, phân cấp, gắn quyền tự chủ với trách nhiệm giải trình của người đứng đầu và cơ sở giáo dục.',
    tt15_highlights: ['trách nhiệm giải trình'],
    shiftSummary: 'Từ mệnh lệnh hành chính sang quản trị trao quyền gắn với trách nhiệm giải trình',
  },
  {
    id: 2,
    category: 'governance',
    categoryLabel: 'Quản trị & Tổ chức',
    criterion: 'Tổ chức bộ máy & Hội đồng trường',
    tt32_2020:
      'Bắt buộc Hội đồng trường ở trường công lập với nhiều quy trình biểu quyết phức tạp.',
    tt32_keywords: ['Bắt buộc HĐ trường công lập', 'Biểu quyết phức tạp'],
    tt15_2026:
      'Chỉ quy định Hội đồng trường đối với trường tư thục (cắt giảm khâu hành chính trung gian ở trường công, đề cao vai trò và trách nhiệm cá nhân của Hiệu trưởng).',
    tt15_highlights: ['cắt giảm khâu hành chính trung gian', 'trách nhiệm cá nhân của Hiệu trưởng'],
    shiftSummary: 'Tinh gọn khâu trung gian ở trường công lập, đề cao trách nhiệm cá nhân Hiệu trưởng',
  },
  {
    id: 3,
    category: 'pedagogy',
    categoryLabel: 'Chuyên môn & Dạy học',
    criterion: 'Quyền tự chủ của Tổ chuyên môn & Giáo viên',
    tt32_2020:
      'Xây dựng kế hoạch theo phân phối cứng; chỉ đề xuất chọn sách giáo khoa và tài liệu tham khảo theo danh mục.',
    tt32_keywords: ['Phân phối cứng', 'Đề xuất theo danh mục'],
    tt15_2026:
      'Chủ động và linh hoạt thực hiện kế hoạch; được chủ động cập nhật, linh hoạt sử dụng ngữ liệu bài học/chủ đề trong SGK phù hợp thực tiễn; tự làm thiết bị dạy học ứng dụng AI.',
    tt15_highlights: ['Chủ động và linh hoạt', 'linh hoạt sử dụng ngữ liệu', 'ứng dụng AI'],
    shiftSummary: 'Mở quyền tự chủ thực hiện kế hoạch, linh hoạt ngữ liệu SGK và ứng dụng AI',
  },
  {
    id: 4,
    category: 'pedagogy',
    categoryLabel: 'Chuyên môn & Dạy học',
    criterion: 'Không gian học tập & Đổi mới phương pháp',
    tt32_2020:
      'Hoạt động cơ bản: lý thuyết, bài tập, thực hành, thí nghiệm, dự án, tham quan, cắm trại.',
    tt32_keywords: ['Lý thuyết & Bài tập', 'Thực hành, thí nghiệm', 'Tham quan, cắm trại'],
    tt15_2026:
      'Mở rộng hợp tác với cơ sở công nghệ, sản xuất; đưa vào chương trình giáo dục STEM/STEAM, AI, năng lực số, hướng nghiệp, kỹ năng sống; định hướng đưa Tiếng Anh thành ngôn ngữ thứ hai.',
    tt15_highlights: ['STEM/STEAM, AI, năng lực số', 'Tiếng Anh thành ngôn ngữ thứ hai'],
    shiftSummary: 'Tích hợp STEM/STEAM, AI, năng lực số và đưa Tiếng Anh thành ngôn ngữ thứ hai',
  },
  {
    id: 5,
    category: 'student_social',
    categoryLabel: 'Học sinh, Hồ sơ & Xã hội',
    criterion: 'Đánh giá học sinh & Kỷ luật',
    tt32_2020:
      'Chú trọng xếp loại, nhận xét; duy trì hình thức kỷ luật "Tạm dừng học ở trường có thời hạn".',
    tt32_keywords: ['Chú trọng xếp loại', 'Tạm dừng học ở trường có thời hạn'],
    tt15_2026:
      'Giảm nhận xét hình thức, đánh giá quá trình vì sự tiến bộ; tuyệt đối không so sánh học sinh; bỏ hình thức đình chỉ/buộc thôi học, chú trọng bảo vệ sức khỏe tâm thần và tư vấn tâm lý học đường.',
    tt15_highlights: [
      'Giảm nhận xét hình thức',
      'bỏ hình thức đình chỉ/buộc thôi học',
      'bảo vệ sức khỏe tâm thần',
    ],
    shiftSummary: 'Đánh giá vì sự tiến bộ, không so sánh, bỏ đình chỉ học, chú trọng tâm lý học đường',
  },
  {
    id: 6,
    category: 'student_social',
    categoryLabel: 'Học sinh, Hồ sơ & Xã hội',
    criterion: 'Hồ sơ, sổ sách giáo viên',
    tt32_2020:
      'Giáo viên phải có Kế hoạch giáo dục cá nhân (năm học), Giáo án, Sổ theo dõi đánh giá, Sổ chủ nhiệm.',
    tt32_keywords: ['KH giáo dục cá nhân', 'Giáo án', 'Sổ theo dõi đánh giá', 'Sổ chủ nhiệm'],
    tt15_2026:
      'Cắt giảm tối đa hồ sơ cá nhân: Bỏ Kế hoạch giáo dục cá nhân của GV, bỏ Sổ theo dõi đánh giá riêng của GV (chỉ giữ Giáo án, Sổ chủ nhiệm, Sổ Đội); ưu tiên 100% hồ sơ điện tử.',
    tt15_highlights: ['Cắt giảm tối đa hồ sơ cá nhân', 'ưu tiên 100% hồ sơ điện tử'],
    shiftSummary: 'Bỏ 2 loại sổ cá nhân của GV, chỉ giữ Giáo án, Sổ chủ nhiệm, Sổ Đội; 100% điện tử',
  },
  {
    id: 7,
    category: 'student_social',
    categoryLabel: 'Học sinh, Hồ sơ & Xã hội',
    criterion: 'Gắn kết Gia đình & Xã hội',
    tt32_2020:
      'Phối hợp chung, nặng tính hành chính thông báo và huy động đóng góp cơ sở vật chất.',
    tt32_keywords: ['Hành chính thông báo', 'Huy động đóng góp CSVC'],
    tt15_2026:
      'Đối tác giáo dục đồng hành: Thiết lập cơ chế đối thoại, tiếp nhận phản hồi định kỳ, khảo sát đo lường mức độ hài lòng của phụ huynh/học sinh.',
    tt15_highlights: ['Đối tác giáo dục đồng hành', 'đo lường mức độ hài lòng'],
    shiftSummary: 'Từ thông báo hành chính sang Đối tác giáo dục đồng hành và khảo sát sự hài lòng',
  },
];

export const CORE_SHIFTS: CoreShift[] = [
  {
    code: '2.1',
    title: 'Từ "Dạy đúng từng trang sách" sang "Linh hoạt ngữ liệu đạt chuẩn đầu ra"',
    fromState: 'Dạy đúng từng trang sách (trói buộc cứng nhắc vào từng ngữ liệu trong SGK)',
    toState: 'Linh hoạt ngữ liệu đạt chuẩn đầu ra (chủ động thay thế, cập nhật ngữ liệu thực tế)',
    verbatimContent:
      'Giáo viên không còn bị trói buộc cứng nhắc vào từng ngữ liệu trong SGK. Tổ chuyên môn được chủ động thay thế, cập nhật các ngữ liệu đời sống, tình huống thực tế hoặc dữ liệu địa phương sao cho đạt yêu cầu cần đạt của chương trình.',
    actionItems: [
      'Tổ chuyên môn rà soát yêu cầu cần đạt của chương trình làm thước đo chuẩn đầu ra',
      'Chủ động thay thế, cập nhật ngữ liệu đời sống và tình huống thực tế vào bài giảng',
      'Tích hợp dữ liệu địa phương phù hợp với đặc thù học sinh và thực tiễn nhà trường',
    ],
    relatedCriterionIds: [3],
  },
  {
    code: '2.2',
    title: 'Giải phóng hành chính – Tập trung vào chiều sâu chuyên môn',
    fromState: 'Gánh nặng sổ sách cá nhân, in ấn giấy tờ kiểm tra hình thức',
    toState: 'Tinh giản tối đa hồ sơ cá nhân, chuyển hẳn sang dữ liệu số & hồ sơ điện tử',
    verbatimContent:
      'Cắt giảm Kế hoạch giáo dục cá nhân của giáo viên và sổ theo dõi lẻ tẻ. Kế hoạch bài dạy (giáo án) và sổ sách quản lý chuyển hẳn sang dữ liệu số, hồ sơ điện tử (không yêu cầu in ấn kiểm tra hình thức).',
    actionItems: [
      'Bãi bỏ Kế hoạch giáo dục cá nhân của giáo viên và Sổ theo dõi đánh giá riêng lẻ',
      'Chuyển Kế hoạch bài dạy (giáo án) và sổ sách quản lý sang dữ liệu số, hồ sơ điện tử',
      'Chấm dứt yêu cầu in ấn giấy tờ chỉ để phục vụ kiểm tra hình thức hành chính',
    ],
    relatedCriterionIds: [2, 6],
  },
  {
    code: '2.3',
    title: 'Đổi mới phương pháp dạy học gắn với công nghệ mới',
    fromState: 'Hoạt động dạy học truyền thống theo phân phối cứng',
    toState: 'Chủ đề tích hợp liên môn, STEM/STEAM, ứng dụng AI & công nghệ số',
    verbatimContent:
      'Khuyến khích tổ chuyên môn xây dựng các chủ đề tích hợp liên môn, STEM/STEAM và chủ động ứng dụng trí tuệ nhân tạo (AI), công nghệ số vào soạn giảng và thiết kế học liệu.',
    actionItems: [
      'Tổ chuyên môn xây dựng các chủ đề dạy học tích hợp liên môn, giáo dục STEM/STEAM',
      'Chủ động ứng dụng trí tuệ nhân tạo (AI) và công nghệ số vào soạn giảng, thiết kế học liệu',
      'Mở rộng hợp tác với cơ sở công nghệ, sản xuất và định hướng Tiếng Anh là ngôn ngữ thứ hai',
    ],
    relatedCriterionIds: [3, 4],
  },
  {
    code: '2.4',
    title: 'Thay đổi tư duy đánh giá học sinh',
    fromState: 'Nặng xếp loại, nhận xét khuôn mẫu thủ tục, kỷ luật tạm dừng học',
    toState: 'Vì sự tiến bộ từng cá nhân, không so sánh, bảo vệ sức khỏe tâm thần',
    verbatimContent:
      'Triệt tiêu bệnh thành tích và việc so sánh giữa các học sinh. Đánh giá thường xuyên tập trung vào sự tiến bộ của từng cá nhân, giảm bớt các lời nhận xét mang tính khuôn mẫu, thủ tục.',
    actionItems: [
      'Triệt tiêu bệnh thành tích và tuyệt đối không so sánh giữa các học sinh',
      'Đánh giá thường xuyên vì sự tiến bộ cá nhân, giảm nhận xét khuôn mẫu, thủ tục',
      'Bỏ hình thức đình chỉ/buộc thôi học; chú trọng tư vấn tâm lý học đường và sức khỏe tâm thần',
    ],
    relatedCriterionIds: [5, 7],
  },
];

export const SLIDES: SlideDefinition[] = [
  {
    id: 1,
    chapter: 'overview',
    chapterLabel: 'Phần mở đầu',
    indexLabel: 'Slide 01 / 10',
    title: 'So sánh giữa Thông tư 32/2020/TT-BGDĐT và Thông tư 15/2026/TT-BGDĐT',
    subtitle: 'Từ quản lý hành chính, giám sát quy trình sang mô hình quản trị kiến tạo, mở quyền chủ động',
    speakerNotes:
      'Giới thiệu bức tranh tổng thể: Thông tư 32/2020/TT-BGDĐT mang nặng tính quản lý hành chính và giám sát quy trình. Trong khi đó, Thông tư 15/2026/TT-BGDĐT đánh dấu bước chuyển dịch mạnh mẽ sang mô hình quản trị kiến tạo, mở quyền chủ động, lấy người học làm trung tâm và thúc đẩy đổi mới toàn diện.',
  },
  {
    id: 2,
    chapter: 'comparison',
    chapterLabel: '1. Bảng so sánh bản chất nội hàm',
    indexLabel: 'Slide 02 / 10',
    title: 'Triết lý Vận hành & Tổ chức Bộ máy Nhà trường',
    subtitle: 'Tiêu chí 01 & 02: Phân cấp trao quyền gắn với trách nhiệm giải trình và tinh gọn khâu trung gian',
    speakerNotes:
      'Tại tiêu chí 1 và 2: Chuyển từ quản lý theo mệnh lệnh hành chính sang quản trị trao quyền, gắn tự chủ với trách nhiệm giải trình của người đứng đầu. Đặc biệt, Thông tư 15/2026 chỉ quy định Hội đồng trường đối với trường tư thục, cắt giảm khâu hành chính trung gian ở trường công lập và đề cao vai trò, trách nhiệm cá nhân của Hiệu trưởng.',
  },
  {
    id: 3,
    chapter: 'comparison',
    chapterLabel: '1. Bảng so sánh bản chất nội hàm',
    indexLabel: 'Slide 03 / 10',
    title: 'Quyền Tự chủ Chuyên môn & Không gian Học tập Mở',
    subtitle: 'Tiêu chí 03 & 04: Linh hoạt ngữ liệu SGK, ứng dụng AI, STEM/STEAM và Tiếng Anh ngôn ngữ thứ hai',
    speakerNotes:
      'Tổ chuyên môn và giáo viên được trao quyền chủ động, linh hoạt thực hiện kế hoạch, cập nhật ngữ liệu bài học/chủ đề trong SGK phù hợp thực tiễn, tự làm thiết bị dạy học ứng dụng AI. Không gian học tập mở rộng hợp tác với cơ sở công nghệ, sản xuất; đưa vào STEM/STEAM, AI, năng lực số, hướng nghiệp, kỹ năng sống và định hướng Tiếng Anh thành ngôn ngữ thứ hai.',
  },
  {
    id: 4,
    chapter: 'comparison',
    chapterLabel: '1. Bảng so sánh bản chất nội hàm',
    indexLabel: 'Slide 04 / 10',
    title: 'Đánh giá Học sinh & Kỷ luật Tích cực, Nhân văn',
    subtitle: 'Tiêu chí 05: Đánh giá vì sự tiến bộ, bỏ đình chỉ/buộc thôi học, bảo vệ sức khỏe tâm thần',
    speakerNotes:
      'Thông tư 15/2026 tạo bước ngoặt nhân văn: Giảm nhận xét hình thức, đánh giá quá trình vì sự tiến bộ; tuyệt đối không so sánh học sinh; bỏ hình thức kỷ luật tạm dừng học ở trường có thời hạn (đình chỉ/buộc thôi học), chú trọng bảo vệ sức khỏe tâm thần và tư vấn tâm lý học đường.',
  },
  {
    id: 5,
    chapter: 'comparison',
    chapterLabel: '1. Bảng so sánh bản chất nội hàm',
    indexLabel: 'Slide 05 / 10',
    title: 'Tinh giản Hồ sơ Sổ sách & Đối tác Giáo dục Đồng hành',
    subtitle: 'Tiêu chí 06 & 07: Cắt giảm tối đa hồ sơ cá nhân (100% điện tử) và thiết lập cơ chế đối thoại gia đình - xã hội',
    speakerNotes:
      'Về hồ sơ sổ sách: Bỏ Kế hoạch giáo dục cá nhân của GV, bỏ Sổ theo dõi đánh giá riêng của GV (chỉ giữ Giáo án, Sổ chủ nhiệm, Sổ Đội) và ưu tiên 100% hồ sơ điện tử. Về gắn kết gia đình & xã hội: Chuyển từ hành chính thông báo, huy động đóng góp CSVC sang Đối tác giáo dục đồng hành, đối thoại, tiếp nhận phản hồi định kỳ và khảo sát mức độ hài lòng.',
  },
  {
    id: 6,
    chapter: 'core_shifts',
    chapterLabel: '2. Nội dung chuyển dịch cốt lõi',
    indexLabel: 'Slide 06 / 10',
    title: 'Chuyển dịch 2.1 & 2.2: Linh hoạt Ngữ liệu & Giải phóng Hành chính',
    subtitle: 'Từ "Dạy đúng từng trang sách" sang đạt chuẩn đầu ra và tập trung vào chiều sâu chuyên môn',
    speakerNotes:
      'Đi sâu vào 2 chuyển dịch đầu tiên trong Mục 2: (2.1) Giáo viên không còn bị trói buộc cứng nhắc vào từng ngữ liệu trong SGK, tổ chuyên môn chủ động thay thế bằng ngữ liệu đời sống, tình huống thực tế, dữ liệu địa phương. (2.2) Cắt giảm kế hoạch cá nhân và sổ theo dõi lẻ tẻ, chuyển hẳn giáo án và sổ quản lý sang dữ liệu số, không yêu cầu in ấn kiểm tra hình thức.',
  },
  {
    id: 7,
    chapter: 'core_shifts',
    chapterLabel: '2. Nội dung chuyển dịch cốt lõi',
    indexLabel: 'Slide 07 / 10',
    title: 'Chuyển dịch 2.3 & 2.4: Công nghệ Mới & Tư duy Đánh giá Học sinh',
    subtitle: 'Tích hợp liên môn STEM/STEAM, ứng dụng AI và triệt tiêu bệnh thành tích trong đánh giá',
    speakerNotes:
      'Đi sâu vào 2 chuyển dịch tiếp theo trong Mục 2: (2.3) Khuyến khích tổ chuyên môn xây dựng chủ đề tích hợp liên môn, STEM/STEAM và chủ động ứng dụng AI, công nghệ số vào soạn giảng, thiết kế học liệu. (2.4) Triệt tiêu bệnh thành tích và việc so sánh giữa các học sinh; đánh giá thường xuyên tập trung vào sự tiến bộ của từng cá nhân.',
  },
  {
    id: 8,
    chapter: 'matrix',
    chapterLabel: 'Tra cứu & Đối chiếu toàn văn',
    indexLabel: 'Slide 08 / 10',
    title: 'Bảng So sánh Bản chất Nội hàm (Đầy đủ 7 Tiêu chí)',
    subtitle: 'Tra cứu trực tiếp nguyên văn đối chiếu giữa Thông tư 32/2020/TT-BGDĐT và Thông tư 15/2026/TT-BGDĐT',
    speakerNotes:
      'Bảng tổng hợp đầy đủ 7 tiêu chí từ tài liệu gốc, cho phép lọc theo từng nhóm lĩnh vực (Quản trị, Chuyên môn, Học sinh & Xã hội) hoặc tìm kiếm từ khóa trực tiếp khi thảo luận hội đồng sư phạm.',
  },
  {
    id: 9,
    chapter: 'matrix',
    chapterLabel: 'Ứng dụng thực tiễn',
    indexLabel: 'Slide 09 / 10',
    title: 'Lăng kính Thực thi theo Vai trò trong Nhà trường',
    subtitle: 'Tác động trực tiếp của Thông tư 15/2026/TT-BGDĐT đối với Hiệu trưởng, Tổ chuyên môn & Giáo viên, Học sinh & Phụ huynh',
    speakerNotes:
      'Phân tích cụ thể từng chủ thể trong trường học cần thay đổi những gì khi áp dụng Thông tư 15/2026/TT-BGDĐT: Hiệu trưởng (trách nhiệm giải trình, tinh gọn khâu trung gian), Giáo viên (bỏ sổ sách lẻ tẻ, linh hoạt ngữ liệu, ứng dụng AI), Học sinh & Phụ huynh (không bị so sánh, bảo vệ tâm lý, đối thoại định kỳ).',
  },
  {
    id: 10,
    chapter: 'matrix',
    chapterLabel: 'Tổng kết & Hành động',
    indexLabel: 'Slide 10 / 10',
    title: 'Tổng kết 4 Mũi nhọn Chuyển dịch & Danh mục Triển khai',
    subtitle: 'Hệ thống hóa các việc Bãi bỏ – Cắt giảm và các việc Chủ động – Kiến tạo theo Thông tư 15/2026/TT-BGDĐT',
    speakerNotes:
      'Tổng kết lại toàn bộ tinh thần của Thông tư 15/2026/TT-BGDĐT thông qua bảng kiểm đối조: Những quy định hành chính cũ được bãi bỏ/cắt giảm và những không gian tự chủ, sáng tạo mới được mở ra cho cơ sở giáo dục.',
  },
];
