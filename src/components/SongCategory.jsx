import { songsData } from "../lib/songs-data";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SongCard from "./SongCard";
export default function SongCategory(props) {
  const categoryData = songsData[`${props.category}`];
  return (
    <>
      <Navbar />
      <div id={props.category} className="container px-5 py-10 mx-auto mb-20">
        <h1 className="text-left sm:text-4xl text-3xl mt-4 font-medium title-font text-gray-900 mb-4 border-solid border-b-2 border-slate-300">
          {props.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-center">
          {categoryData.map((song, index) => (
            <SongCard key={song.id} {...song}></SongCard>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
