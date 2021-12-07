import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import swal from 'sweetalert';

 
const DEFAULT_INPUT_TEXT = "";
 
class DeleteAlert extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      text: DEFAULT_INPUT_TEXT,
    };
  }
 
  changeText(e) {
    let text = e.target.value;
 
    this.setState({
      text,
    });
 
    /*
     * This will update the value that the confirm
     * button resolves to:
     */
    swal.setActionValue(text);
  }
 
  render() {
    return (
      <input
        value={this.state.text}
        onChange={this.changeText.bind(this)}
      />
    )
  }
}
 
// We want to retrieve MyInput as a pure DOM node: 
let wrapper = document.createElement('div');
ReactDOM.render(<DeleteAlert />, wrapper);
let el = wrapper.firstChild;
 
swal({
  text: "Write something here:",
  content: el,
  buttons: {
    confirm: {
      /*
       * We need to initialize the value of the button to
       * an empty string instead of "true":
       */
      value: DEFAULT_INPUT_TEXT,
    },
  },
})
.then((value) => {
  swal(`You typed: ${value}`);
});

swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });


  swal("A wild Pikachu appeared! What do you want to do?", {
    buttons: {
      cancel: "Run away!",
      catch: {
        text: "Throw Pokéball!",
        value: "catch",
      },
      defeat: true,
    },
  })
  .then((value) => {
    switch (value) {
   
      case "defeat":
        swal("Pikachu fainted! You gained 500 XP!");
        break;
   
      case "catch":
        swal("Gotcha!", "Pikachu was caught!", "success");
        break;
   
      default:
        swal("Got away safely!");
    }
  });

  swal("Write something here:", {
    content: "input",
  })
  .then((value) => {
    swal(`You typed: ${value}`);
  });

export default DeleteAlert;