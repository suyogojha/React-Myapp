import './App.css';

import Expenses from './components/Expenses';

function App(){

    let expenses = [
        {
            id: "e1",
            title: "Rent1",
            amount: 1000,
            date: new Date(2022, 7, 7)
        },
        {
            id: "e1",
            title: "Rent2",
            amount: 100,
            date: new Date(2025, 6, 8)
        },
        {
            id: "e2",
            title: "Rent3",
            amount: 1001,
            date: new Date(2021, 2, 3)
        }
    ];

    return(
        <div>
            <h2>Lets get started</h2>
            <Expenses item={expenses}></Expenses>
        </div>
        );
}

export default App;