import Hero from "../components/Hero";
import SurahContainer from "../components/Surah/SurahContainer";

const HomePage = () => {
  return(
    <div className="flex flex-col gap-8">
      <Hero />
      <SurahContainer />
    </div>
  )
}

export default HomePage