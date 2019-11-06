class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOptionsFromParent = this.handleAddOptionsFromParent.bind(
      this
    );
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }
  componentDidMount() {
    try {
      //get options from localStorage
      const json = localStorage.getItem("options");
      //parse the options into array of options
      const options = JSON.parse(json);
      //set the state to be options if there is option
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    //if the options length has changed
    //we need to set it in the localstorage
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  //create a function called handleDeleteOptions and
  //pass it to child class through react component
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
    //one liner for setState
    //this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    // console.log("hdo", option);
    this.setState(prevState => ({
      //filter the option that we want to remove.
      //optionToRemove !== option will keep the ones that are not option which we want to remove
      //in other words. filter will keep the ones that return true. check filter method below
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOptionsFromParent(option) {
    if (!option) {
      return "Enter valid value to add item";
    }
    //check to see if already exists
    else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOptionsFromParent={this.handleAddOptionsFromParent}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    //console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}
//function based Action component
// const Action = props => {
//   return (
//     <div>
//       <button disabled={!props.hasOptions} onClick={props.handlePick}>
//         What should I do?
//       </button>
//     </div>
//   );
// };
class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

//function based Options component
// const Options = props => {
//   return (
//     <div>
//       <button onClick={props.handleDeleteOptions}>Remove All</button>
//       {props.options.map(option => (
//         <Option
//           key={option}
//           optionText={option}
//           // handleDeleteOption={props.handleDeleteOption}
//         />
//       ))}
//     </div>
//   );
// };
class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.length === 0 && (
          <p>Please enter some options to start</p>
        )}
        {this.props.options.map(option => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={this.props.handleDeleteOption}
          />
        ))}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return (
      <div>
        Option: {this.props.optionText}
        <button
          onClick={e => {
            this.props.handleDeleteOption(this.props.optionText);
          }}
        >
          remove
        </button>
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOptions(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOptionsFromParent(option);
    this.setState(() => {
      return { error: error };
    });
    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOptions}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

//function based User
// const User = props => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };
// ReactDOM.render(<User name="shuo" age={28} />, document.getElementById("root"));
ReactDOM.render(<IndecisionApp />, document.getElementById("root"));
