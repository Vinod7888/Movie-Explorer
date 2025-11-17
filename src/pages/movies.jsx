import React, { useEffect, useState } from "react";
import MovieSkeleton from "./MovieSkeleton";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);



    const fetchAllMovies = async () => {
        let allMovies = [];
        for (let p = 1; p <= 10; p++) {
            setLoading(true);
            const res = await fetch(
                `http://www.omdbapi.com/?apikey=3d33f7ad&s=movie&page=${p}`
            );
            const data = await res.json(); console.log(data)
            if (data.Search) {
                allMovies = [...allMovies, ...data.Search];
            }
            setLoading(false);
        }
        setMovies(allMovies);
    };

    useEffect(() => {
        fetchAllMovies();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Popular Movies (100)</h1>



            {/* Skeletons when loading */}
            {loading ? (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <MovieSkeleton key={index} />
                    ))}
                </div>
            ) : (
                // Movies Grid
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {movies.map((movie) => (
                        <div
                            key={movie.imdbID}
                            className="bg-gray-800 p-4 rounded-xl shadow-md"
                        >
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <h2 className="text-lg font-semibold mt-3">{movie.Title}</h2>
                            <p className="text-gray-400 text-sm">{movie.Year}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
