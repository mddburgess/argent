import React from 'react';
import {Provider} from "react-redux";
import store from "store";
import LedgerEntryList from "components/ledger/LedgerEntryList";
import Header from "components/Header";
import Footer from "components/Footer";

const App = () => (
    <Provider store={store}>
        <Header/>
        <LedgerEntryList/>
        <Footer/>
    </Provider>
);

export default App;
