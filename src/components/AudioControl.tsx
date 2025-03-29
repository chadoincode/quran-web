import PlayIcon from '../assets/PlayIcon.svg'
import PauseIcon from '../assets/PauseIcon.svg'

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
    <div className='mx-5 flex justify-between text-light gap-4 items-center my-5'>
      <select
        value={currentReciter}
        onChange={(e) => changeReciter(e.target.value)}
        className='bg-dark rounded-lg p-3 w-full text-light'
      >
        {reciters.map((reciter) => (
          <option key={reciter.id} value={reciter.id}>
            {reciter.name}
          </option>
        ))}
      </select>
      <div className='bg-primary rounded-full p-2.5 cursor-pointer flex justify-center pr-3 items-center'
        onClick={audioPlaying ? onPause : onPlay}
      >
        {audioPlaying ? (
          <img src={PauseIcon} alt="Pause" className='w-fit h-fit'/>
        ) : (
          <img src={PlayIcon} alt="Play" className='w-fit h-fit'/>
        )}
      </div>
    </div>
  )
}

export default AudioControl