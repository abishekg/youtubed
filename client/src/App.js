import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import DetailedScreen from './components/DetailedScreen/DetailedScreen';

function App() {
    const arr = [
        {type: "Box.js", list: ["The Godfather", "Fight Club", "3 Idiots"]},
        {
            type: "Box.js",
            list: ["The Godfather", "Fight Club", "3 Idiots"],
        },
        {type: "Box.js", list: ["The Godfather", "Fight Club", "3 Idiots"]},
    ];

    const movies = [
        {
            name: "The Godfather",
            genre: "Action, Thriller",
            img: "https://media.npr.org/assets/img/2022/03/10/marlon-brandon-the-godfather_custom-e18469fdceae838fc9057f1f9ab1ddb019a66670-s1100-c50.jpg",
            duration: "126",
            summary:
                "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). ",
            Ratings: "5",
        },
    ];

    return (<div>
            <Router>
                <Header/>
                <Routes>
                    <Route path='/home' element={<List movies={movies} name="Movies"/>} exact/>
                    <Route path='/details' element={<DetailedScreen movies={movies}/>} exact/>
                    <Route path='/' element={<List movies={movies} name="Movies"/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
