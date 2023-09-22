//Tạo đối tượng dssv từ lớp đối tượng dssv
var dssv = new dSSV();

getLocalStorage();

function getID(id) {
  return document.getElementById(id);
}

function getInfoSV() {
  // dom tới các thẻ người dùng nhập vô
  var maSV = getID("txtMaSV").value;
  var txtTenSV = getID("txtTenSV").value;
  var txtEmail = getID("txtEmail").value;
  var pass = getID("txtPass").value;
  var ngaySinh = getID("txtNgaySinh").value;
  var khoaHoc = getID("khSV").value;
  var diemToan = getID("txtDiemToan").value;
  var diemLy = getID("txtDiemLy").value;
  var diemHoa = getID("txtDiemHoa").value;

  checkRong(maSV, "spanMaSV", "Vui lòng không bỏ trống mã sinh viên");
  checkDoDaiKyTu(
    txtTenSV,
    6,
    8,
    "spanTenSV",
    "Vui lòng nhập  từ 6 đến 8 kí tự"
  );
  checkEmail(txtEmail, "spanEmailSV", "Email không đúng định dạng");
  checkNumber(diemToan, "spanToan", "Vui lòng nhập số ");
  checkNumber(diemLy, "spanLy", "Vui lòng nhập số ");
  checkNumber(diemHoa, "spanHoa", "Vui lòng nhập số ");
  checkCourse("khSV", "spanKhoaHoc", "Vui lòng chọn khóa học");

  var isValid = true;
  // dùng hàm kiểm tra rỗng để check các input, nếu có lỗi sẽ thay đổi giá trị valid
  isValid &=
    checkRong(maSV, "spanMaSV", "Vui lòng không bỏ trống mã sinh viên") &&
    checkNumber(maSV, "spanMaSV", "Vui lòng nhập số");
  // console.log(isValid);

  // kiểm tra tên SV không bỏ trống
  isValid &= checkRong(
    txtTenSV,
    "spanTenSV",
    "Vui lòng không bỏ trống tên sinh viên "
  );

  //kiểm tra email hợp lệ
  isValid &= checkEmail(txtEmail, "spanEmailSV", "Email không đúng định dạng");

  // kiểm tra mật khẩu không bỏ trống
  isValid &= checkRong(pass, "spanMatKhau", "Vui lòng nhập mật khẩu");

  // ngày sinh không bỏ trống
  isValid &= checkRong(ngaySinh, "spanNgaySinh", "Vui lòng chọn ngày sinh");

  //khóa học phải được chọn

  isValid = checkCourse("khSV", "spanKhoaHoc", "vui lòng chọn khóa học");
  // điểm toán lý hóa phải là số không bỏ trống
  isValid &= checkNumber(diemToan, "spanToan", "Vui lòng nhập số ");
  isValid &= checkNumber(diemLy, "spanLy", "Vui lòng nhập số ");
  isValid &= checkNumber(diemHoa, "spanHoa", "Vui lòng nhập số ");

  // kiểm tra isValid nếu như giá trị là false sẽ trả về null còn nếu như isValid = true sẽ xử lý giúp thêm người dùng
  // dùng toán tử phủ định đảo ngược giá trị isValid từ false thành true để xử lý return null
  if (!isValid) {
    return null;
  }
  //tạo đối tượng sv từ lớp SinhVien
  var sV = new SinhVien(
    maSV,
    txtTenSV,
    txtEmail,
    pass,
    ngaySinh,
    khoaHoc,
    diemToan,
    diemLy,
    diemHoa
  );

  sV.tinhDTB();
  return sV;
}

/**
 * Thêm sinh viên
 *
 */
