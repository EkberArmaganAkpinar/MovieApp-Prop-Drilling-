import React from 'react'
import { Link } from 'react-router-dom'
const IMG_PATH="https://image.tmdb.org/t/p/w500"
const Movie=(props)=> {
    const {poster_path,original_title,release_date,vote_average,id } = props.movie; 
  
  
    return (
        <div className="col-md-4 col-sm-6 col-lg-3">
                <Link to={`/details/${id}`}  className="card mt-2" style={{ textDecoration:"none", color:"black"}}>


                    <img src={IMG_PATH+poster_path} alt='hello' className="img-fluid "></img>

                    <div className="card-body">
                        <h5 className="card-title">{original_title}</h5>
                        <p>Release Date: {release_date}</p>
                        <p>Vote Average: {vote_average}</p>
                    </div>
                </Link>
            </div>
    )
}
export default Movie;




