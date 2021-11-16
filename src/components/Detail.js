import React, { Component } from 'react'


export default class Detail extends Component {
    componentDidMount() {
        console.log("cdmdeki id")
        console.log(this.props.id)

        this.props.getDetails(this.props.id)
        console.log(this.props.detail.genres)

    }

    render() {
        const IMG_PATH = "https://image.tmdb.org/t/p/w500"
        const { poster_path, original_title, release_date, vote_average, overview,backdrop_path } = this.props.detail
     
        return (
            <div className="container">
                <div style={{ backgroundColor: "#01b4e4" }}>
                  
                        <div className="row">
                            <div className="col" >
                                <img src={IMG_PATH+poster_path} height="100%" width="100%"></img>
                            </div>
                            <div className="col-6">
                                <div className="text-center">
                                    <h4>{original_title}</h4>
                                    <h5>Release Date: <h6 style={{color:"white"}} className="text-center">{release_date}</h6></h5>
                                    <h5>Vote Average: <h6 style={{color:"white"}} className="text-center">{vote_average}</h6></h5>
                                    <h5>Overview:</h5>
                                    <h6 style={{color:"white"}} className="text-center">{overview}</h6>
                                </div>
                            </div>
                            <div className="col">  <img src={IMG_PATH+backdrop_path} height="100%" width="100%"></img></div>
                        </div>


                    
                </div>

            </div>
        )
    }
}
