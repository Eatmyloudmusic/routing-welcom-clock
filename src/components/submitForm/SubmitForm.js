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
    <form onSubmit={props.handleSubmit}>
      <label> The Answer is <input type="text" onChange={props.handleChange} /> </label>
      <input type="" value="" />



    </form>

  );
}
export default SubmitForm;
