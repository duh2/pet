import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './petcss.css'
import './roboto/roboto.css'
import App from "./App";
import Head from "./Modules/Header";
import {store} from "./Redux/Redux";
import {Provider} from "react-redux"
import VitrineFilter from "./Modules/VitrineFilters";
import Products from "./Modules/MainPart";

ReactDOM.render(
<Provider store={store}>
    <div>
        <Head/>
        <main>
            <VitrineFilter/>
            <div className='article1'>
                <Products/>
            </div>
        </main>

    </div>
</Provider>

 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

