import { render } from '@testing-library/react';
import { useEffect, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../../css/signUp.css';
import allergensToSaveAction from './allergensArrayAction';
import store from '../../store'
export default function AllergensForm() {

 
    const [commonAllergen, setcommonAllergen] = useState([]);
    const [moreAllergen, setmoreAllergen] = useState([]);
    const [seeMoreAllergen, setseeMoreAllergen] = useState(false);
    const [allergensformstore,setallergensformstore]=useState([]);


    useEffect(()=>{
    fetch(`http://localhost:4020/api/allergens`).then((res)=>{
  if(res.status===200&&res.ok){
    return res.json();
  }
    }   ).then((res)=> setcommonAllergen(res))}
    ,[])

    return( <div>
        {
  commonAllergen.map((allergen, index) =>
    <FormInput key={index} description={allergen.description}  value={allergen.description}
    allergensformstore={allergensformstore}
   
     commonAllergen={commonAllergen} setAllergen={setallergensformstore}/>)
    }
</div>
    )
  
}

  const FormInput = props => (
    <div className="row">
      <label>{props.description}</label>
      <input type="checkbox" placeholder={props.placeholder}
      defaultChecked={props.check}
        value={props.value} onChange={(e) => {
          if(e.target.checked){
     debugger
          let allergentoAdd={
     description:e.target.value
   }
            props.setAllergen([allergentoAdd,...props.allergensformstore])
            console.log(props.allergensformstore );
            store.dispatch(allergensToSaveAction(props.allergensformstore));
                     
          console.log(store.getState().allergensToSave );
          }
          else{
       
            props.setAllergen(props.allergensformstore.filter((item)=>{return item.description !==e.target.value}))
            store.dispatch(allergensToSaveAction(props.allergensformstore));
  
          }
      

          console.log(store.getState().allergensToSave );

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
  
