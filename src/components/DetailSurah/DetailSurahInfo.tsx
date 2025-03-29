import type { Surah } from "../../types/surah"
import ChevronRight from '../../assets/ChevronRightIcon.svg'

type DetailSurahProps = {
  surah:Surah
}

const DetailSurahInfo = ({surah}: DetailSurahProps) => {
  return(
    <div className="bg-[url('/src/assets/AyatBackgroundImage.png')] px-4 py-5 text-light relative rounded-2xl bg-cover mx-5 bg-no-repeat text-left">
      <div className="flex flex-col gap-2 mb-8">
        <p className="md:text-2xl font-bold text-lg">{surah.namaLatin}</p>
        <p className="md:text-sm font-medium text-xs">{surah.arti}</p>
        <hr className="opacity-10" />
        <p className="md:text-lg font-medium text-sm ">{surah.tempatTurun} - {surah.jumlahAyat} Ayat</p>
      </div>
      <div className="bg-accent-light-purple flex items-center px-3 rounded-b-2xl py-1 justify-between absolute bottom-0 left-0 w-full">
        <p className="text-light">Tentang Surah {surah.namaLatin}</p>
        <img src={ChevronRight} alt="Chevron Right" />
      </div>
    </div>
  )
}

export default DetailSurahInfo