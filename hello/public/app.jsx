//most common react method
var Greeter = React.createClass({
  getDefaultProps: function (){
    return {
      name: 'Melv',
      message: 'Hello world!'
    };
  },
  render: function (){
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
      );
  }
});

var firstName = "Andy";
var firstMessage= "This is from the react component";

ReactDOM.render(
  <Greeter name={firstName} />, 
    document.getElementById('app')
);
