import React from 'react'

export default function Footer() {
    return (
        <footer className="max-w-full bg-gray-900 text-gray-300 mt-4">
            <div className="max-w-6xl mx-auto">

                {/* Top Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                    {/* Brand Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Movie Explorer</h2>
                        <p className="text-gray-400">
                            Explore movies, ratings, and details instantly.
                            Your personal mini IMDB!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-white cursor-pointer">Home</li>
                            <li className="hover:text-white cursor-pointer">Top Movies</li>
                            <li className="hover:text-white cursor-pointer">Upcoming</li>
                            <li className="hover:text-white cursor-pointer">Genres</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Contact</h3>
                        <p className="text-gray-400">Email: support@movies.com</p>
                        <p className="text-gray-400">Phone: +91 98765 43210</p>
                    </div>

                </div>

                {/* Bottom Line */}
                <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
                    © {new Date().getFullYear()} Movie Explorer — All Rights Reserved.
                </div>

            </div>
        </footer>
    )
}
