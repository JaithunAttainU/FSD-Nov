import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Invoices from './components/Invoices';
import Expenses from './components/Expenses';
import NoMatch from './components/NoMatch';
import InvoiceDetails from './components/InvoiceDetails';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='invoices' element={<Invoices />}>
          <Route path=':invoiceID' element={<InvoiceDetails />} />
        </Route>
        <Route path='/expenses' element={<Expenses />} />
      </Route>
      {/* <Route path='/invoices/:invoiceID' element={<App><Invoices><InvoicesDetails /></Invoices></App>} /> */}
      <Route path='*' element={<NoMatch />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// // Path - /
// <App/>

// //Path - /invoices
// <App>
//    <Invoices />
// </App>

// //Path - /expenses

// <App>
//    <Expenses />
// </App>

// //Path - /invoices/:invoiceID
// <App>
//    <Invoices>
//        <InvoiceDetails/>
//    </Invoices
// </App>