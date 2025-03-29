import { Link } from "react-router";
import DetailSurahContainer from "../components/DetailSurah/DetailSurahContainer";

const DetailSurahPage = () => {
  return(
    <>
      <div className="text-left p-5">
        <Link to="/" className="text-light">
          ← Daftar Surah
        </Link>
      </div>
      <DetailSurahContainer />
    </>
  )
}

export default DetailSurahPage