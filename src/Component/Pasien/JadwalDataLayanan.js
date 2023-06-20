const JadwalDataLayanan = () => {
  return (
    <>
      <div className="card grid grid-cols-2 gap-x-3">
        <div className="card-body bg-white border border-black flex flex-row gap-x-3 rounded-lg">
          <p className="p-3">KELUARGA BERENCANA</p>
          <button className="btn btn-success">LIHAT</button>
        </div>
        <div className="card-body bg-white border border-black flex flex-row gap-x-3 rounded-lg">
          <p className="p-3">Kehamilan</p>
          <button className="btn btn-success">LIHAT</button>
        </div>
      </div>
      <div className="card grid grid-cols-2 gap-x-3">
        <div className="card-body bg-white border border-black flex flex-row gap-x-3 rounded-lg">
          <p className="p-3">Melahirkan</p>
          <button className="btn btn-success">LIHAT</button>
        </div>
        <div className="card-body bg-white border border-black flex flex-row gap-x-3 rounded-lg">
          <p className="p-3">Imunisasi</p>
          <button className="btn btn-success">LIHAT</button>
        </div>
      </div>
    </>
  );
};

export default JadwalDataLayanan;
