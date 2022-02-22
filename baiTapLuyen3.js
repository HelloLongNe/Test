var tenPhim = 'Loki'
var giaVeNguoiLon = 100;
var giaVeTreEm = 80;
var soVeNguoiLon = 1000;
var soVeTreEm = 500;
var phanTramTuThien = 10;

//b2 : thực hiện tính toán
var tongSoVeBanDuoc = soVeNguoiLon + soVeTreEm;
var doanhThu = (soVeTreEm*80) + (soVeNguoiLon*100);
var tienTuThien = doanhThu * 10 / 100;
var tienConLai = doanhThu - tienTuThien;






//bn : in ra : tên phim, số vé bán được, doanh thu , phần trăm từ thiện, tiền từ thiện , tiền còn lại
console.log ('Tên phim : ', tenPhim)
console.log('Số vé đã bán :', tongSoVeBanDuoc)
console.log('Doanh Thu :', doanhThu)
console.log('Phần trăm từ thiện :', phanTramTuThien)
console.log('Tiền từ thiện :', tienTuThien)
console.log('Tiền còn lại :', tienConLai)