// var App = () => (
//   <ul>
//     <li>water</li>
//     <li>ice</li>
//   </ul>
// );

//2nd part

// var Ice = () => (
//   <li>Ice</li>
// );

// var Water = () => (
//   <li>Water</li>
// );

// var GroceryListJSX = () => (
//   <div>
//     <h1>My Grocery List</h1>
//     <Water/>
//     <Ice/>
//   </div>
// );

//3rd part

// var GroceryListJSX = (props) => (
//   <ul>
//     <li>{props.tobuy[0]}</li>
//     <li>{props.tobuy[1]}</li>
//   </ul>
// );

// var App = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryListJSX tobuy={['hot cheetos', 'diet coke']}/>
//   </div>
// );

// //4th part
// var GroceryListJSX = (props) => {
//   var onListItemClick = (event) => {
//     console.log('clicked!')
//   }
//   return(
//     <ul>
//       <li onClick={onListItemClick}>{props.tobuy[0]}</li>
//       <li>{props.tobuy[1]}</li>
//     </ul>
//   );
// }
//   var App = () => (
//     <div>
//       <h2>My Grocery List</h2>
//       <GroceryListJSX tobuy={['hot cheetos', 'diet coke']}/>
//     </div>
//   );

//5th part
class ToBuyListItem extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      done: false,
      hover: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  onMouseEnter() {
    console.log('youre clicking on an item')
    this.setState({
      hover: !this.state.hover
    })
  }
  onMouseLeave() {
    console.log('mouse left item')
    this.setState({
      hover: !this.state.hover
    }, ()=>{
      console.log('this is the new state', this.state)
    })
  }
  render() {
    // var style = {
    //   textDecoration: this.state.done ? 'line-through' : 'none',
    //   fontWeight: this.state.hover ? 'bold' : 'none'
    // };

    return (
      <li style ={{
        textDecoration: this.state.done ? 'line-through' : 'none',
        fontWeight: this.state.hover ? 'bold' : 'none'
      }}
       onMouseEnter = {this.onMouseEnter.bind(this)}
       onMouseLeave = {this.onMouseLeave.bind(this)}
       onClick ={this.onListItemClick.bind(this)}>{this.props.tobuy}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.tobuy.map(tobuy =>
      <ToBuyListItem tobuy={tobuy} />
      )}
  </ul>
);

var App = () => (
      <div>
        <h2>My Grocery List</h2>
        <GroceryList tobuy={['hot cheetos', 'diet coke']}/>
      </div>
    );

ReactDOM.render(<App />, document.getElementById("app"));

// var groceryList = {}
// groceryList.chips = "hot cheetos"
// groceryList.drinks = "diet coke"
// var keys = Object.keys(groceryList)