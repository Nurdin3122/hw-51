
import Numbers from './Numbers/Numbers';
import './App.css'
import {useState} from "react";

    const App = () => {
     const [numbers,setNumbers] = useState(
         [5, 11, 16, 23, 32]);

     const getNewNumbers = () => {
         setNumbers([

         ])
     }

        return (

            <div className="App">

                <div className="btn-block">
                    <button onClick={getNewNumbers} className="btn">New Numbers</button>
                </div>

                <div className="block-numbers">
                    <Numbers numbers={numbers[0]}> </Numbers>
                </div>

            </div>

        );
    };
export default App


