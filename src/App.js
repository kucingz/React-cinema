import logo from './logo.svg';
import { Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Navbar bg="secondary" className="justify-content-center">
        <Navbar.Brand >CINEMA</Navbar.Brand>
      </Navbar>
      <MovieList />
    </div>
  );
}

export default App;