function addSV() {
  var sv = getInfoSV();

  // thêm sv vào danh sách ==> gọi tới method _themSV từ ldt DSSV
  if (sv) {
    dssv._themSV(sv);
    // console.log(dssv.arr);
    renderlistSV(dssv.arr);
    //render dssv.arr ra UI

    setLocalStorage();
  }
}
function renderlistSV(data) {
  /**
   * 0. tạo biến content = ""
   * 1. Duyệt mảng data
   *    1.1. tạo biến sv = data[i]
   *    1.2. tạo dòng tích lũy vô biến content
   *    1.3. tạo cột
   * 2. dom tới tbody  => gán content
   */
  var content = "";
  for (var i = 0; i < data.length; i++) {
    var sv = data[i];
    //cách 1
    // content += "<tr>";
    // content += "<td> " + sv.maSV + "</td>";
    // content += "<td>" + sv.tenSV + " </td>";
    // content += "<td>" + sv.email + " </td>";
    // content += "<td>" + sv.matKhau + " </td>";
    // content += "<td>" + sv.ngaySinh + " </td>";
    // content += "<td>" + sv.khoaHoc + " </td>";
    // content += "<td>" + sv.dtb + " </td>";
    // content += "</tr>";

    //cách 2 làm `` của ES6

    content += `
    <tr>
    <td>${sv.maSV}</td>
    <td>${sv.tenSV} </td>
    <td>${sv.email} </td>
    <td>${sv.ngaySinh} </td>
    <td>${sv.khoaHoc} </td>
    <td> ${sv.dtb}</td>
    <td> 
    <button class="btn btn-danger" onclick="suaSV('${sv.maSV}')"> Fix </button>
    <button class="btn btn-success" onclick="xoaSV('${sv.maSV}')"> Delete </button>
    </td>
  </tr>
    `;
  }
  getID("tbodySinhVien").innerHTML = content;
}
/**
 * Sửa
 */
function suaSV(maSV) {
  var sv = dssv._layThongTinSVTheoMaSV(maSV);
  if (sv) {
    // show info sv ra ngoài các thẻ input
    getID("txtMaSV").value = sv.maSV;
    //disabled input #txtMaSV
    getID("txtMaSV").disabled = true;
    getID("txtTenSV").value = sv.tenSV;
    getID("txtEmail").value = sv.email;
    getID("txtPass").value = sv.pass;
    getID("txtNgaySinh").value = sv.ngaySinh;
    getID("khSV").value = sv.khoaHoc;
    getID("txtDiemToan").value = sv.diemToan;
    getID("txtDiemLy").value = sv.diemLy;
    getID("txtDiemHoa").value = sv.diemHoa;
  }
}
/**
 * Xóa SV
 */
function xoaSV(maSV) {
  dssv._xoaSV(maSV);
  console.log(dssv.arr);

  renderlistSV(dssv.arr);
  setLocalStorage();
}

/**
 * Cập nhật sinh viên
 */
function updateSV() {
  var sv = getInfoSV();
  console.log(sv);
  if (sv) {
    dssv._capNhat(sv);
    renderlistSV(dssv.arr);
    setLocalStorage();
  }
}

/**
 * Tìm kiếm sinh viên
 *
 */
getID("txtSearch").addEventListener("keyup", function () {
  //lấy value từ thẻ input
  var keyword = getID("txtSearch").value;
  var mangTimKiem = dssv._findSV(keyword);

  renderlistSV(mangTimKiem);
  // console.log(keyword);
});

function setLocalStorage() {
  // localStorge là măc định của html5, setItem Với key là tên biến để ta truy xuất và value là giá trị biến truyền vào.
  // Chú ý: LocalStorage chỉ cho phép chúng ta lưu biến với kiểu String
  // JSON.stringify(): chuyển về chuỗi
  var dataString = JSON.stringify(dssv.arr);
  //lưu xuống localStorage
  localStorage.setItem("DSSV", dataString);
}

function getLocalStorage() {
  if (localStorage.getItem("DSSV")) {
    var dataString = localStorage.getItem("DSSV");
    // cần chuyển data từ string => JSON
    var dataJson = JSON.parse(dataString);
    //cập nhật data từ localStorage vào dsss.arr
    dssv.arr = dataJson;
    //re-renderListSV
    renderlistSV(dssv.arr);
  }
}
