import type { Surah } from "../../types/surah"
import ChevronRight from '../../assets/ChevronRightIcon.svg'

type DetailSurahProps = {
  surah:Surah
}

const DetailSurahInfo = ({surah}: DetailSurahProps) => {
  return(
    <div className="bg-[url('src/assets/AyatBackgroundImage.png')] relative ">
      <div className="flex flex-col gap-2 mb-8">
        <p>{surah.namaLatin}</p>
        <p>{surah.arti}</p>
        <hr />
        <p>{surah.tempatTurun} - {surah.jumlahAyat} Ayat</p>
      </div>
      <div>Tentang Surah {surah.namaLatin}</div>
    </div>
  )
}

export default DetailSurahInfo