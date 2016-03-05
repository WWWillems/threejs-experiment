import React from 'react';
import ReactDOM from 'react-dom';
import ControlsComponent from './components/controls';
import SceneComponent from './components/sceneContainer';
import THREE from 'three';
import Constants from './constants'

class App extends React.Component{
  constructor(props){
    super(props)

    let w = window.innerWidth;
    let h = window.innerHeight;

    this.state = {
           robot: Constants.ROBOT.MECH,
           spinDirection: Constants.SPIN.LEFT,
           spinSpeed: Constants.SPIN_SPEED_DEFAULT
       };

    this._onChangeRobot = this._onChangeRobot.bind(this);
    this._onChangeSpinDirection = this._onChangeSpinDirection.bind(this);
    this._onChangeSpinSpeed = this._onChangeSpinSpeed.bind(this);
  }

  render() {
       return (
           <div>
               <ControlsComponent robot={this.state.robot} spinDirection={this.state.spinDirection} spinSpeed={this.state.spinSpeed} onChangeRobot={this._onChangeRobot} onChangeSpinDirection={this._onChangeSpinDirection} onChangeSpinSpeed={this._onChangeSpinSpeed}/>
               <SceneComponent robot={this.state.robot} spinDirection={this.state.spinDirection} spinSpeed={this.state.spinSpeed}/>
           </div>
       );

   }

   _onChangeRobot(robotName) {
       this.setState({robot: robotName});
   }

   _onChangeSpinDirection(spinDirection) {
       this.setState({spinDirection: spinDirection});
   }

   _onChangeSpinSpeed(spinSpeed) {
       this.setState({spinSpeed: spinSpeed});
   }
}

App.displayName = "App";

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
);
