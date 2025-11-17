import React, { useEffect, useState } from "react";

function MovieSkeleton() {
    return (
        <div className="bg-gray-800 p-4 rounded-xl animate-pulse">
            <div className="w-full h-64 bg-gray-700 rounded-lg"></div>
            <div className="h-4 bg-gray-700 rounded mt-4 w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded mt-3 w-1/2"></div>
        </div>
    );
}
export default MovieSkeleton