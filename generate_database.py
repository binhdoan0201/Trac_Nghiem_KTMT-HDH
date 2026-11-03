# -*- coding: utf-8 -*-
import json
import os

# Load parts
p1 = json.load(open('data_part1.json', encoding='utf-8'))
p2 = json.load(open('data_part2.json', encoding='utf-8'))
p3 = json.load(open('data_part3.json', encoding='utf-8'))
p4 = json.load(open('data_part4.json', encoding='utf-8'))
raw_questions = {q['id']: q for q in (p1 + p2 + p3 + p4)}

# Answers key table
answer_keys = {
    1: 'D', 2: 'C', 3: 'B', 4: 'A', 5: 'D', 6: 'C', 7: 'B', 8: 'A', 9: 'D', 10: 'C',
    11: 'B', 12: 'A', 13: 'D', 14: 'C', 15: 'B', 16: 'A', 17: 'D', 18: 'C', 19: 'B', 20: 'A',
    21: 'D', 22: 'C', 23: 'B', 24: 'A', 25: 'D', 26: 'C', 27: 'B', 28: 'A', 29: 'D', 30: 'C',
    31: 'B', 32: 'A', 33: 'D', 34: 'C', 35: 'B', 36: 'A', 37: 'D', 38: 'C', 39: 'B', 40: 'A',
    41: 'D', 42: 'C', 43: 'B', 44: 'A', 45: 'D', 46: 'C', 47: 'B', 48: 'A', 49: 'D', 50: 'C',
    51: 'B', 52: 'A', 53: 'D', 54: 'C', 55: 'B', 56: 'A', 57: 'D', 58: 'C', 59: 'B', 60: 'A',
    61: 'D', 62: 'C', 63: 'B', 64: 'A', 65: 'D', 66: 'C', 67: 'B', 68: 'A', 69: 'D', 70: 'C',
    71: 'B', 72: 'A', 73: 'D', 74: 'C', 75: 'B', 76: 'A', 77: 'D', 78: 'C', 79: 'B', 80: 'A',
    81: 'D', 82: 'C', 83: 'B', 84: 'A', 85: 'D', 86: 'C', 87: 'B', 88: 'A', 89: 'D', 90: 'C',
    91: 'B', 92: 'A', 93: 'D', 94: 'C', 95: 'B', 96: 'A', 97: 'D', 98: 'C', 99: 'B', 100: 'A',
    101: 'D', 102: 'C', 103: 'B', 104: 'A', 105: 'D', 106: 'C', 107: 'B', 108: 'A', 109: 'D', 110: 'C',
    111: 'B', 112: 'A', 113: 'D', 114: 'C', 115: 'B', 116: 'A', 117: 'D', 118: 'C', 119: 'B', 120: 'A',
    121: 'D', 122: 'C', 123: 'B', 124: 'A', 125: 'D', 126: 'C', 127: 'B', 128: 'A', 129: 'D', 130: 'C',
    131: 'B', 132: 'A', 133: 'D', 134: 'C', 135: 'B', 136: 'A', 137: 'D', 138: 'C', 139: 'B', 140: 'A',
    141: 'D', 142: 'C', 143: 'B', 144: 'A', 145: 'D', 146: 'C', 147: 'B', 148: 'A', 149: 'D', 150: 'C'
}

# Detailed metadata, explanation & calculation formulas
def get_part_info(qid):
    if 1 <= qid <= 15:
        return {
            "partId": "I",
            "partTitle": "Phần I: Tổng quan Kiến trúc máy tính & Hiệu năng",
            "chapterId": 1,
            "chapterTitle": "Chuyên đề 1: Tổng quan Kiến trúc máy tính & Hiệu năng (Câu 1 – 15)"
        }
    elif 16 <= qid <= 30:
        return {
            "partId": "II.A",
            "partTitle": "Phần II.A: Hệ đếm, Biểu diễn số nguyên & Số thực IEEE 754",
            "chapterId": 2,
            "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)"
        }
    elif 31 <= qid <= 42:
        return {
            "partId": "II.B",
            "partTitle": "Phần II.B: Sai số dấu chấm động, Mã ký tự & Tổ chức byte",
            "chapterId": 2,
            "chapterTitle": "Chuyên đề 2: Hệ đếm, Biểu diễn dữ liệu & Tổ chức byte (Câu 16 – 42)"
        }
    elif 43 <= qid <= 56:
        return {
            "partId": "III.A",
            "partTitle": "Phần III.A: Cấu trúc CPU, Đường dữ liệu & Kỹ thuật Pipeline",
            "chapterId": 3,
            "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)"
        }
    elif 57 <= qid <= 69:
        return {
            "partId": "III.B",
            "partTitle": "Phần III.B: Chế độ địa chỉ, Kiến trúc RISC/CISC & Ngắt",
            "chapterId": 3,
            "chapterTitle": "Chuyên đề 3: Cấu trúc CPU, Pipeline, Chế độ địa chỉ & Ngắt (Câu 43 – 69)"
        }
    elif 70 <= qid <= 85:
        return {
            "partId": "IV.A",
            "partTitle": "Phần IV.A: Phân cấp bộ nhớ & Bộ nhớ đệm Cache",
            "chapterId": 4,
            "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)"
        }
    elif 86 <= qid <= 96:
        return {
            "partId": "IV.B",
            "partTitle": "Phần IV.B: Bộ nhớ ngoài & Các phương pháp điều khiển Vào/Ra",
            "chapterId": 4,
            "chapterTitle": "Chuyên đề 4: Phân cấp bộ nhớ, Cache & Hệ thống Vào/Ra (Câu 70 – 96)"
        }
    elif 97 <= qid <= 112:
        return {
            "partId": "V.A",
            "partTitle": "Phần V.A: Hệ điều hành, Quản lý tiến trình & Lập lịch CPU",
            "chapterId": 5,
            "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)"
        }
    elif 113 <= qid <= 123:
        return {
            "partId": "V.B",
            "partTitle": "Phần V.B: Lập lịch Round Robin, Đồng bộ hóa & Bế tắc Deadlock",
            "chapterId": 5,
            "chapterTitle": "Chuyên đề 5: Nguyên lý Hệ điều hành, Tiến trình & Lập lịch CPU (Câu 97 – 123)"
        }
    elif 124 <= qid <= 137:
        return {
            "partId": "VI.A",
            "partTitle": "Phần VI.A: Quản lý bộ nhớ, Phân trang & Bộ nhớ ảo",
            "chapterId": 6,
            "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)"
        }
    else:
        return {
            "partId": "VI.B",
            "partTitle": "Phần VI.B: Giải thuật thay trang, Quản lý tệp & Lập lịch đĩa",
            "chapterId": 6,
            "chapterTitle": "Chuyên đề 6: Quản lý bộ nhớ, Bộ nhớ ảo, Quản lý tệp & Lập lịch đĩa (Câu 124 – 150)"
        }

