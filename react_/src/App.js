import Nav from './component/Nav';
import './App.css';
import Movies from './component/Movies';
import {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Movie from './component/Movie';
import Actor from './component/Actor';
import Actors from './component/Actors';


function App() {
  const [movies, setMovies] = useState('');
  const [actors, setActors] = useState('');
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='Movies'>
          <Route index element={<Movies />}></Route>
          <Route path=':name' element={<Movie />}></Route>
        </Route>
        <Route path='Actors'>
          <Route index element={<Actors actors ={actors} setActors ={setActors}/>}></Route>
          <Route path=':name' element={<Actor actors={actors}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
