var dsdg = new DanhSachDonGia();
function getEle(id) {
    return document.getElementById(id);
}
function layThongTin() {
    var soKm = getEle("soKm").value;
    var thoiGianCho = getEle("thoiGianCho").value;

    console.log(soKm, thoiGianCho);
}

// =================================== TÍNH TIỀN KHI BẤM VÀO NÚT TÍNH TIỀN ==================================================

getEle("tinhTien").addEventListener('click', function () {
    layThongTin();
    var tongTien = tinhTien();
    console.log(tongTien);
    getEle("divThanhTien").style.display = "block";
    getEle("xuatTien").innerHTML = tongTien;
    // getEle("formDG").reset();

})

function tinhTien() {
    var soTien = 0;
    var soKm = parseFloat(getEle("soKm").value);
    var thoiGianCho = parseFloat(getEle("thoiGianCho").value);

    if ($('#typeOfCar input:checked').val() == "uberX") {
        if (0 < soKm && soKm < 1) {
            soTien = 8000 + thoiGianCho * 2000;
        }
        else if (soKm <= 20 && soKm >= 1) {
            soTien = 8000 + (soKm - 1) * 12000 + thoiGianCho * 2000;
        }
        else if (soKm > 20) {
            soTien = 8000 + 19 * 12000 + (soKm - 20) * 10000 + thoiGianCho * 2000;
        }
        else {
            return "Số liệu không hợp lệ. Vui lòng nhập lại";
        }
    }
    if ($('#typeOfCar input:checked').val() == "uberSUV") {
        if (0 < soKm && soKm < 1) {
            soTien = 9000 + thoiGianCho * 3000;
        }
        else if (soKm <= 20 && soKm >= 1) {
            soTien = 9000 + (soKm - 1) * 14000 + thoiGianCho * 3000;
        }
        else if (soKm > 20) {
            soTien = 9000 + 19 * 14000 + (soKm - 20) * 12000 + thoiGianCho * 3000;
        }
        else {
            return "Số liệu không hợp lệ. Vui lòng nhập lại";
        }
    }
    if ($('#typeOfCar input:checked').val() == "uberBlack") {
        if (0 < soKm && soKm < 1) {
            soTien = 10000 + thoiGianCho * 4000;
        }
        else if (soKm <= 20 && soKm >= 1) {
            soTien = 10000 + (soKm - 1) * 16000 + thoiGianCho * 4000;
        }
        else if (soKm > 20) {
            soTien = 10000 + 19 * 16000 + (soKm - 20) * 14000 + thoiGianCho * 4000;
        }
        else {
            return "Số liệu không hợp lệ. Vui lòng nhập lại";
        }
    }


    return soTien;
}

// =================================== IN HÓA ĐƠN KHI BẤM VÀO NÚT IN HÓA ĐƠN ==================================================

getEle("inHoaDon").addEventListener('click', function () {
    // getEle("myModal").reset(); 
    dsdg.mangDG = [];
    var loaiXe = $('#typeOfCar input:checked').val();
    var soKm = parseFloat(getEle("soKm").value);
    var thoiGianCho = parseFloat(getEle("thoiGianCho").value);
    var tongTien = tinhTien();
    tableHoaDon(loaiXe, soKm, thoiGianCho, tongTien);
    getEle("hoaDon__tongTien").innerHTML = tongTien;
    
})

