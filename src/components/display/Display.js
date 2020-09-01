import React from 'react';

// let category="";
// if (this.props.category){
//       category = this.props.category.tile

// }

// class Button extends Component {
//   handleClick() {
//     console.log('Click happened');
//   }
//   render() {
//     return <button onClick={() => this.handleClick()}>Click Me</button>;
//   }
// }
function Display(props){
    let category = "loading";
        if (props.category){
            category = props.category.tile
        }
        return(
            <div>
<strong>Your Score: </strong>{props.score} <br />
<strong>The Question is </strong> {props.question}<br />
<strong>Category: </strong>{category}<br />


<strong>Value = </strong>{props.value} <br />


            </div>
        )
}


export default Display;


// ---END OF LINE