import Navbar from "./components/navigation/navbar";
import Carousel from "./components/ui/carousel";
import CategoryGallery from "./components/ui/categoryGallery";
import HighlightCarousel from "./components/ui/highlightCarousel";
import "./styles/global.scss";
function App() {
  return (
    <>
      <main>
        <Carousel />
        <HighlightCarousel title={"Trending"} endpoint={"/trending/movie/week"} />
        <HighlightCarousel title={"Critically acclaimed"} endpoint={"/movie/top_rated"} />
        <HighlightCarousel title={"Must watch series"} endpoint={"/tv/top_rated"} />
        <CategoryGallery />
      </main>
    </>
  );
}

export default App;
