import React, { Component } from 'react'
import './App.css';
import Footer from './components/Footer';
import Abouth from './components/Abouth';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movies from './components/Movies';
import axios from 'axios'
import Details from './components/Details';


export default class App extends Component {

  state = {
    moviess: [],
    detailss: {},
  
   
  }

  componentDidMount() {

    const response = axios
      .get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b746250365dbd8d22de7757f176cbe5f")
      .then(
        res => {
          this.setState({
            moviess: res.data.results
          })

        }
      )
  }


  getDetails =  (id) => {

    const response =  axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=b746250365dbd8d22de7757f176cbe5f`)
      .then(
        res => {
          this.setState({
            detailss: res.data
          })

        }
      )

  }

  render() {
    return (
      <BrowserRouter>
        <div >
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Movies movies={this.state.moviess}  /> } />
            <Route exact path="/abouth" element={<Abouth />} />
            <Route  path="/details/:id"element={<Details detail={this.state.detailss}  getDetails={this.getDetails}/>} />
          </Routes>
          <br/>
          <Footer />
        </div>
      </BrowserRouter>

    )
  }
}











