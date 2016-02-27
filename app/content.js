import React from 'react';
import ReactDOM from 'react-dom';
import ThreeRenderer from './components/threeRenderer.js';
import THREE from 'three';
import ReactTHREE from 'react-three';
import { Renderer, Scene, Mesh, PerspectiveCamera } from 'react-three';

class ExampleScene extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    var aspectratio = this.props.width / this.props.height;
    var cameraprops = {
      fov:75,
      aspect:aspectratio,
      near:1,
      far:5000,
      position:new THREE.Vector3(0,0,600),
      lookat:new THREE.Vector3(0,0,0)
    };

    return (<span><Renderer width={this.props.width} height={this.props.height}>
      <Scene width={this.props.width} height={this.props.height} camera="maincamera">
          <PerspectiveCamera name="maincamera" {...cameraprops} />
          { /** <Cupcake {...this.props.cupcakedata} /> **/ }
      </Scene>
    </Renderer></span>);
  }
};


class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {

    };
  }

  render(){
   let w = window.innerWidth-10;
   let h = window.innerHeight-10;

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

   return <ExampleScene {...sceneprops}/>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
