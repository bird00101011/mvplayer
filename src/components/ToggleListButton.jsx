import React, { useEffect, useState } from 'react'

export default function ToggleListButton({toggle}) {
    return (
        <span onClick={()=> toggle()}>&gt;</span>
    )
}