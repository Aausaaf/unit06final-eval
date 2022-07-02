import logo from './logo.svg';
import './App.css';
import {Routes ,Route} from 'react-router-dom'
import Home from './componets/Home';
import Login from './componets/Login';
import Navbar from './componets/Navbar';
import MovieDetails from './componets/MovieDetails';
import Booking from './componets/Booking';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/login" element={<Login></Login>}/>
      <Route path='/movie/:id' element={<MovieDetails></MovieDetails>}/>
      <Route path="/bookings" element={<Booking></Booking>}/>
    </Routes>
    </>
  );
}

export default App;
