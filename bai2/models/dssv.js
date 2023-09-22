function dSSV() {
  this.arr = [];

  this._themSV = function (sv) {
    this.arr.push(sv);
  };

  this._timLocation = function (maSV) {
    /**
     * Tìm vị trí
     * 0. tạo biến giữ lại index tìm thấy: index = -1
     * 1.Duyệt qua mảng data
     * 2. tạo biến sv = data[i]
     * 3. So sánh maSV với sv.maSV
     * 4.  =>  true  =>  tìm được i  -> gán i cho index -> break
     */

    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var sv = this.arr[i];
      if (maSV === sv.maSV) {
        index = i;
        break;
      }
    }
    return index;
  };

  this._xoaSV = function (maSV) {
    var index = this._timLocation(maSV);

    if (index !== -1) {
      //xoa sv
      this.arr.splice(index, 1);
    }
  };

  this._layThongTinSVTheoMaSV = function (maSV) {
    var index = this._timLocation(maSV);
    if (index !== -1) {
      return this.arr[index];
    }
    return null;
  };

  this._capNhat = function (sv) {
    var index = this._timLocation(sv.maSV);
    if (index !== -1) {
      this.arr[index] = sv;
    }
  };
  this._findSV = function (keyword) {
    /**
     * 0. tạo ra mảng tìm kiếm = []
     * 1. Duyet mang arr
     * 2. sv = arr[i]
     * 3. kiểm tra nếu keyword trùng với sv.tenSV
     * => true => thêm sv được tìm thấy vào mảngTìm Kiem
     * 4. trả mảngtimKiem
     */
    var mangTimKiem = [];
    for (var i = 0; i < this.arr.length; i++) {
      var sv = this.arr[i];
      //convert keyword => lowercase
      var keylowercase = keyword.toLowerCase();
      //convert sv.tenSV => lowercase
      var tenSVLowerCase = sv.tenSV.toLowerCase();
      if (tenSVLowerCase.indexOf(keylowercase) !== -1) {
        mangTimKiem.push(sv);
      }
    }
    return mangTimKiem;
  };
}
