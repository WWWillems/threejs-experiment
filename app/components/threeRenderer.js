import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';
import { Renderer, Scene, PerspectiveCamera, Cupcake } from 'three';

class ThreeRenderer extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    };
  }

  render(){
    let aspectratio = this.props.width / this.props.height;
    let cameraprops = {
      fov:75,
      aspect:aspectratio,
      near:1,
      far:5000,
      position:new THREE.Vector3(0,0,600),
      lookat:new THREE.Vector3(0,0,0)
    };

    return (<Renderer width={this.props.width} height={this.props.height}>
              <Scene width={this.props.width} height={this.props.height} camera="maincamera">
                  <PerspectiveCamera name="maincamera" {...cameraprops} />
                  <Cupcake {...this.props.cupcakedata} />
              </Scene>
          </Renderer>);
  }
}

export default ThreeRenderer;
