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
  store.dispatch(allergensToSaveAction(allergensformstore))

},[allergensformstore])

    useEffect(()=>{
    fetch(`http://localhost:4020/api/allergens`).then((res)=>{
  if(res.status===200&&res.ok){
    return res.json();
  }
    }   ).then((res)=> setcommonAllergen(res))}
    ,[])
    
    useEffect(()=>{
      fetch(`http://localhost:4020/api/allergens/more`).then((res)=>{
    if(res.status===200&&res.ok){
      return res.json();
    }
      }   ).then((res)=> setmoreAllergen(res))}
      ,[seeMoreAllergen])

    return( <div>
        {
  commonAllergen.map((allergen, index) =>
    <FormInput key={index} description={allergen.description}  value={allergen.description}
    allergensformstore={allergensformstore}
   
     commonAllergen={commonAllergen} addAllergen={(e)=>setallergensformstore([e,...allergensformstore])}
    delAllergen={(e)=>{setallergensformstore(allergensformstore.filter(item=>item.description !==e.description))}}
      />)
    }
    <button
    onClick={()=>{setseeMoreAllergen(!seeMoreAllergen)}}>show more allergens</button>

     {
    seeMoreAllergen===true?
  moreAllergen.map((allergen, index) =>
    <FormInput key={index} description={allergen.description}  value={allergen.description}
    allergensformstore={allergensformstore}
   
    moreAllergen={moreAllergen} addAllergen={(e)=>setallergensformstore([e,...allergensformstore])}
    delAllergen={(e)=>{setallergensformstore(allergensformstore.filter(item=>item.description !==e.description))}}
      />):''
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
            props.addAllergen(allergentoAdd)
            console.log(props.allergensformstore );
           
                     
          console.log(store.getState().allergensToSave );
          }
          else{
       
            props.delAllergen(props.allergensformstore.find((item)=> item.description !==e.target.value))
          
  
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
  
