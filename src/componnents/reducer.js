const initialState = {
    user: {
        firstname: '',
        lastname: '',
        language: '',
        email: '',
        password: '',
        alerts: {
            allergens: [{ description: '' }],
            nutritionalFacts: [{ description: '', amount: "0" }]
        }
    },
    allergensToSave: [
        { description: '' }
    ]
    ,
    nutritionalFactlist: [{ description: "Carbohydrates", amount: "0" },
    { description: "Fats", amount: '0' },
    { description: "Sodium", amount: "0" },
    { description: "Cholesterol", amount: "0" }]
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN-IN':
            return { ...state, user: action.user };
        case 'SIGN-UP':
            return { ...state, user: action.user };
        case 'MODIFY':
            return { ...state, allergensToSave: action.allergensToSave };
        // debugger;
        case 'MODIFY-AMOUNT':
debugger
            return {
                ...state, nutritionalFactlist: initialState.nutritionalFactlist.map((nutritionalFact) => {
                    if (nutritionalFact.description === action.nutritionalFactItem.description) {
                        nutritionalFact.amount = action.nutritionalFactItem.amount
                    }
                    console.log(nutritionalFact);
                    console.log(initialState.nutritionalFactlist);
                })
            }
        // const a=
        // props.nutritionalFactlis
        //     }})
        //     console.log(a)

        // props.setValue(a);
        // console.log(props.nutritionalFactlist);
        default:
            return state;
    }
}
export default reducer;