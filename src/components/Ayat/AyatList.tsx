import type { Ayat } from "../../types/surah";
import AyatCard from "./AyatCard";

type AyatListProps = {
  ayats: Ayat[]
}

const AyatList = ({ayats}: AyatListProps) => {
  return(
    <div>
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