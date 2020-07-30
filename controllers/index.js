//Tao doi tuong service tuong tac backend

var svService = new SinhVienService();

var renderSinhVien = function () {
  promise
    .then(function (res) {
      // Tao <tr>table
      // Tao noi dung cac the tr
      var contentTable = "";
      for (var index = 0; index < res.data.length; index++) {
        // Moi lan
        var sinhVien = res.data[index];
        // Tu doi tuong sinh vien tao ra the tr
        contentTable += `
          <tr>
            <td>${sinhVien.MaSV}</td>
            <td>${sinhVien.HoTen}</td>
            <td>${sinhVien.Email}</td>
            <td>${sinhVien.SoDT}</td>
            <td>${sinhVien.CMND}</td>
            <td>${sinhVien.DiemToan}</td>
            <td>${sinhVien.DiemLy}</td>
            <td>${sinhVien.DiemHoa}</td>
          </tr>;
        `;
      }

      document.getElementById("tblSinhVien").innerHTML = contentTable;
    })
    .catch(function (error) {
      console.log(error.response.data);
    });
};
renderSinhVien();
