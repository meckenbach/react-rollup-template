"use strict";

import React from "react";
import ReactDOM from "react-dom";

const app = document.getElementById("app");

class Hello extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Hello, World!</h1>
    }
}


ReactDOM.render(<Hello />, app)