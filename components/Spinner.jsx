'use client'
import React from 'react'
import Cliploader from 'react-spinners/ClipLoader'
const Spinner = ({loading}) => {
    const override = {
        display:'block',
        margin:'100px auto'
    }
  return (
   <Cliploader
    color='blue'
    loading={loading}
    size={150}
    aria-label='Loading spinner'
    cssOverride={override}

   />
  )
}

export default Spinner;