class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  componentDidMount() {
    const stringCount = localStorage.getItem("count");
    const count = parseInt(stringCount, 10);
    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("update");
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }
  handleAddOne() {
    //setState is a function and take in a arrow function
    //and returns the new object based on the prevState
    this.setState(prevState => {
      //return the updated object
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    //alert("minus one");
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}
ReactDOM.render(<Counter />, document.getElementById("root"));
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const tempelateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(tempelateTwo, appRoot);
// };
// renderCounterApp();
