/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client'
import './App.css';
import './index.css';
import GreetingElement from './myGreetingApp'
import GreetingElementwithProp from './Mygreetingprop';
import AppColor from './AppbackgroundColor';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <GreetingElement/>
    <GreetingElementwithProp msg ="Hi, its Monday"/>
    <AppColor heading="This is First element" lb1="Name :" color="green"/>
    <AppColor heading="This is First element" lb1="Name :" color="Blue"/>
    <AppColor heading="This is First element" lb1="Name :" color="Yellow"/>
    
   
    
  </React.StrictMode>,
  document.getElementById("root")
);



reportWebVitals();