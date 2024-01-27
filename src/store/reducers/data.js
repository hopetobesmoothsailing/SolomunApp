const initialState = {
    name: '',
    birthday: {
        date: '',
        time: ''
    },
    birthplace: {}
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        case 'SET_BIRTHDAY':
            return {
                ...state,
                birthday: action.birthday
            }
        case 'SET_BIRTHPLACE':
            return {
                ...state,
                birthplace: action.birthplace
            }
        default:
            return state;
    }
}

export default dataReducer
