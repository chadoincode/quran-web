import type { Surah } from "../../types/surah"
import ChevronRight from '../../assets/ChevronRightIcon.svg'

type DetailSurahProps = {
  surah:Surah
}

const DetailSurahInfo = ({surah}: DetailSurahProps) => {
  return(
    <div className="bg-[url('src/assets/AyatBackgroundImage.png')] relative rounded-2xl">
      <div className="flex flex-col gap-2 mb-8">
        <p>{surah.namaLatin}</p>
        <p>{surah.arti}</p>
        <hr className="opacity-10" />
        <p>{surah.tempatTurun} - {surah.jumlahAyat} Ayat</p>
      </div>
      <div className="bg-accent-light-purple flex items-center justify-between absolute bottom-0 left-0 w-full">
        <p>Tentang Surah {surah.namaLatin}</p>
        <img src={ChevronRight} alt="Chevron Right" />
      </div>
    </div>
  )
}

export default DetailSurahInfo