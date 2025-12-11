const mahasiswa = {
    nim: "22001",
    nama: "Budi Santoso",
    status: true,
    matkul: [{ matkulId: "MK001", tugas: 85, uts: 88, uas: 90 }]
};

const mahasiswaList = [
    { nim: "22001", nama: "Budi Santoso", status: true },
    { nim: "22002", nama: "Siti Aminah", status: false }
];

// 1. Destructuring Assignment
const { tahunAjar, mataKuliah } = mataKuliahList;
console.log(tahunAjar, mataKuliah);

const [mk1, mk2] = mataKuliahList.mataKuliah;
console.log(mk1, mk2);

const { nama, status } = mahasiswa;
console.log(nama, status);

// 2. Spread Operator (...)
const newMatkul = { kode: "MK004", nama: "Sistem Operasi", sks: 3, tugasP: 25, utsP: 35, uasP: 40 };

const updatedMataKuliah = { ...mataKuliahList, mataKuliah: [...mataKuliahList.mataKuliah, newMatkul] };

console.log(updatedMataKuliah);

// 3. Template Literals (${})
const summary = `${nama} adalah mahasiswa aktif: ${status}.`;
console.log(summary);

// 4. Arrow Functions (=>)
const getMatkulName = (kode) => mataKuliahList.mataKuliah.find((m) => m.kode === kode).nama;
console.log(getMatkulName("MK001"));

// 5. Ternary Operator (? :)
const statusMahasiswa = mahasiswaList.mahasiswa[0].status ? "Aktif" : "Tidak Aktif";
console.log(`${mahasiswaList.mahasiswa[0].nama} berstatus ${statusMahasiswa}`);

// 6. Logical Operators (&&, ||)
const mahasiswa = mahasiswaList.mahasiswa[0];
mahasiswa.status && console.log(`${mahasiswa.nama} masih aktif`);

const organisasi = mahasiswa.organisasi || "Tidak ada organisasi";
console.log(organisasi);

// 7. Falsy & Truthy Values
console.log(0 && "Mahasiswa tidak aktif"); // Tidak ditampilkan
console.log(true || "Mahasiswa terdaftar"); // Output: true

// 8. Array Methods (map, filter, reduce)
const namaMahasiswa = mahasiswaList.mahasiswa.map((m) => m.nama);
console.log(namaMahasiswa);

const mahasiswaAktif = mahasiswaList.mahasiswa.filter((m) => m.status);
console.log(mahasiswaAktif);

const totalSKS = mataKuliahList.mataKuliah.reduce((total, m) => total + m.sks, 0);console.log(`Total SKS: ${totalSKS}`);

// 9. Sorting dengan sort()
const sortedByNIM = mahasiswaList.mahasiswa.slice().sort((a, b) => a.nim.localeCompare(b.nim));
console.log(sortedByNIM);

// 10. Manipulasi Data (Add, Update, Delete)
const addMahasiswa = (newMhs) => mahasiswaList.mahasiswa.push(newMhs);
addMahasiswa({
		nim: "22003",
		nama: "Andi Setiawan",
		status: true,
		matkul: [{ matkulId: "MK002", tugas: 90, uts: 85, uas: 80 }]
});
console.log(mahasiswaList);

const updateMahasiswa = (nim, dataBaru) => {

		mahasiswaList.mahasiswa = mahasiswaList.mahasiswa.map((m) =>
			m.nim === nim ? { ...m, ...dataBaru } : m
		);
};
updateMahasiswa("22001", { status: false });
console.log(mahasiswaList);

const deleteById = (nim) => {
	mahasiswaList.mahasiswa = mahasiswaList.mahasiswa.filter((m) =>
	m.nim !== nim);
};
deleteById("22002");
console.log(mahasiswaList);