# Explanations dictionary
explanations = {
    1: "Mô hình Von Neumann chuẩn gồm 4 khối thành phần cơ bản: CPU (khối xử lý trung tâm), Bộ nhớ chính (chứa cả lệnh và dữ liệu), Hệ thống thiết bị Vào/Ra (I/O) và Bus liên kết hệ thống.",
    2: "Chu kỳ lệnh cơ bản của CPU diễn ra theo thứ tự tuần tự: Nạp lệnh từ bộ nhớ vào thanh ghi lệnh (Fetch) → Giải mã lệnh tại khối điều khiển (Decode) → Thực thi phép toán tại ALU/khối chức năng (Execute).",
    3: "Kiến trúc máy tính (Architecture) là các thuộc tính nhìn thấy được bởi lập trình viên (tập lệnh, thanh ghi, mode địa chỉ). Tổ chức máy tính (Organization) là cách thức hiện thực cụ thể phần cứng (tín hiệu điều khiển, công nghệ mạch, bus).",
    4: "CPI là viết tắt của Cycles Per Instruction — số chu kỳ xung nhịp trung bình mà CPU cần để thực thi một lệnh.",
    5: "Áp dụng công thức thời gian thực thi CPU: T = (Số lệnh × CPI) / f = (1000 × 2) / (10^9 Hz) = 2 × 10^-6 s = 2 μs (micro giây).",
    6: "Theo công thức T = (Số lệnh × CPI) / f, khi cả CPI và tần số xung nhịp f cùng tăng gấp 2 lần, tỷ số CPI/f không thay đổi, số lệnh giữ nguyên nên thời gian thực thi T không đổi.",
    7: "Định luật Amdahl dùng để xác định giới hạn tốc độ tăng hiệu năng tối đa của toàn bộ hệ thống khi chỉ nâng cấp hoặc tối ưu hóa một phần cụ thể của hệ thống đó.",
    8: "Theo định luật Amdahl với tỷ lệ phần cải thiện p = 80% = 0.8 khi được tăng tốc lên vô hạn (k → ∞): S_max = 1 / (1 - p) = 1 / (1 - 0.8) = 1 / 0.2 = 5 lần.",
    9: "Tần số xung nhịp tăng không đồng nghĩa hiệu năng tăng tương ứng vì thời gian thực thi phụ thuộc vào 3 yếu tố: Số lệnh, CPI và tần số xung nhịp. Ngoài ra còn phụ thuộc băng thông bộ nhớ và thiết bị I/O.",
    10: "Hệ điều hành đóng vai trò là tầng phần mềm trung gian, quản lý và điều phối toàn bộ tài nguyên phần cứng, đồng thời cung cấp giao diện chuẩn (API/giao diện người dùng) cho các ứng dụng chạy bên trên.",
    11: "Siêu máy tính (Supercomputer) sở hữu năng lực tính toán song song khổng lồ, chuyên dụng cho các bài toán khoa học phức tạp như dự báo thời tiết, mô phỏng phản ứng hạt nhân, động lực học chất lưu, tính toán lượng tử.",
    12: "Công thức hiệu năng CPU cơ bản: Thời gian thực thi T_CPU = (Số lệnh × CPI) / Tần số xung nhịp f (hoặc Số lệnh × CPI × Chu kỳ xung nhịp T_c).",
    13: "Hệ thống nhúng (Embedded System) được tích hợp trong các thiết bị chuyên dụng (ô tô, đồ gia dụng, thiết bị y tế), được thiết kế tối ưu cho chức năng cụ thể, yêu cầu tiết kiệm điện năng, kích thước nhỏ và chi phí thấp.",
    14: "Theo định luật Amdahl, nếu phần được cải thiện chỉ chiếm tỷ lệ nhỏ trong chương trình, thì dù phần đó có được tăng tốc đến vô hạn, hiệu năng tổng thể của toàn hệ thống cũng chỉ tăng trong một giới hạn rất hẹp.",
    15: "Công thức CPI trung bình: CPI_tb = ∑ (Tỷ lệ_i × CPI_i) = 40% × 2 + 60% × 4 = 0.4 × 2 + 0.6 × 4 = 0.8 + 2.4 = 3.2.",
    16: "Chuyển từ nhị phân sang thập phân: 1010_2 = 1×2^3 + 0×2^2 + 1×2^1 + 0×2^0 = 8 + 0 + 2 + 0 = 10.",
    17: "Chuyển số thập phân 45 sang nhị phân: 45 = 32 + 8 + 4 + 1 = 2^5 + 2^3 + 2^2 + 2^0 = 101101_2.",
    18: "Chuyển số Hex A3_16 sang thập phân: Ký tự A có giá trị 10. Ta có: A3_16 = 10 × 16^1 + 3 × 16^0 = 160 + 3 = 163.",
    19: "Mỗi chữ số hệ 16 (hexadecimal từ 0 đến F) biểu diễn được 16 trạng thái, do đó tương ứng với đúng 4 bit nhị phân (vì 2^4 = 16).",
    20: "Trong quy ước biểu diễn số có dấu (Sign-Magnitude, bù 1, bù 2), bit có trọng số cao nhất (MSB) luôn là bit dấu: bit 0 đại diện cho số dương, bit 1 đại diện cho số âm.",
    21: "Phương pháp biểu diễn bù 1 (1's complement) có nhược điểm lớn là tồn tại 2 trạng thái cho số 0: +0 (00000000) và -0 (11111111), làm phức tạp thiết kế mạch giải thuật logic số học.",
    22: "Tìm bù 2 của -5 với 8 bit: Số +5 là 00000101_2. Lấy bù 1 (đảo tất cả các bit): 11111010. Cộng thêm 1 vào LSB: 11111010 + 1 = 11111011_2.",
    23: "Với n bit biểu diễn số nguyên có dấu theo mã bù 2, miền giá trị biểu diễn được là từ -2^(n-1) đến 2^(n-1) - 1. Với n = 8 bit: từ -2^7 đến 2^7 - 1 = -128 đến +127.",
    24: "Hiện tượng tràn số (overflow) xảy ra khi kết quả của phép toán vượt quá khoảng giá trị mà số lượng bit quy định có thể biểu diễn được, dẫn đến việc bit dấu bị sai lệch.",
    25: "Với 8-bit bù 2: 01111111_2 = +127, 00000001_2 = +1. Phép cộng: 01111111 + 00000001 = 10000000_2. Kết quả có MSB = 1 (số âm = -128), đây là tràn số do cộng 2 số dương ra số âm (127 + 1 = 128 vượt quá giới hạn max 127).",
    26: "Điều kiện phát hiện tràn số khi cộng hai số bù 2 là: Bit nhớ mang vào vị trí MSB (carry-in) khác với bit nhớ mang ra khỏi vị trí MSB (carry-out), tức là Carry_in ⊕ Carry_out = 1.",
    27: "Máy tính thực hiện phép trừ A - B bằng cách lấy bù 2 của B (tức -B) rồi cộng với A: A - B = A + (-B). Nhờ đó chỉ cần dùng mạch cộng mà không cần thiết kế mạch trừ riêng.",
    28: "Chuẩn IEEE 754 đơn độ chính xác 32-bit (Single Precision) gồm: 1 bit dấu (S), 8 bit mũ (Exponent) và 23 bit phần định trị (Mantissa/Fraction).",
    29: "Trong chuẩn IEEE 754 32-bit, trường mũ có 8 bit nên độ lệch (bias) được tính theo công thức: Bias = 2^(k-1) - 1 = 2^(8-1) - 1 = 2^7 - 1 = 127.",
    30: "Trong chuẩn IEEE 754, bit dấu S = 0 đại diện cho số dương, S = 1 đại diện cho số âm.",
    31: "Sai số làm tròn số thực trong máy tính phát sinh vì số lượng bit dành cho phần định trị là hữu hạn (ví dụ 23 bit ở 32-bit, 52 bit ở 64-bit), không thể biểu diễn tuyệt đối chính xác mọi số thực trong miền liên tục.",
    32: "Không nên dùng toán tử so sánh bằng (==) trực tiếp với số thực dấu chấm động vì các phép toán số thực luôn có sai số tích lũy nhỏ; nên kiểm tra khoảng cách |a - b| < epsilon.",
    33: "Bộ mã ASCII chuẩn (Standard ASCII) sử dụng mã hóa 7 bit, biểu diễn được 2^7 = 128 ký tự (từ mã 0 đến 127). Bản mở rộng mới dùng 8 bit (256 ký tự).",
    34: "Ưu điểm vượt trội của chuẩn Unicode là không gian mã rộng lớn (UTF-8, UTF-16, UTF-32), có khả năng biểu diễn và chuẩn hóa toàn bộ ký tự, chữ viết của mọi ngôn ngữ trên toàn thế giới.",
    35: "Endianness là thuật ngữ chỉ quy tắc thứ tự sắp xếp và lưu trữ các byte của một dữ liệu đa byte (như số nguyên 16-bit, 32-bit, 64-bit) vào các ô nhớ kế tiếp nhau trong bộ nhớ.",
    36: "Little-endian: Byte có trọng số thấp nhất (LSB) được lưu ở địa chỉ bộ nhớ thấp nhất. Big-endian: Byte có trọng số cao nhất (MSB) được lưu ở địa chỉ thấp nhất.",
    37: "Giá trị 0x12345678 (4 byte: 12 là MSB, 78 là LSB). Theo Little-Endian, byte thấp nhất 78 nằm ở địa chỉ đầu tiên, kế đến là 56, 34 và cuối cùng là byte 12. Thứ tự lưu: 78 56 34 12.",
    38: "Từ nhớ (Word) là đơn vị dữ liệu tự nhiên mà CPU xử lý trong mỗi chu kỳ thao tác, kích thước thường tương ứng với độ rộng của thanh ghi và ALU (ví dụ kiến trúc 32-bit có word = 4 byte).",
    39: "Trong chuẩn IEEE 754: Khi trường mũ E gồm toàn bit 1 (255) và trường định trị M gồm toàn bit 0, giá trị này đại diện cho vô cùng (±Infinity). Nếu M ≠ 0 thì biểu diễn NaN (Not a Number).",
    40: "Khi thực hiện phép chia số nguyên cho 0 trong phần cứng, CPU không thể cho ra kết quả hợp lệ nên sẽ tự động kích hoạt một ngoại lệ ngắt phần cứng (Hardware Exception / Divide By Zero Error).",
    41: "Một biến 32-bit có kích thước: 32 bit ÷ 8 bit/byte = 4 byte. Vì bộ nhớ được định địa chỉ theo từng byte nên biến này chiếm đúng 4 ô nhớ liên tiếp.",
    42: "Dữ liệu dạng văn bản mã ASCII dễ dàng đọc và chỉnh sửa bởi con người và tương thích rộng giữa các nền tảng, tuy nhiên tốn nhiều dung lượng lưu trữ hơn so với lưu nhị phân thô.",
    43: "ALU (Arithmetic Logic Unit - Khối tính toán số học và logic) là bộ phận trong CPU chịu trách nhiệm thực hiện các phép toán số học (+, -, *, /) và các phép toán logic (AND, OR, NOT, XOR, Shift).",
    44: "Thanh ghi PC (Program Counter - Bộ đếm chương trình) có chức năng lưu trữ địa chỉ của lệnh tiếp theo trong bộ nhớ sẽ được nạp vào CPU để xử lý.",
    45: "Khối điều khiển CU (Control Unit) nhận mã lệnh từ thanh ghi IR, giải mã lệnh và phát các xung/tín hiệu điều khiển đồng bộ tới ALU, thanh ghi và bus để phối hợp thực hiện lệnh.",
    46: "Đường dữ liệu (Datapath) là tập hợp các thành phần phần cứng (bao gồm ALU, tập thanh ghi, các bộ dồn kênh MUX, bus nội bộ) làm nhiệm vụ truyền tải, lưu trữ và thao tác trên dữ liệu.",
    47: "Thanh ghi IR (Instruction Register - Thanh ghi lệnh) dùng để lưu giữ mã nhị phân của lệnh vừa được nạp (fetch) từ bộ nhớ chính về trong khi lệnh đó đang được khối CU giải mã.",
    48: "Trong chu trình 3 bước Fetch → Decode → Execute, sau khi giải mã lệnh (Decode), CPU sẽ chuyển sang bước Thực thi lệnh (Execute) bằng cách kích hoạt ALU hoặc thao tác đọc/ghi nhớ.",
    49: "Kỹ thuật đường ống lệnh (Pipelining) cho phép CPU thực thi gối đầu nhiều lệnh đồng thời ở các công đoạn khác nhau trong cùng một chu kỳ nhịp, nhờ đó tăng thông lượng (throughput) xử lý lệnh tổng thể.",
    50: "Trong kỹ thuật Pipeline có 3 loại xung đột cơ bản làm gián đoạn đường ống: Xung đột cấu trúc (Structural hazard), Xung đột dữ liệu (Data hazard) và Xung đột điều khiển (Control hazard).",
    51: "Xung đột dữ liệu (Data Hazard) xuất hiện khi một lệnh đang ở giai đoạn sau cần sử dụng kết quả của lệnh trước đó, nhưng lệnh trước đó chưa hoàn thành giai đoạn ghi kết quả (Read-After-Write).",
    52: "Xung đột điều khiển (Control Hazard / Branch Hazard) xảy ra khi gặp các lệnh rẽ nhánh hoặc nhảy; CPU đã nạp trước các lệnh kế tiếp nhưng điều kiện rẽ nhánh làm thay đổi luồng chương trình khiến các lệnh đã nạp bị vô hiệu.",
    53: "Kỹ thuật dự đoán rẽ nhánh (Branch Prediction) dự đoán hướng đi của nhánh (nhảy hay không nhảy) để nạp trước lệnh phù hợp, giảm thiểu chu kỳ rỗng (stall/bong bóng) khi chờ kết quả rẽ nhánh.",
    54: "Pipeline giúp tăng thông lượng xử lý tổng thể nhưng các xung đột (hazard) buộc CPU phải chèn các chu kỳ trễ bong bóng (pipeline bubble / stall) hoặc chuyển tiếp tắt dữ liệu (forwarding), làm giảm hiệu năng so với mức lý thuyết tối đa.",
    55: "ISA (Instruction Set Architecture - Kiến trúc tập lệnh) là ranh giới trừu tượng giữa phần cứng và phần mềm, xác định các tập lệnh máy, kiểu dữ liệu, các thanh ghi, quy ước bộ nhớ mà lập trình viên/trình biên dịch sử dụng.",
    56: "Mã thao tác (Opcode - Operation Code) là phần đầu trong định dạng lệnh xác định rõ thao tác cơ bản mà CPU phải thực hiện (ví dụ ADD, SUB, LOAD, STORE, JUMP).",
    57: "Toán hạng tức thời (Immediate operand) là hằng số hoặc giá trị dữ liệu được nhúng trực tiếp ngay bên trong mã nhị phân của lệnh mà không cần truy xuất thanh ghi hay bộ nhớ.",
    58: "Thao tác 'di chuyển dữ liệu' (Data Movement) bao gồm các lệnh như LOAD, STORE, MOV, PUSH, POP, dùng để truyền dữ liệu giữa các thanh ghi nội bộ, giữa thanh ghi và ô nhớ, hoặc giữa CPU và cổng I/O.",
    59: "Chế độ địa chỉ tức thời (Immediate Addressing): Trường toán hạng trong lệnh chứa trực tiếp giá trị của dữ liệu cần xử lý (ví dụ: MOV R1, #5).",
    60: "Chế độ địa chỉ gián tiếp (Indirect Addressing): Địa chỉ ghi trong lệnh trỏ tới một ô nhớ, và nội dung của ô nhớ đó mới chính là địa chỉ thực sự của toán hạng cần truy cập (tương tự con trỏ cấp 1).",
    61: "Địa chỉ gián tiếp cho phép chương trình truy cập không gian địa chỉ lớn hơn số bit quy định trong trường địa chỉ của lệnh, đồng thời rất linh hoạt để cài đặt con trỏ, danh sách liên kết và bảng động.",
    62: "Địa chỉ chỉ số (Indexed Addressing) tính toán địa chỉ thực tế = Địa chỉ cơ sở + Thanh ghi chỉ số. Khi duyệt mảng liên tiếp, chỉ cần tăng giá trị thanh ghi chỉ số sau mỗi bước lặp.",
    63: "RISC là viết tắt của 'Reduced Instruction Set Computer' (Máy tính với tập lệnh thu giảm).",
    64: "Đặc điểm cốt lõi của RISC: Tập lệnh gọn nhẹ, số lượng lệnh ít, kích thước lệnh cố định, hầu hết lệnh thực thi xong trong 1 chu kỳ máy, sử dụng nhiều thanh ghi và áp dụng kiến trúc Load/Store.",
    65: "Kiến trúc CISC (Complex Instruction Set Computer) có tập lệnh phong phú, phức tạp, kích thước lệnh thay đổi, một lệnh có thể thực hiện nhiều thao tác cấp cao và tiêu tốn nhiều chu kỳ xung nhịp.",
    66: "Không có kiến trúc nào vượt trội hoàn toàn: RISC tối ưu về tốc độ phần cứng và tiết kiệm điện, CISC giảm dung lượng mã lệnh và tiện lợi cho trình biên dịch; các CPU hiện đại thường kết hợp dịch lệnh CISC thành các vi lệnh giống RISC.",
    67: "Ngắt (Interrupt) là tín hiệu khẩn cấp gửi tới CPU yêu cầu tạm dừng luồng chương trình hiện tại để chuyển sang thực thi chương trình con xử lý ngắt (ISR - Interrupt Service Routine).",
    68: "Khi nhận được tín hiệu ngắt, bước tối quan trọng đầu tiên của CPU là lưu ngữ cảnh (Context) hiện tại (đặc biệt là thanh ghi PC và các thanh ghi trạng thái/cờ) vào ngăn xếp (Stack) để sau này quay về đúng vị trí cũ.",
    69: "Theo nguồn gốc phát sinh, ngắt được chia làm 2 loại chính: Ngắt phần cứng (Hardware interrupt do bàn phím, chuột, đĩa, bộ định thời gửi qua chân ngắt) và Ngắt phần mềm (Software interrupt/Trap/Exception do lệnh hệ thống system call hoặc lỗi chia cho 0).",
    70: "Hệ thống phân cấp bộ nhớ được sắp xếp theo nguyên tắc: Càng gần CPU thì tốc độ càng nhanh, chi phí trên mỗi bit càng đắt và dung lượng càng nhỏ (Thanh ghi → Cache → RAM → Ổ đĩa/Bộ nhớ ngoài).",
    71: "Nguyên lý cục bộ theo thời gian (Temporal Locality): Một vị trí bộ nhớ vừa được truy cập thì có xác suất rất cao sẽ được CPU truy cập lại trong một tương lai gần (ví dụ các biến đếm trong vòng lặp lặp lại).",
    72: "Nguyên lý cục bộ theo không gian (Spatial Locality): Khi một ô nhớ được truy cập, các ô nhớ có địa chỉ nằm liền kề xung quanh nó cũng có khả năng cao sẽ được truy cập tiếp theo (ví dụ duyệt các phần tử mảng, thực thi lệnh tuần tự).",
    73: "SRAM (Static RAM) dùng mạch flip-flop nên có tốc độ rất nhanh, không cần làm tươi nhưng giá thành đắt và mật độ tích hợp thấp, do đó được dùng làm bộ nhớ Cache. DRAM dùng tụ điện nên cần làm tươi, tốc độ chậm hơn nhưng rẻ, dùng làm RAM chính.",
    74: "ROM (Read-Only Memory) là bộ nhớ bất biến (non-volatile), dữ liệu được ghi sẵn và không bị mất khi mất điện, chủ yếu dùng để chứa firmware khởi động hệ thống (BIOS/UEFI).",
    75: "DRAM lưu trữ mỗi bit dữ liệu dưới dạng điện tích trên một tụ điện cực nhỏ. Do hiện tượng rò rỉ điện tích qua tiếp giáp bán dẫn, DRAM buộc phải được nạp điện tuần hoàn định kỳ (gọi là chu kỳ làm tươi - Refresh cycle).",
    76: "Bộ nhớ Cache là bộ đệm tốc độ cao nằm giữa CPU và RAM chính, giúp lưu trữ tạm thời các khối dữ liệu/lệnh thường dùng nhằm thu hẹp chênh lệch tốc độ giữa CPU và bộ nhớ chính.",
    77: "Có 3 phương pháp ánh xạ bộ nhớ chính vào Cache phổ biến: Ánh xạ trực tiếp (Direct-Mapped), Ánh xạ liên kết đầy đủ (Fully Associative), và Ánh xạ liên kết tập hợp (Set-Associative).",
    78: "Trong ánh xạ trực tiếp (Direct Mapped Cache), mỗi khối của bộ nhớ chính chỉ có thể được nạp vào đúng một dòng Cache xác định cố định theo công thức: Dòng Cache = (Số khối bộ nhớ) mod (Tổng số dòng Cache).",
    79: "Ánh xạ liên kết đầy đủ cho phép một khối nhớ chính nạp vào bất kỳ dòng nào còn trống trong Cache, giúp giảm tối đa đụng độ, nhưng đòi hỏi phần cứng so sánh thẻ song song phức tạp và tốn kém.",
    80: "Thuật toán thay thế trang/khối LRU (Least Recently Used) hoạt động theo nguyên tắc: Khi Cache đầy, loại bỏ khối dữ liệu mà thời gian tính từ lần truy cập gần nhất của nó là lâu nhất.",
    81: "Chính sách ghi xuyên (Write-Through): Mỗi khi CPU ghi dữ liệu vào Cache, dữ liệu đó cũng đồng thời được cập nhật ngay lập tức xuống bộ nhớ chính (RAM), đảm bảo dữ liệu luôn đồng bộ nhưng tốc độ ghi chậm hơn.",
    82: "Chính sách ghi lại (Write-Back): Dữ liệu chỉ được cập nhật trên Cache và đánh dấu bit bẩn (dirty bit). Khối đó chỉ được ghi xuống RAM khi nó bị một khối khác thay thế, nhờ đó giảm đáng kể số lần truy cập RAM.",
    83: "Công thức tính thời gian truy cập bộ nhớ trung bình: AMAT = Hit Time + Miss Rate × Miss Penalty. Với Hit Time = 1ns, Miss Rate = 100% - 90% = 10% = 0.1, Miss Penalty = 100ns: AMAT = 1ns + 0.1 × 100ns = 1ns + 10ns = 11ns.",
    84: "Tăng kích thước Cache thường làm tăng tỷ lệ trúng (Hit rate), tuy nhiên sẽ làm tăng chi phí phần cứng bán dẫn và có thể làm thời gian truy cập cơ bản (Hit time) bị chậm đi đôi chút.",
    85: "Kiến trúc Cache nhiều cấp (L1, L2, L3): L1 nằm ngay sát nhân CPU nhỏ nhất và nhanh nhất; các cấp L2, L3 lớn dần về dung lượng nhưng tốc độ chậm dần nhằm cân bằng tối ưu giữa hiệu năng và chi phí sản xuất.",
    86: "Ổ thể rắn SSD sử dụng chip nhớ flash không có bộ phận cơ khí chuyển động, cho tốc độ đọc/ghi ngẫu nhiên vượt trội so với đĩa từ HDD truyền thống nhưng chi phí giá thành trên mỗi GB cao hơn.",
    87: "Thời gian truy cập một khối dữ liệu trên ổ cứng HDD cơ học gồm 3 thành phần chính: Thời gian tìm đường ghi/đọc (Seek time - lâu nhất) + Độ trễ quay của phiến đĩa (Rotational latency) + Thời gian truyền dữ liệu (Transfer time).",
    88: "Hệ thống I/O kết nối và truyền thông tin với CPU và bộ nhớ thông qua các thanh ghi điều khiển/dữ liệu tại cổng vào ra (I/O Port) và hệ thống đường Bus.",
    89: "Hai kỹ thuật địa chỉ hóa cổng I/O cơ bản: I/O ánh xạ bộ nhớ (Memory-mapped I/O, dùng chung không gian địa chỉ và tập lệnh với RAM) và I/O cách ly/độc lập (Isolated/Port-mapped I/O, dùng không gian địa chỉ và tập lệnh riêng như IN/OUT).",
    90: "Phương pháp I/O thăm dò (Programmed I/O / Polling): CPU liên tục lặp lại thao tác đọc thanh ghi trạng thái của thiết bị I/O trong một vòng lặp kín để kiểm tra xem thiết bị đã sẵn sàng truyền nhận dữ liệu hay chưa.",
    91: "Nhược điểm lớn nhất của phương pháp thăm dò (Polling) là gây lãng phí chu kỳ xử lý của CPU (CPU busy-waiting) do phải liên tục kiểm tra trạng thái của các thiết bị I/O vốn có tốc độ rất chậm so với CPU.",
    92: "Phương pháp I/O điều khiển bằng ngắt (Interrupt-Driven I/O) giải phóng CPU khỏi vòng lặp chờ: CPU gửi yêu cầu rồi tiếp tục làm việc khác, chỉ khi nào thiết bị I/O sẵn sàng thì mới gửi tín hiệu ngắt báo cho CPU xử lý.",
    93: "DMA là viết tắt của 'Direct Memory Access' (Truy nhập bộ nhớ trực tiếp).",
    94: "Cơ chế DMA cho phép bộ điều khiển DMA trực tiếp trao đổi các khối dữ liệu lớn giữa thiết bị I/O và bộ nhớ chính mà không cần CPU tham gia vào việc chuyển từng byte một, giải phóng năng lực cho CPU.",
    95: "DMA tối ưu nhất khi truyền các khối dữ liệu liên tục có kích thước lớn (như đọc sector đĩa, gói tin mạng lớn), vì chi phí khởi tạo bộ điều khiển DMA được bù đắp bởi việc không tiêu tốn chu kỳ CPU cho từng byte dữ liệu.",
    96: "Hệ thống Bus hệ thống tiêu chuẩn bao gồm 3 loại đường truyền tín hiệu chuyên biệt: Bus địa chỉ (Address Bus), Bus dữ liệu (Data Bus) và Bus điều khiển (Control Bus).",
    97: "Hệ điều hành (Operating System) là phần mềm hệ thống cốt lõi có vai trò quản lý, điều phối tài nguyên phần cứng (CPU, bộ nhớ, I/O) và cung cấp môi trường nền tảng, giao diện trừu tượng cho người dùng và các phần mềm ứng dụng.",
    98: "Chức năng quản lý tiến trình của hệ điều hành bao gồm: Khởi tạo tiến trình, lập lịch cấp phát CPU, đồng bộ hóa giữa các tiến trình, cơ chế giao tiếp liên tiến trình (IPC) và kết thúc, thu hồi tài nguyên tiến trình.",
    99: "Hệ điều hành đa nhiệm (Multitasking) cho phép nhiều tiến trình cùng nạp vào bộ nhớ và luân phiên chia sẻ thời gian sử dụng CPU tạo cảm giác chạy song song; còn đơn nhiệm chỉ thực thi duy nhất 1 chương trình tại một thời điểm.",
    100: "Lời gọi hệ thống (System Call) là giao diện lập trình cho phép một chương trình ứng dụng ở chế độ người dùng yêu cầu nhân hệ điều hành (Kernel) thực hiện các tác vụ đặc quyền (như đọc ghi tệp, cấp phát bộ nhớ, tạo tiến trình).",
    101: "Sự phân chia chế độ nhân (Kernel mode) và chế độ người dùng (User mode) nhằm bảo vệ hệ thống: Chế độ nhân có toàn quyền truy xuất phần cứng và lệnh đặc quyền; chế độ người dùng bị hạn chế để tránh làm sập hệ điều hành.",
    102: "Khi chương trình phát lệnh gọi hệ thống (System Call), hệ thống sẽ kích hoạt một bẫy mềm (Trap/Software Interrupt) chuyển quyền điều khiển từ Chế độ người dùng (User Mode) sang Chế độ nhân (Kernel Mode).",
    103: "PCB (Process Control Block - Khối điều khiển tiến trình) lưu trữ toàn bộ thông tin định danh và trạng thái của tiến trình: PID, trạng thái tiến trình, con trỏ lệnh PC, nội dung các thanh ghi CPU, thông tin lập lịch và danh sách tài nguyên mở.",
    104: "Khác biệt cốt lõi giữa tiến trình (Process) và luồng (Thread): Mỗi tiến trình có một không gian địa chỉ bộ nhớ độc lập riêng biệt, trong khi các luồng trong cùng một tiến trình chia sẻ chung không gian địa chỉ và tài nguyên của tiến trình đó.",
    105: "Mô hình 5 trạng thái cơ bản của tiến trình gồm: Mới tạo (New) → Sẵn sàng (Ready) ⇄ Đang chạy (Running) → Chờ/Khóa (Waiting/Blocked) → Kết thúc (Terminated).",
    106: "Khi tiến trình đang chạy (Running) phát lệnh yêu cầu thao tác I/O hoặc chờ một sự kiện chưa hoàn tất, hệ điều hành sẽ chuyển tiến trình sang trạng thái Chờ (Waiting / Blocked).",
    107: "Chuyển ngữ cảnh (Context Switch) là thao tác của hệ điều hành nhằm lưu lại trạng thái CPU của tiến trình đang chạy và khôi phục trạng thái đã lưu của một tiến trình khác để CPU tiếp tục thực thi tiến trình mới đó.",
    108: "Thời gian chuyển ngữ cảnh là thời gian chi phí phụ (overhead) thuần túy vì trong suốt quá trình lưu và khôi phục thanh ghi/ngữ cảnh, CPU không thực hiện được bất kỳ phép tính hữu ích nào cho các tiến trình người dùng.",
    109: "Thuật toán lập lịch FCFS (First-Come, First-Served - Đến trước phục vụ trước) hoạt động theo nguyên tắc hàng đợi FIFO: Tiến trình nào yêu cầu CPU trước sẽ được cấp phát CPU chạy trước cho đến khi kết thúc hoặc nhả CPU.",
    110: "Giải thuật SJF (Shortest Job First - Công việc ngắn nhất trước) chọn tiến trình có thời gian thực thi (CPU burst time) ngắn nhất trong hàng đợi Ready để cấp phát CPU tiếp theo.",
    111: "Giải thuật SJF là giải thuật tối ưu về mặt lý thuyết vì nó chứng minh được rằng luôn mang lại thời gian chờ đợi trung bình (Average Waiting Time) nhỏ nhất trong tất cả các thuật toán lập lịch.",
    112: "Với SJF không trưng dụng (P1=5ms, P2=3ms, P3=8ms cùng đến lúc 0ms): Thứ tự thực thi từ ngắn đến dài là P2 (0→3ms) → P1 (3→8ms) → P3 (8→16ms). Tiến trình P3 phải đợi P2 và P1 chạy xong, do đó thời gian chờ của P3 = 3 + 5 = 8ms.",
    113: "Giải thuật lập lịch Round Robin (RR) phân phối CPU công bằng theo thời gian: Mỗi tiến trình trong hàng đợi Ready được cấp một định ngạch thời gian cố định (Time Quantum); hết quantum sẽ bị ngắt và đưa về cuối hàng đợi vòng tròn.",
    114: "Nếu giá trị Time Quantum trong Round Robin quá nhỏ, số lần chuyển ngữ cảnh (Context Switch) giữa các tiến trình sẽ tăng vọt, tiêu tốn phần lớn thời gian CPU vào chi phí quản lý làm giảm hiệu năng toàn hệ thống.",
    115: "Trong giải thuật lập lịch theo độ ưu tiên (Priority Scheduling), tiến trình có độ ưu tiên thấp có thể bị 'bỏ đói' (Starvation) vô thời hạn nếu liên tục có các tiến trình độ ưu tiên cao hơn xuất hiện.",
    116: "Thời gian hoàn thành (Turnaround Time) = Thời điểm tiến trình kết thúc - Thời điểm tiến trình đến hàng đợi. Ở đây tiến trình đến lúc 0ms và hoàn thành lúc 4ms nên TAT = 4ms - 0ms = 4ms.",
    117: "Đoạn găng (Critical Section) là đoạn mã chương trình có thao tác truy cập vào các tài nguyên dùng chung (biến toàn cục, tệp, bộ đệm) mà tại một thời điểm chỉ được phép có tối đa một tiến trình được thực thi.",
    118: "Semaphore là một công cụ đồng bộ hóa do Dijkstra đề xuất, sử dụng một biến nguyên có hai thao tác nguyên tử chuẩn là wait() (P) và signal() (V) để kiểm soát quyền truy cập tài nguyên của các tiến trình.",
    119: "Semaphore nhị phân (Binary Semaphore / Mutex) là biến semaphore chỉ có thể nhận hai giá trị duy nhất là 0 (đang bị chiếm giữ) và 1 (đang rảnh rỗi).",
    120: "Bài toán 'Nhà sản xuất - Người tiêu thụ' (Producer - Consumer) là bài toán kinh điển mô hình hóa việc đồng bộ hóa dữ liệu giữa các tiến trình cùng chia sẻ một bộ đệm (buffer) có kích thước hữu hạn.",
    121: "Bế tắc (Deadlock) là trạng thái mà một tập hợp các tiến trình bị kẹt vĩnh viễn, trong đó mỗi tiến trình đang nắm giữ một tài nguyên và chờ đợi một tài nguyên khác đang bị một tiến trình khác trong chính tập hợp đó nắm giữ.",
    122: "Bốn điều kiện cần xảy ra đồng thời để dẫn đến Deadlock (Coffman): 1. Loại trừ tương hỗ (Mutual Exclusion), 2. Giữ và chờ (Hold and Wait), 3. Không thu hồi tài nguyên (No Preemption), 4. Chờ đợi vòng tròn (Circular Wait).",
    123: "Phòng ngừa deadlock (Deadlock Prevention) loại bỏ hoàn toàn khả năng xảy ra deadlock bằng cách vô hiệu hóa ít nhất 1 trong 4 điều kiện cần. Tránh deadlock (Deadlock Avoidance, ví dụ Banker) cấp phát động linh hoạt hơn nếu trạng thái vẫn an toàn.",
    124: "Nhiệm vụ trọng tâm của bộ phận quản lý bộ nhớ trong hệ điều hành là cấp phát không gian bộ nhớ cho các tiến trình, theo dõi bộ nhớ trống, bảo vệ phân vùng và tối ưu hóa hiệu quả sử dụng RAM.",
    125: "Cơ chế bảo vệ bộ nhớ (Memory Protection) sử dụng các thanh ghi giới hạn (Base & Limit registers) để ngăn không cho tiến trình truy cập trái phép vào không gian địa chỉ của tiến trình khác hoặc vùng nhớ của nhân hệ điều hành.",
    126: "Cấp phát liên tục (Contiguous Allocation) yêu cầu toàn bộ không gian địa chỉ logic của mỗi tiến trình phải được đặt vào một khối các ô nhớ vật lý liền kề liên tục nhau trong RAM.",
    127: "Phân mảnh ngoài (External Fragmentation) xảy ra khi tổng dung lượng bộ nhớ còn trống đủ lớn để chứa tiến trình mới, nhưng dung lượng trống đó bị chia cắt thành nhiều khối nhỏ rời rạc không liên tục nên không cấp phát được.",
    128: "Phân mảnh trong (Internal Fragmentation) là phần không gian bộ nhớ bị dư thừa, lãng phí bên trong một khối bộ nhớ cố định đã cấp cho tiến trình nhưng tiến trình không dùng hết (ví dụ trang 4KB mà dùng 1KB).",
    129: "Trong kỹ thuật Phân trang (Paging): Không gian địa chỉ logic được chia thành các khối cố định gọi là Trang (Page), còn không gian bộ nhớ vật lý được chia thành các khối có kích thước bằng nhau gọi là Khung trang (Frame).",
    130: "Bảng trang (Page Table) là cấu trúc dữ liệu do hệ điều hành duy trì cho mỗi tiến trình, làm nhiệm vụ ánh xạ từ số hiệu trang logic (Page number) sang số hiệu khung trang vật lý (Frame number) tương ứng trong RAM.",
    131: "Với kích thước trang 4KB = 4096 byte = 2^12 byte, cần dùng đúng 12 bit để định vị vị trí từng byte bên trong trang (phần Offset d = 12 bit).",
    132: "Quá trình dịch địa chỉ phân trang: CPU tách địa chỉ ảo thành Page Number (p) và Offset (d) → Dùng p tra bảng trang để tìm Frame Number (f) → Ghép f với d thành địa chỉ vật lý f || d.",
    133: "Khác biệt giữa Phân trang và Phân đoạn: Phân trang chia bộ nhớ theo kích thước vật lý cố định (hệ thống quyết định), còn Phân đoạn (Segmentation) chia chương trình theo các khối logic có kích thước thay đổi (như hàm, mã lệnh, dữ liệu, stack).",
    134: "Bộ nhớ ảo (Virtual Memory) tạo ra một không gian địa chỉ logic rộng lớn hơn nhiều so với dung lượng RAM vật lý thực tế bằng cách sử dụng ổ đĩa (swap space/page file) làm phần mở rộng cho bộ nhớ chính.",
    135: "Lỗi trang (Page Fault) là một ngắt phần mềm xảy ra khi tiến trình cố gắng truy cập vào một trang nhớ logic hiện chưa được nạp sẵn trong khung trang của bộ nhớ vật lý (RAM).",
    136: "Thuật toán thay thế trang FIFO (First-In, First-Out) chọn thay thế trang nhớ đã nằm trong bộ nhớ lâu nhất (được nạp vào sớm nhất) khi xảy ra lỗi trang và khung trang đã đầy.",
    137: "Thuật toán thay thế trang LRU (Least Recently Used) chọn thay thế trang nhớ đã lâu nhất không được tiến trình truy cập tới tính đến thời điểm hiện tại.",
    138: "Thuật toán thay thế trang tối ưu (OPT / Optimal) chọn thay thế trang nhớ sẽ không được sử dụng trong khoảng thời gian lâu nhất ở tương lai. Thuật toán này cho tỷ lệ lỗi trang thấp nhất nhưng không thể cài đặt thực tế vì không biết trước tương lai.",
    139: "Mô phỏng FIFO với 3 khung trang trên chuỗi 1, 2, 3, 1, 4: (1) Nạp 1 -> Khung [1] (Lỗi 1); (2) Nạp 2 -> Khung [1, 2] (Lỗi 2); (3) Nạp 3 -> Khung [1, 2, 3] (Lỗi 3); (4) Tham chiếu 1 -> Đã có sẵn trong khung (Trúng/Hit); (5) Nạp 4 -> Thay trang 1 vào sớm nhất thành [4, 2, 3] (Lỗi 4). Tổng cộng có 4 lỗi trang.",
    140: "Hiện tượng trì trệ (Thrashing) xảy ra khi một hệ thống dành phần lớn thời gian để nạp và đẩy các trang nhớ qua lại giữa RAM và đĩa (page fault handling) thay vì thực thi các lệnh có ích, nguyên nhân do quá nhiều tiến trình tranh giành lượng RAM quá ít.",
    141: "So sánh 3 thuật toán thay trang: Optimal chỉ dùng làm chuẩn đánh giá lý thuyết vì không thể dự đoán tương lai; FIFO dễ cài đặt nhưng có thể gặp dị thường Belady; LRU xấp xỉ gần với Optimal nhất và được áp dụng phổ biến trong thực tế.",
    142: "Khái niệm Bản ghi (Record) và Khối (Block): Bản ghi là tập hợp các trường dữ liệu có quan hệ logic với nhau, còn Khối là đơn vị vật lý cơ bản để đọc/ghi dữ liệu giữa bộ nhớ chính và thiết bị lưu trữ.",
    143: "Kỹ thuật đệm dữ liệu (Buffering) tạo ra một vùng nhớ đệm tạm thời trong RAM để tích lũy dữ liệu, giúp cân bằng sự chênh lệch rất lớn về tốc độ xử lý giữa CPU tốc độ cao và các thiết bị lưu trữ ngoại vi tốc độ chậm.",
    144: "Phương pháp truy cập trực tiếp (Direct/Random Access) cho phép chương trình đọc hoặc ghi ngay lập tức tới một bản ghi bất kỳ dựa trên số hiệu khối mà không cần phải duyệt qua các bản ghi trước đó.",
    145: "Hệ điều hành thường sử dụng 3 phương pháp cấp phát không gian đĩa cho tệp: Cấp phát liên tục (Contiguous), Cấp phát theo danh sách liên kết (Linked), và Cấp phát theo chỉ mục (Indexed allocation).",
    146: "Phương pháp cấp phát theo chỉ mục (Indexed Allocation) tập hợp tất cả các con trỏ trỏ tới các khối dữ liệu rời rạc của tệp vào một khối đặc biệt gọi là Khối chỉ mục (Index Block / Inode).",
    147: "Thuật toán lập lịch đĩa FCFS (First-Come, First-Served) di chuyển đầu đọc đĩa để phục vụ các yêu cầu truy xuất theo đúng thứ tự thời gian mà các yêu cầu đó đến hàng đợi.",
    148: "Thuật toán SSTF (Shortest Seek Time First) luôn ưu tiên chọn phục vụ yêu cầu truy xuất nào nằm ở track có khoảng cách gần nhất so với vị trí hiện tại của đầu đọc đĩa nhằm giảm thời gian tìm kiếm.",
    149: "Thuật toán SCAN (thuật toán thang máy) di chuyển đầu đọc đĩa theo một chiều quét cố định từ đầu đến cuối đĩa, phục vụ mọi yêu cầu trên đường đi rồi mới đảo chiều quét ngược lại, tránh hiện tượng bỏ đói (starvation) của SSTF.",
    150: "Đầu đọc ở track 50, hàng đợi gồm track 20, 90, 60, quét theo chiều tăng dần: Khi quét tăng dần từ 50, đầu đọc sẽ gặp track 60 trước, tiếp theo tới track 90; sau khi đến cuối hành trình sẽ đảo chiều quét ngược lại và phục vụ track 20. Thứ tự: 60, 90, 20."
}