function tableHoaDon(loaiXe, soKm, thoiGianCho, tongTien){
    if(soKm <= 1){
        tinhSoTienDiNhoHon1Km(loaiXe, soKm, thoiGianCho, tongTien);
    }
    else if(soKm> 1 && soKm <= 20){
        tinhSoTienDiTu1KmDen20Km(loaiXe, soKm, thoiGianCho, tongTien);
    }
    else if(soKm > 20){
        tinhSoTienDiTren20Km(loaiXe, soKm, thoiGianCho, tongTien);
    }
}
function tinhSoTienDiNhoHon1Km(loaiXe, soKm, thoiGianCho, tongTien) {
    var use = soKm;
    if (loaiXe == "uberX") {
        var detail = "uberX";
        var unitPrice = 8000;
        var wait = thoiGianCho;
        payment = tongTien;
        var dg = new DonGia(detail, use, unitPrice, wait, payment);
        dsdg.themVao(dg);
        hienThiDanhSach(dsdg.mangDG);

    }
    else if (loaiXe == "uberSUV") {
        var detail = "uberSUV";
        var unitPrice = 9000;
        var wait = thoiGianCho;
        payment = tongTien;
        var dg = new DonGia(detail, use, unitPrice, wait, payment);
        dsdg.themVao(dg);
        hienThiDanhSach(dsdg.mangDG);
    }
    else if (loaiXe == "uberBlack") {
        var detail = "uberBlack";
        var unitPrice = 10000;
        var wait = thoiGianCho;
        payment = tongTien;
        var dg = new DonGia(detail, use, unitPrice, wait, payment);
        dsdg.themVao(dg);
        hienThiDanhSach(dsdg.mangDG);
    }
}
function tinhSoTienDiTu1KmDen20Km(loaiXe, soKm, thoiGianCho, tongTien) {
    var detail = loaiXe;
    var use = 1;
    var unitPrice = 0;
    var payment = 0;
    if (loaiXe == "uberX") {
        unitPrice = 8000;
        payment = 8000;
    }
    if (loaiXe == "uberSUV") {
        unitPrice = 9000;
        payment = 9000;
    }
    if (loaiXe == "uberBlack") {
        unitPrice = 10000;
        payment = 10000;
    }
    var wait = thoiGianCho;
    var dg = new DonGia(detail, use, unitPrice, wait, payment);
    dsdg.themVao(dg);

    use = soKm - 1;
    if (loaiXe == "uberX") {
        unitPrice = 12000;
        payment = 12000 * use;
    }
    if (loaiXe == "uberSUV") {
        unitPrice = 14000;
        payment = 14000 * use;
    }
    if (loaiXe == "uberBlack") {
        unitPrice = 16000;
        payment = 16000 * use;
    }
    dg = new DonGia(detail, use, unitPrice, wait, payment);
    dsdg.themVao(dg);
    hienThiDanhSach(dsdg.mangDG);

}
function tinhSoTienDiTren20Km(loaiXe, soKm, thoiGianCho, tongTien) {
    var detail = loaiXe;
    var use = 1;
    var unitPrice = 0;
    var payment = 0;
    if (loaiXe == "uberX") {
        unitPrice = 8000;
        payment = 8000;
    }
    if (loaiXe == "uberSUV") {
        unitPrice = 9000;
        payment = 9000;
    }
    if (loaiXe == "uberBlack") {
        unitPrice = 10000;
        payment = 10000;
    }
    var wait = thoiGianCho;
    var dg = new DonGia(detail, use, unitPrice, wait, payment);
    dsdg.themVao(dg);

    use = 19;
    if (loaiXe == "uberX") {
        unitPrice = 12000;
        payment = 12000 * use;
    }
    if (loaiXe == "uberSUV") {
        unitPrice = 14000;
        payment = 14000 * use;
    }
    if (loaiXe == "uberBlack") {
        unitPrice = 16000;
        payment = 16000 * use;
    }
    dg = new DonGia(detail, use, unitPrice, wait, payment);
    dsdg.themVao(dg);

    use = soKm - 20;
    if (loaiXe == "uberX") {
        unitPrice = 10000;
        payment = 10000 * use;
    }
    if (loaiXe == "uberSUV") {
        unitPrice = 12000;
        payment = 12000 * use;
    }
    if (loaiXe == "uberBlack") {
        unitPrice = 14000;
        payment = 14000 * use;
    }
    dg = new DonGia(detail, use, unitPrice, wait, payment);
    dsdg.themVao(dg);
    hienThiDanhSach(dsdg.mangDG);

}
function hienThiDanhSach (mangDG){
    var tbody = getEle("hoaDonTien");
    var content = "";
    for(var i = 0; i < mangDG.length; i++){
        var dg = mangDG[i];
        content += `
        <tr>
           <td>${dg.detail}</td>
           <td>${dg.use}</td>
           <td>${dg.unitPrice}</td>
           <td>${dg.wait}</td>
           <td>${dg.payment}</td>
        </tr>
        
        `;
    }
    tbody.innerHTML = content ;
}
