function validateForm() {
    if (document.forms["formPendaftaran"]["nama"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["nrp"].value == "") {
        alert("NRP Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["nrp"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["email"].value == "") {
        alert("Email Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["jurusan"].selectedIndex < 1) {
        alert("Silakan Memilih Jurusan.");
        document.forms["formPendaftaran"]["jurusan"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["alamat"].value == "") {
        alert("Silakan Lengkapi Alamat.");
        document.forms["formPendaftaran"]["alamat"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["ket-vaksin"].selectedIndex < 1) {
        alert("Silakan Memilih Status Vaksinasi.");
        document.forms["formPendaftaran"]["ket-vaksin"].focus();
        return false;
    }
    else if (document.forms["formPendaftaran"]["ket-vaksin"].value == "1") {
        if (document.forms["formPendaftaran"]["jenis-vaksin"].selectedIndex < 1) {
            alert("Silakan Memilih Jenis Vaksin.");
            document.forms["formPendaftaran"]["jenis-vaksin"].focus();
            return false;
        }
        if (document.forms["formPendaftaran"]["dosis"].value == "") {
            alert("Silakan Lengkapi Dosis Vaksinasi.");
            document.forms["formPendaftaran"]["dosis"].focus();
            return false;
        }
        if (document.forms["formPendaftaran"]["no-sertif"].value == "") {
            alert("Silakan Lengkapi Nomor Sertifikat Vaksinasi.");
            document.forms["formPendaftaran"]["no-sertif"].focus();
            return false;
        }
        if (document.forms["formPendaftaran"]["tgl-vaksin"].value == "") {
            alert("Silakan Lengkapi Tanggal Vaksinasi.");
            document.forms["formPendaftaran"]["tgl-vaksin"].focus();
            return false;
        }
    }
    else if (document.forms["formPendaftaran"]["ket-vaksin"].value == "2") {
        if (document.forms["formPendaftaran"]["alasan-vaksin"].selectedIndex < 1) {
            alert("Silakan Memilih Alasan Belum Vaksinasi.");
            document.forms["formPendaftaran"]["alasan-vaksin"].focus();
            return false;
        }
        else if (document.forms["formPendaftaran"]["alasan-vaksin"].value == "6") {
            if (document.forms["formPendaftaran"]["alasan-lain"].value == "") {
                alert("Silakan Isi Alasan Belum Vaksinasi.");
                document.forms["formPendaftaran"]["alasan-lain"].focus();
                return false;
            }
        }
    }
}

function isVaksin() {
    if (document.forms["formPendaftaran"]["ket-vaksin"].value == "0") {
        document.getElementById('sudah-vaksin').style.display = 'none';
        document.getElementById('belum-vaksin').style.display = 'none';
    }
    else if (document.forms["formPendaftaran"]["ket-vaksin"].value == "1") {
        document.getElementById('sudah-vaksin').style.display = 'block';
        document.getElementById('belum-vaksin').style.display = 'none';
    }
    else if (document.forms["formPendaftaran"]["ket-vaksin"].value == "2") {
        document.getElementById('sudah-vaksin').style.display = 'none';
        document.getElementById('belum-vaksin').style.display = 'block';
    }
}