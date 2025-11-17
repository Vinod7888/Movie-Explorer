import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center px-6 py-16">
            <div className="max-w-4xl mx-auto text-center space-y-6">

                {/* Heading */}
                <h1 className="text-4xl font-bold text-blue-400">
                    About Movie Explorer
                </h1>

                {/* Small line */}
                <div className="w-20 mx-auto h-1 bg-blue-400 rounded-full"></div>

                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed">
                    Movie Explorer is a simple and beautiful movie search application
                    created using React and the OMDB API.
                    You can search for your favourite movies, check their details including
                    posters, release year, ratings, and much more.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    Our goal is to provide you a clean and easy-to-use interface so you can
                    explore movies quickly without any distractions.
                </p>

                {/* Features card */}
                <div className="grid gap-6 mt-10">

                    <div className="p-6 bg-gray-800 rounded-xl shadow-md">
                        <Link to={"/"}>
                            <h3 className="text-xl font-semibold text-blue-300">🎬 Search Movies</h3>
                        </Link>
                        <p className="text-gray-400 text-sm mt-2">
                            Find movies instantly using the OMDB database.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}
