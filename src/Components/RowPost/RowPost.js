import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from 'axios'
import {imageUrl} from '../../Constants/Constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }
  const [Movies, SetMovies] = useState([]) 
  const [UrlId,SetUrlId] = useState("")
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      SetMovies(response.data.results)
    }).catch(err=>{
      alert("Network Error")
    })
    
  })
  const handleMovie = (id)=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=df47dc8f6eb000372507c70a7e0597fc&language=en-US`).then(response=>{
      console.log(response.data)
      if((response.data.results).length !== 0){
        SetUrlId(response.data.results[0])
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.tittle}</h2>
        <div className='posters'>
           {Movies.map((obj)=>
              <img onClick={()=>handleMovie(obj.id)} className= {props.isSmall ? 'smallPoster' : 'poster'}  alt='poster' src={`${imageUrl + obj.backdrop_path}`}/>
           )}
        </div>
      { UrlId && < YouTube videoId={UrlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost