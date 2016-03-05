import React from 'react';
import ReactDOM from 'react-dom';
import SceneContainer from './components/sceneContainer.js';
import THREE from 'three';

class App extends React.Component{
  constructor(props){
    super(props)

    let w = window.innerWidth;
    let h = window.innerHeight;

    this.state = {
      rotationAngle: 0,
      sceneprops: {
        width:w,
        height:h,
        cupcakedata:{
          position:new THREE.Vector3(0,0,0),
          quaternion:new THREE.Quaternion()
        },
      }
    };

    this.spincupcake = this.spincupcake.bind(this);
  }

  componentDidMount(){
    this.spincupcake();
  }

  spincupcake(t) {
      console.log("T is = " , t);

      let rotation = t * 0.001;
      let euler = this.state.sceneprops.cupcakedata.quaternion.setFromEuler(new THREE.Euler(rotation, rotation * 3,0));
      let xPos = 300  * Math.sin(this.state.rotationAngle);

      this.setState ({
        ...this.state,
        rotationAngle: rotation,
        sceneProps: {
          cupcakedata: {
            quaternion:euler,
            position:{
              x: xPos
            }
          }
        }
      });

      //console.log("SPIN!!");
      //requestAnimationFrame(this.spincupcake, t);
  }

  render(){
   console.log("> Rendering at " , this.state.sceneprops.width , " x " , this.state.sceneprops.height);

   var textStyle = {
    color: 'black',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

   return (<div>
            <h1 style={textStyle}>React+ Three.js Experiment</h1>
            <SceneContainer {...this.state.sceneprops}/>
          </div>);
  }
}

App.displayName = "App";

ReactDOM.render(<App />, document.getElementById('app'));
