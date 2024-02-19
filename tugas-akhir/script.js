//========================= Icon Navbar =========================
// Fungsi untuk menampilkan atau menyembunyikan menu navbar sesuai dengan ukuran layar
function myFunction() {
  // Dapatkan elemen navbar
  var x = document.getElementById("myTopnav");

  // Jika navbar saat ini tidak memiliki class "responsive", tambahkan class tersebut
  // Jika navbar saat ini sudah memiliki class "responsive", hapus class tersebut
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//========================= Slide Gallery =========================
// Fungsi untuk membuka modal yang menampilkan gambar besar
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Fungsi untuk menutup modal yang menampilkan gambar besar
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Variabel untuk menyimpan indeks gambar yang sedang ditampilkan
var slideIndex = 1;

// Memanggil fungsi untuk menampilkan gambar yang terakhir ditampilkan saat halaman dimuat
showSlides(slideIndex);

// Fungsi untuk mengganti gambar yang ditampilkan ke gambar berikutnya atau sebelumnya, dengan cara di klik 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Fungsi untuk mengganti gambar yang ditampilkan ke gambar lain sesuai dengan indeks nilai n yang diinput
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Fungsi untuk menampilkan gambar dengan indeks sesuai dengan nilai n yang diinput
function showSlides(n) {
  // Variabel untuk looping kembali ke gambar awal
  var i;

  // Tampilkan semua elemen dengan class "mySlides"
  var slides = document.getElementsByClassName("mySlides");

  // Tampilkan semua elemen dengan class "demo"
  var dots = document.getElementsByClassName("demo");

  // Tampilkan elemen dengan id "caption"
  var captionText = document.getElementById("caption");

  // Jika indeks gambar melebihi jumlah gambar, kembalikan ke indeks pertama
  if (n > slides.length) {
    slideIndex = 1
  }

  // Jika indeks gambar kurang dari 1, kembalikan ke indeks terakhir
  if (n < 1) {
    slideIndex = slides.length
  }
  // Sembunyikan semua elemen dengan class "mySlides"
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Hapus class "active" dari semua elemen dengan class "demo"
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Tampilkan elemen dengan indeks sesuai dengan slideIndex
  slides[slideIndex - 1].style.display = "block";

  // Tambahkan class "active" pada elemen dengan indeks sesuai dengan slideIndex
  dots[slideIndex - 1].className += " active";

  // Tampilkan caption dari elemen dengan indeks sesuai dengan slideIndex
  captionText.innerHTML = dots[slideIndex - 1].alt;
}