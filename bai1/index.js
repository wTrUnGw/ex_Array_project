function getEle(id) {
  return document.getElementById(id);
}

function hienThi() {
  var _maSV = getEle("txtMaSV").value;
  var _tenSV = getEle("txtTenSV").value;
  var _loaiSV = getEle("loaiSV").value;
  var _dtoan = getEle("txtDiemToan").value * 1;
  var _dvan = getEle("txtDiemVan").value * 1;
  var _dtb = diemTB(_dvan, _dtoan);
  var _xepLoai = xepLoai(_dtb);

  getEle("spanTenSV").innerHTML = _tenSV;
  getEle("spanMaSV").innerHTML = _maSV;
  getEle("spanLoaiSV").innerHTML = _loaiSV;
  getEle("spanDTB").innerHTML = _dtb;
  getEle("spanXepLoai").innerHTML = _xepLoai;
}
function diemTB(van, toan) {
  var dtb = (van + toan) / 2;
  return dtb;
}
function xepLoai(dtb) {
  var loai = "";
  if (dtb >= 8 && dtb <= 10) {
    loai = "Gioi";
  } else if (dtb >= 6.5) {
    loai = "Kha";
  } else {
    loai = "Yeu";
  }
  return loai;
}
