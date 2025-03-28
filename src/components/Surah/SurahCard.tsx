import { Link } from "react-router";
import type { Surah } from "../../types/surah";
import Number from "../Number";

type SurahCardProps = {
  surah: Surah;
}

const SurahCard = ({surah}: SurahCardProps) => {
  return(
    <Link to={`surah/${surah.nomor}`}>
      <div className="bg-dark rounded-lg p-4 flex justify-between gap-3">
        <div className="flex text-left gap-3">
          <Number nomor={surah.nomor}/>
          <div className="text-light text-sm md:text-base">
            <p>{surah.namaLatin}</p>
            <p className="text-subtle text-xs md:text-sm">{surah.arti}</p>
            <p className="text-subtle text-xs md:text-sm">{surah.tempatTurun} - {surah.jumlahAyat} Ayat</p>
          </div>
        </div>
        <p className="text-primary text-lg md:text-2xl">{surah.nama}</p>
      </div>
    </Link>
  )
}

export default SurahCard