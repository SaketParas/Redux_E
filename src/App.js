import React from 'react';
//import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Add from './component/Add'
import Table from './component/Table';
import Form from './component/Form'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Route exact path="/" render={props => <Add {...props}/>}/>
        <Route path="/Form" render={props => <Form {...props}/>}/>
        <Route path="/Table" render={props => <Table {...props}/>}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
