// DATABASE SOAL (Menggunakan 15 soal representatif yang sudah Anda susun sebelumnya, dapat ditambah hingga 50)
const SHEET_API =
  "https://script.google.com/macros/s/AKfycbyXZ5g8B9w9YHAucOtbCKJ0C2e_A1giTAmC-lEjyRSJeLL5PBRJKMS9He9zFGDecFj-9w/exec";
const sourceQuestions = [
  {
    c: "TEKNIS PERTANIAN",
    q: "Salah satu ciri utama dari kelompok komoditas tanaman pangan yang membedakannya dengan komoditas hortikultura tahunan adalah...",
    o: [
      "Memiliki masa tumbuh yang relatif singkat dan hasilnya merupakan sumber karbohidrat utama",
      "Merupakan tumbuhan tahunan berpohon keras yang berbuah musiman",
      "Hanya dapat dikonsumsi dalam bentuk segar tanpa melalui proses pengolahan pangan",
      "Tidak membutuhkan asupan unsur hara makro selama fase vegetatif",
    ],
    a: 0,
    e: "Tanaman pangan umumnya berumur pendek dan menjadi sumber karbohidrat utama.",
  },

  {
    c: "TEKNIS PERTANIAN",
    q: "Standar pemeliharaan tanaman pangan mengharuskan area budidaya dijaga dan dilindungi dari gangguan hewan ternak maupun binatang liar. Hal ini bertujuan untuk...",
    o: [
      "Mempercepat fase perkecambahan benih secara serempak",
      "Mengurangi dosis kebutuhan pupuk daun di lapangan",
      "Mencegah kerusakan fisik tanaman dan menjaga optimalisasi pertumbuhan",
      "Menurunkan porositas dan aerasi media tanah di bedengan",
    ],
    a: 2,
    e: "Perlindungan dari gangguan hewan bertujuan menjaga pertumbuhan tanaman tetap optimal.",
  },

  {
    c: "TEKNIS PERTANIAN",
    q: "Dalam kegiatan pemupukan, penggunaan pupuk organik sangat diutamakan dengan memperhatikan kesesuaian jenis tanaman serta kondisi fisik tanah. Standar pemupukan tersebut disebut prinsip tepat...",
    o: ["Dosis", "Waktu", "Cara aplikasi", "Konsentrasi"],
    a: 2,
    e: "Kesesuaian jenis pupuk dengan kondisi lapangan termasuk prinsip tepat cara aplikasi.",
  },

  {
    c: "TEKNIS PERTANIAN",
    q: "Berdasarkan bagian organ tanaman yang menjadi tempat penyimpanan produk pangan utamanya, tanaman sagu menyimpan cadangan makanannya pada bagian...",
    o: ["Umbi", "Batang", "Biji", "Buah"],
    a: 1,
    e: "Pati sagu tersimpan pada empulur batang.",
  },

  {
    c: "TEKNIS PERTANIAN",
    q: "Kelompok komoditas pangan yang meliputi kedelai, kacang tanah, dan kacang hijau dikategorikan sebagai tanaman...",
    o: [
      "Serealia",
      "Umbi-umbian",
      "Polong-polongan (Legum)",
      "Tanaman industri tahunan",
    ],
    a: 2,
    e: "Ketiga tanaman tersebut termasuk kelompok legum.",
  },

  {
    c: "TEKNIS PERTANIAN",
    q: "Jika petani menggunakan pestisida kimia untuk mengatasi OPT, maka hal berikut wajib diperhatikan, kecuali...",
    o: [
      "Tepat mutu pestisida",
      "Tepat konsentrasi dan alat aplikasi",
      "Tepat sasaran dan tepat waktu",
      "Tepat harga beli di pasar retail",
    ],
    a: 3,
    e: "Harga beli bukan bagian prinsip teknis penggunaan pestisida.",
  },

  {
    c: "TEKNIS PERTANIAN",
    q: "Tindakan pembumbunan pada budidaya tanaman sayuran hortikultura berfungsi untuk...",
    o: [
      "Mengganti kebutuhan penyemprotan fungisida sistemik",
      "Menutup akar yang tersembul, memperkokoh batang, dan menggemburkan tanah di sekitar perakaran",
      "Mempercepat masa dormansi benih sebelum disemai",
      "Menurunkan kapasitas aerasi dan porositas media tanam",
    ],
    a: 1,
    e: "Pembumbunan memperkokoh tanaman dan memperbaiki kondisi perakaran.",
  },

  {
    c: "TEKNIS PERTANIAN",
    q: "Manfaat langsung dari kondisi tanah yang gembur bagi tanaman adalah...",
    o: [
      "Mempercepat penguapan air tanah saat musim kemarau",
      "Menekan pertumbuhan akar lateral",
      "Membuat penyerapan zat hara dan perkembangan akar lebih optimal",
      "Menghilangkan seluruh nitrogen tanah",
    ],
    a: 2,
    e: "Tanah gembur memperbaiki aerasi dan perkembangan akar.",
  },

  {
    c: "TEKNIS PERTANIAN",
    q: "Saat tanaman durian sedang berbunga lebat, tindakan yang tepat untuk mencegah kerontokan bunga adalah...",
    o: [
      "Mengurangi pemberian air secara berlebihan",
      "Meningkatkan dosis pupuk urea tinggi",
      "Menyemprot herbisida secara merata",
      "Menutup tanaman dari cahaya matahari",
    ],
    a: 0,
    e: "Kelebihan air dapat memicu kerontokan bunga.",
  },

  {
    c: "TEKNIS PERTANIAN",
    q: "Kutu hijau, thrips, dan ulat daun merusak tanaman dengan cara...",
    o: [
      "Menghancurkan kambium batang",
      "Mengisap cairan sel daun serta memakan jaringan daun hingga berlubang",
      "Membusukkan akar",
      "Menghambat penyerbukan",
    ],
    a: 1,
    e: "Thrips dan kutu mengisap cairan, ulat memakan jaringan daun.",
  },

  {
    c: "TEKNIS PERTANIAN",
    q: "Rambutan dengan ukuran besar, kulit merah darah, rasa manis sedikit asam, dan ngelotok merupakan varietas...",
    o: ["Rapiah", "Simacan", "Binjai", "Sinyonya"],
    a: 2,
    e: "Karakteristik tersebut merupakan ciri rambutan Binjai.",
  },

  {
    c: "TEKNIS PERTANIAN",
    q: "Vektor utama penyakit virus kuning (Gemini Virus) pada cabai adalah...",
    o: [
      "Lalat buah jantan",
      "Lalat putih atau kutu kebul (Bemisia tabaci)",
      "Orong-orong",
      "Ulat grayak",
    ],
    a: 1,
    e: "Gemini virus ditularkan oleh kutu kebul.",
  },

  {
    c: "TEKNIS PERTANIAN",
    q: "Penyakit rebah kecambah (damping off) pada persemaian umumnya disebabkan oleh...",
    o: [
      "Erwinia carotovora",
      "Rhizoctonia sp. atau Fusarium sp.",
      "Tobacco Mosaic Virus",
      "Streptomyces scabies",
    ],
    a: 1,
    e: "Damping off banyak disebabkan jamur Rhizoctonia dan Fusarium.",
  },

  {
    c: "TEKNIS PERTANIAN",
    q: "Modifikasi batang pada bawang merah disebut...",
    o: ["Umbi batang", "Umbi lapis", "Rhizoma", "Stolon"],
    a: 1,
    e: "Bawang merah termasuk umbi lapis (bulbus).",
  },

  {
    c: "TEKNIS PERTANIAN",
    q: "Keuntungan utama perbanyakan tanaman dengan cangkok adalah...",
    o: [
      "Menghasilkan keragaman genetik tinggi",
      "Menghasilkan tanaman lebih pendek dan cepat berbuah",
      "Perakaran lebih kuat dari tanaman biji",
      "Memperpanjang masa dormansi",
    ],
    a: 1,
    e: "Tanaman hasil cangkok cenderung cepat berbuah dan lebih pendek.",
  },
  {
    c: "KEWIRAUSAHAAN",
    q: "Sektor agribisnis dibagi menjadi beberapa subsistem. Industri yang menyediakan pupuk, pestisida, dan alat mesin pertanian (alsintan) bagi petani termasuk ke dalam kelompok...",
    o: [
      "Subsistem usaha tani (on-farm)",
      "Subsistem pengolahan (agroindustri)",
      "Subsistem agribisnis hulu (upstream)",
      "Subsistem pemasaran dan logistik",
    ],
    a: 2,
    e: "Agribisnis hulu menyediakan sarana produksi seperti pupuk, benih, pestisida, dan alsintan.",
  },

  {
    c: "KEWIRAUSAHAAN",
    q: "Dalam budidaya tanaman pangan, besarnya nilai pengorbanan berupa uang yang dikeluarkan untuk menghasilkan satu unit komoditas disebut...",
    o: [
      "Harga pokok produksi",
      "Pengeluaran operasional",
      "Harga jual minimum",
      "Margin pendapatan bersih",
    ],
    a: 0,
    e: "Harga Pokok Produksi (HPP) merupakan biaya yang dikeluarkan untuk menghasilkan satu unit produk.",
  },

  {
    c: "KEWIRAUSAHAAN",
    q: "Seorang wirausahawan agribisnis memiliki total biaya Rp6.000.000 dan harga jual Rp3.000 per kg. Berapa produksi minimum agar mencapai titik impas (BEP)?",
    o: ["500 kg", "600 kg", "1.000 kg", "2.000 kg"],
    a: 3,
    e: "BEP = Total Biaya / Harga Jual = 6.000.000 / 3.000 = 2.000 kg.",
  },

  {
    c: "KEWIRAUSAHAAN",
    q: "Yang bukan merupakan faktor utama yang perlu diperhatikan dalam perencanaan promosi adalah...",
    o: [
      "Jumlah dana promosi",
      "Karakteristik konsumen",
      "Siklus hidup komoditas",
      "Lokasi geografis lahan pembibitan utama",
    ],
    a: 3,
    e: "Lokasi pembibitan tidak berpengaruh langsung terhadap efektivitas promosi kepada konsumen.",
  },

  {
    c: "KEWIRAUSAHAAN",
    q: "Pengusaha memilih menggunakan jasa distributor atau tengkulak dalam pemasaran produk, kecuali karena alasan...",
    o: [
      "Efisiensi kerja dan jaringan pemasaran",
      "Keterbatasan dana dan tenaga penjualan",
      "Kondisi transportasi dan sarana pemasaran",
      "Keinginan menaikkan harga eceran tertinggi di pasar",
    ],
    a: 3,
    e: "Perantara digunakan untuk efisiensi, bukan untuk menaikkan harga secara sepihak.",
  },

  {
    c: "KEWIRAUSAHAAN",
    q: "Istilah perishable dalam manajemen agribisnis berarti...",
    o: [
      "Membutuhkan investasi sangat besar",
      "Produk mudah rusak, busuk, dan mengalami penurunan kualitas",
      "Mengandalkan teknologi tinggi",
      "Harga selalu stabil",
    ],
    a: 1,
    e: "Perishable berarti mudah rusak sehingga membutuhkan penanganan cepat.",
  },

  {
    c: "KEWIRAUSAHAAN",
    q: "Komponen biaya yang nilainya tidak berubah meskipun volume produksi naik atau turun disebut...",
    o: [
      "Biaya variabel",
      "Biaya tetap (fixed cost)",
      "Biaya penyusutan",
      "Biaya marginal",
    ],
    a: 1,
    e: "Biaya tetap tidak dipengaruhi jumlah produksi dalam jangka pendek.",
  },

  {
    c: "KEWIRAUSAHAAN",
    q: "Biaya pembelian pakan, vaksin, dan vitamin yang berubah mengikuti jumlah ternak termasuk...",
    o: [
      "Biaya tetap",
      "Biaya tidak terduga",
      "Biaya variabel",
      "Biaya investasi hulu",
    ],
    a: 2,
    e: "Biaya variabel berubah seiring perubahan volume usaha.",
  },

  {
    c: "KEWIRAUSAHAAN",
    q: "Saat panen raya menyebabkan harga komoditas turun karena pasokan melimpah, strategi yang paling tepat adalah...",
    o: [
      "Menghentikan produksi musim berikutnya",
      "Melakukan hilirisasi dan pengolahan produk menjadi produk turunan",
      "Menjual semua produk berapa pun harganya",
      "Memperluas lahan tanpa penanganan pascapanen",
    ],
    a: 1,
    e: "Hilirisasi meningkatkan nilai tambah dan memperpanjang umur simpan produk.",
  },

  {
    c: "KEWIRAUSAHAAN",
    q: "Pada usaha ayam petelur, produk sampingan yang bernilai ekonomis dan dapat dijual sebagai pupuk organik adalah...",
    o: ["Telur afkir", "Bulu ayam", "Jeroan", "Kotoran ternak (feses)"],
    a: 3,
    e: "Feses ternak mengandung unsur hara dan bernilai sebagai pupuk organik.",
  },
  {
    c: "BAHASA INGGRIS",
    q: "The Ministry of Agriculture ... new organic farming regulations next semester to support sustainable development goals.",
    o: ["would issue", "will issue", "issues", "has issued"],
    a: 1,
    e: "Adanya penanda waktu 'next semester' menunjukkan Future Tense sehingga digunakan 'will issue'.",
  },

  {
    c: "BAHASA INGGRIS",
    q: "Behind the main laboratory ... where agricultural students conduct biotechnology experiments.",
    o: [
      "stands the green house",
      "the green house stands",
      "does the green house stand",
      "where the green house stands",
    ],
    a: 0,
    e: "Kalimat menggunakan inversion karena diawali keterangan tempat.",
  },

  {
    c: "BAHASA INGGRIS",
    q: "Despite having rich volcanic soil, some local farmers avoid ... chemical fertilizers so that they can maintain natural soil fertility.",
    o: ["to use", "use", "using", "being used"],
    a: 2,
    e: "Kata kerja 'avoid' harus diikuti gerund (verb-ing).",
  },

  {
    c: "BAHASA INGGRIS",
    q: "Muktar’s agricultural startup is located on the second floor of a ... building downtown.",
    o: ["three-stories", "three-story", "threes-story", "threes-stories"],
    a: 1,
    e: "Compound adjective sebelum noun menggunakan bentuk singular: three-story building.",
  },

  {
    c: "BAHASA INGGRIS",
    q: "The crops in the southern field ... by the unexpected severe frost last night since the leaves are completely withered.",
    o: [
      "must be damaged",
      "must damage",
      "must have been damaged",
      "must have damaged",
    ],
    a: 2,
    e: "Kesimpulan logis terhadap kejadian masa lalu menggunakan must have been + V3.",
  },

  {
    c: "BAHASA INGGRIS",
    q: "Farmers ... irrigation canals regularly; otherwise, the water supply would not have reached the rice fields during the dry season.",
    o: [
      "should clean",
      "should have cleaned",
      "cannot clean",
      "must not have cleaned",
    ],
    a: 1,
    e: "Kalimat menunjukkan penyesalan terhadap masa lalu sehingga digunakan should have + V3.",
  },

  {
    c: "BAHASA INGGRIS",
    q: "... last month, the extension officers would have finished distributing the superior clove seeds to the local community.",
    o: [
      "If it had not flooded",
      "If it wasn't flooding",
      "If it didn't flood",
      "If it would not flood",
    ],
    a: 0,
    e: "Conditional Sentence Type 3 menggunakan If + had + V3.",
  },

  {
    c: "BAHASA INGGRIS",
    q: "The entire livestock population ... by a contagious disease before the veterinary team arrived at the village.",
    o: ["destroyed", "was destroyed", "had been destroyed", "destroys"],
    a: 2,
    e: "Peristiwa terjadi lebih dulu di masa lampau sehingga menggunakan Past Perfect Passive.",
  },

  {
    c: "BAHASA INGGRIS",
    q: "Because of its outstanding nutrient profile, the new hybrid corn variety has become one of the ... seeds in the province.",
    o: ["best selling", "selling best", "best-selling", "selling-best"],
    a: 2,
    e: "Compound adjective sebelum noun menggunakan tanda hubung: best-selling.",
  },

  {
    c: "BAHASA INGGRIS",
    q: "The food security program, ... by the government in 2021, is still highly successful nationwide.",
    o: ["established", "which established", "establishing", "was established"],
    a: 0,
    e: "Reduced relative clause pasif menggunakan bentuk V3: established.",
  },
  {
    c: "MATEMATIKA",
    q: "Jika x = 2p^2 - 3 dan y = p^3 - 2, maka untuk p = 2 hubungan yang benar adalah...",
    o: [
      "x > y",
      "x < y",
      "x = y",
      "2x = 3y",
      "Hubungan x dan y tidak dapat ditentukan",
    ],
    a: 1,
    e: "Untuk p=2 diperoleh x=5 dan y=6 sehingga x<y.",
  },

  {
    c: "MATEMATIKA",
    q: "Jika x/(3y) = 2/5, maka nilai dari rasio (5x - 3y) terhadap (3x + y) adalah...",
    o: ["3/11", "15/23", "5/13", "6/11", "1/2"],
    a: 1,
    e: "Dari 5x=6y diperoleh x=(6/5)y, hasil substitusi menghasilkan 15/23.",
  },

  {
    c: "MATEMATIKA",
    q: "Jika p + 2q = 5/2, maka nilai dari 12p + 24q adalah...",
    o: ["15", "20", "25", "30", "35"],
    a: 3,
    e: "12p+24q = 12(p+2q) = 12×5/2 = 30.",
  },

  {
    c: "MATEMATIKA",
    q: "Jika a = 4 dan b = 9, berapakah nilai dari (a^(-1/2) * b^(3/2)) / (a^2 * b^(-1)) ?",
    o: ["27/16", "243/16", "243/32", "81/32", "9/16"],
    a: 2,
    e: "Penyederhanaan menghasilkan (b/a)^(5/2) = (9/4)^(5/2) = 243/32.",
  },

  {
    c: "MATEMATIKA",
    q: "Bentuk penyederhanaan dari √((x^3y)^2) × ∛((xy^2)^3) adalah...",
    o: ["x^2y^3", "x^4y^3", "x^3y^4", "x^4y^4", "x^3y^3"],
    a: 1,
    e: "Hasilnya (x^3y)(xy^2)=x^4y^3.",
  },

  {
    c: "MATEMATIKA",
    q: "Jika 1/x + y = 4 dan 1/y + x = 2/3 dengan x,y > 0, maka nilai y/x adalah...",
    o: ["6", "1/6", "3", "1/3", "12"],
    a: 0,
    e: "Dari penyamaan diperoleh 4x=(2/3)y sehingga y/x=6.",
  },

  {
    c: "MATEMATIKA",
    q: "Jika x^2 + y^2 = 58 dan xy = 21, maka nilai x + y adalah...",
    o: ["8", "9", "10", "11", "12"],
    a: 2,
    e: "(x+y)^2 = 58 + 42 = 100 sehingga x+y = 10.",
  },

  {
    c: "MATEMATIKA",
    q: "Jika diketahui (a^2b^3)^3 = 64 dan ab = 2, maka nilai b adalah...",
    o: ["1", "2", "4", "1/2", "8"],
    a: 0,
    e: "Dari a²b³=4 dan ab=2 diperoleh b=1.",
  },

  {
    c: "MATEMATIKA",
    q: "Jika f(x) = 3x - 5 dan f(g(x)) = 6x + 4, maka nilai g(2) adalah...",
    o: ["5", "7", "9", "11", "13"],
    a: 1,
    e: "g(x)=2x+3 sehingga g(2)=7.",
  },

  {
    c: "MATEMATIKA",
    q: "Jika k = (24/45) + (12/15) - (2/5), nilai desimal k yang paling mendekati adalah...",
    o: ["0,84", "0,93", "0,96", "1,04", "1,12"],
    a: 1,
    e: "Nilai k = 14/15 = 0,9333...",
  },

  {
    c: "MATEMATIKA",
    q: "Jika a < 5b dan b < 2c dengan a,b,c bilangan bulat positif, hubungan yang pasti benar adalah...",
    o: [
      "a < 10c",
      "a > 10c",
      "a = 10c",
      "a < 7c",
      "Hubungan a dan c tidak dapat ditentukan",
    ],
    a: 0,
    e: "Karena a<5b dan 5b<10c maka a<10c.",
  },

  {
    c: "MATEMATIKA",
    q: "Persamaan kuadrat x² - 6x + 8 = 0 memiliki akar x₁ dan x₂. Persamaan baru yang akar-akarnya 2x₁ dan 2x₂ adalah...",
    o: [
      "x² - 12x + 16 = 0",
      "x² - 12x + 32 = 0",
      "x² - 6x + 32 = 0",
      "x² - 12x + 24 = 0",
      "x² - 24x + 32 = 0",
    ],
    a: 1,
    e: "Substitusi menghasilkan persamaan x² - 12x + 32 = 0.",
  },

  {
    c: "MATEMATIKA",
    q: "Jika x = √4444 dan y = 66, maka hubungan yang benar adalah...",
    o: ["x > y", "x < y", "x = y", "x² < y", "Hubungan tidak dapat ditentukan"],
    a: 0,
    e: "Karena 4444 > 4356 maka x > y.",
  },

  {
    c: "MATEMATIKA",
    q: "Jika selisih a - b = 3 dan a² - b² = 21, maka nilai a + b adalah...",
    o: ["5", "6", "7", "8", "9"],
    a: 2,
    e: "21 = (a-b)(a+b) = 3(a+b), sehingga a+b = 7.",
  },

  {
    c: "MATEMATIKA",
    q: "Nilai dari (99² - 1) / 98 adalah...",
    o: ["98", "99", "100", "101", "102"],
    a: 2,
    e: "(99²-1²)=(99-1)(99+1)=98×100 sehingga hasilnya 100.",
  },
];

