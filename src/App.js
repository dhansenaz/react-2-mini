import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
constructor(){
  super()

this.state = {
  allowEdit: true,
  fontColor: 'red',
  fontSize: 22,
  fontFamily: 'Copperplate'
}

}
  // updateColor
updateColor()
{}
  // updateSize
updateSize(){

}
  // updateFamily
updateFamily(){

}
  // updateEditStatus
updateEditStatus(){

}
  render() {
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          { /* Render ColorChanger */ }
          { /* Render SizeChanger */ }
          { /* Render FamilyChanger */ }
        </div>
        <div className="textArea">
           <TextContainer 
           fontColor={this.state.fontColor}
           fontSize={this.state.fontSize}
           fontFamily={this.state.fontFamily}/> 
        </div>
      </div>
    )
  }
}

export default App;
