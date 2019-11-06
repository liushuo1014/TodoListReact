import React from "react";

const Option = props => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.optionText}
    </p>

    <button
      className="button button--link"
      onClick={e => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;
// export default class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         Option: {this.props.optionText}
//         <button
//           onClick={e => {
//             this.props.handleDeleteOption(this.props.optionText);
//           }}
//         >
//           remove
//         </button>
//       </div>
//     );
//   }
// }
