import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import MoviePlayer from './components/MoviePlayer';
import MovieList from './components/MovieList';
import useMovies from './hooks/useMovies'
import ToggleListButton from './components/ToggleListButton';
import "./App.css"

export default function App() {
  const { movies, playMovie, playingMovie, toggle } = useMovies()

  return (
    <>
      <ToggleListButton toggle={toggle}></ToggleListButton>
      <MoviePlayer playingMovie={playingMovie}></MoviePlayer>
      <MovieList movies={movies} playMovie={playMovie}></MovieList>
    </>
  )
}