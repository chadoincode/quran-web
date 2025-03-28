import Profile from "./Profile";
import DailyVerseCard from "./DailyVerse";
import Photo from '../assets/download.jpg'

const Hero = ({}) => {
  return(
    <div className="relative">
      <div className=" w-full top-0 left-0 bg-[url('src/assets/HeroBackgroundImage.png')] bg-cover bg-center bg-no-repeat h-60 rounded-b-2xl">
        <div className="relative rounded-b-2xl px-5 pt-8 flex flex-col gap-8">
          <Profile 
            greeting='Good Morning' 
            name='Ayesha' 
            avatar={Photo}
          />
          <DailyVerseCard 
            verse='“He said: ‘Therein you shall live, and therein you shall die, and from it you shall be brought out (i.e. resurrected)."'
            surah='Al-A’raaf (7:25)'
          />
        </div>
      </div>

    </div>
  )
}

export default Hero