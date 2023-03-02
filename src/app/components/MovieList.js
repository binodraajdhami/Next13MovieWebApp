
"use client"
import Slider from "react-slick";
import MovieCard from "./MovieCard";

export default function MovieList() {
    const BannerSliders = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        speed: 3000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        cssEase: "linear"
    };

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
        },
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
        <Slider {...BannerSliders}>
            {
                movieList.map((item, index) => {
                    return (
                        <div key={index} className="item">
                            <MovieCard title={item.title} slug={item.slug} category={item.category} rating={item.rating} src={item.image} />
                        </div>
                    );
                })
            }
        </Slider>
    );
}