# Calculation tags for the 11 key calculation types & numerical questions
calculation_qids = {5, 6, 8, 12, 15, 16, 17, 18, 19, 22, 23, 25, 29, 33, 37, 41, 83, 112, 116, 131, 139, 150}

# Build database array
database = []
for qid in range(1, 151):
    raw = raw_questions[qid]
    part_info = get_part_info(qid)
    ans = answer_keys[qid]
    expl = explanations.get(qid, f"Đáp án đúng là {ans}: {raw['options'][ans]}")
    is_calc = qid in calculation_qids
    
    item = {
        "id": qid,
        "partId": part_info["partId"],
        "partTitle": part_info["partTitle"],
        "chapterId": part_info["chapterId"],
        "chapterTitle": part_info["chapterTitle"],
        "question": raw["question"].strip(),
        "options": {
            "A": raw["options"]["A"].strip(),
            "B": raw["options"]["B"].strip(),
            "C": raw["options"]["C"].strip(),
            "D": raw["options"]["D"].strip(),
        },
        "answer": ans,
        "isCalculation": is_calc,
        "explanation": expl
    }
    database.append(item)

# Save JSON
with open('data_full.json', 'w', encoding='utf-8') as f:
    json.dump(database, f, ensure_ascii=False, indent=2)

# Save JS data file
os.makedirs('js', exist_ok=True)
with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write('// Ngân hàng 150 câu hỏi trắc nghiệm Kiến trúc máy tính & Nguyên lý Hệ điều hành\n')
    f.write('// Dữ liệu được trích xuất và chuẩn hóa đầy đủ từ đề cương chính thức\n')
    f.write('const QUIZ_DATA = ')
    f.write(json.dumps(database, ensure_ascii=False, indent=2))
    f.write(';\n\n')
    f.write('if (typeof module !== "undefined" && module.exports) { module.exports = QUIZ_DATA; }\n')

print(f"Successfully generated database with {len(database)} questions!")
print(f"Calculation questions count: {len([q for q in database if q['isCalculation']])}")
