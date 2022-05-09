import { render } from '@testing-library/react';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import '../css/signUp.css';
import {
    CollapsibleComponent,
    CollapsibleHead,
    CollapsibleContent
} from "react-collapsible-component";

export default function NutritionalFact() {
    const [carbohydrates, setcarbohydrates] = useState('');
    const [fats, setfats] = useState('');
    const [sodium, setsodium] = useState('');
    const [cholesterol, setcholesterol] = useState('');
    return (
        <div>


            <NutritionalFactInput description="Carbohydrates" value={carbohydrates} setValue={setcarbohydrates} />
            <NutritionalFactInput description="Fats" value={fats} setValue={setfats} />
            <NutritionalFactInput description="Sodium" value={sodium} setValue={setsodium} />
            <NutritionalFactInput description="Cholesterol" value={cholesterol} setValue={setcholesterol} />
        </div>

    )
}
const NutritionalFactInput = props => (

    <div className="row">
        <label>{props.description}</label>
         <input type="text" placeholder={"Enter an amount"}
            defaultValue={props.value}
            onChange={(e) => props.setValue(e.target.value)}
        /> gr per 100 gr of {props.description}in product

    </div>
)