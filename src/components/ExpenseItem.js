
import React, { useState } from 'react';
import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){

    const [title, setTitle] = useState(props.title);

    const ClickHandler = () => {
        setTitle("New title added");
    }
    return(
    <div className='expense-item'>
            <ExpenseDate date= {props.date} />
            <div className='expense-item_description'>
                <h2>{ title }</h2>
                <h2 className='expense-item_price'> { props.amount } </h2>
                <button onClick={ ClickHandler }> Click Me</button>
            </div>
           </div> 
    );
}

export default ExpenseItem;