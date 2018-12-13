import {
    CHANGE_SEARCH_RESULT,
    REQUEST_CONTACTS_PENDING,
    REQUEST_CONTACTS_SUCCESS,
    REQUEST_CONTACTS_FAILED,
    ADD_CONTACT
} from './constants.jsx';

const initialStateSearch = {
    searchResult: ''
}

export const searchContacts = (state=initialStateSearch, action={}) => {
    console.log(action);
    switch(action.type) {
        case CHANGE_SEARCH_RESULT:
            return Object.assign({}, state, { searchResult: action.payload });
        default:
            return state;
    }
}

const initialStateContacts = {
    inPending: false,
    contacts: [],
    error: ''
}

export const requestContacts = (state=initialStateContacts, action={}) => {
    switch(action.type) {
        case REQUEST_CONTACTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_CONTACTS_SUCCESS:
            return Object.assign({}, state, { contacts: action.payload, isPending: false })
        case REQUEST_CONTACTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        case ADD_CONTACT:
            const newContacts = state.contacts.concat(action.payload);
            return Object.assign({}, state, { contacts: newContacts });
        default:
            return state;
    }
}