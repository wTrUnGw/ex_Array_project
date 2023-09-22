function SinhVien(
  _maSV,
  _tenSV,
  _email,
  _matKhau,
  _ngaySinh,
  _khoaHoc,
  _diemToan,
  _diemLy,
  _diemHoa
) {
  (this.maSV = _maSV),
    (this.tenSV = _tenSV),
    (this.email = _email),
    (this.matKhau = _matKhau),
    (this.ngaySinh = _ngaySinh),
    (this.khoaHoc = _khoaHoc),
    (this.diemToan = _diemToan),
    (this.diemLy = _diemLy),
    (this.diemHoa = _diemHoa),
    (this.dtb = 0);

  this.tinhDTB = function () {
    var diemtb =
      (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
    this.dtb = diemtb.toFixed(2);
  };
}
