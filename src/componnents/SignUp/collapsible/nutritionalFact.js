//import { render } from '@testing-library/react';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../../css/signUp.css';


export default function NutritionalFact() {
    const [nutritionalFactlist, setnutritionalFactlist] = useState([
    { description: "Carbohydrates", amount: 0 },
    { description: "Fats", amount: 0 },
    { description: "Sodium", amount: 0 },
    { description: "Cholesterol", amount: 0 }
]);
    // const [carbohydrates, setcarbohydrates] = useState('');
    // const [fats, setfats] = useState('');
    // const [sodium, setsodium] = useState('');
    // const [cholesterol, setcholesterol] = useState('');

    return (

        <div>{
            nutritionalFactlist.map((nutritionalFact, index) =>
                <NutritionalFactInput key={index} description={nutritionalFact.description} value={nutritionalFact.amount}
                    setValue={setnutritionalFactlist} nutritionalFactlist={nutritionalFactlist} />)}
        </div>

    )
}
function NutritionalFactInput (props) {
return(
    <div className="row">
        <label>{props.description}</label>
        <input type="text" placeholder={"Enter an amount"}
            defaultValue={props.value}
            onChange={(e) => {
                debugger;
                const a=
                props.nutritionalFactlist.map((nutritionalFact)=>{
                    if(nutritionalFact.description===props.description){
                        nutritionalFact.amount=props.value
                    }})
                    console.log(a)
                
                props.setValue(a);
                console.log(props.nutritionalFactlist);
            }}
         
        /> gr per 100 gr of {props.description}in product

    </div>)
}