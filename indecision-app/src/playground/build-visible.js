class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleVisibility = this.handleVisibility.bind(this);
  }
  handleVisibility() {
    this.setState(prevState => {
      return {
        visible: !prevState.visible
      };
    });
    console.log(this.props.visible);
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibility}>
          {this.state.visible ? "hideDetail" : "showDetail"}
        </button>
        <p>{this.state.visible && "this is the details"}</p>
      </div>
    );
  }
}
ReactDOM.render(<Visibility />, document.getElementById("root"));
