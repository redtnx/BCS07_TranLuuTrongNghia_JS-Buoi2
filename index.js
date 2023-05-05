// Bài tập 1
/*
- Input: 
+ lương ngày: 100000vnd.
+ lấy số ngày làm từ người dùng nhập vào.
- Logic: Tổng lương = lương ngày * số ngày làm
- Ouput: Tính và xuất ra tổng lương nhận được
 */
const luongNgay = 100000;

document.getElementById("tinhLuong").onclick = function () {
  var soNgayCong = document.getElementById("soNgayCong").value;
  var tongLuong = soNgayCong * luongNgay;
  console.log(tongLuong);

  document.getElementById("tongLuong").innerHTML =
    "Tổng lương tháng này là: " + tongLuong.toLocaleString() + "VND";
};

// Bài tập 2
/*
- Input: Lấy 5 số thực từ người dùng nhập vào
- Logic: Tính tổng 5 số thực rồi chia cho 5 để ra trung bình cộng
- Ouput: Tính và xuất ra trung bình cộng của 5 số người dùng đã nhập
 */
document.getElementById("tinhGiaTriTrungBinh").onclick = function () {
  var soThuc1 = document.getElementById("soThuc1").value * 1;
  var soThuc2 = document.getElementById("soThuc2").value * 1;
  var soThuc3 = document.getElementById("soThuc3").value * 1;
  var soThuc4 = document.getElementById("soThuc4").value * 1;
  var soThuc5 = document.getElementById("soThuc5").value * 1;
  var trungBinhCong = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;

  document.getElementById("ketQuaTrungBinhCong").innerHTML =
    "Trung bình cộng của 5 số thực là: " + trungBinhCong;
};

// Bài tập 3
/*
- Input: 
+ Mệnh giá: 1USD = 235000VND
+ Lấy số USD cần đổi từ người dùng nhập vào
- Logic: Tổng tiền sau quy đổi = số USD * mệnh giá
- Ouput: Tính và xuất ra tổng tiền nhận được sau khi quy đổi
 */
const tienVND = 23500;

document.getElementById("doiTien").onclick = function () {
  var tienUSD = document.getElementById("soUSD").value;
  var tienSauQuyDoi = tienUSD * tienVND;

  document.getElementById("tienVND").innerHTML =
    "Tổng tiền sau khi quy đổi là: " + tienSauQuyDoi.toLocaleString() + "VND";
};

// Bài tập 4
/*
- Input: 
+ chiều dài
+ chiều rộng
- Logic: 
+ Tính chu vi = (dài + rộng)*2
+ Tính diện tích = dài * rộng
- Ouput: Tính và xuất ra chu vi vài diện tích HCN
 */
document.getElementById("tinhChuVi").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var chuVi = (chieuDai + chieuRong) * 2;

  document.getElementById("ketQuaHCN").innerHTML = "Chu vi HCN là: " + chuVi;
  document.getElementById("tinhChuVi").disabled = true;
  document.getElementById("tinhDienTich").disabled = false;
};

document.getElementById("tinhDienTich").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var dienTich = chieuDai * chieuRong;

  document.getElementById("ketQuaHCN").innerHTML =
    "Diện tích HCN là: " + dienTich;
  document.getElementById("tinhChuVi").disabled = false;
  document.getElementById("tinhDienTich").disabled = true;
};

// Bài tập 5
/*
- Input: nhập vào số có 2 chữ số
- Logic: 
+ Bước 1: Xử lý để lấy số hàng chục: số có 2 chữ số / 10  khi tính toán xong dùng  Math.floor để làm tròn xuống
+ Bước 2: Xử lý để lấy số hàng đơn vị: số có 2 chữ số % 10
+ Bước 3: Tổng 2 kết quả trên lại
- Ouput: Tính và xuất ra tổng kí số 
 */
document.getElementById("tinhTongKiSo").onclick = function () {
  var soCoHaiChuSo = document.getElementById("soCoHaiChuSo").value;
  var chuSoHangChuc = Math.floor(soCoHaiChuSo / 10);
  var chuSoHangDV = soCoHaiChuSo % 10;
  var tongHaiKiSo = chuSoHangChuc + chuSoHangDV;

  document.getElementById("tongKiSo").innerHTML =
    "Tổng 2 kí số là: " + tongHaiKiSo;
};
