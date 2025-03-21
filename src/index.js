import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Super from './Super';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Super/>
  </React.StrictMode>
);
class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state={
      date : new Date()
    };
  }
}