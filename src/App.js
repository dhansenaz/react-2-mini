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
  fontSize: 12,
  fontFamily: 'Comic Sans MS'
}
this.updateColor = this.updateColor.bind(this)
this.updateSize = this.updateSize.bind(this)
this.updateFamily = this.updateFamily.bind(this)



}
  // updateColor
updateColor(val){
  this.setState({fontColor: val})
}
  // updateSize
updateSize(val){
  this.setState({fontSize:val})

}
  // updateFamily
updateFamily(val){
this.setState({fontFamily:val})
}
  // updateEditStatus
updateEditStatus(){

}
  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle />
          <ColorChanger fontColor={this.state.fontColor}update={this.updateColor}/>
          <SizeChanger fontSize={this.state.fontSize} update={this.updateSize}/>
         <FamilyChanger fontFamily={this.state.fontFamily} update={this.updateFamily}/>
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
