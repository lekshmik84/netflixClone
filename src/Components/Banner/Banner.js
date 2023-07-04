import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../Constants/Constants'

function Banner() {
  const [Movie, setMovie] = useState('')
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      const randomElement = Math.floor(Math.random() * ((response.data.results).length));
      setMovie(response.data.results[randomElement])
    })
  }, [])
  return (
    <div className='banner' style={{backgroundImage: `url(${Movie ? imageUrl + Movie.backdrop_path : ""})`}}>
        <div className='content'>
            <h1 className='title'>{Movie.title}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{Movie.overview}</h1>
        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner

