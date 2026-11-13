import { useState, useEffect } from "react";
import "./App.css";

const PRODI_CLASS = {
  Informatika: "badge-blue",
  "Sistem Informasi": "badge-violet",
  Manajemen: "badge-amber",
};

const getInitials = (nama) =>
  nama
    .split(" ")
    .map((kata) => kata[0])
    .slice(0, 2)
    .join("");

function App() {
  const [students] = useState([
    { id: 1, nim: "2401001", nama: "Gojo Satoru", noHp: "082536478874", email: "gojo@mail.com", alamat: "Surabaya", prodi: "Informatika", tahun: 2024 },
    { id: 2, nim: "2401002", nama: "Naruto Uzumaki", noHp: "081667890123", email: "naruto@mail.com", alamat: "Lamongan", prodi: "Sistem Informasi", tahun: 2024 },
    { id: 3, nim: "2401003", nama: "Killua Zoldyck", noHp: "081537289012", email: "killua@mail.com", alamat: "Gresik", prodi: "Informatika", tahun: 2024 },
    { id: 4, nim: "2401004", nama: "Eren Yeager", noHp: "081836478874", email: "eren@mail.com", alamat: "Magetan", prodi: "Manajemen", tahun: 2024 },
    { id: 5, nim: "2401005", nama: "Levi Ackerman", noHp: "081436489874", email: "levi@mail.com", alamat: "Nganjuk", prodi: "Informatika", tahun: 2024 },
  ]);

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tanggal = now.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const [jam, menit, detik] = now
    .toLocaleTimeString("id-ID", { hour12: false })
    .split(/[.:]/);

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>Student Management</h1>
            <p className="subheader">Daftar Data Mahasiswa</p>
            <p className="count">
              <strong>{students.length}</strong> mahasiswa terdaftar
            </p>
          </div>

          <div className="clock" aria-live="off">
            <div className="clock-time">
              <span>{jam}</span>
              <i>:</i>
              <span>{menit}</span>
              <i>:</i>
              <span className="clock-sec">{detik}</span>
            </div>
            <div className="clock-date">{tanggal}</div>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="table-card">
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>NIM</th>
                  <th>Nama</th>
                  <th>No. HP</th>
                  <th>Email</th>
                  <th>Alamat</th>
                  <th>Program Studi</th>
                  <th>Tahun Masuk</th>
                </tr>
              </thead>
              <tbody>
                {/* Looping dengan .map(), key unik memakai id */}
                {students.map((mhs) => (
                  <tr key={mhs.id}>
                    <td className="nim">{mhs.nim}</td>
                    <td>
                      <div className="person">
                        <span className="avatar">{getInitials(mhs.nama)}</span>
                        <span className="person-name">{mhs.nama}</span>
                      </div>
                    </td>
                    <td>{mhs.noHp}</td>
                    <td>
                      <a href={`mailto:${mhs.email}`}>{mhs.email}</a>
                    </td>
                    <td>{mhs.alamat}</td>
                    <td>
                      <span className={`badge ${PRODI_CLASS[mhs.prodi] || ""}`}>
                        {mhs.prodi}
                      </span>
                    </td>
                    <td>{mhs.tahun}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;