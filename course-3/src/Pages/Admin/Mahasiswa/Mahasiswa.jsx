import { useNavigate } from "react-router-dom";

import Card from "@/Pages/Admin/Components/Card";
import Heading from "@/Pages/Admin/Components/Heading";
import Button from "@/Pages/Admin/Components/Button";

import { mahasiswaList } from "@/Data/Dummy";

const Mahasiswa = () => {
  const navigate = useNavigate();
  const handleEdit = (nama) => alert(`Edit data ${nama}`);
  const handleDelete = (nama) => {
    if (confirm(`Yakin ingin hapus ${nama}?`)) alert("Data berhasil dihapus!");
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <Heading as="h2" className="mb-0 text-left">Daftar Mahasiswa</Heading>
        <Button onClick={() => alert("Buka modal tambah")}>+ Tambah Mahasiswa</Button>
      </div>

      <table className="w-full text-sm text-gray-700">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-2 px-4 text-left">NIM</th>
            <th className="py-2 px-4 text-left">Nama</th>
            <th className="py-2 px-4 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswaList.map((mhs, index) => (
            <tr
              key={mhs.nim}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="py-2 px-4">{mhs.nim}</td>
              <td className="py-2 px-4">{mhs.nama}</td>
              <td className="py-2 px-4 text-center space-x-2">
                <Button
                  onClick={() => navigate(`/admin/mahasiswa/${mhs.nim}`)}
                >
                  Detail
                </Button>
                <Button
                  size="sm"
                  variant="warning"
                  onClick={() => handleEdit(mhs.nama)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDelete(mhs.nama)}
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default Mahasiswa;