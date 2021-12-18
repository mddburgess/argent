import React from 'react';
import {Provider} from "react-redux";
import store from "store";
import LedgerEntryList from "components/ledger/LedgerEntryList";
import Header from "components/Header";
import Footer from "components/Footer";
import EditLedgerModal from "components/ledger/EditLedgerModal";

const App = () => (
    <Provider store={store}>
        <Header/>
        <LedgerEntryList/>
        <EditLedgerModal/>
        <Footer/>
    </Provider>
);

export default App;
