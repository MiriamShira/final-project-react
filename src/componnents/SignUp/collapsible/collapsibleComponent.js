
import React, { useState } from 'react';
import '../../../css/collapsible.css'
import NutritionalFact from './nutritionalFact'
import AllergensForm from './allergens'
export default function CollapsibleComponentbyButton() {

    const hiddenTexts = [ {
        label: 'Allergens',
        value: <AllergensForm />//'Text of Accordion 2'
    },{
        label: 'NutritionalFact',
        value: <NutritionalFact />//'Text of Accordion 1'
    }
   
    ];
    return (
        <div>
            {/* <Header title={title} /> */}
            <Accordion hiddenTexts={hiddenTexts} />
        </div>
    );
}

const Accordion = props => (
    <div className="accordion">
        {props.hiddenTexts.map((hiddenText) => <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />)}
    </div>
);

function AccordionItem(props) {
    const [visibility, setvisibility] = useState(false)
    const activeStatus = visibility ? 'active' : ''
    const handleToggleVisibility = props => (
        setvisibility(!visibility)
    )



    return (
        <div>
            <button className="accordion__button"
                onClick={handleToggleVisibility}>
                {props.hiddenText.label}
                <span className={visibility ? 'fasfa-minus' : 'fasfa-minus'}
                    >{visibility ? '-' : '+'}</span>
            </button>
            <div className={`accordion__content ${activeStatus}`}>
                {
                    props.hiddenText.value
                }
            </div>

        </div>
    );
    ;
}



