import {
    CHANGE_SEARCH_RESULT,
    REQUEST_CONTACTS_PENDING,
    REQUEST_CONTACTS_SUCCESS,
    REQUEST_CONTACTS_FAILED,
    ADD_CONTACT
} from './constants.jsx';

export const setSearchResult = (text) => ({
    type: CHANGE_SEARCH_RESULT,
    payload: text
});

export const requestContacts = () => (dispatch) => {
    console.log('called the request contacts action');
    dispatch({ type: REQUEST_CONTACTS_PENDING });
    fetch('http://localhost:3001/contacts')
    .then(r => r.json())
    .then(data => dispatch({ type: REQUEST_CONTACTS_SUCCESS, payload: data }))
    .catch(error => dispatch( {type: REQUEST_CONTACTS_FAILED, payload: error }));
};

export const saveNewContact = (newContact) => (dispatch) => {
    fetch('http://localhost:3001/contacts', { method: 'POST', body: JSON.stringify(newContact), headers: { "Content-Type": "application/json; charset=utf-8"}})
    .then(r => r.json())
    .then(data => dispatch({ type: ADD_CONTACT, payload: data }))
    .catch(error => dispatch( {type: REQUEST_CONTACTS_FAILED, payload: error }));
};