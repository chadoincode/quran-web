import type { Ayat } from "../../types/surah";
import AyatCard from "./AyatCard";

type AyatListProps = {
  ayats: Ayat[]
}

const AyatList = ({ayats}: AyatListProps) => {
  return(
    <div className="flex flex-col gap-3 p-5 pt-0">
      {ayats.map((ayat) => (
        <AyatCard 
          key={ayat.nomorAyat}
          ayat={ayat}
        />
      ))}
    </div>
  )
}

export default AyatList