import Numbers from './Numbers/Numbers';
import './App.css'
import  {useState} from "react";
    const App = () => {

     const [numbers,setNumbers] = useState<number[]>
     ([ 5, 11, 16, 23, 32 ]);

     const getNewNumbers = () => {
         const newNumbers: number[] = [];
         while (newNumbers.length < 5) {
                 const randomNumbers =  Math.floor(Math.random() * 32) + 5;
             if (!newNumbers.includes(randomNumbers)) {
                 newNumbers.push(randomNumbers);
             }
         }
         newNumbers.sort((a, b) => a - b);
         setNumbers(newNumbers);
     }

        return (
            <div className="App">

                <div className="btn-block">
                    <button onClick={getNewNumbers} className="btn">New Numbers</button>
                </div>

                <div className="block-numbers">
                    {numbers.map((number,index) => (
                        <Numbers key={index} numbers={number}> </Numbers>
                    ))}

                </div>
            </div>
        );
    };
export default App


