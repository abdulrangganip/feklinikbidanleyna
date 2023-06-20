const FormReservasi = () => {
  return (
    <div className="card bg-white">
      <div className="card-body flex flex-col">
        <p className="font-bold text-xl text-center">Reservasi Pelayanan</p>
        <hr />

        <label>Nama Lengkap</label>
        <input
          placeholder="masukan nama anda"
          type="text"
          className="input input-bordered w-full max-w82xl"
        />

        <label>No Telp</label>
        <input
          placeholder="masukan no telp"
          type="text"
          className="input input-bordered w-full max-w-8xl"
        />

        <label>No NIK</label>
        <input
          placeholder="masukan no nik"
          type="text"
          className="input input-bordered w-full max-w-8xl"
        />

        <div className="grid grid-cols-2 gap-x-3">
          <div className="flex flex-row gap-x-3">
            <label className="pt-3">Pilih Pelayanan</label>
            <select className="select select-bordered w-full max-w-md">
              <option disabled selected>
                --- Kategori Layanan ---
              </option>
              <option>Keluarga Berencana</option>
              <option>Kehamilan</option>
              <option>Melahirkan</option>
              <option>Imunisasi</option>
            </select>
          </div>
          <div className="flex flex-row gap-x-3">
            <label className="pt-3">Pilih Jadwal</label>
            <input
              placeholder="masukan nama anda"
              type="date"
              className="input input-bordered w-full max-w-lg ml-6"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <button className="btn btn-primary">SIMPAN</button>
        </div>
      </div>
    </div>
  );
};

export default FormReservasi;
