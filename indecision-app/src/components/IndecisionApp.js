import React from "react";
import Header from "./Header";
import AddOption from "./AddOption";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";
import { throws } from "assert";
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectedOption: undefined
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOptionsFromParent = this.handleAddOptionsFromParent.bind(
      this
    );
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleSelectionOption = this.handleSelectionOption.bind(this);
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
    this.setState(() => {
      return { selectedOption: option };
    });
    // this.setState(() => ({
    //   selectedOption: option
    // }));
  }
  handleSelectionOption() {
    this.setState(() => ({ selectedOption: undefined }));
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
    const title = "IndecisionApp";
    const subTitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOptionsFromParent={this.handleAddOptionsFromParent}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleSelectionOption={this.handleSelectionOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
