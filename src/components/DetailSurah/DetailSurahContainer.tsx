import type { Surah } from "../../types/surah";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import DetailSurah from "./DetailSurah";

const DetailSurahContainer = () => {
  const { surahId } = useParams<{ surahId: string }>()
  const [surah, setSurah] = useState<Surah | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [currentReciter, setCurrentReciter] = useState("01")
  const [audioPlaying, setAudioPlaying] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const fetchSurah = async () => {
      try{
        setIsLoading(true)
        const response = await fetch(
          `https://equran.id/api/v2/surat/${surahId}`
        )
        if(!response.ok){
          throw new Error('Failed to fetch surah')
        }
  
        const data = await response.json()
        setSurah(data.data)
        setIsLoading(false)
      } catch(error){
        setError(error instanceof Error ? error.message : "Unknown Error")
      } finally{
        setIsLoading(false)
      }
    } 
    fetchSurah()
  }, [surahId])

  useEffect(() => {
    return () => {
      if(audioRef.current){
        audioRef.current.pause()
        audioRef.current.src = ''
      }
    }
  }, [])

  const changeReciter = (reciterId: string) => {
    setCurrentReciter(reciterId)

    if(audioPlaying){
      handlePauseSurah()

      setTimeout(() => {
        handlePlaySurah()
      }, 100)
    }
  }

  const handlePlaySurah = () => {
    if(!surah) return 

    if(audioRef.current){
      audioRef.current.pause()
    }

    audioRef.current = new Audio(surah.audioFull[currentReciter])

    audioRef.current.onended = () => {
      setAudioPlaying(false)
    }

    audioRef.current.play
    setAudioPlaying(true)
  }

  const handlePauseSurah = () => {
    if(audioRef.current){
      audioRef.current.pause()
    }
    setAudioPlaying(false)
  }

  if(isLoading){
    <p className="text-center">loading...</p>
  }

  if(error || !surah){
    return(
    <div className="text-center text-red-500 font-bold">
      Error: {error || "Surah tidak ditemukan!"}
    </div>
    )
  }

  return(
    <div>
      <DetailSurah 
        surah={surah}
        currentReciter={currentReciter}
        changeReciter={changeReciter}
        onPlay={handlePlaySurah}
        onPause={handlePauseSurah}
        audioPlaying={audioPlaying}
      />
    </div>
  )
}

export default DetailSurahContainer