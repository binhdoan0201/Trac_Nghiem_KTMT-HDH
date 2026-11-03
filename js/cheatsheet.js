// Cheat Sheet & Core Formulas Summary (Cẩm nang công thức & 11 bài toán cốt lõi)
const CheatSheet = {
  render() {
    const container = document.getElementById('cheatsheet-content');
    if (!container) return;

    container.innerHTML = `
      <div style="margin-bottom: 24px;">
        <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px;">
          📚 Cẩm Nang 11 Dạng Bài Toán & Trọng Tâm Lý Thuyết
        </h2>
        <p style="color: var(--text-muted); font-size: 0.95rem;">
          Tổng hợp toàn bộ công thức tính toán nhanh, quy tắc chuyển đổi và sơ đồ kiến trúc then chốt trích xuất từ đề cương Kiến trúc máy tính & Nguyên lý Hệ điều hành.
        </p>
      </div>

      <!-- Formula Cards Grid -->
      <div class="cheatsheet-grid">
        
        <!-- 1. Thời gian thực thi CPU -->
        <div class="formula-card">
          <h3>⚡ 1. Thời Gian Thực Thi CPU (Câu 5, 12)</h3>
          <div class="formula-display">
            T_CPU = (Số lệnh × CPI) / f
          </div>
          <div class="formula-example">
            • <strong>T_CPU</strong>: Thời gian thực thi (giây)<br>
            • <strong>Số lệnh (N)</strong>: Tổng số lệnh máy thực thi<br>
            • <strong>CPI</strong>: Số chu kỳ xung nhịp trung bình trên 1 lệnh<br>
            • <strong>f</strong>: Tần số xung nhịp CPU (Hz)<br>
            📌 <em>Ví dụ mẫu (Câu 5):</em> N = 1000, CPI = 2, f = 1 GHz (10⁹ Hz)<br>
            👉 T = (1000 × 2) / 10⁹ = 2 × 10⁻⁶ s = <strong>2 μs</strong>
          </div>
        </div>

        <!-- 2. Luật Amdahl -->
        <div class="formula-card">
          <h3>🚀 2. Luật Amdahl - Giới Hạn Tăng Tốc (Câu 8, 14)</h3>
          <div class="formula-display">
            S_max = 1 / (1 − p)
          </div>
          <div class="formula-example">
            • <strong>p</strong>: Tỷ lệ phần trăm công việc được tối ưu cải tiến<br>
            • <strong>S_max</strong>: Tốc độ tăng tốc tối đa khi phần đó được tăng tốc vô hạn (k → ∞)<br>
            📌 <em>Ví dụ mẫu (Câu 8):</em> Cải thiện p = 80% = 0.8<br>
            👉 S_max = 1 / (1 − 0.8) = 1 / 0.2 = <strong>5 lần</strong>.<br>
            ⚠️ <em>Ý nghĩa:</em> Tối ưu một phần nhỏ chỉ mang lại lợi ích giới hạn cho toàn hệ thống.
          </div>
        </div>

        <!-- 3. CPI Trung Bình -->
        <div class="formula-card">
          <h3>📊 3. CPI Trung Bình Của Tập Lệnh (Câu 15)</h3>
          <div class="formula-display">
            CPI_tb = ∑ (Tỷ lệ_i × CPI_i)
          </div>
          <div class="formula-example">
            • Dùng khi chương trình gồm nhiều nhóm lệnh có CPI khác nhau.<br>
            📌 <em>Ví dụ mẫu (Câu 15):</em> Loại 1 chiếm 40% có CPI = 2; Loại 2 chiếm 60% có CPI = 4<br>
            👉 CPI_tb = 0.4 × 2 + 0.6 × 4 = 0.8 + 2.4 = <strong>3.2 chu kỳ/lệnh</strong>
          </div>
        </div>

        <!-- 4. Chuyển đổi Cơ số & Bù 2 -->
        <div class="formula-card">
          <h3>🔢 4. Số Nguyên Bù 2 (2's Complement) (Câu 16–25)</h3>
          <div class="formula-display">
            Bù 2 của (−X) = [Đảo toàn bộ bit của (+X)] + 1
          </div>
          <div class="formula-example">
            • <strong>Miền giá trị n-bit bù 2:</strong> −2^(n−1) đến +(2^(n−1) − 1). Với 8 bit: <strong>−128 đến +127</strong>.<br>
            📌 <em>Ví dụ mẫu (Câu 22): Biểu diễn −5 với 8 bit:</em><br>
            1. +5 (8-bit): 00000101₂<br>
            2. Bù 1 (đảo bit): 11111010₂<br>
            3. Cộng 1: 11111010 + 1 = <strong>11111011₂</strong><br>
            • <strong>Dấu hiệu tràn số:</strong> Carry-in vào MSB ≠ Carry-out khỏi MSB.
          </div>
        </div>

        <!-- 5. Chuẩn IEEE 754 32-bit -->
        <div class="formula-card">
          <h3>🧊 5. Số Thực Dấu Chấm Động IEEE 754 (Câu 28–30, 39)</h3>
          <div class="formula-display">
            [1 bit Dấu S] | [8 bit Mũ E] | [23 bit Định trị M]
          </div>
          <div class="formula-example">
            • <strong>Độ lệch mũ (Bias):</strong> Bias = 2^(8−1) − 1 = <strong>127</strong>.<br>
            • <strong>Giá trị mũ thực tế:</strong> e = E − 127.<br>
            • <strong>Bit dấu:</strong> S = 0 (dương), S = 1 (âm).<br>
            • <strong>Trường hợp đặc biệt:</strong> E = 255 (11111111₂) và M = 0 đại diện cho <strong>±Vô cùng (Infinity)</strong>; nếu M ≠ 0 là <strong>NaN</strong>.
          </div>
        </div>

        <!-- 6. Thứ tự Byte Endianness -->
        <div class="formula-card">
          <h3>📦 6. Thứ Tự Byte (Endianness) (Câu 35–37)</h3>
          <div class="formula-display">
            Little-Endian: Byte thấp (LSB) lưu ở địa chỉ thấp
          </div>
          <div class="formula-example">
            Xét số hex 4-byte: <strong>0x12345678</strong> (LSB = 78, MSB = 12)<br>
            • <strong>Little-Endian (x86, ARM):</strong> <code>78 56 34 12</code> (địa chỉ tăng dần)<br>
            • <strong>Big-Endian (Network order):</strong> <code>12 34 56 78</code> (địa chỉ tăng dần)<br>
            📌 <em>Quy tắc nhớ:</em> "Little" thì byte bé (LSB) đứng trước.
          </div>
        </div>

        <!-- 7. AMAT -->
        <div class="formula-card">
          <h3>🎯 7. Thời Gian Truy Cập Trung Bình AMAT (Câu 83)</h3>
          <div class="formula-display">
            AMAT = Hit Time + (1 − Hit Rate) × Miss Penalty
          </div>
          <div class="formula-example">
            • <strong>Hit Time</strong>: Thời gian đọc khi trúng cache<br>
            • <strong>Miss Rate</strong>: Tỷ lệ trượt = (1 − Hit Rate)<br>
            • <strong>Miss Penalty</strong>: Thời gian phạt khi phải nạp từ RAM<br>
            📌 <em>Ví dụ mẫu (Câu 83):</em> Hit Time = 1ns, Hit Rate = 90% (Miss Rate = 0.1), Miss Penalty = 100ns<br>
            👉 AMAT = 1ns + 0.1 × 100ns = 1ns + 10ns = <strong>11 ns</strong>
          </div>
        </div>

        <!-- 8. Lập lịch SJF & Gantt -->
        <div class="formula-card">
          <h3>⏱️ 8. Lập Lịch CPU SJF (Câu 110, 112)</h3>
          <div class="formula-display">
            Ưu tiên Burst Time ngắn nhất → Giảm thời gian chờ
          </div>
          <div class="formula-example">
            Cho P1 = 5ms, P2 = 3ms, P3 = 8ms (cùng đến lúc 0ms):<br>
            • Thứ tự chạy: <strong>P2 (0→3ms) → P1 (3→8ms) → P3 (8→16ms)</strong><br>
            • Thời gian chờ P2 = 0ms; P1 = 3ms; P3 = 3 + 5 = <strong>8 ms</strong>.<br>
            • Thời gian chờ trung bình = (0 + 3 + 8) / 3 = 3.67 ms (tối ưu nhất).
          </div>
        </div>

        <!-- 9. TAT và Waiting Time -->
        <div class="formula-card">
          <h3>⏳ 9. Turnaround Time & Waiting Time (Câu 116)</h3>
          <div class="formula-display">
            TAT = Kết thúc − Đến | Waiting = TAT − Burst Time
          </div>
          <div class="formula-example">
            • <strong>TAT (Thời gian hoàn thành):</strong> Tính từ lúc tiến trình vào hàng đợi đến khi thực thi xong hoàn toàn.<br>
            📌 <em>Ví dụ mẫu (Câu 116):</em> Đến lúc 0ms, hoàn thành lúc 4ms<br>
            👉 TAT = 4ms − 0ms = <strong>4 ms</strong>.
          </div>
        </div>

        <!-- 10. Phân trang 32-bit -->
        <div class="formula-card">
          <h3>📑 10. Dịch Địa Chỉ Phân Trang 32-bit (Câu 131, 132)</h3>
          <div class="formula-display">
            Kích thước trang = 4KB = 2¹² byte → Offset d = 12 bit
          </div>
          <div class="formula-example">
            Với địa chỉ ảo 32 bit và trang 4KB:<br>
            • <strong>Offset (d):</strong> log₂(4096) = <strong>12 bit</strong> (định vị byte trong trang)<br>
            • <strong>Số hiệu trang (p):</strong> 32 − 12 = <strong>20 bit</strong> (dùng tra bảng trang để tìm Frame f)<br>
            • <strong>Địa chỉ vật lý:</strong> Ghép f và d (f || d).
          </div>
        </div>

        <!-- 11. Thay trang FIFO & Lập lịch đĩa SCAN -->
        <div class="formula-card">
          <h3>💿 11. Thay Trang FIFO & Lập Lịch Đĩa SCAN (Câu 139, 150)</h3>
          <div class="formula-display">
            FIFO: Thay trang vào sớm nhất | SCAN: Quét 1 chiều rồi đảo
          </div>
          <div class="formula-example">
            📌 <em>FIFO với 3 khung trang trên chuỗi 1, 2, 3, 1, 4 (Câu 139):</em><br>
            • Nạp 1: [1] (Lỗi 1) | Nạp 2: [1,2] (Lỗi 2) | Nạp 3: [1,2,3] (Lỗi 3)<br>
            • Tham chiếu 1: [1,2,3] (Trúng/Hit)<br>
            • Nạp 4: Thay 1 vào sớm nhất → [4,2,3] (Lỗi 4) 👉 <strong>4 lỗi trang</strong>.<br>
            📌 <em>SCAN (Câu 150):</em> Đang ở track 50, quét tăng dần phục vụ 60, 90 rồi đảo chiều về 20 👉 Thứ tự: <strong>60, 90, 20</strong>.
          </div>
        </div>

        <!-- 12. Deadlock & 4 Điều kiện -->
        <div class="formula-card">
          <h3>🔒 12. Bốn Điều Kiện Cần Của Bế Tắc (Deadlock) (Câu 122)</h3>
          <div class="formula-display">
            Mutual Exclusion + Hold & Wait + No Preemption + Circular Wait
          </div>
          <div class="formula-example">
            1. <strong>Loại trừ tương hỗ (Mutual Exclusion):</strong> Tài nguyên không thể chia sẻ đồng thời.<br>
            2. <strong>Giữ và chờ (Hold and Wait):</strong> Đang giữ tài nguyên và xin thêm.<br>
            3. <strong>Không thu hồi (No Preemption):</strong> Không thể cưỡng chế giật lại tài nguyên.<br>
            4. <strong>Chờ đợi vòng tròn (Circular Wait):</strong> Tồn tại chu trình chuỗi tiến trình chờ lẫn nhau.
          </div>
        </div>

      </div>

      <!-- General Notes Box -->
      <div class="card" style="margin-top: 24px; border-left: 5px solid var(--accent);">
        <h3 style="color: var(--accent); margin-bottom: 8px;">💡 Lưu Ý Quan Trọng Khi Làm Bài Thi Đề Cương</h3>
        <ul style="padding-left: 20px; font-size: 0.92rem; line-height: 1.8; color: var(--text-main);">
          <li><strong>Đơn vị tần số và chu kỳ:</strong> 1 GHz = 10⁹ Hz → Chu kỳ xung nhịp T_c = 1 / (10⁹) = 1 ns; 1 MHz = 10⁶ Hz → T_c = 1 μs.</li>
          <li><strong>Phân biệt rõ:</strong> <em>Turnaround Time</em> (Thời gian hoàn thành = Kết thúc − Đến) khác với <em>Waiting Time</em> (Thời gian chờ = TAT − Burst Time).</li>
          <li><strong>Mã bù 2:</strong> Khi cộng 2 số dương mà ra kết quả bit dấu bằng 1 (số âm) → Chắc chắn xảy ra tràn số (Overflow).</li>
          <li><strong>Kích thước trang:</strong> 4KB = 2¹² byte (offset 12 bit); 8KB = 2¹³ byte (offset 13 bit); 2MB = 2²¹ byte (offset 21 bit).</li>
        </ul>
      </div>
    `;
  }
};
