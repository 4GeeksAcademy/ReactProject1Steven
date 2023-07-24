//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import reactDom from "react-dom";

import 'bootstrap';

function SimpleCounter(props){
    return (<div className="BigCounter">
        <div className="Calendar">
            <i className="fa-regular fa-clock"></i>
        </div>
        <div className="Four"></div>
        <div className="Three"></div>
        <div className="Two"></div>
        <div className="One"></div>
    </div>);
}

reactDom.render(
    <SimpleCounter/>,
    document.queryselector('#app')
);
