import type { Ayat } from "../../types/surah";
import Number from "../Number";

type AyatCardProps = {
  ayat: Ayat;
}

const AyatCard = ({ayat}: AyatCardProps) => {
  return(
    <div className="bg-dark rounded-lg text-light text-left p-4 flex flex-col gap-4">
      <div className="flex justify-between gap-4">
        <Number nomor={ayat.nomorAyat}/>
        <p className="text-light text-lg">{ayat.teksArab}</p>
      </div>
      <p className="text-light text-sm">{ayat.teksLatin}</p>
      <p className="text-subtle text-sm">{ayat.teksIndonesia}</p>
    </div>
  )
}

export default AyatCard