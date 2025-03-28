import PlayButton from '../assets/PlayButton.png'
import PauseButton from '../assets/PauseButton.png'

type AudioControlProps = {
  currentReciter: string,
  audioPlaying: boolean,
  changeReciter: (reciterId: string) => void,
  onPlay: () => void,
  onPause: () => void,
}

const AudioControl = ({
  currentReciter, 
  audioPlaying, 
  changeReciter, 
  onPlay, 
  onPause
}: AudioControlProps) => {
  const reciters = [
    {id: "01", name: "Abdullah Al-Juhany"},
    {id: "02", name: "Abdul  Musim Al-Qasim"},
    {id: "03", name: "Abdurrahman as-Sudais"},
    {id: "04", name: "Ibrahim Al-Dossari"},
    {id: "05", name: "Misyari Rasyid Al-Afasi"},
  ]

  return(
    <div>
      <select
        value={currentReciter}
        onChange={(e) => changeReciter(e.target.value)}
        className=''
      >
        {reciters.map((reciter) => (
          <option key={reciter.id} value={reciter.id}>
            {reciter.name}
          </option>
        ))}
      </select>
      <div className=''
        onClick={audioPlaying ? onPause : onPlay}
      >
        {audioPlaying ? (
          <img src={PauseButton} alt="Pause" />
        ) : (
          <img src={PlayButton} alt="Play" />
        )}
      </div>
    </div>
  )
}

export default AudioControl