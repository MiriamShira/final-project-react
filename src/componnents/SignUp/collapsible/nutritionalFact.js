//import { render } from '@testing-library/react';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../../css/signUp.css';
import nutritionFactToSaveAction from './nutritionFactAction';
import store from '../../store'

export default function NutritionalFact() {
    const [nutritionalFactlist, setnutritionalFactlist] = useState(store.getState().nutritionalFactlist);
  
// useEffect(()=>{
//     store.dispatch(nutritionFactToSaveAction(e.target.value,props.description))
  
//   },[nutritionalFactlist])

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
              store.dispatch(nutritionFactToSaveAction(e.target.value,props.description))
                
                 props.setValue(store.getState().nutritionalFactlist)

            }}
         
        /> gr per 100 gr of {props.description}in product

    </div>)
}