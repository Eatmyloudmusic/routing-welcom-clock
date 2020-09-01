import React from "react";

// class FormExtention extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       Answer: newAnswer(),
//     };
//   }

// componentDidMount() {
// }
function SubmitForm(props) {
  return (
    <form onSubmit={props.getSubmit}>
      <label> The Answer is <input type="text" onChange={props.handleChange} /> </label>
      <input type="submit" value="GO!!" />



    </form>

  );
}
export default SubmitForm;
