let rasyaStatusAktif = "semua";

function rasyaTutupBenner() {
    const banner = document.getElementById("rasya_bannerDarurat");
    if (banner) {
        banner.style.display = "none";
    }
}

function rasyaFilterKatalog(status, tombolKlik) {
    rasyaStatusAktif = status;

    const semuaTombol = document.querySelectorAll(".rasya_filterBtn");
    semuaTombol.forEach((btn) => btn.classList.remove("active"));

    if (tombolKlik) {
        tombolKlik.classList.add("active");
    }

    rasyaTerapkanFilterKatalog();
}

function rasyaCariIkan() {
    rasyaTerapkanFilterKatalog();
}

function rasyaTerapkanFilterKatalog() {
    const inputCari = document.getElementById("rasya_cariIkan");
    const kataKunci = inputCari ? inputCari.value.trim().toLowerCase() : "";
    const kartuProduk = document.querySelectorAll("#rasya_daftarKatalog .rasya_productCard");
    const pesanKosong = document.getElementById("rasya_kosongKatalog");

    let jumlahTampil = 0;

    kartuProduk.forEach((kartu) => {
        const statusKartu = kartu.getAttribute("data-status");
        const namaKartu = kartu.getAttribute("data-nama") || "";

        const cocokStatus = rasyaStatusAktif === "semua" || statusKartu === rasyaStatusAktif;
        const cocokNama = namaKartu.includes(kataKunci);

        if (cocokStatus && cocokNama) {
            kartu.style.display = "flex";
            jumlahTampil++;
        } else {
            kartu.style.display = "none";
        }
    });

    if (pesanKosong) {
        pesanKosong.style.display = jumlahTampil === 0 ? "block" : "none";
    }
}

function rasyaPesanIkan(namaIkan) {
    const selectIkan = document.getElementById("rasya_jenisIkan");
    if (selectIkan) {
        selectIkan.value = namaIkan;
    }
    alert("Kamu memilih: " + namaIkan + ". Silakan lengkapi formulir di bagian Kontak di bawah.");
    const kontakSection = document.getElementById("kontak");
    if (kontakSection) {
        kontakSection.scrollIntoView({ behavior: "smooth" });
    }
}

function rasyaKirimPesan(event) {
    event.preventDefault();
    const nama = document.getElementById("rasya_nama").value.trim();
    const noHp = document.getElementById("rasya_noHp").value.trim();
    const ikan = document.getElementById("rasya_jenisIkan").value;

    alert(
        "Terima kasih, " + nama + " (" + noHp + ")!\n" +
        "Pesan/minat pemesanan untuk " + ikan + " sudah tercatat di tampilan halaman ini."
    );
    document.getElementById("rasya_formKontak").reset();
}