let questions = [];
let userAnswers = [];
let currentIndex = 0;
let timerInterval;
let timeLeft = 90 * 60;

async function startSimulation() {
  const name = document.getElementById("userName").value.trim();
  const region = document.getElementById("userRegion").value.trim();
  const phone = document.getElementById("userPhone").value.trim();
  const prodi = document.getElementById("userProdi").value;

  if (!name || !region || !phone || !prodi) {
    return alert(
      "Peringatan: Harap lengkapi Formulir Pendaftaran terlebih dahulu!",
    );
  }

  const result = await saveParticipant(name, region, phone, prodi);
  console.log("Response Apps Script:", result);
  if (!result.success) {
    return alert("Gagal terhubung ke Google Spreadsheet");
  }

  if (result.exists) {
    alert("Nomor WA sudah pernah terdaftar.");
  }

  document.getElementById("participant-name").innerText = name.toUpperCase();

  document.getElementById("participant-prodi").innerText =
    `Asal: ${region} | Prodi: ${prodi}`;

  questions = [...sourceQuestions].sort(() => Math.random() - 0.5);

  userAnswers = new Array(questions.length).fill(null);

  document.getElementById("login-screen").classList.add("hidden");

  document.getElementById("quiz-screen").classList.remove("hidden");

  renderGrid();
  loadQuestion();
  startTimer();
}

