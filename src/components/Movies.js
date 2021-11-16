import Movie from './Movie';
import React, { Component } from 'react'
import Jumb from './Jumb';

export default class Movies extends Component {

    render() {
  

        return (
            <>
            <Jumb/>
                <div className="container mt-3">

                    <h3>Popular Movies :</h3>
                    <div className="row">

                        {this.props.movies.map(movie => (
                            <Movie movie={movie} key={movie.id}></Movie>))}
                    </div>

                </div>
                <br/>
            </>
        )
    }
}

