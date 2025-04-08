import { useState, useEffect } from 'react';
const emptyMovie = { path: '', name: '' }

export default function useMovies() {
    const [movies, setMovies] = useState([]);
    const [playingMovie, setPlayingMovie] = useState(emptyMovie);
    const [show, setShow] = useState(true)

    useEffect(() => {
        window.ps.getMovies().then(ms => {
            let js = JSON.parse(ms)
            setMovies(js)
            if (js.length > 0) {
                setPlayingMovie(js[0])
            }
        })
    }, [])

    const playMovie = (movie) => setPlayingMovie(movie)
    const toggle = () => {
        let ml = document.querySelector('ul')
        let tb = document.querySelector('span')
        if (show) {
            ml.style.display = 'none'
            tb.style.right = '0px'
            tb.innerHTML = '='
        }
        else {
            ml.style.display = 'block'
            tb.style.right = '185px'
            tb.innerHTML = '&gt;'
        }
        setShow(!show)
    }

    return { movies, playMovie, playingMovie, toggle }
}