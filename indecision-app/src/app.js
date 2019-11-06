import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import IndecisionApp from "./components/IndecisionApp";
import "./../node_modules/normalize.css/normalize.css";
ReactDOM.render(<IndecisionApp />, document.getElementById("root"));

// class OldSyntax {
//   constructor() {
//     this.name = "mike";
//   }
// }
// const oldSyntax = new OldSyntax();
// console.log(OldSyntax);
// //-------after babel transform class properties installed--//

// class NewSyntax {
//   name = "jen";
// }
// const newSyntax = new NewSyntax();
// console.log(NewSyntax);
