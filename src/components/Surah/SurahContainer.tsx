import { useState, useEffect } from "react";
import SurahList from "./SurahList";
import type { Surah } from "../../types/surah";

const SurahContainer = () => {
  const [surahs, setSurahs] = useState<Surah[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSurahs = async () => {
      try{
        const response = await fetch('https://equran.id/api/v2/surat')
        if(!response.ok){
          throw new Error('Failed to fetch surah')
        }
        const data = await response.json()
        setSurahs(data.data)
        setIsLoading(false)
      } catch(error){
        setError(error instanceof Error ? error.message : "Unknown Error")
        setIsLoading(false)
      }
    }
    fetchSurahs()
  }, [])

  if(isLoading){
    <p>Loading...</p>
  }
  if(error){
    <p>Error</p>
  }

  return(
    <div className="p-5">
      <SurahList surahs={surahs}/>
    </div>
  )
}

export default SurahContainer