function startTimer() {
  const timerDisplay = document.getElementById("timer-display");
  timerInterval = setInterval(() => {
    timeLeft--;
    let mins = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;
    timerDisplay.innerText = `${mins}:${secs < 10 ? "0" : ""}${secs}`;

    // Animasi merah berkedip jika waktu kurang dari 10 menit (600 detik)
    if (timeLeft <= 600) timerDisplay.classList.add("warning");

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert(
        "WAKTU HABIS! Sistem akan mengumpulkan lembar jawaban Anda secara otomatis.",
      );
      showResults();
    }
  }, 1000);
}

function triggerFadeAnimation() {
  const section = document.getElementById("q-animator");
  section.style.animation = "none";
  section.offsetHeight; /* trigger reflow */
  section.style.animation = "fadeIn 0.4s ease-in-out";
}

function loadQuestion() {
  triggerFadeAnimation();
  const q = questions[currentIndex];
  document.getElementById("q-category").innerText = q.c;
  document.getElementById("q-number").innerText =
    `Soal ${currentIndex + 1} / ${questions.length}.`;
  document.getElementById("q-text").innerText = q.q;

  const container = document.getElementById("options-container");
  container.innerHTML = "";
  q.o.forEach((opt, idx) => {
    const btn = document.createElement("div");
    btn.className = "option";
    if (userAnswers[currentIndex] === idx) btn.classList.add("selected");
    btn.innerText = opt;
    btn.onclick = () => {
      userAnswers[currentIndex] = idx;
      loadQuestion(); // re-render option highlights
      renderGrid();
    };
    container.appendChild(btn);
  });

  document.getElementById("btn-prev").disabled = currentIndex === 0;
  document.getElementById("btn-next").disabled =
    currentIndex === questions.length - 1;
  updateGridHighlight();
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  }
}
function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion();
  }
}

