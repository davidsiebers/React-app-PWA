import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from '../components/Header';
import Add from '../components/Add';
import Search from '../components/Search';
import AddPopup from '../components/AddPopup';
import Scroll from '../components/Scroll';
import CardsContainer from '../components/CardsContainer';

import { setSearchResult, requestContacts, saveNewContact } from '../actions';

/**
 * 1. App update nog wanneer je een contact toevoegd
 *      2. Unieke ID instellen die niet gelijk is aan de voornaam (kan hetzelfde zijn)
 *      3. Node.js server opzetten
 *      4. Toegevoegde contacten toevoegen aan aan de Node server
 * 5. Contact verwijderen
 * 6. Responsive maken
 * 7. Enter key is ook Save contact
 * 8. Je kan een afbeelding als file toevoegen wanneer je een nieuw contact aanmaakt
 * 9. Project online zetten
 */

const mapStateToProps = state => {
    return {
        searchResult: state.searchContacts.searchResult,
        contacts: state.requestContacts.contacts,
        inPending: state.requestContacts.inPending,
        error: state.requestContacts.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doSearch: (event) => {
            dispatch(setSearchResult(event))
        },
        onRequestContacts: () => dispatch(requestContacts()),
        onSaveNewContact: (newContact) => dispatch(saveNewContact(newContact))
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddPopup: false
        };
    }
    
    componentDidMount(){
        console.log('app did mount');
        this.props.onRequestContacts();
    }

    addPopup = () => {
        this.setState({ showAddPopup: true });
    }

    closePopup = () => {
        this.setState({ showAddPopup: false });
    }

    render() {
        const { showAddPopup } = this.state;
        const { user, doSearch, contacts, isPending, searchResult } = this.props;
        const filterContacts = contacts.filter(contact => {
            return contact.name.toLowerCase().includes(searchResult.toLowerCase());
        });
        return !isPending ? (
            <div className='app'>
                <Header user={user} />
                <div className='menuBar'>
                    <Add addPopup={this.addPopup} />
                    <Search doSearch={doSearch} />
                </div>
                <AddPopup saveContact={this.props.onSaveNewContact} closePopup={this.closePopup} show={showAddPopup}/>
                <Scroll>
                    <CardsContainer contacts={filterContacts} />
                </Scroll>
                <p className='author'>By Dinah Siebers</p>
            </div>
        ) : (
            <div>
                <p>Doet t niet</p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);