import type { Surah } from "../../types/surah";
import AudioControl from "../AudioControl";
import DetailSurahInfo from "./DetailSurahInfo";
import AyatList from "../Ayat/AyatList";

type DetailSurahProps = {
  surah: Surah,
  currentReciter: string,
  changeReciter: (reciterId: string) => void,
  onPlay: () => void,
  onPause: () => void,
  audioPlaying: boolean,
}

const DetailSurah = ({
  surah, 
  currentReciter, 
  changeReciter, 
  onPlay, 
  onPause, 
  audioPlaying
}: DetailSurahProps) => {
  return(
    <div>
      <DetailSurahInfo surah={surah}/>
      <AudioControl 
        currentReciter={currentReciter}
        changeReciter={changeReciter}
        onPlay={onPlay}
        onPause={onPause}
        audioPlaying={audioPlaying}
      />
      <AyatList ayats={surah.ayat}/>
    </div>
  )
}

export default DetailSurah