function renderGrid() {
  const grid = document.getElementById("question-grid");
  grid.innerHTML = "";
  questions.forEach((_, idx) => {
    const box = document.createElement("div");
    box.className = "grid-item";
    box.innerText = idx + 1;
    if (userAnswers[idx] !== null) box.classList.add("answered");
    box.onclick = () => {
      currentIndex = idx;
      loadQuestion();
    };
    grid.appendChild(box);
  });
  updateGridHighlight();
}

function updateGridHighlight() {
  document.querySelectorAll(".grid-item").forEach((box, idx) => {
    idx === currentIndex
      ? box.classList.add("active")
      : box.classList.remove("active");
  });
}

function confirmSubmit() {
  const kosong = userAnswers.filter((a) => a === null).length;
  let pesan =
    kosong > 0
      ? `PERINGATAN: Terdapat ${kosong} soal yang BELUM DIJAWAB.\n\nApakah Anda yakin ingin menyelesaikan ujian sekarang?`
      : "Apakah Anda yakin ingin mengumpulkan lembar jawaban?";
  if (confirm(pesan)) {
    clearInterval(timerInterval);
    showResults();
  }
}
async function saveScore(phone, score) {
  await fetch(SHEET_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "score",
      phone: phone,
      score: score,
    }),
  });
}
function showResults() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");
  window.scrollTo(0, 0);

  let totalBenar = 0;
  let kategoriStats = {};
  const container = document.getElementById("review-container");

  questions.forEach((q, i) => {
    // Setup Kalkulasi Kategori
    if (!kategoriStats[q.c]) kategoriStats[q.c] = { total: 0, benar: 0 };
    kategoriStats[q.c].total++;

    // Pengecekan Jawaban
    let isBenar = userAnswers[i] === q.a;
    if (isBenar) {
      totalBenar++;
      kategoriStats[q.c].benar++;
    }
    const finalScore = totalBenar;
    saveScore(userPhone, finalScore);
    let textJawab =
      userAnswers[i] !== null
        ? q.o[userAnswers[i]]
        : "<span style='color: #95a5a6;'>Tidak ada jawaban (Kosong)</span>";

    // Cetak Review Soal
    container.innerHTML += `
                <div class="result-item">
                    <div style="font-size: 1.1em; color: var(--text-main);"><b>${i + 1}. ${q.q}</b></div>
                    <div class="category-badge" style="margin-top: 10px;">${q.c}</div>
                    <div style="margin-top: 10px;">Jawaban Anda: <span class="${isBenar ? "correct-answer" : "wrong-answer"}">${textJawab}</span></div>
                    ${!isBenar ? `<div class="correct-answer">Kunci Jawaban: ${q.o[q.a]}</div>` : ""}
                    <div class="explanation"><b>Pembahasan:</b><br> ${q.e}</div>
                </div>`;
  });

  // Hitung Nilai Skala 100
  let nilaiAkhir = (totalBenar / questions.length) * 100;
  document.getElementById("final-score-text").innerText = nilaiAkhir.toFixed(2);

  // Cetak Tabel Statistik
  const tableBody = document.getElementById("stats-table-body");
  for (let kat in kategoriStats) {
    let data = kategoriStats[kat];
    let akurasi = ((data.benar / data.total) * 100).toFixed(0);
    tableBody.innerHTML += `
                <tr>
                    <td style="font-weight: bold;">${kat}</td>
                    <td>${data.total}</td>
                    <td style="color: var(--polbangtan-main); font-weight: bold;">${data.benar}</td>
                    <td>${akurasi}%</td>
                </tr>
            `;
  }
}
async function saveParticipant(name, region, phone, prodi) {
  const response = await fetch(SHEET_API, {
    method: "POST",
    body: JSON.stringify({
      name,
      region,
      phone,
      prodi,
    }),
  });

  return await response.json();
}
