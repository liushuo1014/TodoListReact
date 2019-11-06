console.log("this is running");

const app = {
  title: "shuo's title",
  subtile: "shuo's subtitle",
  options: []
};

//
const onFormSubmit = e => {
  e.preventDefault();
  //e.target point to the event
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};
const removeAll = () => {
  app.options = [];
  render();
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};
const appRoot = document.getElementById("root");

const render = () => {
  const tempelate = (
    <div>
      <h1>{app.title}</h1>
      {app.subtile && <p>{app.subtile}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "no options"}</p>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map(op => {
          return <li key={op}> {op} </li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(tempelate, appRoot);
};

render();
