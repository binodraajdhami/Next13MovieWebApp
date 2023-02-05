import MovieCard from "./MovieCard";

export default function MovieList() {

    let movieList = [
        {
            title: "Benched",
            slug: 'benched',
            category: "Comedy",
            rating: 7.1,
            image: "/images/movie_poster_1.jpg"
        },
        {
            title: "Whitney",
            slug: 'whitney',
            category: "Romance Drama",
            rating: 6.3,
            image: "/images/movie_poster_2.jpg"
        },
        {
            title: "Blind Spotting",
            slug: 'blind-spotting',
            category: "Comedy Drama",
            rating: 7.9,
            image: "/images/movie_poster_3.jpg"
        },
        {
            title: "I Dream in Another Language",
            slug: 'i-dream-in-another-language',
            category: "Action Triler",
            rating: 8.4,
            image: "/images/movie_poster_4.jpg"
        }
    ];

    return (
        <div className="row">
            {
                movieList.map((item, index) => {
                    return (
                        <div key={index} className="col-sm-3">
                            <MovieCard title={item.title} slug={item.slug} category={item.category} rating={item.rating} src={item.image} />
                        </div>
                    );
                })
            }
        </div>
    );
}