import MovieBanner from "./components/MovieBanner";
import MoviePremiere from "./components/MoviePremiere";
import MovieTabsShow from "./components/MovieTabsShow";

export default function Home() {
    return (
        <>
            <MovieBanner />
            <MovieTabsShow />
            <MoviePremiere />
        </>
    );
}
