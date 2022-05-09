import { render } from '@testing-library/react';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import '../css/signUp.css';

export default function AllergensForm() {
    const [commonAllergen, setcommonAllergen] = useState([{description:'nuts',check:true},{description:'milk',check:false}]);
    const [moreAllergen, setmoreAllergen] = useState([{description:'nuts2'},{description:'milk2'}]);
    const [seeMoreAllergen, setseeMoreAllergen] = useState(false);
    return( <div>
        {
  commonAllergen.map((allergen, index) =>
    <FormInput key={index} description={allergen.description}  value={allergen.description}
    setValue={setcommonAllergen} check={allergen.check} commonAllergen={commonAllergen}/>)
    }
  {/* <FormButton title="moreAllergen" onClick={this.setseeMoreAllergen(true)} /> */}
        
        </div>
    )
  
}


const FormButton = props => (
    <div id="button" className="row">
      <button>{props.title}</button>
    </div>
  );
  
  const FormInput = props => (
    //const[checked,setchecked]=useState(false)
    <div className="row">
      <label>{props.description}</label>
      <input type="checkbox" placeholder={props.placeholder}
      defaultChecked={props.check}
        value={props.value}
        onChange={(e) => { console.log(props.commonAllergen)
          props.commonAllergen.map((Allergen)=>{
                if(Allergen.description===props.description){
                    Allergen.check=!Allergen.check
                }})
                console.log(props.commonAllergen)
              }
           
            }
          
      />
    </div>
  );
 {/* הצגת אלרגנים בציקבוקסים עפי 2 מערכים נפוצים + הרכבה  */}


//   <button title="Specifying allergenic components" onClick={setShowAllergenic(true) } />
      //for some resoin the usestate is coussing in infinit loop 
        // showAllergenic ? console.log("hi")
        // <AllergeniForm commonAllergen={ [{description:"A"},{description:"B"}]} />
        // : ""
  
