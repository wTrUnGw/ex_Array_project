// khởi tạo lớp đối tượng
// lớp đối tượng sinhvien cũng là hàm khởi tạo
function SinhVien(_maSV, _tenSV, _loaiSV, _dtoan, _dvan) {
  (this.maSV = _maSV),
    (this.tenSV = _tenSV),
    (this.loaiSV = _loaiSV),
    (this.dtoan = _dtoan),
    (this.dvan = _dvan),
    (this.dtb = 0);
  this.tinhDTB = function () {
    this.dtb = (this.dvan + this.dtoan) / 2;
  };
  this.xepLoai = function (dtb) {
    var loai = "";
    if (dtb >= 8 && dtb <= 10) {
      loai = "Gioi";
    } else if (dtb >= 6.5) {
      loai = "Kha";
    } else {
      loai = "Yeu";
    }
    return loai;
  };
}
