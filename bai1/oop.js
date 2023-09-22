function getEle(id) {
  return document.getElementById(id);
}

function hienThi() {
  var _maSV = getEle("txtMaSV").value;
  var _tenSV = getEle("txtTenSV").value;
  var _loaiSV = getEle("loaiSV").value;
  var _dtoan = getEle("txtDiemToan").value * 1;
  var _dvan = getEle("txtDiemVan").value * 1;

  // tạo đối tượng
  //   var sinhVien = {
  //     //property
  //     //key: value
  //     maSV: _maSV,
  //     tenSV: _tenSV,
  //     loaiSV: _loaiSV,
  //     diemToan: _dtoan,
  //     diemVan: _dvan,
  //     dtb: 0,
  //     //method: phương thức chỉ những hành động của đối tượng
  //     tinhDTB: function () {
  //       this.dtb = (this.diemVan + this.diemToan) / 2;
  //     },
  //     xepLoai: function (dtb) {
  //       var loai = "";
  //       if (dtb >= 8 && dtb <= 10) {
  //         loai = "Gioi";
  //       } else if (dtb >= 6.5) {
  //         loai = "Kha";
  //       } else {
  //         loai = "Yeu";
  //       }
  //       return loai;
  //     },
  //   };

  //tạo đối tượng sinhVien từ lớp đối tượng SinhVien
  var sinhVien = new SinhVien(_maSV, _tenSV, _loaiSV, _dtoan, _dvan);
  sinhVien.tinhDTB();
  console.log(sinhVien.dtb);
  var _xepLoai = sinhVien.xepLoai(sinhVien.dtb);

  console.log(sinhVien);

  // show info UI
  getEle("spanTenSV").innerHTML = sinhVien.tenSV;
  getEle("spanMaSV").innerHTML = sinhVien.maSV;
  getEle("spanLoaiSV").innerHTML = sinhVien.loaiSV;
  getEle("spanDTB").innerHTML = sinhVien.dtb;
  getEle("spanXepLoai").innerHTML = _xepLoai;
}
