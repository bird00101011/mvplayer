import React, { useEffect, useState } from 'react'

export default function MoviePlayer({ playingMovie }) {
    return (
        <video src={playingMovie.path} disablePictureInPicture controls autoPlay></video>
    )
}