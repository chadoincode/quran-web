type VerseProps = {
  verse: string;
  surah: string;
}

const DailyVerseCard = ({verse, surah}: VerseProps) => {
  return(
    <div className="bg-[url(./assets/VerseBackgroundImage.png)] p-4 bg-no-repeat min-h-[155px] 
      rounded-2xl bg-cover text-left flex flex-col col-span-4 justify-between">
      <div >
        <p className="text-xs md:text-base text-subtle">📖 Your Daily Verse</p>
        <p className="font-semibold text-sm md:text-xl text-light">{verse}</p>
      </div>
      <p className="text-sm md:text-base text-light">{surah}</p>
    </div>
  )
}

export default DailyVerseCard