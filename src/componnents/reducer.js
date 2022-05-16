const initialState = {
    user: {
        firstname: '',
        lastname: '',
        language: '',
        email: '',
        password: '',
        alerts: {
            allergens: [{description:''}],
            nutritionalFacts: [{description:'',amount:0}]
        }
    },
    allergensToSave: [ 
            {description:''}
        ]
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN-IN':
            return { ...state, user: action.user };
        case 'SIGN-UP':
            return { ...state, user: action.user };
        case 'MODIFY':
            return { ...state,allergensToSave: action.allergensToSave };

        default:
            return state;
    }
}
export default reducer;