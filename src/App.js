import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SelectMovie from './components/SelectMovie';
import Section from './components/Section';
import { useState } from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import styled from 'styled-components';
import SelectTime from './components/SelectTime';
import SelectAssento from './components/SelectAssento';
import OrderFinish from './components/OrderFinish';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


function App() {
  const [section, setSection]=useState('Selecione o filme')
  
  
  const [movies, setMovies] = useState()
  let getMovie = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
  getMovie.then(movieSet) 
  
  
  
  function movieSet(input){
    if(!movies)
    {setMovies(input.data)}
    
  }
  
  const [time, setTime] = useState()
  
  const [movieSection, setMovieSection] = useState()
  const [timeOptions, setTimeOptions] = useState()
  
  

  /*apagar*/
  
    let getHora = axios.get(timeOptions)
    getHora.then(timeSet)
    getHora.catch(console.log()) 
  

  
  
  const [getSection, setGetSection] = useState(axios.get('https://mock-api.driven.com.br/api/v7/cineflex/showtimes/17/seats'))
  getSection.then(movieSectionSet)
  
  
  /*apagar*/
  function timeSet (input){

    if(!time){(setTime(input.data))}
    console.log(timeOptions, 'awa')
  }

  function movieSectionSet (input){
    if(!movieSection){(setMovieSection(input.data))}
   console.log(movieSection)
  }
 
  

  return (
  <BrowserRouter>
  <Header/>
  <Section section={section}/>
  
  <Routes>
  <Route path='/' element={<MovieCatalog>

  {movies ? movies.map((n) => <SelectMovie sessao={timeOptions=>setTimeOptions(timeOptions)} movieId={n.id} movieTitle={n.title} moviePoster={n.posterURL} movieOverview={n.overview} movieReleaseDate={n.releaseDate} />) : <Loading />}
    
  </MovieCatalog>}/>
  
  <Route path='/sessoes/:sessionId' element={ <SelectTime/>}/>

  
  <Route path='/assentos/:sessionId' element={movieSection ? <SelectAssento getSection={(getSection) => setGetSection(getSection)} movieTitle={movieSection.movie.title} moviePoster={movieSection.movie.posterURL} seats={movieSection.seats} movie={movieSection.movie} day={movieSection.day} time={movieSection.name}/> : <Loading/>}/>
  <Route path='/sucesso' element={<OrderFinish/>}/>
  
  
  </Routes>
  </BrowserRouter>
  );
  
}


const MovieCatalog = styled.div `
width: 90%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin-left: 12%;
margin-right: 12%;
`

export default App;
