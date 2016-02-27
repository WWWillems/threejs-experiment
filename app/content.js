import React from 'react';
import ReactDOM from 'react-dom';
import SceneContainer from './components/sceneContainer.js';
import THREE from 'three';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {

    };
  }

  render(){
   let w = window.innerWidth;
   let h = window.innerHeight;

   console.log("> Rendering at " , w , " x " , h);

   let sceneprops = {
     width:w,
     height:h,
     cupcakedata:{
       position:new THREE.Vector3(0,0,0),
       quaternion:new THREE.Quaternion()
     }
   };

   let cupcakeprops = sceneprops.cupcakedata;
   let rotationangle = 0;
   let renderElement = document.getElementById('threeRenderer');

   var textStyle = {
    color: 'black',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

   return (<div>
            <h1 style={textStyle}>React+ Three.js Experiment</h1>
            <SceneContainer {...sceneprops}/>
          </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
