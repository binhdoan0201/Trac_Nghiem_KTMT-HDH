// Ngân hàng 150 câu hỏi trắc nghiệm Kiến trúc máy tính & Nguyên lý Hệ điều hành
// Dữ liệu được trích xuất và chuẩn hóa đầy đủ từ đề cương chính thức
const QUIZ_DATA = [
  {
    "id": 1,
    "partId": "I",
    "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
    "chapterId": 1,
    "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)",
    "question": "Mô hình von Neumann quy định máy tính gồm các thành phần chính nào?",
    "options": {
      "A": "Chỉ có CPU và bộ nhớ",
      "B": "Chỉ có thiết bị vào và thiết bị ra",
      "C": "CPU và hệ điều hành",
      "D": "CPU, bộ nhớ, thiết bị vào/ra và bus liên kết chung"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Mô hình Von Neumann chuẩn gồm 4 khối thành phần cơ bản: CPU (khối xử lý trung tâm), Bộ nhớ chính (chứa cả lệnh và dữ liệu), Hệ thống thiết bị Vào/Ra (I/O) và Bus liên kết hệ thống."
  },
  {
    "id": 2,
    "partId": "I",
    "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
    "chapterId": 1,
    "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)",
    "question": "Chu kỳ lệnh cơ bản trong mô hình von Neumann diễn ra theo thứ tự nào?",
    "options": {
      "A": "Thực thi → Nạp lệnh → Giải mã",
      "B": "Nạp lệnh → Thực thi → Giải mã",
      "C": "Nạp lệnh (Fetch) → Giải mã (Decode) → Thực thi (Execute)",
      "D": "Giải mã → Nạp lệnh → Thực thi"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Chu kỳ lệnh cơ bản của CPU diễn ra theo thứ tự tuần tự: Nạp lệnh từ bộ nhớ vào thanh ghi lệnh (Fetch) → Giải mã lệnh tại khối điều khiển (Decode) → Thực thi phép toán tại ALU/khối chức năng (Execute)."
  },
  {
    "id": 3,
    "partId": "I",
    "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
    "chapterId": 1,
    "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)",
    "question": "Sự khác biệt giữa \"kiến trúc máy tính\" (computer architecture) và \"tổ chức máy tính\" (computer organization) là gì?",
    "options": {
      "A": "Kiến trúc là cách bố trí vật lý linh kiện, tổ chức là tập lệnh",
      "B": "Kiến trúc là góc nhìn của lập trình viên (tập lệnh, giao diện), tổ chức là cách hiện thực phần cứng bên trong",
      "C": "Kiến trúc chỉ nói về phần mềm, tổ chức chỉ nói về phần cứng",
      "D": "Hai khái niệm này hoàn toàn giống nhau"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Kiến trúc máy tính (Architecture) là các thuộc tính nhìn thấy được bởi lập trình viên (tập lệnh, thanh ghi, mode địa chỉ). Tổ chức máy tính (Organization) là cách thức hiện thực cụ thể phần cứng (tín hiệu điều khiển, công nghệ mạch, bus)."
  },
  {
    "id": 4,
    "partId": "I",
    "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
    "chapterId": 1,
    "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)",
    "question": "CPI là viết tắt của thuật ngữ nào trong đánh giá hiệu năng CPU?",
    "options": {
      "A": "Cycles Per Instruction (số chu kỳ xung nhịp trên một lệnh)",
      "B": "Cycles Per Interrupt",
      "C": "Computer Performance Index",
      "D": "Central Processing Interface"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "CPI là viết tắt của Cycles Per Instruction — số chu kỳ xung nhịp trung bình mà CPU cần để thực thi một lệnh."
  },
  {
    "id": 5,
    "partId": "I",
    "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
    "chapterId": 1,
    "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)",
    "question": "Một chương trình có 1000 lệnh, CPI trung bình là 2, tần số xung nhịp CPU là 1GHz. Thời gian thực thi chương trình là?",
    "options": {
      "A": "2 mili giây",
      "B": "500 nano giây",
      "C": "1 giây",
      "D": "2 micro giây"
    },
    "answer": "D",
    "isCalculation": true,
    "explanation": "Áp dụng công thức thời gian thực thi CPU: T = (Số lệnh × CPI) / f = (1000 × 2) / (10^9 Hz) = 2 × 10^-6 s = 2 μs (micro giây)."
  },
  {
    "id": 6,
    "partId": "I",
    "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
    "chapterId": 1,
    "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)",
    "question": "Nếu tần số xung nhịp CPU tăng gấp đôi nhưng CPI cũng tăng gấp đôi, thời gian thực thi chương trình sẽ:",
    "options": {
      "A": "Tăng gấp đôi",
      "B": "Giảm 4 lần",
      "C": "Không đổi",
      "D": "Giảm một nửa"
    },
    "answer": "C",
    "isCalculation": true,
    "explanation": "Theo công thức T = (Số lệnh × CPI) / f, khi cả CPI và tần số xung nhịp f cùng tăng gấp 2 lần, tỷ số CPI/f không thay đổi, số lệnh giữ nguyên nên thời gian thực thi T không đổi."
  },
  {
    "id": 7,
    "partId": "I",
    "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
    "chapterId": 1,
    "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)",
    "question": "Luật Amdahl được dùng để làm gì?",
    "options": {
      "A": "Tính tỷ lệ lỗi trang bộ nhớ",
      "B": "Tính giới hạn tốc độ tăng hiệu năng khi chỉ cải thiện một phần của hệ thống",
      "C": "Tính dung lượng bộ nhớ cache tối ưu",
      "D": "Xác định số lượng thanh ghi cần thiết"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Định luật Amdahl dùng để xác định giới hạn tốc độ tăng hiệu năng tối đa của toàn bộ hệ thống khi chỉ nâng cấp hoặc tối ưu hóa một phần cụ thể của hệ thống đó."
  },
  {
    "id": 8,
    "partId": "I",
    "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
    "chapterId": 1,
    "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)",
    "question": "Nếu 80% chương trình có thể tăng tốc lên vô hạn (phần còn lại không đổi), theo luật Amdahl tốc độ tăng tối đa của toàn hệ thống là?",
    "options": {
      "A": "5 lần",
      "B": "4 lần",
      "C": "10 lần",
      "D": "Không giới hạn"
    },
    "answer": "A",
    "isCalculation": true,
    "explanation": "Theo định luật Amdahl với tỷ lệ phần cải thiện p = 80% = 0.8 khi được tăng tốc lên vô hạn (k → ∞): S_max = 1 / (1 - p) = 1 / (1 - 0.8) = 1 / 0.2 = 5 lần."
  },
  {
    "id": 9,
    "partId": "I",
    "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
    "chapterId": 1,
    "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)",
    "question": "Vì sao chỉ tăng tần số xung nhịp CPU không đảm bảo hiệu năng tổng thể tăng tương ứng?",
    "options": {
      "A": "Vì xung nhịp không liên quan đến hiệu năng",
      "B": "Vì CPI luôn giảm khi tăng xung nhịp",
      "C": "Vì số lệnh của chương trình luôn giảm khi tăng xung nhịp",
      "D": "Vì hiệu năng còn phụ thuộc vào CPI, số lệnh thực thi và các thành phần khác như bộ nhớ, I/O"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Tần số xung nhịp tăng không đồng nghĩa hiệu năng tăng tương ứng vì thời gian thực thi phụ thuộc vào 3 yếu tố: Số lệnh, CPI và tần số xung nhịp. Ngoài ra còn phụ thuộc băng thông bộ nhớ và thiết bị I/O."
  },
  {
    "id": 10,
    "partId": "I",
    "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
    "chapterId": 1,
    "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)",
    "question": "Trong phân cấp hệ thống máy tính, hệ điều hành đóng vai trò gì?",
    "options": {
      "A": "Thay thế hoàn toàn phần cứng",
      "B": "Chỉ dùng để chạy các ứng dụng văn phòng",
      "C": "Là lớp trung gian quản lý phần cứng và cung cấp giao diện cho ứng dụng chạy bên trên",
      "D": "Là một phần của CPU"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Hệ điều hành đóng vai trò là tầng phần mềm trung gian, quản lý và điều phối toàn bộ tài nguyên phần cứng, đồng thời cung cấp giao diện chuẩn (API/giao diện người dùng) cho các ứng dụng chạy bên trên."
  },
  {
    "id": 11,
    "partId": "I",
    "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
    "chapterId": 1,
    "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)",
    "question": "Siêu máy tính (supercomputer) thường được sử dụng cho mục đích chính nào?",
    "options": {
      "A": "Chỉ dùng trong gia đình",
      "B": "Tính toán khoa học, mô phỏng phức tạp đòi hỏi hiệu năng cực cao",
      "C": "Soạn thảo văn bản cá nhân",
      "D": "Chỉ dùng làm máy chủ web nhỏ"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Siêu máy tính (Supercomputer) sở hữu năng lực tính toán song song khổng lồ, chuyên dụng cho các bài toán khoa học phức tạp như dự báo thời tiết, mô phỏng phản ứng hạt nhân, động lực học chất lưu, tính toán lượng tử."
  },
  {
    "id": 12,
    "partId": "I",
    "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
    "chapterId": 1,
    "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)",
    "question": "Thời gian thực thi CPU (CPU execution time) được tính theo công thức nào?",
    "options": {
      "A": "Số lệnh × CPI / Tần số xung nhịp",
      "B": "Số lệnh × Tần số xung nhịp",
      "C": "CPI / Số lệnh",
      "D": "Tần số xung nhịp / CPI"
    },
    "answer": "A",
    "isCalculation": true,
    "explanation": "Công thức hiệu năng CPU cơ bản: Thời gian thực thi T_CPU = (Số lệnh × CPI) / Tần số xung nhịp f (hoặc Số lệnh × CPI × Chu kỳ xung nhịp T_c)."
  },
  {
    "id": 13,
    "partId": "I",
    "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
    "chapterId": 1,
    "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)",
    "question": "So với máy tính để bàn, máy tính nhúng (embedded system) thường được thiết kế theo hướng nào?",
    "options": {
      "A": "Có hiệu năng cao nhất để chạy đa nhiệm",
      "B": "Có kích thước lớn hơn máy tính để bàn",
      "C": "Luôn có hệ điều hành đầy đủ như máy tính để bàn",
      "D": "Tối ưu cho một chức năng chuyên biệt, tiết kiệm năng lượng và chi phí"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Hệ thống nhúng (Embedded System) được tích hợp trong các thiết bị chuyên dụng (ô tô, đồ gia dụng, thiết bị y tế), được thiết kế tối ưu cho chức năng cụ thể, yêu cầu tiết kiệm điện năng, kích thước nhỏ và chi phí thấp."
  },
  {
    "id": 14,
    "partId": "I",
    "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
    "chapterId": 1,
    "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)",
    "question": "Nhận định nào sau đây về luật Amdahl là chính xác?",
    "options": {
      "A": "Luật Amdahl chỉ áp dụng cho bộ nhớ cache",
      "B": "Luật Amdahl không liên quan đến tỷ lệ phần trăm được cải thiện",
      "C": "Cải thiện một phần nhỏ của hệ thống chỉ mang lại lợi ích giới hạn cho hiệu năng tổng thể, dù phần đó được tăng tốc vô hạn",
      "D": "Luật Amdahl khẳng định hiệu năng luôn tăng tuyến tính theo số lõi CPU"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Theo định luật Amdahl, nếu phần được cải thiện chỉ chiếm tỷ lệ nhỏ trong chương trình, thì dù phần đó có được tăng tốc đến vô hạn, hiệu năng tổng thể của toàn hệ thống cũng chỉ tăng trong một giới hạn rất hẹp."
  },
  {
    "id": 15,
    "partId": "I",
    "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
    "chapterId": 1,
    "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)",
    "question": "Một hệ thống có hai loại lệnh: loại 1 chiếm 40% với CPI=2, loại 2 chiếm 60% với CPI=4. CPI trung bình là?",
    "options": {
      "A": "4,0",
      "B": "3,2",
      "C": "3,0",
      "D": "2,8"
    },
    "answer": "B",
    "isCalculation": true,
    "explanation": "Công thức CPI trung bình: CPI_tb = ∑ (Tỷ lệ_i × CPI_i) = 40% × 2 + 60% × 4 = 0.4 × 2 + 0.6 × 4 = 0.8 + 2.4 = 3.2."
  },
  {
    "id": 16,
    "partId": "II.A",
    "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Số nhị phân 1010 có giá trị thập phân là?",
    "options": {
      "A": "10",
      "B": "8",
      "C": "12",
      "D": "5"
    },
    "answer": "A",
    "isCalculation": true,
    "explanation": "Chuyển từ nhị phân sang thập phân: 1010_2 = 1×2^3 + 0×2^2 + 1×2^1 + 0×2^0 = 8 + 0 + 2 + 0 = 10."
  },
  {
    "id": 17,
    "partId": "II.A",
    "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Chuyển số thập phân 45 sang hệ nhị phân là?",
    "options": {
      "A": "101100",
      "B": "100101",
      "C": "101110",
      "D": "101101"
    },
    "answer": "D",
    "isCalculation": true,
    "explanation": "Chuyển số thập phân 45 sang nhị phân: 45 = 32 + 8 + 4 + 1 = 2^5 + 2^3 + 2^2 + 2^0 = 101101_2."
  },
  {
    "id": 18,
    "partId": "II.A",
    "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Chuyển số hệ 16 (hex) A3 sang thập phân là?",
    "options": {
      "A": "173",
      "B": "93",
      "C": "163",
      "D": "153"
    },
    "answer": "C",
    "isCalculation": true,
    "explanation": "Chuyển số Hex A3_16 sang thập phân: Ký tự A có giá trị 10. Ta có: A3_16 = 10 × 16^1 + 3 × 16^0 = 160 + 3 = 163."
  },
  {
    "id": 19,
    "partId": "II.A",
    "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Trong hệ đếm cơ số 16 (hex), mỗi chữ số hex tương ứng với bao nhiêu bit nhị phân?",
    "options": {
      "A": "3 bit",
      "B": "4 bit",
      "C": "2 bit",
      "D": "8 bit"
    },
    "answer": "B",
    "isCalculation": true,
    "explanation": "Mỗi chữ số hệ 16 (hexadecimal từ 0 đến F) biểu diễn được 16 trạng thái, do đó tương ứng với đúng 4 bit nhị phân (vì 2^4 = 16)."
  },
  {
    "id": 20,
    "partId": "II.A",
    "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Trong biểu diễn dấu - độ lớn (sign-magnitude) với 8 bit, bit cao nhất (MSB) dùng để?",
    "options": {
      "A": "Biểu diễn dấu của số (0: dương, 1: âm)",
      "B": "Biểu diễn giá trị tuyệt đối của số",
      "C": "Luôn luôn bằng 0",
      "D": "Biểu diễn số mũ của số thực"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Trong quy ước biểu diễn số có dấu (Sign-Magnitude, bù 1, bù 2), bit có trọng số cao nhất (MSB) luôn là bit dấu: bit 0 đại diện cho số dương, bit 1 đại diện cho số âm."
  },
  {
    "id": 21,
    "partId": "II.A",
    "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Nhược điểm chính của biểu diễn bù 1 (1's complement) so với bù 2 là gì?",
    "options": {
      "A": "Không biểu diễn được số âm",
      "B": "Chiếm nhiều bit hơn bù 2",
      "C": "Không thể dùng trong máy tính hiện đại",
      "D": "Có hai cách biểu diễn số 0 (+0 và -0), gây phức tạp khi cộng"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Phương pháp biểu diễn bù 1 (1's complement) có nhược điểm lớn là tồn tại 2 trạng thái cho số 0: +0 (00000000) và -0 (11111111), làm phức tạp thiết kế mạch giải thuật logic số học."
  },
  {
    "id": 22,
    "partId": "II.A",
    "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Biểu diễn số -5 bằng bù 2 với 8 bit là?",
    "options": {
      "A": "00000101",
      "B": "10000101",
      "C": "11111011",
      "D": "11111010"
    },
    "answer": "C",
    "isCalculation": true,
    "explanation": "Tìm bù 2 của -5 với 8 bit: Số +5 là 00000101_2. Lấy bù 1 (đảo tất cả các bit): 11111010. Cộng thêm 1 vào LSB: 11111010 + 1 = 11111011_2."
  },
  {
    "id": 23,
    "partId": "II.A",
    "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Với 8 bit biểu diễn bù 2, miền giá trị biểu diễn được là?",
    "options": {
      "A": "-256 đến 255",
      "B": "-128 đến 127",
      "C": "-127 đến 128",
      "D": "-128 đến 128"
    },
    "answer": "B",
    "isCalculation": true,
    "explanation": "Với n bit biểu diễn số nguyên có dấu theo mã bù 2, miền giá trị biểu diễn được là từ -2^(n-1) đến 2^(n-1) - 1. Với n = 8 bit: từ -2^7 đến 2^7 - 1 = -128 đến +127."
  },
  {
    "id": 24,
    "partId": "II.A",
    "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Khi cộng hai số nguyên dương ở biểu diễn bù 2 mà kết quả cho ra một số âm, hiện tượng gì đã xảy ra?",
    "options": {
      "A": "Tràn số (overflow) do kết quả vượt quá miền biểu diễn",
      "B": "Lỗi làm tròn số thực",
      "C": "Lỗi mất dấu chấm động",
      "D": "Lỗi endianness"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Hiện tượng tràn số (overflow) xảy ra khi kết quả của phép toán vượt quá khoảng giá trị mà số lượng bit quy định có thể biểu diễn được, dẫn đến việc bit dấu bị sai lệch."
  },
  {
    "id": 25,
    "partId": "II.A",
    "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Thực hiện phép cộng bù 2 8-bit: 01111111 + 00000001, kết quả và nhận xét đúng là?",
    "options": {
      "A": "10000001 và không có tràn số",
      "B": "01111110 và không có tràn số",
      "C": "00000000 và không có tràn số",
      "D": "10000000 - xảy ra tràn số vì 127+1 vượt miền số dương biểu diễn được"
    },
    "answer": "D",
    "isCalculation": true,
    "explanation": "Với 8-bit bù 2: 01111111_2 = +127, 00000001_2 = +1. Phép cộng: 01111111 + 00000001 = 10000000_2. Kết quả có MSB = 1 (số âm = -128), đây là tràn số do cộng 2 số dương ra số âm (127 + 1 = 128 vượt quá giới hạn max 127)."
  },
  {
    "id": 26,
    "partId": "II.A",
    "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Cách phát hiện tràn số (overflow) khi cộng hai số nguyên bù 2 là?",
    "options": {
      "A": "Khi có carry ra khỏi bit thấp nhất",
      "B": "Không thể phát hiện được tràn số",
      "C": "Khi bit nhớ vào MSB khác với bit nhớ ra khỏi MSB (carry-in khác carry-out)",
      "D": "Khi kết quả luôn luôn dương"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Điều kiện phát hiện tràn số khi cộng hai số bù 2 là: Bit nhớ mang vào vị trí MSB (carry-in) khác với bit nhớ mang ra khỏi vị trí MSB (carry-out), tức là Carry_in ⊕ Carry_out = 1."
  },
  {
    "id": 27,
    "partId": "II.A",
    "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Phép trừ hai số nguyên trong máy tính (dùng bù 2) thường được thực hiện bằng cách nào so với phép cộng?",
    "options": {
      "A": "Không thể thực hiện trực tiếp bằng phần cứng",
      "B": "Lấy bù 2 của số trừ rồi cộng vào số bị trừ, tận dụng lại mạch cộng",
      "C": "Dùng mạch trừ riêng biệt hoàn toàn khác mạch cộng",
      "D": "Chia số trừ cho -1"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Máy tính thực hiện phép trừ A - B bằng cách lấy bù 2 của B (tức -B) rồi cộng với A: A - B = A + (-B). Nhờ đó chỉ cần dùng mạch cộng mà không cần thiết kế mạch trừ riêng."
  },
  {
    "id": 28,
    "partId": "II.A",
    "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Chuẩn IEEE 754 cho số thực dấu chấm động 32-bit (single precision) gồm các trường nào?",
    "options": {
      "A": "1 bit dấu, 8 bit mũ, 23 bit phần định trị",
      "B": "1 bit dấu, 11 bit mũ, 52 bit định trị",
      "C": "1 bit dấu, 23 bit mũ, 8 bit định trị",
      "D": "2 bit dấu, 30 bit định trị"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Chuẩn IEEE 754 đơn độ chính xác 32-bit (Single Precision) gồm: 1 bit dấu (S), 8 bit mũ (Exponent) và 23 bit phần định trị (Mantissa/Fraction)."
  },
  {
    "id": 29,
    "partId": "II.A",
    "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Độ lệch (bias) trong biểu diễn số mũ của IEEE 754 single precision có giá trị bao nhiêu?",
    "options": {
      "A": "128",
      "B": "1023",
      "C": "255",
      "D": "127"
    },
    "answer": "D",
    "isCalculation": true,
    "explanation": "Trong chuẩn IEEE 754 32-bit, trường mũ có 8 bit nên độ lệch (bias) được tính theo công thức: Bias = 2^(k-1) - 1 = 2^(8-1) - 1 = 2^7 - 1 = 127."
  },
  {
    "id": 30,
    "partId": "II.A",
    "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Trong IEEE 754, bit dấu bằng 1 nghĩa là gì?",
    "options": {
      "A": "Số 0",
      "B": "Số vô cùng",
      "C": "Số âm",
      "D": "Số dương"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Trong chuẩn IEEE 754, bit dấu S = 0 đại diện cho số dương, S = 1 đại diện cho số âm."
  },
  {
    "id": 31,
    "partId": "II.B",
    "partTitle": "Phần II.B: Sai số dấu chấm động, Mã ký tự & Tổ chức byte",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Nguyên nhân chính gây ra sai số làm tròn (rounding error) khi biểu diễn số thực trong máy tính là?",
    "options": {
      "A": "Do bit dấu bị lỗi",
      "B": "Số bit hữu hạn của phần định trị không đủ biểu diễn chính xác mọi số thực",
      "C": "Do lỗi phần cứng CPU",
      "D": "Do hệ điều hành tính toán sai"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Sai số làm tròn số thực trong máy tính phát sinh vì số lượng bit dành cho phần định trị là hữu hạn (ví dụ 23 bit ở 32-bit, 52 bit ở 64-bit), không thể biểu diễn tuyệt đối chính xác mọi số thực trong miền liên tục."
  },
  {
    "id": 32,
    "partId": "II.B",
    "partTitle": "Phần II.B: Sai số dấu chấm động, Mã ký tự & Tổ chức byte",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Vì sao không nên so sánh trực tiếp hai số thực dấu chấm động bằng phép so sánh bằng (==) trong lập trình?",
    "options": {
      "A": "Vì sai số làm tròn có thể khiến hai giá trị về mặt toán học bằng nhau nhưng biểu diễn nhị phân khác nhau",
      "B": "Vì số thực luôn lớn hơn số nguyên",
      "C": "Vì máy tính không hỗ trợ so sánh số thực",
      "D": "Vì IEEE 754 không cho phép so sánh"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Không nên dùng toán tử so sánh bằng (==) trực tiếp với số thực dấu chấm động vì các phép toán số thực luôn có sai số tích lũy nhỏ; nên kiểm tra khoảng cách |a - b| < epsilon."
  },
  {
    "id": 33,
    "partId": "II.B",
    "partTitle": "Phần II.B: Sai số dấu chấm động, Mã ký tự & Tổ chức byte",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Mã ASCII chuẩn sử dụng bao nhiêu bit để biểu diễn một ký tự?",
    "options": {
      "A": "8 bit",
      "B": "16 bit",
      "C": "32 bit",
      "D": "7 bit"
    },
    "answer": "D",
    "isCalculation": true,
    "explanation": "Bộ mã ASCII chuẩn (Standard ASCII) sử dụng mã hóa 7 bit, biểu diễn được 2^7 = 128 ký tự (từ mã 0 đến 127). Bản mở rộng mới dùng 8 bit (256 ký tự)."
  },
  {
    "id": 34,
    "partId": "II.B",
    "partTitle": "Phần II.B: Sai số dấu chấm động, Mã ký tự & Tổ chức byte",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Ưu điểm chính của Unicode so với ASCII là gì?",
    "options": {
      "A": "Chỉ dùng cho tiếng Anh",
      "B": "Không tương thích với máy tính hiện đại",
      "C": "Có thể biểu diễn được hầu hết các ký tự của mọi ngôn ngữ trên thế giới",
      "D": "Chiếm ít bộ nhớ hơn ASCII"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Ưu điểm vượt trội của chuẩn Unicode là không gian mã rộng lớn (UTF-8, UTF-16, UTF-32), có khả năng biểu diễn và chuẩn hóa toàn bộ ký tự, chữ viết của mọi ngôn ngữ trên toàn thế giới."
  },
  {
    "id": 35,
    "partId": "II.B",
    "partTitle": "Phần II.B: Sai số dấu chấm động, Mã ký tự & Tổ chức byte",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "\"Endianness\" trong máy tính đề cập đến điều gì?",
    "options": {
      "A": "Cách đánh địa chỉ bộ nhớ ảo",
      "B": "Thứ tự sắp xếp các byte của một giá trị nhiều byte trong bộ nhớ",
      "C": "Thứ tự thực thi lệnh của CPU",
      "D": "Cách mã hóa ký tự"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Endianness là thuật ngữ chỉ quy tắc thứ tự sắp xếp và lưu trữ các byte của một dữ liệu đa byte (như số nguyên 16-bit, 32-bit, 64-bit) vào các ô nhớ kế tiếp nhau trong bộ nhớ."
  },
  {
    "id": 36,
    "partId": "II.B",
    "partTitle": "Phần II.B: Sai số dấu chấm động, Mã ký tự & Tổ chức byte",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Sự khác biệt giữa little-endian và big-endian là gì?",
    "options": {
      "A": "Little-endian lưu byte thấp nhất ở địa chỉ thấp nhất, big-endian lưu byte cao nhất ở địa chỉ thấp nhất",
      "B": "Little-endian dùng cho số âm, big-endian dùng cho số dương",
      "C": "Little-endian luôn nhanh hơn big-endian trong mọi trường hợp",
      "D": "Hai khái niệm hoàn toàn giống nhau"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Little-endian: Byte có trọng số thấp nhất (LSB) được lưu ở địa chỉ bộ nhớ thấp nhất. Big-endian: Byte có trọng số cao nhất (MSB) được lưu ở địa chỉ thấp nhất."
  },
  {
    "id": 37,
    "partId": "II.B",
    "partTitle": "Phần II.B: Sai số dấu chấm động, Mã ký tự & Tổ chức byte",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Giá trị hex 0x12345678 lưu theo little-endian tại các địa chỉ tăng dần sẽ có thứ tự byte là?",
    "options": {
      "A": "12 34 56 78",
      "B": "87 65 43 21",
      "C": "21 43 65 87",
      "D": "78 56 34 12"
    },
    "answer": "D",
    "isCalculation": true,
    "explanation": "Giá trị 0x12345678 (4 byte: 12 là MSB, 78 là LSB). Theo Little-Endian, byte thấp nhất 78 nằm ở địa chỉ đầu tiên, kế đến là 56, 34 và cuối cùng là byte 12. Thứ tự lưu: 78 56 34 12."
  },
  {
    "id": 38,
    "partId": "II.B",
    "partTitle": "Phần II.B: Sai số dấu chấm động, Mã ký tự & Tổ chức byte",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Trong tổ chức bộ nhớ, một \"word\" (từ nhớ) thường được định nghĩa là?",
    "options": {
      "A": "Luôn luôn là 1 byte cố định",
      "B": "Một khối trên đĩa cứng",
      "C": "Đơn vị dữ liệu tự nhiên mà CPU xử lý, thường gồm nhiều byte (ví dụ 4 byte = 32 bit)",
      "D": "Luôn luôn là 1 bit"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Từ nhớ (Word) là đơn vị dữ liệu tự nhiên mà CPU xử lý trong mỗi chu kỳ thao tác, kích thước thường tương ứng với độ rộng của thanh ghi và ALU (ví dụ kiến trúc 32-bit có word = 4 byte)."
  },
  {
    "id": 39,
    "partId": "II.B",
    "partTitle": "Phần II.B: Sai số dấu chấm động, Mã ký tự & Tổ chức byte",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Trong số dấu chấm động IEEE 754, giá trị khi mũ toàn bit 1 và phần định trị bằng 0 biểu diễn giá trị gì?",
    "options": {
      "A": "Số dương lớn nhất bình thường",
      "B": "Vô cùng (Infinity)",
      "C": "Số 0",
      "D": "NaN (Not a Number)"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Trong chuẩn IEEE 754: Khi trường mũ E gồm toàn bit 1 (255) và trường định trị M gồm toàn bit 0, giá trị này đại diện cho vô cùng (±Infinity). Nếu M ≠ 0 thì biểu diễn NaN (Not a Number)."
  },
  {
    "id": 40,
    "partId": "II.B",
    "partTitle": "Phần II.B: Sai số dấu chấm động, Mã ký tự & Tổ chức byte",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Khi thực hiện phép chia số nguyên cho 0 trong phần cứng, hệ quả thường là?",
    "options": {
      "A": "Gây ra ngoại lệ/ngắt lỗi phần cứng (exception) vì không xác định được kết quả",
      "B": "Trả về 0",
      "C": "Trả về vô cùng như số thực",
      "D": "Tự động làm tròn kết quả"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Khi thực hiện phép chia số nguyên cho 0 trong phần cứng, CPU không thể cho ra kết quả hợp lệ nên sẽ tự động kích hoạt một ngoại lệ ngắt phần cứng (Hardware Exception / Divide By Zero Error)."
  },
  {
    "id": 41,
    "partId": "II.B",
    "partTitle": "Phần II.B: Sai số dấu chấm động, Mã ký tự & Tổ chức byte",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Để lưu một số nguyên 32-bit trong bộ nhớ địa chỉ theo byte, cần bao nhiêu byte liên tiếp?",
    "options": {
      "A": "8 byte",
      "B": "2 byte",
      "C": "1 byte",
      "D": "4 byte"
    },
    "answer": "D",
    "isCalculation": true,
    "explanation": "Một biến 32-bit có kích thước: 32 bit ÷ 8 bit/byte = 4 byte. Vì bộ nhớ được định địa chỉ theo từng byte nên biến này chiếm đúng 4 ô nhớ liên tiếp."
  },
  {
    "id": 42,
    "partId": "II.B",
    "partTitle": "Phần II.B: Sai số dấu chấm động, Mã ký tự & Tổ chức byte",
    "chapterId": 2,
    "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)",
    "question": "Nhận định nào đúng khi so sánh lưu trữ dữ liệu dạng văn bản ASCII và dạng nhị phân thuần trong tệp?",
    "options": {
      "A": "Nhị phân không thể dùng để lưu số",
      "B": "Không có sự khác biệt nào giữa hai cách lưu trữ",
      "C": "ASCII dễ đọc bởi con người và tương thích rộng nhưng thường chiếm nhiều dung lượng hơn lưu trực tiếp giá trị nhị phân",
      "D": "ASCII luôn nhanh hơn nhị phân trong mọi trường hợp"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Dữ liệu dạng văn bản mã ASCII dễ dàng đọc và chỉnh sửa bởi con người và tương thích rộng giữa các nền tảng, tuy nhiên tốn nhiều dung lượng lưu trữ hơn so với lưu nhị phân thô."
  },
  {
    "id": 43,
    "partId": "III.A",
    "partTitle": "Phần III.A: Cấu trúc CPU, Đường dữ liệu & Kỹ thuật Pipeline",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Đơn vị nào trong CPU chịu trách nhiệm thực hiện các phép toán số học và logic?",
    "options": {
      "A": "Thanh ghi PC",
      "B": "ALU (Arithmetic Logic Unit)",
      "C": "CU (Control Unit)",
      "D": "Bộ nhớ cache"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "ALU (Arithmetic Logic Unit - Khối tính toán số học và logic) là bộ phận trong CPU chịu trách nhiệm thực hiện các phép toán số học (+, -, *, /) và các phép toán logic (AND, OR, NOT, XOR, Shift)."
  },
  {
    "id": 44,
    "partId": "III.A",
    "partTitle": "Phần III.A: Cấu trúc CPU, Đường dữ liệu & Kỹ thuật Pipeline",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Thanh ghi PC (Program Counter) có chức năng gì?",
    "options": {
      "A": "Lưu địa chỉ của lệnh kế tiếp sẽ được nạp",
      "B": "Lưu kết quả phép toán gần nhất",
      "C": "Lưu địa chỉ dữ liệu đang xử lý",
      "D": "Lưu trạng thái ngắt"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Thanh ghi PC (Program Counter - Bộ đếm chương trình) có chức năng lưu trữ địa chỉ của lệnh tiếp theo trong bộ nhớ sẽ được nạp vào CPU để xử lý."
  },
  {
    "id": 45,
    "partId": "III.A",
    "partTitle": "Phần III.A: Cấu trúc CPU, Đường dữ liệu & Kỹ thuật Pipeline",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Đơn vị điều khiển (Control Unit) có vai trò gì trong CPU?",
    "options": {
      "A": "Lưu trữ dữ liệu tạm thời",
      "B": "Thực hiện phép cộng trừ",
      "C": "Giao tiếp trực tiếp với ổ đĩa",
      "D": "Giải mã lệnh và phát tín hiệu điều khiển các thành phần khác thực hiện lệnh"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Khối điều khiển CU (Control Unit) nhận mã lệnh từ thanh ghi IR, giải mã lệnh và phát các xung/tín hiệu điều khiển đồng bộ tới ALU, thanh ghi và bus để phối hợp thực hiện lệnh."
  },
  {
    "id": 46,
    "partId": "III.A",
    "partTitle": "Phần III.A: Cấu trúc CPU, Đường dữ liệu & Kỹ thuật Pipeline",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "\"Đường dữ liệu\" (datapath) trong CPU là gì?",
    "options": {
      "A": "Là hệ điều hành",
      "B": "Là tập lệnh của CPU",
      "C": "Tập hợp các thành phần phần cứng (ALU, thanh ghi, bus) cùng đường kết nối để xử lý và di chuyển dữ liệu",
      "D": "Là bộ nhớ chính của máy tính"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Đường dữ liệu (Datapath) là tập hợp các thành phần phần cứng (bao gồm ALU, tập thanh ghi, các bộ dồn kênh MUX, bus nội bộ) làm nhiệm vụ truyền tải, lưu trữ và thao tác trên dữ liệu."
  },
  {
    "id": 47,
    "partId": "III.A",
    "partTitle": "Phần III.A: Cấu trúc CPU, Đường dữ liệu & Kỹ thuật Pipeline",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Thanh ghi lệnh IR (Instruction Register) dùng để?",
    "options": {
      "A": "Lưu trạng thái ngắt",
      "B": "Lưu lệnh vừa được nạp từ bộ nhớ để giải mã",
      "C": "Lưu địa chỉ lệnh tiếp theo",
      "D": "Lưu kết quả cuối cùng"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Thanh ghi IR (Instruction Register - Thanh ghi lệnh) dùng để lưu giữ mã nhị phân của lệnh vừa được nạp (fetch) từ bộ nhớ chính về trong khi lệnh đó đang được khối CU giải mã."
  },
  {
    "id": 48,
    "partId": "III.A",
    "partTitle": "Phần III.A: Cấu trúc CPU, Đường dữ liệu & Kỹ thuật Pipeline",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Trong chu kỳ lệnh, bước nào xảy ra ngay sau bước \"giải mã lệnh\" (decode)?",
    "options": {
      "A": "Thực thi lệnh (execute)",
      "B": "Nạp lệnh (fetch)",
      "C": "Ghi kết quả trước rồi mới giải mã",
      "D": "Ngắt CPU"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Trong chu trình 3 bước Fetch → Decode → Execute, sau khi giải mã lệnh (Decode), CPU sẽ chuyển sang bước Thực thi lệnh (Execute) bằng cách kích hoạt ALU hoặc thao tác đọc/ghi nhớ."
  },
  {
    "id": 49,
    "partId": "III.A",
    "partTitle": "Phần III.A: Cấu trúc CPU, Đường dữ liệu & Kỹ thuật Pipeline",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Kỹ thuật đường ống lệnh (pipeline) giúp cải thiện hiệu năng CPU bằng cách nào?",
    "options": {
      "A": "Giảm số lệnh cần thực thi",
      "B": "Tăng tần số xung nhịp",
      "C": "Giảm dung lượng bộ nhớ cần thiết",
      "D": "Cho phép nhiều lệnh được xử lý đồng thời ở các giai đoạn khác nhau, tăng thông lượng (throughput)"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Kỹ thuật đường ống lệnh (Pipelining) cho phép CPU thực thi gối đầu nhiều lệnh đồng thời ở các công đoạn khác nhau trong cùng một chu kỳ nhịp, nhờ đó tăng thông lượng (throughput) xử lý lệnh tổng thể."
  },
  {
    "id": 50,
    "partId": "III.A",
    "partTitle": "Phần III.A: Cấu trúc CPU, Đường dữ liệu & Kỹ thuật Pipeline",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Có mấy loại xung đột (hazard) cơ bản trong pipeline?",
    "options": {
      "A": "5 loại",
      "B": "Chỉ có 1 loại duy nhất",
      "C": "3 loại: xung đột dữ liệu, xung đột điều khiển, xung đột cấu trúc",
      "D": "2 loại"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Trong kỹ thuật Pipeline có 3 loại xung đột cơ bản làm gián đoạn đường ống: Xung đột cấu trúc (Structural hazard), Xung đột dữ liệu (Data hazard) và Xung đột điều khiển (Control hazard)."
  },
  {
    "id": 51,
    "partId": "III.A",
    "partTitle": "Phần III.A: Cấu trúc CPU, Đường dữ liệu & Kỹ thuật Pipeline",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Xung đột dữ liệu (data hazard) trong pipeline xảy ra khi nào?",
    "options": {
      "A": "Khi bộ nhớ cache bị đầy",
      "B": "Khi một lệnh cần dùng kết quả của lệnh trước đó nhưng kết quả đó chưa được tính/ghi xong",
      "C": "Khi hai lệnh dùng cùng một đơn vị phần cứng",
      "D": "Khi lệnh rẽ nhánh làm thay đổi luồng thực thi"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Xung đột dữ liệu (Data Hazard) xuất hiện khi một lệnh đang ở giai đoạn sau cần sử dụng kết quả của lệnh trước đó, nhưng lệnh trước đó chưa hoàn thành giai đoạn ghi kết quả (Read-After-Write)."
  },
  {
    "id": 52,
    "partId": "III.A",
    "partTitle": "Phần III.A: Cấu trúc CPU, Đường dữ liệu & Kỹ thuật Pipeline",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Xung đột điều khiển (control hazard) thường xảy ra do đâu?",
    "options": {
      "A": "Do lệnh rẽ nhánh (branch) làm thay đổi luồng thực thi khiến các lệnh đã nạp trước đó bị sai",
      "B": "Do hai lệnh cùng truy cập ALU",
      "C": "Do thiếu thanh ghi",
      "D": "Do lỗi bộ nhớ cache"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Xung đột điều khiển (Control Hazard / Branch Hazard) xảy ra khi gặp các lệnh rẽ nhánh hoặc nhảy; CPU đã nạp trước các lệnh kế tiếp nhưng điều kiện rẽ nhánh làm thay đổi luồng chương trình khiến các lệnh đã nạp bị vô hiệu."
  },
  {
    "id": 53,
    "partId": "III.A",
    "partTitle": "Phần III.A: Cấu trúc CPU, Đường dữ liệu & Kỹ thuật Pipeline",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Kỹ thuật nào thường được dùng để giảm ảnh hưởng của xung đột điều khiển trong pipeline?",
    "options": {
      "A": "Tăng số lượng thanh ghi",
      "B": "Giảm tần số xung nhịp",
      "C": "Tắt pipeline",
      "D": "Dự đoán rẽ nhánh (branch prediction)"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Kỹ thuật dự đoán rẽ nhánh (Branch Prediction) dự đoán hướng đi của nhánh (nhảy hay không nhảy) để nạp trước lệnh phù hợp, giảm thiểu chu kỳ rỗng (stall/bong bóng) khi chờ kết quả rẽ nhánh."
  },
  {
    "id": 54,
    "partId": "III.A",
    "partTitle": "Phần III.A: Cấu trúc CPU, Đường dữ liệu & Kỹ thuật Pipeline",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "So với CPU không dùng pipeline, CPU có pipeline nhưng thường xuyên gặp xung đột sẽ có đặc điểm gì?",
    "options": {
      "A": "Không bao giờ có độ trễ",
      "B": "Luôn đạt hiệu năng lý thuyết tối đa",
      "C": "Thông lượng tổng thể vẫn cao hơn nhưng có thể phải chèn \"bong bóng\" (stall) làm giảm hiệu quả lý thuyết",
      "D": "Luôn chậm hơn CPU không pipeline"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Pipeline giúp tăng thông lượng xử lý tổng thể nhưng các xung đột (hazard) buộc CPU phải chèn các chu kỳ trễ bong bóng (pipeline bubble / stall) hoặc chuyển tiếp tắt dữ liệu (forwarding), làm giảm hiệu năng so với mức lý thuyết tối đa."
  },
  {
    "id": 55,
    "partId": "III.A",
    "partTitle": "Phần III.A: Cấu trúc CPU, Đường dữ liệu & Kỹ thuật Pipeline",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Kiến trúc tập lệnh (ISA) định nghĩa điều gì?",
    "options": {
      "A": "Dung lượng bộ nhớ cache",
      "B": "Tập hợp các lệnh, kiểu dữ liệu, thanh ghi và mode địa chỉ mà phần mềm có thể sử dụng để giao tiếp với phần cứng",
      "C": "Cách bố trí vật lý transistor trên chip",
      "D": "Tốc độ xung nhịp CPU"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "ISA (Instruction Set Architecture - Kiến trúc tập lệnh) là ranh giới trừu tượng giữa phần cứng và phần mềm, xác định các tập lệnh máy, kiểu dữ liệu, các thanh ghi, quy ước bộ nhớ mà lập trình viên/trình biên dịch sử dụng."
  },
  {
    "id": 56,
    "partId": "III.A",
    "partTitle": "Phần III.A: Cấu trúc CPU, Đường dữ liệu & Kỹ thuật Pipeline",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Trong khuôn dạng lệnh (instruction format), trường opcode dùng để?",
    "options": {
      "A": "Xác định loại thao tác (phép toán) mà lệnh thực hiện",
      "B": "Lưu địa chỉ toán hạng",
      "C": "Lưu dữ liệu tức thời",
      "D": "Lưu trạng thái cờ"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Mã thao tác (Opcode - Operation Code) là phần đầu trong định dạng lệnh xác định rõ thao tác cơ bản mà CPU phải thực hiện (ví dụ ADD, SUB, LOAD, STORE, JUMP)."
  },
  {
    "id": 57,
    "partId": "III.B",
    "partTitle": "Phần III.B: Chế độ địa chỉ, Kiến trúc RISC/CISC & Ngắt",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Toán hạng tức thời (immediate operand) trong lệnh máy là gì?",
    "options": {
      "A": "Địa chỉ của một thanh ghi",
      "B": "Địa chỉ bộ nhớ",
      "C": "Con trỏ tới ngăn xếp",
      "D": "Giá trị hằng số được nhúng trực tiếp trong mã lệnh"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Toán hạng tức thời (Immediate operand) là hằng số hoặc giá trị dữ liệu được nhúng trực tiếp ngay bên trong mã nhị phân của lệnh mà không cần truy xuất thanh ghi hay bộ nhớ."
  },
  {
    "id": 58,
    "partId": "III.B",
    "partTitle": "Phần III.B: Chế độ địa chỉ, Kiến trúc RISC/CISC & Ngắt",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Kiểu thao tác \"di chuyển dữ liệu\" (data movement) trong tập lệnh bao gồm hành động nào?",
    "options": {
      "A": "So sánh hai giá trị",
      "B": "Rẽ nhánh chương trình",
      "C": "Sao chép dữ liệu giữa thanh ghi, bộ nhớ hoặc thiết bị vào/ra",
      "D": "Thực hiện phép cộng trừ"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Thao tác 'di chuyển dữ liệu' (Data Movement) bao gồm các lệnh như LOAD, STORE, MOV, PUSH, POP, dùng để truyền dữ liệu giữa các thanh ghi nội bộ, giữa thanh ghi và ô nhớ, hoặc giữa CPU và cổng I/O."
  },
  {
    "id": 59,
    "partId": "III.B",
    "partTitle": "Phần III.B: Chế độ địa chỉ, Kiến trúc RISC/CISC & Ngắt",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Chế độ địa chỉ trong đó toán hạng chính là giá trị nằm ngay trong lệnh gọi là?",
    "options": {
      "A": "Địa chỉ thanh ghi (register addressing)",
      "B": "Địa chỉ tức thời (immediate addressing)",
      "C": "Địa chỉ trực tiếp (direct addressing)",
      "D": "Địa chỉ gián tiếp (indirect addressing)"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Chế độ địa chỉ tức thời (Immediate Addressing): Trường toán hạng trong lệnh chứa trực tiếp giá trị của dữ liệu cần xử lý (ví dụ: MOV R1, #5)."
  },
  {
    "id": 60,
    "partId": "III.B",
    "partTitle": "Phần III.B: Chế độ địa chỉ, Kiến trúc RISC/CISC & Ngắt",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Chế độ địa chỉ gián tiếp (indirect addressing) hoạt động như thế nào?",
    "options": {
      "A": "Địa chỉ trong lệnh trỏ tới một ô nhớ chứa địa chỉ thực sự của toán hạng",
      "B": "Giá trị toán hạng nằm ngay trong lệnh",
      "C": "Toán hạng luôn nằm trong thanh ghi",
      "D": "Không cần truy cập bộ nhớ"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Chế độ địa chỉ gián tiếp (Indirect Addressing): Địa chỉ ghi trong lệnh trỏ tới một ô nhớ, và nội dung của ô nhớ đó mới chính là địa chỉ thực sự của toán hạng cần truy cập (tương tự con trỏ cấp 1)."
  },
  {
    "id": 61,
    "partId": "III.B",
    "partTitle": "Phần III.B: Chế độ địa chỉ, Kiến trúc RISC/CISC & Ngắt",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "So với địa chỉ trực tiếp, địa chỉ gián tiếp có ưu điểm gì?",
    "options": {
      "A": "Luôn nhanh hơn vì ít truy cập bộ nhớ hơn",
      "B": "Không cần bộ nhớ",
      "C": "Chỉ dùng được với số nguyên",
      "D": "Cho phép truy cập vùng nhớ rộng hơn và hỗ trợ cấu trúc dữ liệu động như con trỏ"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Địa chỉ gián tiếp cho phép chương trình truy cập không gian địa chỉ lớn hơn số bit quy định trong trường địa chỉ của lệnh, đồng thời rất linh hoạt để cài đặt con trỏ, danh sách liên kết và bảng động."
  },
  {
    "id": 62,
    "partId": "III.B",
    "partTitle": "Phần III.B: Chế độ địa chỉ, Kiến trúc RISC/CISC & Ngắt",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Vì sao chế độ địa chỉ chỉ số (indexed addressing) hữu ích khi xử lý mảng (array)?",
    "options": {
      "A": "Vì nó luôn nhanh nhất trong mọi trường hợp",
      "B": "Vì nó không truy cập bộ nhớ",
      "C": "Vì địa chỉ toán hạng = địa chỉ cơ sở + giá trị thanh ghi chỉ số, thuận tiện để duyệt các phần tử liên tiếp",
      "D": "Vì nó không cần thanh ghi"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Địa chỉ chỉ số (Indexed Addressing) tính toán địa chỉ thực tế = Địa chỉ cơ sở + Thanh ghi chỉ số. Khi duyệt mảng liên tiếp, chỉ cần tăng giá trị thanh ghi chỉ số sau mỗi bước lặp."
  },
  {
    "id": 63,
    "partId": "III.B",
    "partTitle": "Phần III.B: Chế độ địa chỉ, Kiến trúc RISC/CISC & Ngắt",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "RISC là viết tắt của thuật ngữ nào?",
    "options": {
      "A": "Reduced Interrupt System Control",
      "B": "Reduced Instruction Set Computer",
      "C": "Rapid Instruction Set Computer",
      "D": "Register Instruction Set Control"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "RISC là viết tắt của 'Reduced Instruction Set Computer' (Máy tính với tập lệnh thu giảm)."
  },
  {
    "id": 64,
    "partId": "III.B",
    "partTitle": "Phần III.B: Chế độ địa chỉ, Kiến trúc RISC/CISC & Ngắt",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Đặc điểm chính của kiến trúc RISC là gì?",
    "options": {
      "A": "Tập lệnh đơn giản, số lượng lệnh ít, hầu hết lệnh thực thi trong một chu kỳ, khuyến khích dùng thanh ghi",
      "B": "Tập lệnh phức tạp với nhiều lệnh đa năng",
      "C": "Nhiều chế độ địa chỉ phức tạp",
      "D": "Ưu tiên thao tác trực tiếp trên bộ nhớ trong phép toán"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Đặc điểm cốt lõi của RISC: Tập lệnh gọn nhẹ, số lượng lệnh ít, kích thước lệnh cố định, hầu hết lệnh thực thi xong trong 1 chu kỳ máy, sử dụng nhiều thanh ghi và áp dụng kiến trúc Load/Store."
  },
  {
    "id": 65,
    "partId": "III.B",
    "partTitle": "Phần III.B: Chế độ địa chỉ, Kiến trúc RISC/CISC & Ngắt",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "So với RISC, kiến trúc CISC có xu hướng nào?",
    "options": {
      "A": "Có tập lệnh đơn giản hơn RISC",
      "B": "Luôn nhanh hơn RISC trong mọi trường hợp",
      "C": "Không hỗ trợ truy cập bộ nhớ trực tiếp",
      "D": "Có tập lệnh phức tạp, đa dạng, một lệnh có thể thực hiện nhiều thao tác và mất nhiều chu kỳ hơn"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Kiến trúc CISC (Complex Instruction Set Computer) có tập lệnh phong phú, phức tạp, kích thước lệnh thay đổi, một lệnh có thể thực hiện nhiều thao tác cấp cao và tiêu tốn nhiều chu kỳ xung nhịp."
  },
  {
    "id": 66,
    "partId": "III.B",
    "partTitle": "Phần III.B: Chế độ địa chỉ, Kiến trúc RISC/CISC & Ngắt",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Nhận định nào sau đây về việc lựa chọn RISC hay CISC là hợp lý nhất?",
    "options": {
      "A": "CISC đã hoàn toàn biến mất khỏi thực tế",
      "B": "Cả hai kiến trúc hoàn toàn giống nhau về bản chất",
      "C": "Lựa chọn phụ thuộc vào mục tiêu thiết kế (hiệu năng, tiết kiệm năng lượng, độ phức tạp trình biên dịch), không kiến trúc nào vượt trội tuyệt đối",
      "D": "RISC luôn tốt hơn CISC trong mọi ứng dụng"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Không có kiến trúc nào vượt trội hoàn toàn: RISC tối ưu về tốc độ phần cứng và tiết kiệm điện, CISC giảm dung lượng mã lệnh và tiện lợi cho trình biên dịch; các CPU hiện đại thường kết hợp dịch lệnh CISC thành các vi lệnh giống RISC."
  },
  {
    "id": 67,
    "partId": "III.B",
    "partTitle": "Phần III.B: Chế độ địa chỉ, Kiến trúc RISC/CISC & Ngắt",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Ngắt (interrupt) là gì?",
    "options": {
      "A": "Một loại bộ nhớ cache",
      "B": "Tín hiệu báo cho CPU tạm dừng chương trình hiện tại để xử lý một sự kiện cần ưu tiên",
      "C": "Một loại lệnh số học",
      "D": "Một chế độ địa chỉ"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Ngắt (Interrupt) là tín hiệu khẩn cấp gửi tới CPU yêu cầu tạm dừng luồng chương trình hiện tại để chuyển sang thực thi chương trình con xử lý ngắt (ISR - Interrupt Service Routine)."
  },
  {
    "id": 68,
    "partId": "III.B",
    "partTitle": "Phần III.B: Chế độ địa chỉ, Kiến trúc RISC/CISC & Ngắt",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Khi xảy ra ngắt, CPU cần thực hiện thao tác nào đầu tiên để có thể quay lại chương trình đang chạy?",
    "options": {
      "A": "Lưu ngữ cảnh (trạng thái) hiện tại, đặc biệt là giá trị PC và các thanh ghi quan trọng",
      "B": "Xóa toàn bộ bộ nhớ",
      "C": "Tắt nguồn CPU",
      "D": "Xóa nội dung cache"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Khi nhận được tín hiệu ngắt, bước tối quan trọng đầu tiên của CPU là lưu ngữ cảnh (Context) hiện tại (đặc biệt là thanh ghi PC và các thanh ghi trạng thái/cờ) vào ngăn xếp (Stack) để sau này quay về đúng vị trí cũ."
  },
  {
    "id": 69,
    "partId": "III.B",
    "partTitle": "Phần III.B: Chế độ địa chỉ, Kiến trúc RISC/CISC & Ngắt",
    "chapterId": 3,
    "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)",
    "question": "Phân loại theo nguồn gốc, ngắt có thể chia thành mấy loại chính?",
    "options": {
      "A": "Chỉ có 1 loại duy nhất",
      "B": "Ngắt nhanh và ngắt chậm",
      "C": "Ngắt lớn và ngắt nhỏ",
      "D": "Ngắt phần cứng (do thiết bị ngoại vi) và ngắt phần mềm (do lệnh chương trình, ví dụ system call)"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Theo nguồn gốc phát sinh, ngắt được chia làm 2 loại chính: Ngắt phần cứng (Hardware interrupt do bàn phím, chuột, đĩa, bộ định thời gửi qua chân ngắt) và Ngắt phần mềm (Software interrupt/Trap/Exception do lệnh hệ thống system call hoặc lỗi chia cho 0)."
  },
  {
    "id": 70,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Phân cấp bộ nhớ (memory hierarchy) được sắp xếp theo nguyên tắc nào?",
    "options": {
      "A": "Tất cả các cấp có cùng tốc độ",
      "B": "Chỉ có 2 cấp duy nhất",
      "C": "Từ nhanh - đắt - dung lượng nhỏ (thanh ghi, cache) đến chậm - rẻ - dung lượng lớn (bộ nhớ ngoài)",
      "D": "Từ chậm đến nhanh mà không quan tâm chi phí"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Hệ thống phân cấp bộ nhớ được sắp xếp theo nguyên tắc: Càng gần CPU thì tốc độ càng nhanh, chi phí trên mỗi bit càng đắt và dung lượng càng nhỏ (Thanh ghi → Cache → RAM → Ổ đĩa/Bộ nhớ ngoài)."
  },
  {
    "id": 71,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Nguyên lý cục bộ về thời gian (temporal locality) nghĩa là gì?",
    "options": {
      "A": "Dữ liệu chỉ được truy cập một lần duy nhất",
      "B": "Dữ liệu/lệnh vừa được truy cập có khả năng cao sẽ được truy cập lại trong thời gian gần",
      "C": "Dữ liệu ở địa chỉ gần nhau có xu hướng được truy cập gần nhau",
      "D": "Mọi dữ liệu đều được truy cập với xác suất như nhau"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Nguyên lý cục bộ theo thời gian (Temporal Locality): Một vị trí bộ nhớ vừa được truy cập thì có xác suất rất cao sẽ được CPU truy cập lại trong một tương lai gần (ví dụ các biến đếm trong vòng lặp lặp lại)."
  },
  {
    "id": 72,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Nguyên lý cục bộ về không gian (spatial locality) nghĩa là gì?",
    "options": {
      "A": "Nếu một địa chỉ nhớ được truy cập thì các địa chỉ lân cận cũng có khả năng cao sẽ được truy cập trong thời gian gần",
      "B": "Dữ liệu truy cập gần đây sẽ được truy cập lại",
      "C": "Mọi vị trí bộ nhớ có vai trò như nhau",
      "D": "Chỉ áp dụng cho ổ đĩa"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Nguyên lý cục bộ theo không gian (Spatial Locality): Khi một ô nhớ được truy cập, các ô nhớ có địa chỉ nằm liền kề xung quanh nó cũng có khả năng cao sẽ được truy cập tiếp theo (ví dụ duyệt các phần tử mảng, thực thi lệnh tuần tự)."
  },
  {
    "id": 73,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "So với DRAM, SRAM có đặc điểm gì?",
    "options": {
      "A": "Chậm hơn nhưng rẻ hơn DRAM",
      "B": "Cần làm tươi định kỳ trong khi DRAM thì không",
      "C": "Có dung lượng lớn hơn DRAM",
      "D": "Nhanh hơn nhưng đắt hơn và mật độ lưu trữ thấp hơn nên thường dùng làm cache"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "SRAM (Static RAM) dùng mạch flip-flop nên có tốc độ rất nhanh, không cần làm tươi nhưng giá thành đắt và mật độ tích hợp thấp, do đó được dùng làm bộ nhớ Cache. DRAM dùng tụ điện nên cần làm tươi, tốc độ chậm hơn nhưng rẻ, dùng làm RAM chính."
  },
  {
    "id": 74,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "ROM (Read-Only Memory) có đặc điểm nào sau đây?",
    "options": {
      "A": "Cần làm tươi liên tục",
      "B": "Có tốc độ nhanh hơn thanh ghi CPU",
      "C": "Dữ liệu không bị mất khi mất điện, chủ yếu dùng để đọc",
      "D": "Mất dữ liệu khi mất điện"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "ROM (Read-Only Memory) là bộ nhớ bất biến (non-volatile), dữ liệu được ghi sẵn và không bị mất khi mất điện, chủ yếu dùng để chứa firmware khởi động hệ thống (BIOS/UEFI)."
  },
  {
    "id": 75,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "DRAM cần phải làm tươi (refresh) định kỳ vì lý do gì?",
    "options": {
      "A": "Vì DRAM không có địa chỉ",
      "B": "Vì dữ liệu được lưu dưới dạng điện tích trên tụ điện, dễ bị rò rỉ theo thời gian",
      "C": "Vì DRAM sử dụng flip-flop dễ nhiễu",
      "D": "Vì DRAM không có nguồn điện"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "DRAM lưu trữ mỗi bit dữ liệu dưới dạng điện tích trên một tụ điện cực nhỏ. Do hiện tượng rò rỉ điện tích qua tiếp giáp bán dẫn, DRAM buộc phải được nạp điện tuần hoàn định kỳ (gọi là chu kỳ làm tươi - Refresh cycle)."
  },
  {
    "id": 76,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Bộ nhớ cache có vai trò gì trong hệ thống máy tính?",
    "options": {
      "A": "Lưu tạm dữ liệu/lệnh được truy cập gần đây để giảm thời gian truy cập trung bình, tận dụng tính cục bộ",
      "B": "Thay thế hoàn toàn bộ nhớ chính",
      "C": "Chỉ dùng cho lưu trữ lâu dài",
      "D": "Không liên quan đến hiệu năng hệ thống"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Bộ nhớ Cache là bộ đệm tốc độ cao nằm giữa CPU và RAM chính, giúp lưu trữ tạm thời các khối dữ liệu/lệnh thường dùng nhằm thu hẹp chênh lệch tốc độ giữa CPU và bộ nhớ chính."
  },
  {
    "id": 77,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Các kiểu ánh xạ cache phổ biến gồm?",
    "options": {
      "A": "Chỉ có ánh xạ trực tiếp",
      "B": "Chỉ có ánh xạ liên kết",
      "C": "Ánh xạ tuần tự và ánh xạ song song",
      "D": "Ánh xạ trực tiếp, ánh xạ liên kết đầy đủ, ánh xạ liên kết tập hợp"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Có 3 phương pháp ánh xạ bộ nhớ chính vào Cache phổ biến: Ánh xạ trực tiếp (Direct-Mapped), Ánh xạ liên kết đầy đủ (Fully Associative), và Ánh xạ liên kết tập hợp (Set-Associative)."
  },
  {
    "id": 78,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Trong ánh xạ trực tiếp (direct-mapped cache), mỗi khối bộ nhớ chính có thể ánh xạ tới bao nhiêu dòng cache?",
    "options": {
      "A": "Một tập hợp gồm nhiều dòng",
      "B": "Không dòng nào cả",
      "C": "Chỉ đúng 1 dòng cache cố định",
      "D": "Bất kỳ dòng nào trong cache"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Trong ánh xạ trực tiếp (Direct Mapped Cache), mỗi khối của bộ nhớ chính chỉ có thể được nạp vào đúng một dòng Cache xác định cố định theo công thức: Dòng Cache = (Số khối bộ nhớ) mod (Tổng số dòng Cache)."
  },
  {
    "id": 79,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "So với ánh xạ trực tiếp, ánh xạ liên kết đầy đủ (fully associative) có ưu và nhược điểm gì?",
    "options": {
      "A": "Không cần mạch so sánh địa chỉ",
      "B": "Linh hoạt hơn, giảm xung đột nhưng phần cứng so sánh phức tạp và tốn kém hơn",
      "C": "Đơn giản hơn và rẻ hơn ánh xạ trực tiếp",
      "D": "Luôn nhanh hơn tuyệt đối trong mọi trường hợp"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Ánh xạ liên kết đầy đủ cho phép một khối nhớ chính nạp vào bất kỳ dòng nào còn trống trong Cache, giúp giảm tối đa đụng độ, nhưng đòi hỏi phần cứng so sánh thẻ song song phức tạp và tốn kém."
  },
  {
    "id": 80,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Chính sách thay thế LRU (Least Recently Used) trong cache có nguyên tắc là?",
    "options": {
      "A": "Loại bỏ khối dữ liệu lâu nhất không được truy cập",
      "B": "Loại bỏ khối được nạp vào đầu tiên theo thứ tự FIFO",
      "C": "Loại bỏ khối ngẫu nhiên",
      "D": "Loại bỏ khối được truy cập gần đây nhất"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Thuật toán thay thế trang/khối LRU (Least Recently Used) hoạt động theo nguyên tắc: Khi Cache đầy, loại bỏ khối dữ liệu mà thời gian tính từ lần truy cập gần nhất của nó là lâu nhất."
  },
  {
    "id": 81,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Chính sách ghi \"write-through\" trong cache hoạt động như thế nào?",
    "options": {
      "A": "Dữ liệu chỉ được ghi xuống bộ nhớ chính khi khối cache bị thay thế",
      "B": "Không bao giờ ghi xuống bộ nhớ chính",
      "C": "Chỉ ghi khi CPU yêu cầu đọc",
      "D": "Mỗi khi ghi vào cache, dữ liệu đồng thời được ghi luôn xuống bộ nhớ chính"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Chính sách ghi xuyên (Write-Through): Mỗi khi CPU ghi dữ liệu vào Cache, dữ liệu đó cũng đồng thời được cập nhật ngay lập tức xuống bộ nhớ chính (RAM), đảm bảo dữ liệu luôn đồng bộ nhưng tốc độ ghi chậm hơn."
  },
  {
    "id": 82,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "So với write-through, chính sách \"write-back\" có ưu điểm gì?",
    "options": {
      "A": "Đơn giản hơn về phần cứng",
      "B": "Không cần bit \"dirty\"",
      "C": "Giảm số lần truy cập bộ nhớ chính vì chỉ ghi xuống khi khối bị thay thế, giúp tăng hiệu năng",
      "D": "Luôn đảm bảo dữ liệu bộ nhớ chính cập nhật tức thời"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Chính sách ghi lại (Write-Back): Dữ liệu chỉ được cập nhật trên Cache và đánh dấu bit bẩn (dirty bit). Khối đó chỉ được ghi xuống RAM khi nó bị một khối khác thay thế, nhờ đó giảm đáng kể số lần truy cập RAM."
  },
  {
    "id": 83,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Nếu tỷ lệ trúng cache (hit rate) là 90%, thời gian truy cập cache là 1ns, miss penalty là 100ns, thời gian truy cập trung bình (AMAT) xấp xỉ bao nhiêu?",
    "options": {
      "A": "91ns",
      "B": "11ns",
      "C": "1ns",
      "D": "100ns"
    },
    "answer": "B",
    "isCalculation": true,
    "explanation": "Công thức tính thời gian truy cập bộ nhớ trung bình: AMAT = Hit Time + Miss Rate × Miss Penalty. Với Hit Time = 1ns, Miss Rate = 100% - 90% = 10% = 0.1, Miss Penalty = 100ns: AMAT = 1ns + 0.1 × 100ns = 1ns + 10ns = 11ns."
  },
  {
    "id": 84,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Nếu tăng kích thước cache, điều gì thường xảy ra với tỷ lệ trúng và chi phí?",
    "options": {
      "A": "Tỷ lệ trúng thường tăng nhưng chi phí phần cứng (và có thể cả thời gian truy cập) cũng tăng theo",
      "B": "Tỷ lệ trúng luôn giảm",
      "C": "Chi phí luôn giảm",
      "D": "Không có ảnh hưởng nào"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Tăng kích thước Cache thường làm tăng tỷ lệ trúng (Hit rate), tuy nhiên sẽ làm tăng chi phí phần cứng bán dẫn và có thể làm thời gian truy cập cơ bản (Hit time) bị chậm đi đôi chút."
  },
  {
    "id": 85,
    "partId": "IV.A",
    "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Nhận định nào đúng khi thiết kế hệ thống cache nhiều cấp (L1, L2, L3)?",
    "options": {
      "A": "Tất cả các cấp cache có cùng kích thước và tốc độ",
      "B": "L1 luôn lớn hơn L3",
      "C": "Chỉ cần một cấp cache là đủ tối ưu cho mọi hệ thống",
      "D": "L1 thường nhỏ và nhanh nhất, các cấp sau lớn hơn nhưng chậm hơn, nhằm cân bằng giữa tốc độ và chi phí"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Kiến trúc Cache nhiều cấp (L1, L2, L3): L1 nằm ngay sát nhân CPU nhỏ nhất và nhanh nhất; các cấp L2, L3 lớn dần về dung lượng nhưng tốc độ chậm dần nhằm cân bằng tối ưu giữa hiệu năng và chi phí sản xuất."
  },
  {
    "id": 86,
    "partId": "IV.B",
    "partTitle": "Phần IV.B: Bộ nhớ ngoài & Các phương pháp điều khiển Vào/Ra",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "So với ổ đĩa từ (HDD), ổ thể rắn (SSD) có đặc điểm gì?",
    "options": {
      "A": "Có tốc độ truy cập chậm hơn HDD",
      "B": "Sử dụng đĩa từ quay để lưu dữ liệu",
      "C": "Không có bộ phận cơ khí chuyển động, tốc độ truy cập nhanh hơn nhưng thường đắt hơn trên mỗi GB",
      "D": "Luôn rẻ hơn HDD trên mỗi GB"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Ổ thể rắn SSD sử dụng chip nhớ flash không có bộ phận cơ khí chuyển động, cho tốc độ đọc/ghi ngẫu nhiên vượt trội so với đĩa từ HDD truyền thống nhưng chi phí giá thành trên mỗi GB cao hơn."
  },
  {
    "id": 87,
    "partId": "IV.B",
    "partTitle": "Phần IV.B: Bộ nhớ ngoài & Các phương pháp điều khiển Vào/Ra",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Thời gian truy cập của ổ đĩa từ (HDD) chịu ảnh hưởng chính bởi các thành phần nào?",
    "options": {
      "A": "Chỉ phụ thuộc vào tần số CPU",
      "B": "Thời gian tìm kiếm (seek time), độ trễ quay (rotational latency) và thời gian truyền dữ liệu",
      "C": "Chỉ phụ thuộc vào dung lượng đĩa",
      "D": "Chỉ phụ thuộc vào hệ điều hành"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Thời gian truy cập một khối dữ liệu trên ổ cứng HDD cơ học gồm 3 thành phần chính: Thời gian tìm đường ghi/đọc (Seek time - lâu nhất) + Độ trễ quay của phiến đĩa (Rotational latency) + Thời gian truyền dữ liệu (Transfer time)."
  },
  {
    "id": 88,
    "partId": "IV.B",
    "partTitle": "Phần IV.B: Bộ nhớ ngoài & Các phương pháp điều khiển Vào/Ra",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Hệ thống vào/ra (I/O) giao tiếp với CPU thông qua thành phần trung gian nào?",
    "options": {
      "A": "Các cổng vào/ra (I/O port) và bus hệ thống",
      "B": "Trực tiếp qua thanh ghi PC",
      "C": "Thông qua bộ nhớ cache duy nhất",
      "D": "Không cần trung gian nào"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Hệ thống I/O kết nối và truyền thông tin với CPU và bộ nhớ thông qua các thanh ghi điều khiển/dữ liệu tại cổng vào ra (I/O Port) và hệ thống đường Bus."
  },
  {
    "id": 89,
    "partId": "IV.B",
    "partTitle": "Phần IV.B: Bộ nhớ ngoài & Các phương pháp điều khiển Vào/Ra",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Có hai phương pháp địa chỉ hóa cổng vào/ra phổ biến là?",
    "options": {
      "A": "I/O tuần tự và I/O song song",
      "B": "I/O tĩnh và I/O động",
      "C": "I/O đồng bộ và I/O bất đồng bộ",
      "D": "I/O ánh xạ bộ nhớ (memory-mapped I/O) và I/O cách ly (isolated/port-mapped I/O)"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Hai kỹ thuật địa chỉ hóa cổng I/O cơ bản: I/O ánh xạ bộ nhớ (Memory-mapped I/O, dùng chung không gian địa chỉ và tập lệnh với RAM) và I/O cách ly/độc lập (Isolated/Port-mapped I/O, dùng không gian địa chỉ và tập lệnh riêng như IN/OUT)."
  },
  {
    "id": 90,
    "partId": "IV.B",
    "partTitle": "Phần IV.B: Bộ nhớ ngoài & Các phương pháp điều khiển Vào/Ra",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Phương pháp điều khiển vào/ra \"thăm dò\" (polling) hoạt động như thế nào?",
    "options": {
      "A": "Dữ liệu được truyền trực tiếp không qua CPU",
      "B": "CPU không cần quan tâm đến thiết bị",
      "C": "CPU liên tục kiểm tra trạng thái thiết bị để biết khi nào sẵn sàng trao đổi dữ liệu",
      "D": "Thiết bị tự động gửi tín hiệu ngắt cho CPU"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Phương pháp I/O thăm dò (Programmed I/O / Polling): CPU liên tục lặp lại thao tác đọc thanh ghi trạng thái của thiết bị I/O trong một vòng lặp kín để kiểm tra xem thiết bị đã sẵn sàng truyền nhận dữ liệu hay chưa."
  },
  {
    "id": 91,
    "partId": "IV.B",
    "partTitle": "Phần IV.B: Bộ nhớ ngoài & Các phương pháp điều khiển Vào/Ra",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Nhược điểm chính của phương pháp thăm dò (polling) là?",
    "options": {
      "A": "Chỉ dùng được cho ổ đĩa",
      "B": "Tốn nhiều thời gian CPU để kiểm tra trạng thái, đặc biệt khi thiết bị chậm",
      "C": "Không thể sử dụng với thiết bị chậm",
      "D": "Không cần CPU tham gia nên tốn tài nguyên bộ nhớ"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Nhược điểm lớn nhất của phương pháp thăm dò (Polling) là gây lãng phí chu kỳ xử lý của CPU (CPU busy-waiting) do phải liên tục kiểm tra trạng thái của các thiết bị I/O vốn có tốc độ rất chậm so với CPU."
  },
  {
    "id": 92,
    "partId": "IV.B",
    "partTitle": "Phần IV.B: Bộ nhớ ngoài & Các phương pháp điều khiển Vào/Ra",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "So với thăm dò, phương pháp điều khiển bằng ngắt (interrupt-driven I/O) có ưu điểm gì?",
    "options": {
      "A": "CPU không cần liên tục kiểm tra, chỉ xử lý khi thiết bị thực sự sẵn sàng, giải phóng thời gian CPU cho công việc khác",
      "B": "Luôn tốn nhiều CPU hơn thăm dò",
      "C": "Không cần phần cứng hỗ trợ",
      "D": "Chỉ hoạt động với ổ đĩa cứng"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Phương pháp I/O điều khiển bằng ngắt (Interrupt-Driven I/O) giải phóng CPU khỏi vòng lặp chờ: CPU gửi yêu cầu rồi tiếp tục làm việc khác, chỉ khi nào thiết bị I/O sẵn sàng thì mới gửi tín hiệu ngắt báo cho CPU xử lý."
  },
  {
    "id": 93,
    "partId": "IV.B",
    "partTitle": "Phần IV.B: Bộ nhớ ngoài & Các phương pháp điều khiển Vào/Ra",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "DMA là viết tắt của thuật ngữ nào?",
    "options": {
      "A": "Data Memory Allocation",
      "B": "Dynamic Memory Addressing",
      "C": "Device Management Access",
      "D": "Direct Memory Access (truy nhập bộ nhớ trực tiếp)"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "DMA là viết tắt của 'Direct Memory Access' (Truy nhập bộ nhớ trực tiếp)."
  },
  {
    "id": 94,
    "partId": "IV.B",
    "partTitle": "Phần IV.B: Bộ nhớ ngoài & Các phương pháp điều khiển Vào/Ra",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Ưu điểm chính của DMA so với thăm dò và ngắt là?",
    "options": {
      "A": "DMA không cần bus hệ thống",
      "B": "DMA chỉ dùng được cho bàn phím",
      "C": "Cho phép thiết bị ngoại vi truyền dữ liệu trực tiếp với bộ nhớ mà không cần CPU can thiệp vào từng byte, giảm tải cho CPU",
      "D": "DMA luôn chậm hơn thăm dò"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Cơ chế DMA cho phép bộ điều khiển DMA trực tiếp trao đổi các khối dữ liệu lớn giữa thiết bị I/O và bộ nhớ chính mà không cần CPU tham gia vào việc chuyển từng byte một, giải phóng năng lực cho CPU."
  },
  {
    "id": 95,
    "partId": "IV.B",
    "partTitle": "Phần IV.B: Bộ nhớ ngoài & Các phương pháp điều khiển Vào/Ra",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Khi so sánh chi phí CPU của ba phương pháp thăm dò, ngắt và DMA cho việc truyền một khối dữ liệu lớn, nhận định nào hợp lý nhất?",
    "options": {
      "A": "Cả ba phương pháp có chi phí CPU như nhau",
      "B": "DMA thường tối ưu nhất cho khối dữ liệu lớn vì giảm tối đa sự can thiệp của CPU vào từng đơn vị dữ liệu",
      "C": "Thăm dò luôn tối ưu nhất cho mọi trường hợp",
      "D": "Ngắt luôn tốn CPU nhiều hơn thăm dò"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "DMA tối ưu nhất khi truyền các khối dữ liệu liên tục có kích thước lớn (như đọc sector đĩa, gói tin mạng lớn), vì chi phí khởi tạo bộ điều khiển DMA được bù đắp bởi việc không tiêu tốn chu kỳ CPU cho từng byte dữ liệu."
  },
  {
    "id": 96,
    "partId": "IV.B",
    "partTitle": "Phần IV.B: Bộ nhớ ngoài & Các phương pháp điều khiển Vào/Ra",
    "chapterId": 4,
    "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)",
    "question": "Bus hệ thống (system bus) trong máy tính thường được chia thành mấy loại tín hiệu chính?",
    "options": {
      "A": "3 loại: bus địa chỉ, bus dữ liệu, bus điều khiển",
      "B": "Chỉ 1 loại duy nhất",
      "C": "2 loại: bus trong và bus ngoài",
      "D": "5 loại tương ứng 5 thiết bị ngoại vi"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Hệ thống Bus hệ thống tiêu chuẩn bao gồm 3 loại đường truyền tín hiệu chuyên biệt: Bus địa chỉ (Address Bus), Bus dữ liệu (Data Bus) và Bus điều khiển (Control Bus)."
  },
  {
    "id": 97,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Hệ điều hành (Operating System) có vai trò chính nào?",
    "options": {
      "A": "Chỉ dùng để chạy trình duyệt web",
      "B": "Chỉ biên dịch chương trình",
      "C": "Thay thế hoàn toàn phần cứng",
      "D": "Quản lý tài nguyên phần cứng và cung cấp giao diện cho người dùng/ứng dụng sử dụng máy tính"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Hệ điều hành (Operating System) là phần mềm hệ thống cốt lõi có vai trò quản lý, điều phối tài nguyên phần cứng (CPU, bộ nhớ, I/O) và cung cấp môi trường nền tảng, giao diện trừu tượng cho người dùng và các phần mềm ứng dụng."
  },
  {
    "id": 98,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Chức năng \"quản lý tiến trình\" của hệ điều hành bao gồm công việc gì?",
    "options": {
      "A": "Chỉ hiển thị giao diện đồ họa",
      "B": "Chỉ quản lý bàn phím và chuột",
      "C": "Tạo, lập lịch, đồng bộ hóa và kết thúc các tiến trình đang chạy",
      "D": "Chỉ định dạng ổ đĩa"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Chức năng quản lý tiến trình của hệ điều hành bao gồm: Khởi tạo tiến trình, lập lịch cấp phát CPU, đồng bộ hóa giữa các tiến trình, cơ chế giao tiếp liên tiến trình (IPC) và kết thúc, thu hồi tài nguyên tiến trình."
  },
  {
    "id": 99,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Hệ điều hành đa nhiệm (multitasking) khác hệ điều hành đơn nhiệm (single-tasking) ở điểm nào?",
    "options": {
      "A": "Hai loại này giống hệt nhau",
      "B": "Đa nhiệm cho phép nhiều tiến trình cùng tồn tại và luân phiên sử dụng CPU, đơn nhiệm chỉ chạy một chương trình tại một thời điểm",
      "C": "Đa nhiệm chỉ chạy được trên siêu máy tính",
      "D": "Đơn nhiệm nhanh hơn đa nhiệm trong mọi trường hợp"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Hệ điều hành đa nhiệm (Multitasking) cho phép nhiều tiến trình cùng nạp vào bộ nhớ và luân phiên chia sẻ thời gian sử dụng CPU tạo cảm giác chạy song song; còn đơn nhiệm chỉ thực thi duy nhất 1 chương trình tại một thời điểm."
  },
  {
    "id": 100,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Lời gọi hệ thống (system call) dùng để làm gì?",
    "options": {
      "A": "Cho phép chương trình ứng dụng yêu cầu dịch vụ từ nhân hệ điều hành (kernel)",
      "B": "Biên dịch mã nguồn thành mã máy",
      "C": "Hiển thị đồ họa trực tiếp không qua hệ điều hành",
      "D": "Chỉ dùng để tắt máy"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Lời gọi hệ thống (System Call) là giao diện lập trình cho phép một chương trình ứng dụng ở chế độ người dùng yêu cầu nhân hệ điều hành (Kernel) thực hiện các tác vụ đặc quyền (như đọc ghi tệp, cấp phát bộ nhớ, tạo tiến trình)."
  },
  {
    "id": 101,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Sự khác biệt giữa chế độ nhân (kernel mode) và chế độ người dùng (user mode) là gì?",
    "options": {
      "A": "Hai chế độ có quyền truy cập như nhau",
      "B": "Chế độ người dùng có quyền cao hơn chế độ nhân",
      "C": "Chế độ nhân chỉ dùng khi tắt máy",
      "D": "Chế độ nhân có toàn quyền truy cập phần cứng và tài nguyên hệ thống, chế độ người dùng bị giới hạn quyền để đảm bảo an toàn"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Sự phân chia chế độ nhân (Kernel mode) và chế độ người dùng (User mode) nhằm bảo vệ hệ thống: Chế độ nhân có toàn quyền truy xuất phần cứng và lệnh đặc quyền; chế độ người dùng bị hạn chế để tránh làm sập hệ điều hành."
  },
  {
    "id": 102,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Khi một chương trình gọi system call, CPU cần chuyển từ chế độ nào sang chế độ nào?",
    "options": {
      "A": "Không cần chuyển chế độ",
      "B": "Chuyển sang chế độ ngắt riêng biệt",
      "C": "Từ chế độ người dùng (user mode) sang chế độ nhân (kernel mode)",
      "D": "Từ chế độ nhân sang chế độ người dùng"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Khi chương trình phát lệnh gọi hệ thống (System Call), hệ thống sẽ kích hoạt một bẫy mềm (Trap/Software Interrupt) chuyển quyền điều khiển từ Chế độ người dùng (User Mode) sang Chế độ nhân (Kernel Mode)."
  },
  {
    "id": 103,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Khối điều khiển tiến trình (PCB - Process Control Block) lưu trữ thông tin gì?",
    "options": {
      "A": "Chỉ lưu địa chỉ IP mạng",
      "B": "Trạng thái, giá trị thanh ghi, thông tin lập lịch và các tài nguyên của tiến trình",
      "C": "Chỉ lưu mã nguồn chương trình",
      "D": "Chỉ lưu tên người dùng"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "PCB (Process Control Block - Khối điều khiển tiến trình) lưu trữ toàn bộ thông tin định danh và trạng thái của tiến trình: PID, trạng thái tiến trình, con trỏ lệnh PC, nội dung các thanh ghi CPU, thông tin lập lịch và danh sách tài nguyên mở."
  },
  {
    "id": 104,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Tiến trình (process) khác luồng (thread) chủ yếu ở điểm nào?",
    "options": {
      "A": "Mỗi tiến trình có không gian địa chỉ bộ nhớ riêng, còn các luồng trong cùng một tiến trình chia sẻ chung không gian địa chỉ đó",
      "B": "Luồng luôn chạy chậm hơn tiến trình",
      "C": "Tiến trình không thể tạo ra nhiều luồng",
      "D": "Hai khái niệm hoàn toàn giống nhau"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Khác biệt cốt lõi giữa tiến trình (Process) và luồng (Thread): Mỗi tiến trình có một không gian địa chỉ bộ nhớ độc lập riêng biệt, trong khi các luồng trong cùng một tiến trình chia sẻ chung không gian địa chỉ và tài nguyên của tiến trình đó."
  },
  {
    "id": 105,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Sơ đồ trạng thái tiến trình cơ bản gồm các trạng thái nào?",
    "options": {
      "A": "Chỉ có chạy và dừng",
      "B": "Chỉ có 2 trạng thái bật và tắt",
      "C": "Chỉ có trạng thái chờ duy nhất",
      "D": "Mới tạo, sẵn sàng, đang chạy, chờ (blocked), kết thúc"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Mô hình 5 trạng thái cơ bản của tiến trình gồm: Mới tạo (New) → Sẵn sàng (Ready) ⇄ Đang chạy (Running) → Chờ/Khóa (Waiting/Blocked) → Kết thúc (Terminated)."
  },
  {
    "id": 106,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Một tiến trình đang ở trạng thái \"đang chạy\" phải chờ một thao tác vào/ra hoàn tất. Tiến trình đó sẽ chuyển sang trạng thái nào?",
    "options": {
      "A": "Mới tạo (new)",
      "B": "Kết thúc (terminated)",
      "C": "Chờ (blocked/waiting)",
      "D": "Sẵn sàng (ready)"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Khi tiến trình đang chạy (Running) phát lệnh yêu cầu thao tác I/O hoặc chờ một sự kiện chưa hoàn tất, hệ điều hành sẽ chuyển tiến trình sang trạng thái Chờ (Waiting / Blocked)."
  },
  {
    "id": 107,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Chuyển ngữ cảnh (context switch) là gì?",
    "options": {
      "A": "Quá trình sao lưu dữ liệu ra đĩa",
      "B": "Quá trình lưu trạng thái của tiến trình đang chạy và khôi phục trạng thái của tiến trình khác để CPU chuyển sang thực thi",
      "C": "Quá trình biên dịch chương trình",
      "D": "Quá trình cài đặt hệ điều hành mới"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Chuyển ngữ cảnh (Context Switch) là thao tác của hệ điều hành nhằm lưu lại trạng thái CPU của tiến trình đang chạy và khôi phục trạng thái đã lưu của một tiến trình khác để CPU tiếp tục thực thi tiến trình mới đó."
  },
  {
    "id": 108,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Vì sao chuyển ngữ cảnh (context switch) được xem là chi phí (overhead) cần hạn chế?",
    "options": {
      "A": "Vì thời gian dùng để lưu/khôi phục trạng thái không thực hiện công việc hữu ích cho tiến trình nào cả",
      "B": "Vì nó làm tăng dung lượng ổ đĩa",
      "C": "Vì nó luôn gây lỗi hệ thống",
      "D": "Vì nó không liên quan đến hiệu năng"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Thời gian chuyển ngữ cảnh là thời gian chi phí phụ (overhead) thuần túy vì trong suốt quá trình lưu và khôi phục thanh ghi/ngữ cảnh, CPU không thực hiện được bất kỳ phép tính hữu ích nào cho các tiến trình người dùng."
  },
  {
    "id": 109,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Giải thuật lập lịch FCFS (First Come First Served) hoạt động theo nguyên tắc nào?",
    "options": {
      "A": "Tiến trình có thời gian thực thi ngắn nhất được ưu tiên",
      "B": "Tiến trình có độ ưu tiên cao nhất được chạy trước",
      "C": "Các tiến trình chia sẻ CPU theo lượng thời gian cố định",
      "D": "Tiến trình nào đến hàng đợi trước được phục vụ trước"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Thuật toán lập lịch FCFS (First-Come, First-Served - Đến trước phục vụ trước) hoạt động theo nguyên tắc hàng đợi FIFO: Tiến trình nào yêu cầu CPU trước sẽ được cấp phát CPU chạy trước cho đến khi kết thúc hoặc nhả CPU."
  },
  {
    "id": 110,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Giải thuật SJF (Shortest Job First) ưu tiên chọn tiến trình nào để thực thi?",
    "options": {
      "A": "Tiến trình có độ ưu tiên thấp nhất",
      "B": "Tiến trình chạy lâu nhất",
      "C": "Tiến trình có thời gian thực thi (burst time) ngắn nhất trong hàng đợi sẵn sàng",
      "D": "Tiến trình đến trước"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Giải thuật SJF (Shortest Job First - Công việc ngắn nhất trước) chọn tiến trình có thời gian thực thi (CPU burst time) ngắn nhất trong hàng đợi Ready để cấp phát CPU tiếp theo."
  },
  {
    "id": 111,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "So với FCFS, SJF có ưu điểm gì về mặt lý thuyết?",
    "options": {
      "A": "Luôn hoàn thành nhanh hơn Round Robin trong mọi trường hợp",
      "B": "Cho thời gian chờ trung bình tối thiểu (tối ưu) nếu biết trước thời gian thực thi của các tiến trình",
      "C": "Luôn công bằng hơn cho mọi tiến trình",
      "D": "Dễ cài đặt hơn vì không cần biết trước thời gian thực thi"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Giải thuật SJF là giải thuật tối ưu về mặt lý thuyết vì nó chứng minh được rằng luôn mang lại thời gian chờ đợi trung bình (Average Waiting Time) nhỏ nhất trong tất cả các thuật toán lập lịch."
  },
  {
    "id": 112,
    "partId": "V.A",
    "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Ba tiến trình P1, P2, P3 lần lượt có thời gian thực thi 5, 3, 8 (ms), đến cùng lúc, lập lịch theo SJF. Thời gian chờ của P3 là bao nhiêu?",
    "options": {
      "A": "8ms",
      "B": "0ms",
      "C": "3ms",
      "D": "5ms"
    },
    "answer": "A",
    "isCalculation": true,
    "explanation": "Với SJF không trưng dụng (P1=5ms, P2=3ms, P3=8ms cùng đến lúc 0ms): Thứ tự thực thi từ ngắn đến dài là P2 (0→3ms) → P1 (3→8ms) → P3 (8→16ms). Tiến trình P3 phải đợi P2 và P1 chạy xong, do đó thời gian chờ của P3 = 3 + 5 = 8ms."
  },
  {
    "id": 113,
    "partId": "V.B",
    "partTitle": "Phần V.B: Lập lịch Round Robin, Đồng bộ hóa & Bế tắc Deadlock",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Giải thuật Round Robin phân phối CPU cho các tiến trình như thế nào?",
    "options": {
      "A": "Tiến trình ngắn nhất luôn được ưu tiên tuyệt đối",
      "B": "Chỉ tiến trình có độ ưu tiên cao nhất mới được chạy",
      "C": "Tiến trình đến trước sẽ chạy đến khi hoàn thành",
      "D": "Mỗi tiến trình được cấp một khoảng thời gian cố định (quantum), luân phiên theo hàng đợi vòng tròn"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Giải thuật lập lịch Round Robin (RR) phân phối CPU công bằng theo thời gian: Mỗi tiến trình trong hàng đợi Ready được cấp một định ngạch thời gian cố định (Time Quantum); hết quantum sẽ bị ngắt và đưa về cuối hàng đợi vòng tròn."
  },
  {
    "id": 114,
    "partId": "V.B",
    "partTitle": "Phần V.B: Lập lịch Round Robin, Đồng bộ hóa & Bế tắc Deadlock",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Nếu quantum trong Round Robin quá nhỏ, hệ thống sẽ gặp vấn đề gì?",
    "options": {
      "A": "Không ảnh hưởng gì đến hiệu năng",
      "B": "Tiến trình sẽ không bao giờ hoàn thành",
      "C": "Chi phí chuyển ngữ cảnh tăng cao, làm giảm hiệu năng tổng thể dù thời gian đáp ứng có vẻ nhanh",
      "D": "Hệ thống sẽ nhanh hơn tuyệt đối, không có nhược điểm"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Nếu giá trị Time Quantum trong Round Robin quá nhỏ, số lần chuyển ngữ cảnh (Context Switch) giữa các tiến trình sẽ tăng vọt, tiêu tốn phần lớn thời gian CPU vào chi phí quản lý làm giảm hiệu năng toàn hệ thống."
  },
  {
    "id": 115,
    "partId": "V.B",
    "partTitle": "Phần V.B: Lập lịch Round Robin, Đồng bộ hóa & Bế tắc Deadlock",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Giải thuật lập lịch theo độ ưu tiên (priority scheduling) có thể gặp vấn đề gì nếu không xử lý tốt?",
    "options": {
      "A": "Luôn cho thời gian chờ bằng 0",
      "B": "Tiến trình có độ ưu tiên thấp có thể bị \"đói\" (starvation), không bao giờ được cấp CPU",
      "C": "Luôn đảm bảo công bằng tuyệt đối cho mọi tiến trình",
      "D": "Không thể xảy ra deadlock"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Trong giải thuật lập lịch theo độ ưu tiên (Priority Scheduling), tiến trình có độ ưu tiên thấp có thể bị 'bỏ đói' (Starvation) vô thời hạn nếu liên tục có các tiến trình độ ưu tiên cao hơn xuất hiện."
  },
  {
    "id": 116,
    "partId": "V.B",
    "partTitle": "Phần V.B: Lập lịch Round Robin, Đồng bộ hóa & Bế tắc Deadlock",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Một tiến trình có thời gian đến bằng 0, thời gian thực thi 4ms, hoàn thành lúc 4ms. Thời gian hoàn thành (turnaround time) của tiến trình là?",
    "options": {
      "A": "4ms",
      "B": "0ms",
      "C": "8ms",
      "D": "Không xác định được"
    },
    "answer": "A",
    "isCalculation": true,
    "explanation": "Thời gian hoàn thành (Turnaround Time) = Thời điểm tiến trình kết thúc - Thời điểm tiến trình đến hàng đợi. Ở đây tiến trình đến lúc 0ms và hoàn thành lúc 4ms nên TAT = 4ms - 0ms = 4ms."
  },
  {
    "id": 117,
    "partId": "V.B",
    "partTitle": "Phần V.B: Lập lịch Round Robin, Đồng bộ hóa & Bế tắc Deadlock",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Đoạn găng (critical section) là gì?",
    "options": {
      "A": "Đoạn mã chạy nhanh nhất trong chương trình",
      "B": "Đoạn mã không cần đồng bộ",
      "C": "Đoạn mã chỉ CPU mới truy cập được",
      "D": "Đoạn mã trong đó tiến trình truy cập tài nguyên dùng chung mà không được có tiến trình khác truy cập đồng thời"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Đoạn găng (Critical Section) là đoạn mã chương trình có thao tác truy cập vào các tài nguyên dùng chung (biến toàn cục, tệp, bộ đệm) mà tại một thời điểm chỉ được phép có tối đa một tiến trình được thực thi."
  },
  {
    "id": 118,
    "partId": "V.B",
    "partTitle": "Phần V.B: Lập lịch Round Robin, Đồng bộ hóa & Bế tắc Deadlock",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Semaphore được sử dụng trong đồng bộ hóa tiến trình với mục đích gì?",
    "options": {
      "A": "Chỉ dùng để lập lịch CPU",
      "B": "Chỉ dùng để cấp phát bộ nhớ",
      "C": "Kiểm soát số lượng tiến trình được phép truy cập đồng thời vào tài nguyên dùng chung, thông qua các thao tác wait/signal",
      "D": "Chỉ dùng để đo thời gian thực thi"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Semaphore là một công cụ đồng bộ hóa do Dijkstra đề xuất, sử dụng một biến nguyên có hai thao tác nguyên tử chuẩn là wait() (P) và signal() (V) để kiểm soát quyền truy cập tài nguyên của các tiến trình."
  },
  {
    "id": 119,
    "partId": "V.B",
    "partTitle": "Phần V.B: Lập lịch Round Robin, Đồng bộ hóa & Bế tắc Deadlock",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Semaphore nhị phân (binary semaphore) có giá trị nằm trong khoảng nào?",
    "options": {
      "A": "Chỉ có giá trị âm",
      "B": "0 hoặc 1",
      "C": "-1 đến 1",
      "D": "0 đến số nguyên bất kỳ không giới hạn"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Semaphore nhị phân (Binary Semaphore / Mutex) là biến semaphore chỉ có thể nhận hai giá trị duy nhất là 0 (đang bị chiếm giữ) và 1 (đang rảnh rỗi)."
  },
  {
    "id": 120,
    "partId": "V.B",
    "partTitle": "Phần V.B: Lập lịch Round Robin, Đồng bộ hóa & Bế tắc Deadlock",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Bài toán \"sản xuất - tiêu thụ\" (producer-consumer) minh họa cho vấn đề gì trong đồng bộ hóa?",
    "options": {
      "A": "Sự phối hợp giữa các tiến trình chia sẻ vùng đệm (buffer) chung để tránh ghi đè hoặc đọc dữ liệu chưa hợp lệ",
      "B": "Vấn đề định tuyến mạng",
      "C": "Vấn đề phân mảnh bộ nhớ",
      "D": "Vấn đề lập lịch đĩa"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Bài toán 'Nhà sản xuất - Người tiêu thụ' (Producer - Consumer) là bài toán kinh điển mô hình hóa việc đồng bộ hóa dữ liệu giữa các tiến trình cùng chia sẻ một bộ đệm (buffer) có kích thước hữu hạn."
  },
  {
    "id": 121,
    "partId": "V.B",
    "partTitle": "Phần V.B: Lập lịch Round Robin, Đồng bộ hóa & Bế tắc Deadlock",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Bế tắc (deadlock) xảy ra khi nào?",
    "options": {
      "A": "Khi CPU chạy quá nhanh",
      "B": "Khi bộ nhớ trống quá nhiều",
      "C": "Khi có quá ít tiến trình đang chạy",
      "D": "Khi một tập các tiến trình chờ đợi lẫn nhau để giải phóng tài nguyên mà không tiến trình nào có thể tiếp tục"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Bế tắc (Deadlock) là trạng thái mà một tập hợp các tiến trình bị kẹt vĩnh viễn, trong đó mỗi tiến trình đang nắm giữ một tài nguyên và chờ đợi một tài nguyên khác đang bị một tiến trình khác trong chính tập hợp đó nắm giữ."
  },
  {
    "id": 122,
    "partId": "V.B",
    "partTitle": "Phần V.B: Lập lịch Round Robin, Đồng bộ hóa & Bế tắc Deadlock",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "Bốn điều kiện cần để xảy ra deadlock gồm?",
    "options": {
      "A": "Hai điều kiện: tốc độ và dung lượng",
      "B": "Ba điều kiện: CPU, bộ nhớ và đĩa",
      "C": "Loại trừ tương hỗ, giữ và chờ, không thu hồi được tài nguyên, chờ đợi vòng tròn",
      "D": "Chỉ cần 1 điều kiện duy nhất"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Bốn điều kiện cần xảy ra đồng thời để dẫn đến Deadlock (Coffman): 1. Loại trừ tương hỗ (Mutual Exclusion), 2. Giữ và chờ (Hold and Wait), 3. Không thu hồi tài nguyên (No Preemption), 4. Chờ đợi vòng tròn (Circular Wait)."
  },
  {
    "id": 123,
    "partId": "V.B",
    "partTitle": "Phần V.B: Lập lịch Round Robin, Đồng bộ hóa & Bế tắc Deadlock",
    "chapterId": 5,
    "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)",
    "question": "So với \"phòng ngừa deadlock\" (prevention), \"tránh deadlock\" (avoidance) khác biệt ở điểm nào?",
    "options": {
      "A": "Phòng ngừa deadlock chỉ áp dụng được sau khi deadlock đã xảy ra",
      "B": "Tránh deadlock cho phép cấp phát tài nguyên linh hoạt hơn dựa trên trạng thái an toàn (ví dụ giải thuật Banker), còn phòng ngừa loại bỏ hẳn một trong bốn điều kiện cần",
      "C": "Hai phương pháp hoàn toàn giống nhau",
      "D": "Tránh deadlock luôn đơn giản hơn phòng ngừa"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Phòng ngừa deadlock (Deadlock Prevention) loại bỏ hoàn toàn khả năng xảy ra deadlock bằng cách vô hiệu hóa ít nhất 1 trong 4 điều kiện cần. Tránh deadlock (Deadlock Avoidance, ví dụ Banker) cấp phát động linh hoạt hơn nếu trạng thái vẫn an toàn."
  },
  {
    "id": 124,
    "partId": "VI.A",
    "partTitle": "Phần VI.A: Quản lý bộ nhớ, Phân trang & Bộ nhớ ảo",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Mục tiêu chính của quản lý bộ nhớ trong hệ điều hành là gì?",
    "options": {
      "A": "Cấp phát, bảo vệ và tối ưu hóa việc sử dụng bộ nhớ chính cho các tiến trình",
      "B": "Chỉ quản lý ổ đĩa cứng",
      "C": "Chỉ quản lý thiết bị vào/ra",
      "D": "Chỉ quản lý mạng máy tính"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Nhiệm vụ trọng tâm của bộ phận quản lý bộ nhớ trong hệ điều hành là cấp phát không gian bộ nhớ cho các tiến trình, theo dõi bộ nhớ trống, bảo vệ phân vùng và tối ưu hóa hiệu quả sử dụng RAM."
  },
  {
    "id": 125,
    "partId": "VI.A",
    "partTitle": "Phần VI.A: Quản lý bộ nhớ, Phân trang & Bộ nhớ ảo",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "\"Bảo vệ bộ nhớ\" (memory protection) nhằm mục đích gì?",
    "options": {
      "A": "Tăng tốc độ truy cập bộ nhớ",
      "B": "Giảm dung lượng bộ nhớ cần thiết",
      "C": "Mã hóa toàn bộ dữ liệu trên đĩa",
      "D": "Ngăn một tiến trình truy cập trái phép vào vùng nhớ của tiến trình khác hoặc hệ điều hành"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Cơ chế bảo vệ bộ nhớ (Memory Protection) sử dụng các thanh ghi giới hạn (Base & Limit registers) để ngăn không cho tiến trình truy cập trái phép vào không gian địa chỉ của tiến trình khác hoặc vùng nhớ của nhân hệ điều hành."
  },
  {
    "id": 126,
    "partId": "VI.A",
    "partTitle": "Phần VI.A: Quản lý bộ nhớ, Phân trang & Bộ nhớ ảo",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Trong cấp phát liên tục (contiguous allocation), mỗi tiến trình được cấp phát như thế nào?",
    "options": {
      "A": "Chỉ cấp phát theo trang cố định",
      "B": "Không cần cấp phát bộ nhớ",
      "C": "Một vùng nhớ liên tục duy nhất đủ lớn để chứa toàn bộ tiến trình",
      "D": "Nhiều vùng nhớ rời rạc bất kỳ"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Cấp phát liên tục (Contiguous Allocation) yêu cầu toàn bộ không gian địa chỉ logic của mỗi tiến trình phải được đặt vào một khối các ô nhớ vật lý liền kề liên tục nhau trong RAM."
  },
  {
    "id": 127,
    "partId": "VI.A",
    "partTitle": "Phần VI.A: Quản lý bộ nhớ, Phân trang & Bộ nhớ ảo",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Phân mảnh ngoài (external fragmentation) xảy ra khi nào?",
    "options": {
      "A": "Khi không có tiến trình nào chạy",
      "B": "Khi tổng bộ nhớ trống đủ lớn nhưng bị chia thành nhiều mảnh nhỏ không liên tục nên không thể cấp phát cho tiến trình cần vùng liên tục lớn",
      "C": "Khi một tiến trình được cấp nhiều bộ nhớ hơn mức cần thiết bên trong vùng đã cấp",
      "D": "Khi bộ nhớ hoàn toàn đầy"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Phân mảnh ngoài (External Fragmentation) xảy ra khi tổng dung lượng bộ nhớ còn trống đủ lớn để chứa tiến trình mới, nhưng dung lượng trống đó bị chia cắt thành nhiều khối nhỏ rời rạc không liên tục nên không cấp phát được."
  },
  {
    "id": 128,
    "partId": "VI.A",
    "partTitle": "Phần VI.A: Quản lý bộ nhớ, Phân trang & Bộ nhớ ảo",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Phân mảnh trong (internal fragmentation) khác phân mảnh ngoài ở điểm nào?",
    "options": {
      "A": "Phân mảnh trong là phần bộ nhớ dư thừa bên trong một vùng đã cấp cho tiến trình, còn phân mảnh ngoài là các khoảng trống rời rạc giữa các vùng đã cấp phát",
      "B": "Hai loại phân mảnh hoàn toàn giống nhau",
      "C": "Phân mảnh trong chỉ xảy ra với ổ đĩa",
      "D": "Phân mảnh ngoài chỉ xảy ra khi bộ nhớ còn trống hoàn toàn"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Phân mảnh trong (Internal Fragmentation) là phần không gian bộ nhớ bị dư thừa, lãng phí bên trong một khối bộ nhớ cố định đã cấp cho tiến trình nhưng tiến trình không dùng hết (ví dụ trang 4KB mà dùng 1KB)."
  },
  {
    "id": 129,
    "partId": "VI.A",
    "partTitle": "Phần VI.A: Quản lý bộ nhớ, Phân trang & Bộ nhớ ảo",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Phân trang (paging) chia bộ nhớ vật lý và không gian địa chỉ logic thành các đơn vị gọi là gì?",
    "options": {
      "A": "Đoạn (segment) có kích thước thay đổi",
      "B": "Khối (block) có kích thước ngẫu nhiên",
      "C": "Tệp (file) độc lập",
      "D": "Khung trang (frame) và trang (page) có kích thước cố định bằng nhau"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Trong kỹ thuật Phân trang (Paging): Không gian địa chỉ logic được chia thành các khối cố định gọi là Trang (Page), còn không gian bộ nhớ vật lý được chia thành các khối có kích thước bằng nhau gọi là Khung trang (Frame)."
  },
  {
    "id": 130,
    "partId": "VI.A",
    "partTitle": "Phần VI.A: Quản lý bộ nhớ, Phân trang & Bộ nhớ ảo",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Bảng trang (page table) dùng để làm gì?",
    "options": {
      "A": "Lưu lịch sử lập lịch CPU",
      "B": "Lưu danh sách tiến trình đang chờ",
      "C": "Ánh xạ số trang trong địa chỉ logic sang số khung trang tương ứng trong bộ nhớ vật lý",
      "D": "Lưu nội dung tệp trên đĩa"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Bảng trang (Page Table) là cấu trúc dữ liệu do hệ điều hành duy trì cho mỗi tiến trình, làm nhiệm vụ ánh xạ từ số hiệu trang logic (Page number) sang số hiệu khung trang vật lý (Frame number) tương ứng trong RAM."
  },
  {
    "id": 131,
    "partId": "VI.A",
    "partTitle": "Phần VI.A: Quản lý bộ nhớ, Phân trang & Bộ nhớ ảo",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Địa chỉ ảo gồm 32 bit, kích thước trang là 4KB (2^12). Số bit dùng cho phần offset trong trang là?",
    "options": {
      "A": "4 bit",
      "B": "12 bit",
      "C": "20 bit",
      "D": "32 bit"
    },
    "answer": "B",
    "isCalculation": true,
    "explanation": "Với kích thước trang 4KB = 4096 byte = 2^12 byte, cần dùng đúng 12 bit để định vị vị trí từng byte bên trong trang (phần Offset d = 12 bit)."
  },
  {
    "id": 132,
    "partId": "VI.A",
    "partTitle": "Phần VI.A: Quản lý bộ nhớ, Phân trang & Bộ nhớ ảo",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Quy trình dịch địa chỉ ảo sang địa chỉ vật lý trong phân trang gồm các bước chính nào?",
    "options": {
      "A": "Tách địa chỉ ảo thành số trang và offset, tra bảng trang để lấy số khung trang, kết hợp số khung trang với offset để có địa chỉ vật lý",
      "B": "Chỉ cần lấy trực tiếp địa chỉ ảo làm địa chỉ vật lý",
      "C": "Chỉ cần đảo ngược thứ tự byte",
      "D": "Không cần tra bảng trang"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Quá trình dịch địa chỉ phân trang: CPU tách địa chỉ ảo thành Page Number (p) và Offset (d) → Dùng p tra bảng trang để tìm Frame Number (f) → Ghép f với d thành địa chỉ vật lý f || d."
  },
  {
    "id": 133,
    "partId": "VI.A",
    "partTitle": "Phần VI.A: Quản lý bộ nhớ, Phân trang & Bộ nhớ ảo",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "So với phân trang, phân đoạn (segmentation) khác biệt cơ bản ở điểm nào?",
    "options": {
      "A": "Phân đoạn và phân trang hoàn toàn giống nhau",
      "B": "Phân đoạn luôn nhanh hơn phân trang trong mọi trường hợp",
      "C": "Phân trang không cần bảng ánh xạ còn phân đoạn cần",
      "D": "Phân đoạn chia chương trình theo các đơn vị logic (mã, dữ liệu, ngăn xếp) có kích thước thay đổi, còn phân trang chia theo đơn vị vật lý cố định"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Khác biệt giữa Phân trang và Phân đoạn: Phân trang chia bộ nhớ theo kích thước vật lý cố định (hệ thống quyết định), còn Phân đoạn (Segmentation) chia chương trình theo các khối logic có kích thước thay đổi (như hàm, mã lệnh, dữ liệu, stack)."
  },
  {
    "id": 134,
    "partId": "VI.A",
    "partTitle": "Phần VI.A: Quản lý bộ nhớ, Phân trang & Bộ nhớ ảo",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Bộ nhớ ảo (virtual memory) cho phép điều gì?",
    "options": {
      "A": "Xóa bỏ hoàn toàn nhu cầu bộ nhớ vật lý",
      "B": "Chỉ dùng cho hệ thống nhúng nhỏ",
      "C": "Cho phép chương trình sử dụng không gian địa chỉ lớn hơn dung lượng bộ nhớ vật lý thực tế bằng cách dùng đĩa làm phần mở rộng",
      "D": "Tăng tốc độ CPU trực tiếp"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Bộ nhớ ảo (Virtual Memory) tạo ra một không gian địa chỉ logic rộng lớn hơn nhiều so với dung lượng RAM vật lý thực tế bằng cách sử dụng ổ đĩa (swap space/page file) làm phần mở rộng cho bộ nhớ chính."
  },
  {
    "id": 135,
    "partId": "VI.A",
    "partTitle": "Phần VI.A: Quản lý bộ nhớ, Phân trang & Bộ nhớ ảo",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Lỗi trang (page fault) xảy ra khi nào?",
    "options": {
      "A": "Khi có quá nhiều tiến trình đang chờ CPU",
      "B": "Khi tiến trình truy cập một trang chưa được nạp vào bộ nhớ vật lý",
      "C": "Khi CPU tính toán sai kết quả",
      "D": "Khi ổ đĩa bị hỏng vật lý"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Lỗi trang (Page Fault) là một ngắt phần mềm xảy ra khi tiến trình cố gắng truy cập vào một trang nhớ logic hiện chưa được nạp sẵn trong khung trang của bộ nhớ vật lý (RAM)."
  },
  {
    "id": 136,
    "partId": "VI.A",
    "partTitle": "Phần VI.A: Quản lý bộ nhớ, Phân trang & Bộ nhớ ảo",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Giải thuật thay trang FIFO (First In First Out) chọn trang nào để thay thế?",
    "options": {
      "A": "Trang được nạp vào bộ nhớ sớm nhất (lâu nhất trong bộ nhớ)",
      "B": "Trang được truy cập gần đây nhất",
      "C": "Trang sẽ không bao giờ được dùng lại",
      "D": "Trang có kích thước lớn nhất"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Thuật toán thay thế trang FIFO (First-In, First-Out) chọn thay thế trang nhớ đã nằm trong bộ nhớ lâu nhất (được nạp vào sớm nhất) khi xảy ra lỗi trang và khung trang đã đầy."
  },
  {
    "id": 137,
    "partId": "VI.A",
    "partTitle": "Phần VI.A: Quản lý bộ nhớ, Phân trang & Bộ nhớ ảo",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Giải thuật thay trang LRU (Least Recently Used) dựa trên nguyên tắc nào?",
    "options": {
      "A": "Thay thế trang được nạp vào đầu tiên",
      "B": "Thay thế trang ngẫu nhiên",
      "C": "Thay thế trang có địa chỉ nhỏ nhất",
      "D": "Thay thế trang lâu nhất không được truy cập tính đến thời điểm hiện tại"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Thuật toán thay thế trang LRU (Least Recently Used) chọn thay thế trang nhớ đã lâu nhất không được tiến trình truy cập tới tính đến thời điểm hiện tại."
  },
  {
    "id": 138,
    "partId": "VI.B",
    "partTitle": "Phần VI.B: Giải thuật thay trang, Quản lý tệp & Lập lịch đĩa",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Giải thuật thay trang tối ưu (Optimal) chọn thay thế trang nào?",
    "options": {
      "A": "Trang vào bộ nhớ sớm nhất",
      "B": "Trang được chọn ngẫu nhiên",
      "C": "Trang sẽ không được sử dụng trong thời gian dài nhất trong tương lai (lý thuyết, khó cài đặt thực tế)",
      "D": "Trang được dùng gần đây nhất"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Thuật toán thay thế trang tối ưu (OPT / Optimal) chọn thay thế trang nhớ sẽ không được sử dụng trong khoảng thời gian lâu nhất ở tương lai. Thuật toán này cho tỷ lệ lỗi trang thấp nhất nhưng không thể cài đặt thực tế vì không biết trước tương lai."
  },
  {
    "id": 139,
    "partId": "VI.B",
    "partTitle": "Phần VI.B: Giải thuật thay trang, Quản lý tệp & Lập lịch đĩa",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Với chuỗi tham chiếu trang 1, 2, 3, 1, 4 và bộ nhớ có 3 khung trang, dùng giải thuật FIFO, số lỗi trang xảy ra là?",
    "options": {
      "A": "2",
      "B": "4",
      "C": "5",
      "D": "3"
    },
    "answer": "B",
    "isCalculation": true,
    "explanation": "Mô phỏng FIFO với 3 khung trang trên chuỗi 1, 2, 3, 1, 4: (1) Nạp 1 -> Khung [1] (Lỗi 1); (2) Nạp 2 -> Khung [1, 2] (Lỗi 2); (3) Nạp 3 -> Khung [1, 2, 3] (Lỗi 3); (4) Tham chiếu 1 -> Đã có sẵn trong khung (Trúng/Hit); (5) Nạp 4 -> Thay trang 1 vào sớm nhất thành [4, 2, 3] (Lỗi 4). Tổng cộng có 4 lỗi trang."
  },
  {
    "id": 140,
    "partId": "VI.B",
    "partTitle": "Phần VI.B: Giải thuật thay trang, Quản lý tệp & Lập lịch đĩa",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Hiện tượng \"thrashing\" trong quản lý bộ nhớ ảo xảy ra khi nào?",
    "options": {
      "A": "Khi hệ thống dành quá nhiều thời gian xử lý lỗi trang (page fault) thay vì thực thi công việc thực sự, do quá nhiều tiến trình tranh chấp bộ nhớ vật lý ít ỏi",
      "B": "Khi bộ nhớ vật lý dư thừa quá nhiều",
      "C": "Khi CPU chạy quá nhanh so với bộ nhớ",
      "D": "Khi không có tiến trình nào đang chạy"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Hiện tượng trì trệ (Thrashing) xảy ra khi một hệ thống dành phần lớn thời gian để nạp và đẩy các trang nhớ qua lại giữa RAM và đĩa (page fault handling) thay vì thực thi các lệnh có ích, nguyên nhân do quá nhiều tiến trình tranh giành lượng RAM quá ít."
  },
  {
    "id": 141,
    "partId": "VI.B",
    "partTitle": "Phần VI.B: Giải thuật thay trang, Quản lý tệp & Lập lịch đĩa",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Khi so sánh ba giải thuật thay trang FIFO, LRU, Optimal về tỷ lệ lỗi trang trong thực tế, nhận định nào hợp lý nhất?",
    "options": {
      "A": "FIFO luôn cho kết quả tốt nhất trong mọi trường hợp",
      "B": "Cả ba giải thuật luôn cho kết quả giống hệt nhau",
      "C": "Optimal dễ cài đặt hơn LRU trong thực tế",
      "D": "Optimal cho tỷ lệ lỗi trang thấp nhất về lý thuyết nhưng không khả thi để cài đặt thực tế; LRU thường xấp xỉ tốt và được dùng phổ biến hơn FIFO"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "So sánh 3 thuật toán thay trang: Optimal chỉ dùng làm chuẩn đánh giá lý thuyết vì không thể dự đoán tương lai; FIFO dễ cài đặt nhưng có thể gặp dị thường Belady; LRU xấp xỉ gần với Optimal nhất và được áp dụng phổ biến trong thực tế."
  },
  {
    "id": 142,
    "partId": "VI.B",
    "partTitle": "Phần VI.B: Giải thuật thay trang, Quản lý tệp & Lập lịch đĩa",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Tổ chức tệp theo bản ghi (record) và khối (block) nhằm mục đích gì?",
    "options": {
      "A": "Chỉ nhằm tăng dung lượng đĩa",
      "B": "Không liên quan đến hiệu năng truy cập",
      "C": "Nhóm dữ liệu logic thành các đơn vị phù hợp để lưu trữ và truyền tải hiệu quả giữa bộ nhớ và thiết bị lưu trữ",
      "D": "Chỉ nhằm mã hóa dữ liệu"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Khái niệm Bản ghi (Record) và Khối (Block): Bản ghi là tập hợp các trường dữ liệu có quan hệ logic với nhau, còn Khối là đơn vị vật lý cơ bản để đọc/ghi dữ liệu giữa bộ nhớ chính và thiết bị lưu trữ."
  },
  {
    "id": 143,
    "partId": "VI.B",
    "partTitle": "Phần VI.B: Giải thuật thay trang, Quản lý tệp & Lập lịch đĩa",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Kỹ thuật đệm (buffering) trong quản lý tệp có tác dụng gì?",
    "options": {
      "A": "Xóa dữ liệu không cần thiết",
      "B": "Giảm chênh lệch tốc độ giữa CPU và thiết bị lưu trữ bằng cách lưu tạm dữ liệu trong vùng nhớ đệm",
      "C": "Mã hóa dữ liệu để bảo mật",
      "D": "Tăng dung lượng lưu trữ vật lý của đĩa"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Kỹ thuật đệm dữ liệu (Buffering) tạo ra một vùng nhớ đệm tạm thời trong RAM để tích lũy dữ liệu, giúp cân bằng sự chênh lệch rất lớn về tốc độ xử lý giữa CPU tốc độ cao và các thiết bị lưu trữ ngoại vi tốc độ chậm."
  },
  {
    "id": 144,
    "partId": "VI.B",
    "partTitle": "Phần VI.B: Giải thuật thay trang, Quản lý tệp & Lập lịch đĩa",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "So với truy cập tệp tuần tự (sequential access), truy cập trực tiếp (direct access) có ưu điểm gì?",
    "options": {
      "A": "Cho phép truy cập ngay tới bất kỳ bản ghi nào mà không cần đọc tuần tự từ đầu, phù hợp với dữ liệu cần truy cập ngẫu nhiên",
      "B": "Luôn tốn ít bộ nhớ hơn truy cập tuần tự",
      "C": "Chỉ dùng được cho tệp văn bản",
      "D": "Luôn chậm hơn truy cập tuần tự trong mọi trường hợp"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Phương pháp truy cập trực tiếp (Direct/Random Access) cho phép chương trình đọc hoặc ghi ngay lập tức tới một bản ghi bất kỳ dựa trên số hiệu khối mà không cần phải duyệt qua các bản ghi trước đó."
  },
  {
    "id": 145,
    "partId": "VI.B",
    "partTitle": "Phần VI.B: Giải thuật thay trang, Quản lý tệp & Lập lịch đĩa",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Các phương pháp cấp phát khối đĩa phổ biến gồm?",
    "options": {
      "A": "Chỉ có cấp phát liên tục duy nhất",
      "B": "Cấp phát ngẫu nhiên và cấp phát cố định",
      "C": "Chỉ có 1 phương pháp cho mọi hệ thống tệp",
      "D": "Cấp phát liên tục, cấp phát theo danh sách liên kết, và cấp phát theo chỉ mục (indexed)"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Hệ điều hành thường sử dụng 3 phương pháp cấp phát không gian đĩa cho tệp: Cấp phát liên tục (Contiguous), Cấp phát theo danh sách liên kết (Linked), và Cấp phát theo chỉ mục (Indexed allocation)."
  },
  {
    "id": 146,
    "partId": "VI.B",
    "partTitle": "Phần VI.B: Giải thuật thay trang, Quản lý tệp & Lập lịch đĩa",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Cấp phát theo chỉ mục (indexed allocation) cho tệp trên đĩa hoạt động như thế nào?",
    "options": {
      "A": "Toàn bộ tệp phải nằm trong các khối liên tục",
      "B": "Không sử dụng con trỏ nào cả",
      "C": "Dùng một khối chỉ mục chứa con trỏ tới tất cả các khối dữ liệu thuộc tệp",
      "D": "Mỗi khối chỉ chứa con trỏ tới khối tiếp theo duy nhất"
    },
    "answer": "C",
    "isCalculation": false,
    "explanation": "Phương pháp cấp phát theo chỉ mục (Indexed Allocation) tập hợp tất cả các con trỏ trỏ tới các khối dữ liệu rời rạc của tệp vào một khối đặc biệt gọi là Khối chỉ mục (Index Block / Inode)."
  },
  {
    "id": 147,
    "partId": "VI.B",
    "partTitle": "Phần VI.B: Giải thuật thay trang, Quản lý tệp & Lập lịch đĩa",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Lập lịch truy nhập đĩa FCFS phục vụ các yêu cầu theo thứ tự nào?",
    "options": {
      "A": "Theo kích thước yêu cầu nhỏ nhất trước",
      "B": "Theo đúng thứ tự yêu cầu đến hàng đợi",
      "C": "Theo khoảng cách gần đầu đọc nhất trước",
      "D": "Theo hướng quét một chiều cố định"
    },
    "answer": "B",
    "isCalculation": false,
    "explanation": "Thuật toán lập lịch đĩa FCFS (First-Come, First-Served) di chuyển đầu đọc đĩa để phục vụ các yêu cầu truy xuất theo đúng thứ tự thời gian mà các yêu cầu đó đến hàng đợi."
  },
  {
    "id": 148,
    "partId": "VI.B",
    "partTitle": "Phần VI.B: Giải thuật thay trang, Quản lý tệp & Lập lịch đĩa",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Giải thuật SSTF (Shortest Seek Time First) chọn phục vụ yêu cầu nào tiếp theo?",
    "options": {
      "A": "Yêu cầu có khoảng cách gần vị trí đầu đọc hiện tại nhất",
      "B": "Yêu cầu đến trước trong hàng đợi",
      "C": "Yêu cầu ở xa đầu đọc nhất",
      "D": "Yêu cầu có kích thước dữ liệu lớn nhất"
    },
    "answer": "A",
    "isCalculation": false,
    "explanation": "Thuật toán SSTF (Shortest Seek Time First) luôn ưu tiên chọn phục vụ yêu cầu truy xuất nào nằm ở track có khoảng cách gần nhất so với vị trí hiện tại của đầu đọc đĩa nhằm giảm thời gian tìm kiếm."
  },
  {
    "id": 149,
    "partId": "VI.B",
    "partTitle": "Phần VI.B: Giải thuật thay trang, Quản lý tệp & Lập lịch đĩa",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "So với SSTF, giải thuật SCAN có ưu điểm gì trong việc tránh tình trạng đói (starvation)?",
    "options": {
      "A": "SCAN luôn chậm hơn SSTF trong mọi trường hợp và cũng gây đói tương tự",
      "B": "SCAN không quan tâm đến vị trí yêu cầu",
      "C": "SCAN chỉ phục vụ được một yêu cầu duy nhất mỗi lượt",
      "D": "SCAN quét đầu đọc theo một hướng cố định đến cuối rồi đảo chiều, đảm bảo mọi yêu cầu đều được phục vụ, tránh tình trạng yêu cầu ở xa bị bỏ đói kéo dài như SSTF có thể gây ra"
    },
    "answer": "D",
    "isCalculation": false,
    "explanation": "Thuật toán SCAN (thuật toán thang máy) di chuyển đầu đọc đĩa theo một chiều quét cố định từ đầu đến cuối đĩa, phục vụ mọi yêu cầu trên đường đi rồi mới đảo chiều quét ngược lại, tránh hiện tượng bỏ đói (starvation) của SSTF."
  },
  {
    "id": 150,
    "partId": "VI.B",
    "partTitle": "Phần VI.B: Giải thuật thay trang, Quản lý tệp & Lập lịch đĩa",
    "chapterId": 6,
    "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)",
    "question": "Đầu đọc đang ở track 50, hàng đợi yêu cầu gồm track 20, 90, 60, quét theo hướng tăng dần (SCAN). Thứ tự phục vụ là?",
    "options": {
      "A": "90, 60, 20",
      "B": "20, 90, 60",
      "C": "60, 90, 20",
      "D": "20, 60, 90"
    },
    "answer": "C",
    "isCalculation": true,
    "explanation": "Đầu đọc ở track 50, hàng đợi gồm track 20, 90, 60, quét theo chiều tăng dần: Khi quét tăng dần từ 50, đầu đọc sẽ gặp track 60 trước, tiếp theo tới track 90; sau khi đến cuối hành trình sẽ đảo chiều quét ngược lại và phục vụ track 20. Thứ tự: 60, 90, 20."
  }
];

if (typeof module !== "undefined" && module.exports) { module.exports = QUIZ_DATA; }
