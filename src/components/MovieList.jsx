import React, { useEffect, useState } from 'react'

export default function MovieList({ movies, playMovie }) {
    return (
        <ul>{movies.map((movie, index) => (
            <li key={index} path={movie.path} onClick={() => playMovie(movie)}>{movie.name}</li>
        ))}</ul>
    )
}