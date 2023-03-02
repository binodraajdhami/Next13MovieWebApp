"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

import MovieDiscoverRelated from "@/app/components/MovieDiscoverRelated";
import CommentsList from "@/app/components/CommentsList";
import ReviewsList from "@/app/components/ReviewsList";
import PhotosList from "@/app/components/PhotosList";

export default function MovieDetails() {
    const [activeTab, setActiveTab] = useState('comments');
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} className="content movie-details-content">
            <div className="movie-details">
                <div className="container">
                    <h2>I Dream in Another Language</h2>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="new-releases-item">
                                <div>
                                    <div className="new-releases-item-thumbnail">
                                        <div className="movie-card-thumbnail">
                                            <img src="/images/movie_poster_1.jpg" alt="" />
                                            <Link href="/movies/movie-details" className="movie-link">
                                                <span>View Details</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="new-releases-item-content">
                                        <ul className="rating-info">
                                            <li><img src="/images/star.svg" alt="" /> 7.1</li>
                                            <li>FHD</li>
                                            <li>18+</li>
                                        </ul>
                                        <ul className="movie-type">
                                            <li>Genre: <span>Action, Triler</span></li>
                                            <li>Release year: 2017</li>
                                            <li>Running time: 120 min</li>
                                            <li>Country: <span>USA</span></li>
                                        </ul>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="movie-trailler">
                                <iframe width="100%" height="290" src="https://www.youtube.com/embed/TcMBFSGVi1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="movie-discover">
                <div className="container">
                    <h2>Discover</h2>
                    <div className="movie-discover-tabs-button">
                        <ul>
                            <li>
                                <button
                                    className={activeTab === 'comments' ? 'active' : ''}
                                    onClick={() => setActiveTab('comments')}
                                >
                                    COMMENTS
                                </button>
                            </li>
                            <li>
                                <button
                                    className={activeTab === 'reviews' ? 'active' : ''}
                                    onClick={() => setActiveTab('reviews')}
                                >
                                    REVIEWS
                                </button>
                            </li>
                            <li>
                                <button
                                    className={activeTab === 'photos' ? 'active' : ''}
                                    onClick={() => setActiveTab('photos')}
                                >
                                    PHOTOS
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="movie-discover-tabs-content">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className={activeTab === 'comments' ? 'movie-discover-tabs-item active' : 'movie-discover-tabs-item'}>
                                    <CommentsList />
                                </div>
                                <div className={activeTab === 'reviews' ? 'movie-discover-tabs-item active' : 'movie-discover-tabs-item'}>
                                    <ReviewsList />
                                </div>
                                <div className={activeTab === 'photos' ? 'movie-discover-tabs-item active' : 'movie-tabs-item'}>
                                    <PhotosList />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="movie-discover-related">
                                    <h3>You may also like...</h3>
                                    <MovieDiscoverRelated />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    );
}